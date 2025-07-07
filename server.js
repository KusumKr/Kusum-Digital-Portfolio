const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { firstname, lastname, email, phone, service, message } = req.body;

  if (!firstname || !lastname || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "kusumkr2004@gmail.com",
    subject: `New Contact Form Submission from ${firstname} ${lastname}`,
    text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${
      phone || "N/A"
    }\nService: ${service || "N/A"}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
