import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
      
      {/* Animated Crown / Logo Element */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-blue-600 text-6xl font-extrabold mb-4 select-none"
      >
        👑
      </motion.div>

      {/* Error Code */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-7xl font-bold text-gray-900 mb-2"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-gray-600 text-lg max-w-md mb-6"
      >
        Looks like you’ve wandered outside the kingdom.  
        <span className="text-blue-600 font-semibold">This page does not exist.</span>
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl 
          font-medium hover:bg-blue-700 transition"
        >
          <FaHome className="text-xl" /> Back to Home
        </Link>
      </motion.div>

      {/* Watermark */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 text-8xl font-extrabold text-blue-500 select-none"
      >
        QeeniX
      </motion.span>
    </section>
  );
};

export default NotFound;
