import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import qeenixLogo from "../assets/images/logo.svg";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage ? (
        // 🏠 Home Page Navbar (Transparent)
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm px-6 md:px-12 py-4 flex justify-between items-center">
          {/* Logo / Brand */}
          <NavLink
            to="/"
            className="flex items-center space-x-2 font-extrabold"
          >
            {/* <img
              src={qeenixLogo}
              alt="QeeniX Logo"
              className="h-10 w-auto drop-shadow-[0_0_10px_#22d3ee]"
            /> */}
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-sky-300 text-2xl font-extrabold tracking-wide drop-shadow-[0_0_8px_#22d3ee]">
              QeeniX
            </p>
          </NavLink>

          {/* Navigation Links */}
          <nav className="flex text-lg gap-10 font-medium">
            <NavLink
              to="/legal"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-300 drop-shadow-[0_0_6px_#22d3ee]"
                  : "text-white hover:text-cyan-200 transition-colors"
              }
            >
              Legal
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-300 drop-shadow-[0_0_6px_#22d3ee]"
                  : "text-white hover:text-cyan-200 transition-colors"
              }
            >
              About
            </NavLink>
          </nav>
        </header>
      ) : (
        // 🌐 Other Pages Header (Gradient)
        <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-sky-700 text-blue-100 py-4 shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Left Section: Navigation */}
            <nav className="hidden md:flex space-x-8">
              <NavLink
                to="/about"
                className="text-blue-200 hover:text-white transition-colors duration-200 text-lg"
              >
                About
              </NavLink>
              <NavLink
                to="/legal"
                className="text-blue-200 hover:text-white transition-colors duration-200 text-lg"
              >
                Legal
              </NavLink>
              <NavLink
                to="/privacy"
                className="text-blue-200 hover:text-white transition-colors duration-200 text-lg"
              >
                Privacy & Policy
              </NavLink>
            </nav>

            {/* Center: Logo */}
            <div className="flex-grow flex justify-center">
              <NavLink to="/">
                <img
                  src={qeenixLogo}
                  alt="QeeniX Solutions Logo"
                  className="h-10 w-auto drop-shadow-[0_0_10px_#22d3ee] hover:scale-105 transition-transform duration-300"
                />
              </NavLink>
            </div>

            {/* Right: Login Button */}
            <div className="flex items-center">
              <NavLink
                to="/contacts"
                className="flex items-center text-blue-200 hover:text-white transition-colors duration-200 text-lg group"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
