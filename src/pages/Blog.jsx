import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Blog = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const blogPosts = [
    {
      title: "Walawa Cabana Lake Resort Website",
      desc: "Designed a modern, responsive website for Walawa Cabana Lake Resort with online booking, high-quality galleries, and seamless navigation.",
      url: "/404",
    },
    {
      title: "GreenMart E-commerce Platform",
      desc: "Built a fast, secure, and user-friendly e-commerce site for GreenMart, featuring smooth shopping, cart management, and payment integration.",
      url: "/404",
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
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Blog</h2>
          <p className="text-gray-600 text-lg">
            Insights, ideas, and updates from the{" "}
            <span className="text-blue-600 font-semibold">QeeniX</span> team — 
            where innovation truly wears a crown. 👑
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {blogPosts.map((post, i) => (
            <motion.a
              key={i}
              href={post.url}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className="relative block bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-500 transition group overflow-hidden text-left"
            >
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <span className="text-7xl font-extrabold text-blue-600 select-none">
                  QeeniX
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6">{post.desc}</p>
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-blue-600 font-semibold"
                >
                  Read More →
                </motion.div>
              </div>
            </motion.a>
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
            Want to share your ideas or write for QeeniX?
          </h3>
          <a
            href="/contacts"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
      <Footer/>
    </>
  );
};

export default Blog;
