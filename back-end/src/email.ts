import nodemailer from "nodemailer";
import { ApiError } from "./error";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export async function sendEmailNotification({
  name,
  email,
  message,
}: ContactMessage): Promise<void> {
  const recipientEmail =
    process.env.NOTIFICATION_EMAIL || process.env.GMAIL_USER;

  if (!recipientEmail) {
    throw new ApiError(
      500,
      "Recipient email not configured",
      "EMAIL_CONFIG_ERROR"
    );
  }

  const EMAIL_TEMPLATE = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
  <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">New Contact Message</h2>
  
  <div style="margin: 20px 0;">
    <h3 style="color: #555; margin-bottom: 5px;">Sender:</h3>
    <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
    <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
  </div>

  <div style="margin: 20px 0;">
    <h3 style="color: #555; margin-bottom: 10px;">Message:</h3>
    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #4CAF50; border-radius: 5px;">
      <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
    </div>
  </div>

  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #888;">
    <p>This email was automatically sent from your personal website contact form</p>
    <p>Received time: ${new Date().toLocaleString("en-AU")}</p>
  </div>
</div>
`;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: recipientEmail,
    subject: `New Contact Message from ${name}`,
    html: EMAIL_TEMPLATE,
    text: `
New Contact Message

Sender: ${name}
Email: ${email}

Message:
${message}

Received time: ${new Date().toLocaleString("en-AU")}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new ApiError(
      500,
      "Failed to send notification email",
      "EMAIL_SEND_ERROR",
      { originalError: error instanceof Error ? error.message : String(error) }
    );
  }
}
