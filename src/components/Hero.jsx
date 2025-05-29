import React from "react";
import HeroImage from "../assets/img.jpg";
import ShahinaCV from "../assets/ShahinaCV.pdf";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold ">
        I'm{" "}
        <span className="text-transparent  bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Shahina Sheikh
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="flex justify-center items-center gap-6 mt-6">
        <a
          href="https://www.linkedin.com/in/shahina-sheikh" target="blank"
          className="text-gray-400 hover:text-blue-600 transition-transform transform hover:scale-110 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Inshiya1904" target="blank"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 text-2xl"
        >
          <FaGithub />
        </a>
      </div>

      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <a href="#contact">Contact With Me</a>
        </button>
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <a href={ShahinaCV} target="_blank">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
