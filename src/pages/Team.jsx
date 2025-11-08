import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import jayoda from "../assets/images/team/jayoda.jpg";
import udare from "../assets/images/team/udara.jpg";
import tharusha from "../assets/images/team/tharusha.jpg";
import pramuditha from "../assets/images/team/pramuditha.jpg";
import pasini from "../assets/images/team/pasini.jpg";
import sahan from "../assets/images/team/sahan.jpg";
import navidya from "../assets/images/team/navidya.jpg";
import dulan from "../assets/images/team/dulan.jpg";

import Footer from "../components/Footer";

const Team = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const teamMembers = [
    {
      name: "T K Y C Jayoda",
      role: "Founder & CEO | Full Stack Developer",
      image: jayoda,
      facebook: "https://web.facebook.com/profile.php?id=61572765786681",
      github: "https://github.com/ShanMihirangaHerath",
      linkedin: "https://www.linkedin.com/in/t-k-y-c-jayoda",
    },
    {
      name: "A Udara Prabath",
      role: "Lead Software Engineer",
      image: udare,
      facebook: "https://web.facebook.com/udara.amarasekara.9",
      github: "https://github.com/udaraamarasekara",
      linkedin: "https://www.linkedin.com/in/udara-amarasekara-amarasekare-4b23ab55/",
    },
    {
      name: "K B G Tharusha Abishek",
      role: "UI/UX Designer",
      image: tharusha,
      facebook: "/404",
      github: "/404",
      linkedin: "/404",
    },
    {
      name: "Pramuditha Lakshan",
      role: "Project Manager",
      image: pramuditha,
      facebook: "/404",
      github: "https://github.com/Pramudithalakshan/",
      linkedin: "https://www.linkedin.com/in/pramuditha-lakshan/",
    },
    {
      name: "I W A Pasini Mekhala",
      role: "Frontend Developer",
      image: pasini,
      facebook: "/404",
      github: "/404",
      linkedin: "/404",
    },
    {
      name: "Sahan Yashmika",
      role: "Backend Developer",
      image: sahan,
      facebook: "/404",
      github: "https://github.com/SahanY099/",
      linkedin: "/404",
    },
    {
      name: "H R Navidya Gunasekara",
      role: "QA & Testing Engineer",
      image: navidya,
      facebook: "/404",
      github: "/404",
      linkedin: "http://www.linkedin.com/in/navidya-gunasekara-ba21112b9",
    },
    {
      name: "H R Dulan Dakshina Nimnada Gunasekara",
      role: "Mobile App Developer",
      image: dulan,
      facebook: "/404",
      github: "/404",
      linkedin: "/404",
    },
  ];

  return (
    <>
    <section className="py-20 px-6 bg-white text-gray-800 text-center overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Team</h2>
        <p className="text-gray-600 text-lg">
          Meet the talented minds behind{" "}
          <span className="text-blue-600 font-semibold">QeeniX</span> — 
          a team united by creativity, technology, and innovation. 👑
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative group bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-500 transition overflow-hidden"
          >
            {/* Hover watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity duration-500">
              <span className="text-7xl font-extrabold text-blue-600 select-none">
                QeeniX
              </span>
            </div>

            {/* Profile Image */}
            <div className="relative z-10 flex justify-center mb-6">
              <motion.img
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.5 }}
                src={member.image}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-blue-500 shadow-md"
              />
            </div>

            {/* Member Info */}
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{member.role}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-5">
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition text-xl"
                >
                  <FaFacebook />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition text-xl"
                >
                  <FaGithub />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-700 transition text-xl"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Want to join our innovative team?
        </h3>
        <a
          href="/contacts"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
        >
          Apply Now
        </a>
      </motion.div>
    </section>
    <Footer />
    </>
  );
};

export default Team;
