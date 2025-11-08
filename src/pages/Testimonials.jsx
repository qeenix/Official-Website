import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Testimonials = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const testimonials = [
    {
      name: "Udaya Kumara",
      role: "Owner(Walawa Cabana Lake Resort)",
      message:
        "QeeniX delivered a modern, beautifully designed website that truly represents our resort. Their communication, creativity, and professionalism were exceptional. We are extremely satisfied with the result and highly recommend QeeniX to any business looking to grow online.",
    },
    {
      name: "Suresh Bandara",
      role: "Marketing Manager (GreenMart)",
      message:
        "The e-commerce website built by QeeniX is fast, secure, and easy to manage. We saw immediate customer engagement. Highly recommended for any business going digital!",
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
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Testimonials
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from our clients and partners who trusted{" "}
            <span className="text-blue-600 font-semibold">QeeniX</span> to bring
            their ideas to life.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-500 transition group overflow-hidden"
            >
              {/* Background QeeniX watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <span className="text-7xl font-extrabold text-blue-600 select-none">
                  QeeniX
                </span>
              </div>

              <div className="relative z-10">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="text-blue-600 text-4xl mb-4"
                >
                  “
                </motion.div>
                <p className="text-gray-700 mb-6 italic">"{t.message}"</p>
                <h4 className="text-lg font-semibold text-gray-900">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Want to share your QeeniX experience?
          </h3>
          <a
            href="/contacts"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Testimonials;
