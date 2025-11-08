import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/94743858305?text=Hello%20QeeniX%20Solutions!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white text-2xl shadow-lg z-50
                 transition-transform transform hover:scale-110 hover:shadow-2xl"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
