import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <section className="text-center">
      <h1 className="sm:text-xl md:text-2xl font-semibold leading-snug neo-brutalism-blue text-white mx-auto max-w-3xl py-2 px-2">
        Welcome to QeeniX Solutions!
      </h1>
      <p className="text-gray-800 text-lg mt-3 font-medium neo-brutalism-white px-2 rounded">
        Empowering businesses through intelligent, human-centered software innovation.
        <br />Where innovation truly wears a crown 👑.
      </p>
    </section>
  ),

  2: (
    <InfoBox
      text="Discover what we do best — from custom software and web apps to AI-powered digital solutions that transform your business."
      link="/services"
      btnText="Explore Our Services"
    />
  ),

  3: (
    <InfoBox
      text="Browse through our portfolio of projects that showcase creativity, precision, and innovation across industries."
      link="/projects"
      btnText="View Projects"
    />
  ),

  4: (
    <InfoBox
      text="See what our clients say about partnering with QeeniX Solutions — real stories of trust, transformation, and success."
      link="/testimonials"
      btnText="Read Testimonials"
    />
  ),

  5: (
    <InfoBox
      text="Explore insights, tech trends, and expert articles written by our QeeniX innovators. Stay inspired and informed."
      link="/blog"
      btnText="Visit Blog"
    />
  ),

  6: (
    <InfoBox
      text="We craft brilliance with modern technologies — React, Node.js, Python, AWS, and beyond. Our tech stack powers innovation."
      link="/techstack"
      btnText="View Our Stack"
    />
  ),

  7: (
    <InfoBox
      text="Meet the passionate minds and creators behind QeeniX Solutions — a team dedicated to turning ideas into impact."
      link="/team"
      btnText="Meet the Team"
    />
  ),

  8: (
    <InfoBox
      text="Let’s collaborate and build something extraordinary. Connect with QeeniX Solutions today — your vision, our innovation."
      link="/contacts"
      btnText="Get in Touch"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
