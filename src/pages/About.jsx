import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import qeenixLogo from "../assets/images/logo.svg";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-slate-100 to-white text-slate-800">
      {/* ================== About Section ================== */}
      <main className="flex-grow container mx-auto px-6 md:px-12 lg:px-24 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_#22d3ee]">
            About QeeniX Solutions
          </h1>
          <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
            Innovating the future through technology, creativity, and human intelligence.  
            At <strong>QeeniX Solutions</strong>, we don’t just build software — we build experiences.
          </p>
        </motion.div>

        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <img
            src={qeenixLogo}
            alt="QeeniX Logo"
            className="h-28 w-auto drop-shadow-[0_0_20px_#22d3ee] hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {[
            {
              title: "Our Mission",
              desc: "To empower businesses and creators through cutting-edge software solutions, combining technical excellence with a deep understanding of design, innovation, and user experience.",
            },
            {
              title: "Our Vision",
              desc: "To become a global leader in intelligent digital transformation — building a world where technology amplifies creativity and innovation wears a crown. 👑",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-lg rounded-2xl p-8 border border-blue-100 hover:shadow-blue-200/50 transition"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                {item.title}
              </h2>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                desc: "We embrace change and continuously seek creative solutions that redefine what’s possible.",
              },
              {
                title: "Integrity",
                desc: "We build trust by delivering transparency, honesty, and accountability in every project.",
              },
              {
                title: "Excellence",
                desc: "Our commitment to quality drives us to go beyond expectations and deliver perfection.",
              },
              {
                title: "Collaboration",
                desc: "We believe teamwork fuels innovation — together, we achieve greatness.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(56,189,248,0.3)",
                }}
                className="bg-gradient-to-b from-sky-50 to-white p-6 rounded-xl shadow-md border border-blue-100 text-center"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Who We Are</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            QeeniX Solutions is a forward-thinking software development company specializing in 
            full-stack web applications, intelligent automation, and immersive 3D web experiences.  
            Our team of developers, designers, and innovators is passionate about building 
            technology that’s fast, scalable, and future-proof.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-900 via-blue-800 to-sky-700 text-white py-12 rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Join the QeeniX Journey</h2>
          <p className="text-lg mb-6 text-blue-200 max-w-xl mx-auto">
            Partner with us to bring your vision to life. Together, we can design the
            digital future.
          </p>
          <a
            href="/contacts"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </main>

      {/* ================== Footer ================== */}
      <Footer />
    </div>
  );
};

export default About;