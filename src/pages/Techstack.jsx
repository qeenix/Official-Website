import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

import {
  javascript,
  typescript,
  python,
  java,
  csharp,
  go,
  php,
  html,
  css,
  sass,
  tailwind,
  mui,
  motion as framerMotion,
  react,
  redux,
  nextjs,
  nodejs,
  express,
  mongodb,
  mysql,
  postgresql,
  git,
  github,
  docker,
  figma,
  firebase,
  flutter,
  wordpress,
  swift,
  yaml,
  matlab,
} from "../assets/icons";

// ✅ Organized Categories
const categories = [
  {
    title: "Programming Languages",
    items: [
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "Python", icon: python },
      { name: "Java", icon: java },
      { name: "C#", icon: csharp },
      { name: "Go", icon: go },
      { name: "PHP", icon: php },
      { name: "Swift", icon: swift },
    ],
  },
  {
    title: "Frontend Technologies",
    items: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Sass", icon: sass },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Material-UI", icon: mui },
      { name: "React", icon: react },
      { name: "Redux", icon: redux },
      { name: "Next.js", icon: nextjs },
      { name: "Framer Motion", icon: framerMotion },
      { name: "Flutter", icon: flutter },
    ],
  },
  {
    title: "Backend Technologies",
    items: [
      { name: "Node.js", icon: nodejs },
      { name: "Express.js", icon: express },
      { name: "Firebase", icon: firebase },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: mongodb },
      { name: "MySQL", icon: mysql },
      { name: "PostgreSQL", icon: postgresql },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
      { name: "Docker", icon: docker },
      { name: "WordPress", icon: wordpress },
      { name: "Figma", icon: figma },
      { name: "YAML", icon: yaml },
      { name: "Matlab", icon: matlab },
    ],
  },
];

const Techstack = () => {
  return (
    <>
      <section className="min-h-screen bg-white text-gray-800 flex flex-col py-20 px-6">
        <div className="max-w-3xl mx-auto mb-14 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Tech Stack</h2>
          <p className="text-gray-600 text-lg">
            The technologies powering{" "}
            <span className="text-blue-600 font-semibold">QeeniX Solutions</span> 🚀
          </p>
        </div>

        {categories.map((cat, i) => (
          <div key={i} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">
              {cat.title}
            </h3>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
              {cat.items.map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="relative flex flex-col items-center p-6 bg-blue-50 border border-blue-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-500 transition cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-4" />
                  <span className="text-gray-900 font-semibold">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-16">
          <a
            href="/contacts"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Techstack;
