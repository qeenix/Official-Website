import React from "react";
import { Facebook, Twitter, Youtube, Linkedin, Phone } from "lucide-react";
import qeenixLogo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-sky-700 text-blue-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand/Logo Section */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-6">
              <img
                src={qeenixLogo}
                alt="QeeniX Solutions Logo"
                className="h-12 w-auto mr-3 drop-shadow-[0_0_8px_#22d3ee]"
              />

              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300 bg-clip-text text-transparent">
                QeeniX Solutions
              </h2>
            </div>

            <p className="text-sm text-blue-200 leading-relaxed mb-6">
              Crafting next-generation digital experiences — <br />
              <span className="italic text-cyan-300">
                Where innovation wears a crown 👑
              </span>
            </p>

            <div className="flex items-center text-sm text-blue-200">
              <Phone className="h-5 w-5 mr-2 text-cyan-400" />
              <span>+94 70 123 4567</span>
            </div>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="text-blue-200 hover:text-cyan-300 transition"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-cyan-300 transition"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-cyan-300 transition"
              >
                <Youtube />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-cyan-300 transition"
              >
                <Linkedin />
              </a>
            </div>
            <p className="text-sm text-blue-300">
              © {new Date().getFullYear()} QeeniX Solutions. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
