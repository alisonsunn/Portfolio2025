import express from "express";
import cors from "cors";
import pool from "./db";
import "dotenv/config";
import { ApiError } from "./error";
import { errorHandler } from "./middleware/errorhandler";

const app = express();
app.use(cors());
app.use(express.json());

function validateContactInput(name: string, email: string, message: string) {
  const n = (name ?? "").trim();
  const e = (email ?? "").trim(); // if email is null, using empty string instead
  const m = (message ?? "").trim();
  if (!n || !e || !m) {
    return "All fields are required.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
    return "Invalid email format.";
  }
  if (m.trim().length < 15) {
    return "Message must be at least 15 characters long.";
  }
  return null;
}

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // validate input before saving to database
  const validationError = validateContactInput(name, email, message);
  if (validationError) {
    throw new ApiError(400, validationError, "VALIDATION_ERROR", {
      name,
      email,
    });
  }

  try {
    await pool.query(
      "INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)",
      [name.trim(), email.trim(), message.trim()]
    );
    res
      .status(200)
      .json({ success: true, message: "Message saved to database!" });
  } catch (err) {
    console.error(err);
    throw new ApiError(500, "Failed to save message.");
  }
});

app.use(errorHandler);

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
