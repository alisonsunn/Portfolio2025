import express from "express";
import cors from "cors";
import pool from "./db";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await pool.query(
      "INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );
    res.status(200).json({ message: "Message saved to database!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save message." });
  }
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
