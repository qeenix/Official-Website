import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-center select-none space-y-2">
        {/* QeeniX Solutions */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 text-transparent bg-clip-text animate-gradient">
          QeeniX <span className="text-blue-600">Solutions</span>
        </h1>

        {/* Slogan */}
        <p className="text-blue-400 text-sm md:text-base font-medium tracking-wide animate-pulse">
          Where innovation wears a crown 👑
        </p>
      </div>

      {/* ✅ FIXED: removed 'jsx' — works in React + Vite */}
      <style>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite, fadeIn 1.2s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Html>
  );
};

export default Loader;
