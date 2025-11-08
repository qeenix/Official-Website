import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const projectsData = [
  {
    name: "Walawa Cabana Lake Resort",
    description: "Designed and developed a modern, responsive website for Walawa Cabana Lake Resort that showcases the resort’s serene lakefront views and luxurious amenities. The website features an intuitive booking system, high-quality photo galleries, and smooth navigation across all devices. Special attention was given to UX/UI design to reflect the resort’s tranquil atmosphere, helping potential guests explore accommodations, services, and experiences effortlessly. The project highlights a clean, visually appealing design while ensuring fast loading speed and SEO-friendly structure.",
  },
  {
    name: "GreenMart E-Commerce Platform",
    description: "Developed a fast, secure, and user-friendly e-commerce website for GreenMart, an online grocery and retail store. The platform features smooth product browsing, easy cart management, and seamless checkout with secure payment integration. Designed with scalability in mind, it allows for efficient inventory management and customer engagement, enhancing the overall online shopping experience. The website’s clean design and responsive layout ensure customers can shop effortlessly on both desktop and mobile devices.",
  },
];

const Projects = () => {
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
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Projects</h2>
          <p className="text-gray-600 text-lg">
            Every project we create reflects our passion for innovation and technology. Exciting things are coming soon! 👑
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projectsData.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-500 transition overflow-hidden text-center"
            >
              {/* Background Text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <span className="text-7xl font-extrabold text-blue-600 select-none">
                  QeeniX
                </span>
              </div>

              {/* Project Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Animated Loading Bar */}
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-24 h-2 bg-blue-600 rounded-full mx-auto"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Want to build something amazing with us?
          </h3>
          <a
            href="/contacts"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Start Your Project
          </a>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
