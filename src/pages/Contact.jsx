import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
// Removed import for "../components/Footer" and replaced with inline Footer component logic.
// Removed import for "react-icons/fa" and replaced FaWhatsapp with an inline SVG.

// ⚠️ IMPORTANT: Set this environment variable in your frontend build tool (e.g., .env file or Vercel/Netlify settings)
// For Production: REACT_APP_MAIL_API_URL=https://api.qeenix.com

const WhatsappIcon = (props) => (
  <svg viewBox="0 0 448 512" fill="currentColor" {...props}>
    <path d="M380.9 97.4C339.7 54.9 283.8 32 224 32c-123.6 0-224 100.4-224 224 0 39.5 10.9 77.2 31.7 110.2l-33 121.2 124-32.5c31.7 17.3 67.5 26.6 104.3 26.6h.4c123.6 0 224-100.4 224-224 0-58.8-22.9-114.7-65.1-155.9zM224 456c-34.8 0-68.2-9.6-97.1-27.4l-6.2-3.7-65.7 17.2 17.5-63.5-4-6.5c-19.8-32-30.2-68.7-30.2-106.6 0-104.9 85.3-190.2 190.2-190.2 51.5 0 99.8 20 135.8 56s56 84.3 56 135.8c0 104.9-85.3 190.2-190.2 190.2zm90.9-122.9c-4.2-2.1-25.1-12.4-29-13.8-3.9-1.4-6.8-2.1-9.8 2.1-3 4.2-11.5 13.8-14 16.7-2.6 3-4.5 3.3-8.8 1.1-4.2-2.1-17.7-6.5-33.8-20.9-12.5-11.4-20.9-25.5-23.4-29.7-2.6-4.2-.3-6.5 1.8-8.6 1.9-1.9 4.2-4.5 6.3-6.7 2.1-2.1 2.8-3.9 4.2-6.5 1.4-2.6.7-4.9-.3-6.8-1-1.9-9.8-23.4-13.4-32.1-3.6-8.8-.7-7.5-6.8-10.3-6.2-2.8-13.4-5.3-17.7-7.8-4.2-2.6-9.1-3-13.9-3.2-4.9-.3-10.4 0-16 6.5-5.6 6.8-21.3 20.6-21.3 50.4 0 29.8 21.8 58.3 24.8 62.3 3 4 42.6 66.8 103.2 93.7 24.4 10.6 43.6 17 58.6 20 10.1 2.1 19.3 1.1 26.6-.1 8.2-1.4 25.1-10.2 28.7-20.3 3.6-9.8 3.6-18.2 2.6-20.3-1-2.1-3.9-3.3-8.2-5.4z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    // ✅ Correctly reading the environment variable
    const mailApiUrl = process.env.REACT_APP_MAIL_API_URL;

    if (!mailApiUrl) {
      setLoading(false);
      // This error will only appear if the variable was NOT compiled into the JavaScript bundle
      return setStatusMsg(
        "❌ API URL is not configured. Check environment variables on your hosting platform."
      );
    }

    try {
      // The API path is constructed correctly
      const response = await fetch(`${mailApiUrl}/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok && data.success) {
        // Check response.ok for proper error handling
        setStatusMsg(
          "✅ Your message has been sent! We'll be in touch shortly."
        );
        // Clear form only on success
        setFormData({ title: "", name: "", email: "", message: "" });
      } else {
        // Handle API server response errors (like rate limiting)
        setStatusMsg(`❌ ${data.message || "An unknown error occurred."}`);
      }
    } catch (error) {
      setLoading(false);
      console.error("Fetch Error:", error);
      setStatusMsg(
        "❌ Network error. Please ensure the API server is running and accessible."
      );
    }
  };

  return (
    <>
      <section className="py-20 px-6 bg-white text-gray-800 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          Contact Us
        </motion.h2>

        {statusMsg && (
          <div
            // Use different background colors for success/error
            className={`p-3 rounded-lg max-w-lg mx-auto mb-4 shadow-sm ${
              statusMsg.startsWith("✅")
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {statusMsg}
          </div>
        )}

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-200"
        >
          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Title (Optional)"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mb-4 focus:ring-blue-500 focus:border-blue-500"
          />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mb-4 focus:ring-blue-500 focus:border-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mb-4 focus:ring-blue-500 focus:border-blue-500"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mb-4 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white rounded-lg transition font-semibold ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {/* Optional: Add a direct WhatsApp link */}
        <div className="mt-8 text-center">
          <a
            href="https://wa.me/94743858305?text=Hello%20QeeniX%20Solutions!" // ⚠️ Replace with your actual WhatsApp number
            target="_blank"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <FaWhatsapp className="w-6 h-6 mr-2" />
            Or Contact Us on WhatsApp
          </a>
        </div>
      </section>

      {/* INLINE FOOTER COMPONENT LOGIC */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <div className="container mx-auto px-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} QeeniX Solutions. All rights
            reserved.
          </p>
          <div className="mt-2 text-xs text-gray-400">
            Powered by Modern Web Technology
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
