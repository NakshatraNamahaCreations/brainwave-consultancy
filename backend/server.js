require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

/* ===============================
   MIDDLEWARE
================================ */
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local Vite dev
      "http://localhost:3000", // local CRA (if any)
      "https://brainwave-consultancy.netlify.app", // Netlify frontend
      "https://brainwave-consultancy.onrender.com", // Render (optional, safe)
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

/* ===============================
   NODEMAILER TRANSPORT
================================ */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ===============================
   ENQUIRY FORM
================================ */
app.post("/api/enquiry", async (req, res) => {
  const { name, email, phone, university, message } = req.body;

  if (!name || !email || !phone || !university) {
    return res.status(400).json({ message: "All required fields missing" });
  }

  try {
    await transporter.sendMail({
      from: `"Brainwave Website" <${process.env.EMAIL_USER}>`,
      to: "BrainwaveConsultancyLavanya@gmail.com",
      subject: "New Enquiry from Website",
      html: `
        <h3>New Enquiry Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
      `,
    });

    res.status(200).json({ message: "Enquiry sent successfully" });
  } catch (error) {
    console.error("Enquiry email error:", error);
    res.status(500).json({ message: "Email failed to send" });
  }
});

/* ===============================
   CONTACT FORM
================================ */
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await transporter.sendMail({
      from: `"Brainwave Contact Form" <${process.env.EMAIL_USER}>`,
      to: "BrainwaveConsultancyLavanya@gmail.com",
      subject: "New Contact Enquiry – Website",
      html: `
        <h3>New Contact Enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact email error:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
});

/* ===============================
   SERVER
================================ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
