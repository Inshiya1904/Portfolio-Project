import React from "react";
import FoodApp from "../assets/food-app.png";
import quizApp from "../assets/quiz-app.png";
import responsiveWeb from "../assets/responsive-web.png";
import YouTubeClone from "../assets/youtube.png";
import newsapi from "../assets/news-api.png";
import recipeapp from "../assets/recipe-app.png";
import ecom from "../assets/ecom.png";
import stdDash from "../assets/Student-Dashboard.png";
import task from "../assets/task-manager.png";
import mindleap from "../assets/MindLeap.png";



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
    name: "Task Manager Tool",
    technologies: "MERN Stack",
    image: task,
    github: "https://github.com/Inshiya1904/Task-Manager-Tool",
    demo: "https://taskflow-frontend-6swl.onrender.com"
  },
  {
    id: 3,
    name: "E-Commerce-Website",
    technologies: "MERN Stack",
    image: ecom,
    github: "https://github.com/Inshiya1904/E-Commerce",
    demo: "https://foreverbuy.in"
  },
  {
    id: 4,
    name: "Food Delivery Application",
    technologies: "MERN Stack",
    image: FoodApp,
    github: "https://github.com/Inshiya1904/Food-Delivery-Application",
    demo: "https://food-delivery-application-frontend.onrender.com"
  },
  {
    id: 5,
    name: "MindLeap Lending Page",
    technologies: "React",
    image: mindleap,
    github: "https://github.com/Inshiya1904/Mental-wellness-lendingPage",
    demo: "https://mental0-wellness-lendingpage.onrender.com"
  },
  {
    id: 6,
    name: "YouTube Clone",
    technologies: "React",
    image: YouTubeClone,
    github: "https://github.com/Inshiya1904/YouTube-Clone",
    demo: "https://youtube-clone-roan-nu.vercel.app"
  },
  {
    id: 7,
    name: "News API",
    technologies: "React",
    image: newsapi,
    github: "https://github.com/Inshiya1904/News-api-react-project",
    demo: "https://news-api-react-project.vercel.app"
  },
  {
    id: 8,
    name: "Recipe App",
    technologies: "React",
    image: recipeapp,
    github: "https://github.com/Inshiya1904/Recipe-App-React",
    demo: "https://recipe-app-react-navy.vercel.app"
  },
  {
    id: 9,
    name: "Student Dashboard",
    technologies: "MERN Stack",
    image: stdDash,
    github: "https://github.com/Inshiya1904/Student-Dashboard",
    demo: "https://student-dashboard-ji5w.onrender.com"
  },
 
];

const Projects = () => {
  return (
    <div className="py-20 text-white bg-black" id="project">
      <div className="container px-8 mx-auto md:px-16 lg:px-24">
        <h2 className="mb-12 text-4xl font-bold text-center">My Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="p-6 transition-transform duration-300 transform bg-gray-800 rounded-lg hover:shadow-lg hover:scale-105">
              <img src={project.image} alt={project.name} className="object-cover w-full h-48 mb-4 rounded-lg" />
              <h3 className="mb-2 text-2xl font-bold">{project.name}</h3>
              <p className="mb-4 text-gray-400">{project.technologies}</p>
              <div className="flex justify-between">
              <a href={project.github} className="inline-block px-6 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} className="inline-block px-6 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500" target="_blank" 
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
