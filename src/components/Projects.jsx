import React from "react";
import FoodApp from "../assets/food-app.png";
import quizApp from "../assets/quiz-app.png";
import responsiveWeb from "../assets/responsive-web.png";


const projects = [
  {
    id: 1,
    name: "Responsive Website",
    technologies: "React",
    image: responsiveWeb,
    github: "https://github.com/Inshiya1904/React-Responsive-Website",
    demo: "https://react-responsive-website.onrender.com"
  },
  {
    id: 2,
    name: "Quiz App",
    technologies: "React",
    image: quizApp,
    github: "https://github.com/Inshiya1904/Quiz-App",
    demo: "https://quiz-app-phqv.onrender.com"
  },
  {
    id: 3,
    name: "Food Delivery Application",
    technologies: "MERN Stack",
    image: FoodApp,
    github: "https://github.com/Inshiya1904/Food-Delivery-Application",
    demo: "https://food-delivery-application-frontend.onrender.com"
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex justify-between">
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-6 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-6 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">Demo</a>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
