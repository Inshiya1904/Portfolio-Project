
import React from "react";
import FoodApp from "../assets/food-app.png";
import blackcoffer from "../assets/blackcoffer.png";
import ecom from "../assets/ecom.png";
import task from "../assets/task-manager.png";
import trackingImg from "../assets/trackingSystem.png"

// ❌ Lower impact / learning projects (kept for reference)
// import YouTubeClone from "../assets/youtube.png";
// import newsapi from "../assets/news-api.png";
// import recipeapp from "../assets/recipe-app.png";
// import stdDash from "../assets/Student-Dashboard.png";
// import mindleap from "../assets/MindLeap.png";

const projects = [
  {
    id: 1,
    name: "BlackCoffer Dashboard",
    tech: ["React", "Node.js", "MongoDB", "Charts"],
    image: blackcoffer,
    github: "https://github.com/Inshiya1904/BlackCoffer-Dashboard",
    demo: "https://blackcoffer-dashboard-hh6p.onrender.com",
    featured: true,
    description:
      "Interactive data visualization dashboard with filters and charts, enabling better insights and decision-making.",
  },
  {
    id: 2,
    name: "Task Manager Tool",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    image: task,
    github: "https://github.com/Inshiya1904/Task-Manager-Tool",
    demo: "https://taskflow-frontend-6swl.onrender.com",
    featured: true,
    description:
      "Task management system with JWT authentication and CRUD operations, improving task tracking and productivity.",
  },
  {
    id: 3,
    name: "E-Commerce Website",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: ecom,
    github: "https://github.com/Inshiya1904/E-Commerce",
    demo: "https://foreverbuy.in",
    featured: true,
    description:
      "Full-featured e-commerce platform with authentication, cart, and checkout, supporting complete user purchase flow.",
  },
  {
    id: 4,
    name: "Food Delivery App",
    tech: ["React", "Node.js", "MongoDB"],
    image: FoodApp,
    github: "https://github.com/Inshiya1904/Food-Delivery-Application",
    demo: "https://food-delivery-application-frontend.onrender.com",
    featured: false,
    description:
      "Online food ordering application with menu browsing, cart system, and responsive UI for seamless user experience.",
  },
  {
    id: 5,
    name: "Air Cargo Shipment Tracking Landing Page",
    tech: ["PHP", "JavaScript", "HTML", "CSS"],
    image: trackingImg,
    github: "", // keep empty if private
    demo: "https://demo-tracking.mdf-solutions.co.uk",
    featured: true,
    description:
      "Developed a landing page for an air cargo shipment tracking system, enabling users to track shipments and access logistics information with a clean and responsive UI.",
  },
];

const Projects = () => {
  return (
    <section id="project" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Selected projects demonstrating full-stack development and real-world
          problem solving
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/60 backdrop-blur-md border border-gray-700 
              rounded-xl p-5 shadow-lg hover:shadow-green-500/10 
              hover:scale-[1.02] hover:-translate-y-1 transition duration-300 flex flex-col"
            >
              {/* Featured Badge */}
              {project.featured && (
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded w-fit mb-2">
                  Featured
                </span>
              )}

              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-44 object-cover rounded-lg"
              />

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold mt-3">{project.name}</h3>

                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800 border border-gray-700 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex justify-between pt-4">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


// old code

// import React from "react";

// import FoodApp from "../assets/food-app.png";
// import YouTubeClone from "../assets/youtube.png";
// import newsapi from "../assets/news-api.png";
// import recipeapp from "../assets/recipe-app.png";
// import ecom from "../assets/ecom.png";
// import stdDash from "../assets/Student-Dashboard.png";
// import task from "../assets/task-manager.png";
// import mindleap from "../assets/MindLeap.png";
// import blackcoffer from "../assets/blackcoffer.png";

// const projects = [
//   {
//     id: 1,
//     name: "BlackCoffer Dashboard",
//     technologies: "MERN Stack",
//     image: blackcoffer,
//     github: "https://github.com/Inshiya1904/BlackCoffer-Dashboard",
//     demo: "https://blackcoffer-dashboard-hh6p.onrender.com",
//     description:
//       "Interactive data visualization dashboard with filters, charts, and analytics using MERN stack.",
//   },
//   {
//     id: 2,
//     name: "Task Manager Tool",
//     technologies: "MERN Stack",
//     image: task,
//     github: "https://github.com/Inshiya1904/Task-Manager-Tool",
//     demo: "https://taskflow-frontend-6swl.onrender.com",
//     description:
//       "Task management system with authentication, CRUD operations, and real-time updates.",
//   },
//   {
//     id: 3,
//     name: "E-Commerce Website",
//     technologies: "MERN Stack",
//     image: ecom,
//     github: "https://github.com/Inshiya1904/E-Commerce",
//     demo: "https://foreverbuy.in",
//     description:
//       "Full-featured e-commerce platform with cart, checkout, authentication, and product management.",
//   },
//   {
//     id: 4,
//     name: "Food Delivery App",
//     technologies: "MERN Stack",
//     image: FoodApp,
//     github: "https://github.com/Inshiya1904/Food-Delivery-Application",
//     demo: "https://food-delivery-application-frontend.onrender.com",
//     description:
//       "Online food ordering platform with menu browsing, cart system, and responsive UI.",
//   },
//   {
//     id: 5,
//     name: "MindLeap Landing Page",
//     technologies: "React + Tailwind",
//     image: mindleap,
//     github: "https://github.com/Inshiya1904/Mental-wellness-lendingPage",
//     demo: "https://mental0-wellness-lendingpage.onrender.com",
//     description:
//       "Modern mental wellness landing page with smooth UI and responsive design.",
//   },
//   {
//     id: 6,
//     name: "YouTube Clone",
//     technologies: "React",
//     image: YouTubeClone,
//     github: "https://github.com/Inshiya1904/YouTube-Clone",
//     demo: "https://youtube-clone-roan-nu.vercel.app",
//     description:
//       "YouTube UI clone with video listing, search, and API integration.",
//   },
//   {
//     id: 7,
//     name: "News App",
//     technologies: "React + API",
//     image: newsapi,
//     github: "https://github.com/Inshiya1904/News-api-react-project",
//     demo: "https://news-api-react-project.vercel.app",
//     description:
//       "Real-time news app using API with category filtering and dynamic updates.",
//   },
//   {
//     id: 8,
//     name: "Recipe App",
//     technologies: "React",
//     image: recipeapp,
//     github: "https://github.com/Inshiya1904/Recipe-App-React",
//     demo: "https://recipe-app-react-navy.vercel.app",
//     description: "Recipe search app with API integration and clean UI.",
//   },
//   {
//     id: 9,
//     name: "Student Dashboard",
//     technologies: "MERN Stack",
//     image: stdDash,
//     github: "https://github.com/Inshiya1904/Student-Dashboard",
//     demo: "https://student-dashboard-ji5w.onrender.com",
//     description:
//       "Dashboard for managing student data with authentication and CRUD operations.",
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="project" className="py-20 bg-black text-white">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-center mb-16">
//           Projects (Personal Work)
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex flex-col h-full"
//             >
//               {/* Featured */}
//               {index < 3 && (
//                 <span className="text-xs bg-green-500 px-2 py-1 rounded w-fit">
//                   Featured
//                 </span>
//               )}

//               {/* Image */}
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 loading="lazy"
//                 className="w-full h-44 object-cover rounded-lg mt-2"
//               />

//               {/* Content */}
//               <div className="flex flex-col flex-grow">
//                 <h3 className="text-xl font-bold mt-3">{project.name}</h3>

//                 <p className="text-gray-400 text-sm mt-2 leading-relaxed">
//                   {project.description}
//                 </p>

//                 <p className="text-green-400 text-sm mt-2">
//                   {project.technologies}
//                 </p>

//                 {/* Buttons at bottom */}
//                 <div className="mt-auto flex justify-between pt-4">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition"
//                   >
//                     GitHub
//                   </a>

//                   <a
//                     href={project.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-105 transition"
//                   >
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
