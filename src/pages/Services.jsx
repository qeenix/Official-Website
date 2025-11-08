import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

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
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-gray-600 text-lg">
            At <span className="text-blue-600 font-semibold">QeeniX Solutions</span>, we
            deliver intelligent, creative software solutions —{" "}
            <span className="text-blue-600">where innovation wears a crown.</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Web Development",
              desc: "Modern, responsive, and high-performance websites built using cutting-edge technologies to elevate your online presence.",
            },
            {
              title: "Mobile Development",
              desc: "Native and cross-platform mobile apps designed for performance, security, and a seamless user experience.",
            },
            {
              title: "QA & Testing",
              desc: "Ensuring software reliability through manual and automated testing, delivering flawless, high-quality products.",
            },
            {
              title: "UI/UX Design",
              desc: "Crafting intuitive, elegant user interfaces that blend aesthetics with exceptional usability and brand personality.",
            },
            {
              title: "System Software",
              desc: "Developing robust and scalable system-level software to ensure performance, reliability, and security across platforms.",
            },
            {
              title: "Web Applications",
              desc: "Custom-built web applications that combine functionality, performance, and scalability to power your business.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className="relative overflow-hidden bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-500 transition group"
            >
              {/* Hover background text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <span className="text-7xl font-extrabold text-blue-600 select-none">
                  QeeniX
                </span>
              </div>

              {/* Card content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Let’s build something great together.
          </h3>
          <a
            href="/contacts"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
