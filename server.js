import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import validator from "validator";

// 1. Load Environment Variables (from .env file)
dotenv.config();

// ... other imports ...
dotenv.config();

const app = express();

// 2. ✅ Production-Ready CORS Configuration
//    This now includes your actual domain
const whitelist = [
  "https://qeenix.com",
  "https://www.qeenix.com",
  // You can still add 'http://localhost:3000' etc. if you need it for testing
];

const corsOptions = {
  // ... rest of the code is the same ...
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman, mobile apps, or curl)
    // AND allow requests from our whitelist
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

// 3. Body Parser
app.use(express.json());

// 4. ✅ Spam Protection (Rate Limiting)
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 3, // 3 requests per IP per 10 minutes
  message: { success: false, message: "Too many messages. Try later!" },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// 5. ✅ Main Mail Sending Route
app.post("/send-mail", limiter, async (req, res) => {
  let { title, name, email, message } = req.body;

  // ✅ Sanitize inputs
  title = title?.trim() || "";
  name = name?.trim();
  email = email?.trim();
  message = message?.trim();

  // ✅ Input Validation
  if (!validator.isEmail(email)) {
    return res.status(400).json({ success: false, message: "Invalid email." });
  }
  if (!name || !message) {
    return res.status(400).json({ success: false, message: "Missing fields." });
  }

  // ✅ Hostinger SMTP transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // true for 465
    auth: {
      user: process.env.MAIL_USER, // e.g., info@qeenix.com
      pass: process.env.MAIL_PASS, // Hostinger mailbox password
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 5000, // 5 seconds
    debug: false, // Set to true ONLY if you are debugging SMTP handshake
  });

  try {
    // ✅ 1. Send message to *your* inbox
    await transporter.sendMail({
      from: `"${name} via QeeniX" <${process.env.MAIL_USER}>`,
      replyTo: email, // client's email
      to: process.env.MAIL_USER, // Your email
      subject: title ? `${title} - From ${name}` : `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // ✅ 2. Send auto-reply to *client*
    await transporter.sendMail({
      from: `"QeeniX Solutions" <${process.env.MAIL_USER}>`,
      to: email, // Client's email
      subject: `Thanks for contacting QeeniX Solutions ✅`,
      text: `Hi ${name},\n\nThank you for reaching out! ✅\nWe will get back to you soon.\n\nBest Regards,\nQeeniX Team`,
    });

    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Mail Error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send. Try again later." });
  }
});

// 6. ✅ Start the Server
// Use a port from the environment variables, or default to 8080
const PORT = process.env.PORT || 8080;

// Listen on '0.0.0.0' to accept connections from *all* network interfaces
// (which is what you want on a public server)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running and listening on http://0.0.0.0:${process.env.PORT}`);
});
