import React from "react";

const experiences = [
  {
    company: "MDF Solutions Ltd",
    location: "UK Client",
    role: "Junior Software Developer (Freelance)",
    duration: "April 2026 – Present",
    highlight:
      "Working on a live logistics system handling real-world operations",
    points: [
      "Maintaining and enhancing WMS/TMS systems used in logistics operations",
      "Debugging and improving PHP (PDO) & MariaDB codebase",
      "Supporting business workflows and backend logic",
      "Resolved real-time production issues in live systems",
    ],
    tech: ["PHP", "MariaDB", "WMS", "Debugging"],
  },
  {
    company: "Keerthi Bizplus4u IT Services Pvt. Ltd",
    location: "Remote",
    role: "Full Stack Developer Intern",
    duration: "Oct 2024 – Jan 2026",
    points: [
      "Developed scalable backend systems using Node.js, Express & MongoDB",
      "Implemented JWT authentication and role-based access control",
      "Built OCR-based invoice automation reducing manual work by 70%",
      "Created APIs using MVC architecture improving maintainability",
      "Optimized database queries improving performance by 20–25%",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "API"],
  },
  {
    company: "Unified Mentor Pvt. Ltd",
    location: "Remote",
    role: "Full Stack Developer Intern",
    duration: "Mar 2024 – Sep 2025",
    points: [
      "Developed 4+ MERN stack applications with authentication and CRUD",
      "Integrated third-party APIs and cloud services",
      "Built responsive UI improving user experience by 40%",
      "Reduced bugs through testing and debugging",
    ],
    tech: ["React", "Node.js", "MongoDB", "API"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-3">
          Experience
        </h2>
        <p className="text-gray-400 text-center mb-12">
          My journey from internships to real-world development
        </p>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-gray-700"></div>

          {/* Experience Items */}
          <div className="space-y-12">

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-14">

                {/* Timeline Dot */}
                <div className="absolute left-3 top-6 w-4 h-4 bg-green-400 rounded-full border-2 border-black shadow-[0_0_10px_#22c55e]"></div>

                {/* Card */}
                <div className="bg-gray-900/60 backdrop-blur-md border border-gray-700 
                rounded-xl p-6 shadow-lg hover:shadow-green-500/10 
                hover:scale-[1.02] transition duration-300">

                  {/* Company */}
                  <h3 className="text-xl font-semibold">
                    {exp.company}{" "}
                    <span className="text-green-400 text-sm">
                      ({exp.location})
                    </span>
                  </h3>

                  {/* Role */}
                  <p className="text-gray-300 font-medium mt-1">
                    {exp.role}
                  </p>

                  {/* Duration */}
                  <p className="text-gray-500 italic">
                    {exp.duration}
                  </p>

                  {/* Highlight */}
                  {exp.highlight && (
                    <p className="text-gray-400 mt-2">
                      {exp.highlight}
                    </p>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-gray-800 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Points */}
                  <ul className="mt-4 space-y-2 text-gray-300 list-disc ml-5">
                    {exp.points.map((point, i) => (
                      <li key={i}>
                        {point.includes("PHP") ? (
                          <>
                            Debugging and improving{" "}
                            <span className="text-green-400">
                              PHP (PDO)
                            </span>{" "}
                            &{" "}
                            <span className="text-blue-400">
                              MariaDB
                            </span>{" "}
                            codebase
                          </>
                        ) : (
                          point
                        )}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;