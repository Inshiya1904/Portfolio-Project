import React from "react";

import FoodApp from "../assets/food-app.png";
import YouTubeClone from "../assets/youtube.png";
import newsapi from "../assets/news-api.png";
import recipeapp from "../assets/recipe-app.png";
import ecom from "../assets/ecom.png";
import stdDash from "../assets/Student-Dashboard.png";
import task from "../assets/task-manager.png";
import mindleap from "../assets/MindLeap.png";
import blackcoffer from "../assets/blackcoffer.png";

const projects = [
  {
    id: 1,
    name: "BlackCoffer Dashboard",
    technologies: "MERN Stack",
    image: blackcoffer,
    github: "https://github.com/Inshiya1904/BlackCoffer-Dashboard",
    demo: "https://blackcoffer-dashboard-hh6p.onrender.com",
    description:
      "Interactive data visualization dashboard with filters, charts, and analytics using MERN stack.",
  },
  {
    id: 2,
    name: "Task Manager Tool",
    technologies: "MERN Stack",
    image: task,
    github: "https://github.com/Inshiya1904/Task-Manager-Tool",
    demo: "https://taskflow-frontend-6swl.onrender.com",
    description:
      "Task management system with authentication, CRUD operations, and real-time updates for productivity.",
  },
  {
    id: 3,
    name: "E-Commerce Website",
    technologies: "MERN Stack",
    image: ecom,
    github: "https://github.com/Inshiya1904/E-Commerce",
    demo: "https://foreverbuy.in",
    description:
      "Full-featured e-commerce platform with cart, checkout, user authentication, and product management.",
  },
  {
    id: 4,
    name: "Food Delivery App",
    technologies: "MERN Stack",
    image: FoodApp,
    github: "https://github.com/Inshiya1904/Food-Delivery-Application",
    demo: "https://food-delivery-application-frontend.onrender.com",
    description:
      "Online food ordering platform with menu browsing, cart system, and responsive UI design.",
  },
  {
    id: 5,
    name: "MindLeap Landing Page",
    technologies: "React + Tailwind",
    image: mindleap,
    github: "https://github.com/Inshiya1904/Mental-wellness-lendingPage",
    demo: "https://mental0-wellness-lendingpage.onrender.com",
    description:
      "Modern mental wellness landing page with smooth UI, animations, and responsive design.",
  },
  {
    id: 6,
    name: "YouTube Clone",
    technologies: "React",
    image: YouTubeClone,
    github: "https://github.com/Inshiya1904/YouTube-Clone",
    demo: "https://youtube-clone-roan-nu.vercel.app",
    description:
      "YouTube UI clone with video listing, search functionality, and API integration.",
  },
  {
    id: 7,
    name: "News App",
    technologies: "React + API",
    image: newsapi,
    github: "https://github.com/Inshiya1904/News-api-react-project",
    demo: "https://news-api-react-project.vercel.app",
    description:
      "Real-time news application using external API with category filtering and dynamic updates.",
  },
  {
    id: 8,
    name: "Recipe App",
    technologies: "React",
    image: recipeapp,
    github: "https://github.com/Inshiya1904/Recipe-App-React",
    demo: "https://recipe-app-react-navy.vercel.app",
    description:
      "Recipe search application with API integration and clean UI for browsing dishes.",
  },
  {
    id: 9,
    name: "Student Dashboard",
    technologies: "MERN Stack",
    image: stdDash,
    github: "https://github.com/Inshiya1904/Student-Dashboard",
    demo: "https://student-dashboard-ji5w.onrender.com",
    description:
      "Dashboard for managing student data with authentication, CRUD operations, and analytics view.",
  },
];

const Projects = () => {
  return (
    <section id="project" className="py-20 bg-black text-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-800 p-5 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              
              {/* Featured Tag */}
              {index < 3 && (
                <span className="text-xs bg-green-500 px-2 py-1 rounded">
                  Featured
                </span>
              )}

              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="w-full h-44 object-cover rounded-lg mt-2"
              />

              {/* Title */}
              <h3 className="text-xl font-bold mt-3">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {project.description}
              </p>

              {/* Tech */}
              <p className="text-green-400 text-sm mt-2">
                {project.technologies}
              </p>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-105 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;