import React from "react";
import AboutImage from "../assets/img.jpg";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiRedux, SiFirebase, SiOpenai } from "react-icons/si";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="Shahina Sheikh"
            className="w-72 h-80 rounded-lg object-cover mb-8 md:mb-0 shadow-lg"
          />
          <div className="flex-1">
            <p className="text-md mb-8 text-gray-300 leading-relaxed">
              I'm Shahina Sheikh, a Full-Stack Developer skilled in building responsive web applications using the MERN stack and modern technologies. I’ve developed real-time chat apps, e-commerce platforms, and integrated AI tools using APIs like OpenAI and Gemini. My passion lies in clean code, great UX, and scalable backend systems.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">Tech Stack</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center text-sm">
              <Skill icon={<FaHtml5 className="text-orange-500 text-3xl mx-auto" />} label="HTML5" />
              <Skill icon={<FaCss3Alt className="text-blue-500 text-3xl mx-auto" />} label="CSS3" />
              <Skill icon={<SiJavascript className="text-yellow-300 text-3xl mx-auto" />} label="JavaScript" />
              <Skill icon={<FaReact className="text-cyan-400 text-3xl mx-auto" />} label="React" />
              <Skill icon={<SiRedux className="text-purple-500 text-3xl mx-auto" />} label="Redux" />
              <Skill icon={<SiTailwindcss className="text-blue-400 text-3xl mx-auto" />} label="Tailwind" />
              <Skill icon={<FaNodeJs className="text-green-500 text-3xl mx-auto" />} label="Node.js" />
              <Skill icon={<SiExpress className="text-gray-300 text-3xl mx-auto" />} label="Express" />
              <Skill icon={<SiMongodb className="text-green-400 text-3xl mx-auto" />} label="MongoDB" />
              <Skill icon={<FaGithub className="text-white text-3xl mx-auto" />} label="GitHub" />
              <Skill icon={<SiFirebase className="text-orange-400 text-3xl mx-auto" />} label="Firebase" />
              <Skill icon={<SiOpenai className="text-teal-300 text-3xl mx-auto" />} label="OpenAI API" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skill = ({ icon, label }) => (
  <div className="flex flex-col items-center">
    {icon}
    <span className="mt-2 text-gray-300">{label}</span>
  </div>
);

export default About;
