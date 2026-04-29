import React from "react";
import AboutImage from "../assets/ProfilePic.jpeg";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiFirebase,
  SiOpenai,
} from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src={AboutImage} className="w-64  rounded-lg shadow-lg" />

          <div>
            <p className="text-gray-300 mb-6">
              I'm a Junior Software Developer currently working with a UK-based
              client on live WMS/TMS systems. I specialize in backend
              development using PHP (PDO) and MariaDB, along with full-stack
              development using the MERN stack. I have experience in maintaining
              production systems, debugging complex logic, and building scalable
              applications.
            </p>

            <ul className="text-gray-400 space-y-2 mb-6">
              <li>✔ Working on live production systems (WMS/TMS)</li>
              <li>✔ Backend Development using PHP & MariaDB</li>
              <li>✔ Full-Stack Development using MERN Stack</li>
              <li>✔ Strong problem-solving & debugging skills</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
              <Skill label="React" />
              <Skill label="Node.js" />
              <Skill label="MongoDB" />
              <Skill label="Redux" />
              <Skill label="Tailwind" />
              <Skill label="PHP" />
              <Skill label="MySQL" />
              <Skill label="MariaDB" />
              <Skill label="Firebase" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, label }) => (
  <div className="flex flex-col items-center">
    {icon}
    <span className="mt-2 text-gray-300">{label}</span>
  </div>
);

export default About;
