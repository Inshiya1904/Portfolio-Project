import React from "react";
import {
  FaServer,
  FaCode,
  FaDatabase,
  FaBug,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          About Me
        </h2>
        <p className="text-gray-400 text-center mb-12">
          My skills, experience, and what I work on
        </p>

        {/* INTRO */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-300 leading-relaxed">
            I am a Junior Software Developer working with a UK-based client on live WMS/TMS systems.
            I specialize in backend development using PHP (PDO) and MariaDB, along with full-stack
            development using the MERN stack.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <Card
            icon={<FaServer />}
            title="Backend Development"
            desc="Building scalable backend systems using PHP, APIs, and databases."
          />

          <Card
            icon={<FaDatabase />}
            title="Database Optimization"
            desc="Working with MariaDB & MongoDB to improve performance and queries."
          />

          <Card
            icon={<FaCode />}
            title="Full-Stack Development"
            desc="Developing modern web apps using MERN stack and clean architecture."
          />

          <Card
            icon={<FaBug />}
            title="Debugging & Maintenance"
            desc="Fixing real-time issues in production systems and improving stability."
          />

        </div>

      </div>
    </section>
  );
};

const Card = ({ icon, title, desc }) => (
  <div className="bg-gray-900/60 backdrop-blur-md border border-gray-700 
  rounded-xl p-6 text-center hover:scale-105 hover:shadow-green-500/10 transition duration-300">

    <div className="text-3xl text-green-400 mb-4 flex justify-center">
      {icon}
    </div>

    <h3 className="text-lg font-semibold mb-2">
      {title}
    </h3>

    <p className="text-gray-400 text-sm">
      {desc}
    </p>

  </div>
);

export default About;