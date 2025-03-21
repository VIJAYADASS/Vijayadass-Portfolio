import React from "react";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-8 bg-gray-900 text-center">
      <h2 className="text-5xl font-bold text-green-500 mb-4">My Recent Work</h2>
      <p className="mb-8 text-white">
        These are some of the past projects I've worked on.
      </p>

      <div className="max-w-sm mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-1 transition-transform">
          <div className="relative group">
            <img
              src="./assets/Calculator.jpg"
              alt="Calculator project"
              className="w-full object-cover"
            />

            {/* Vertical Hover Bar with Transparency */}
            <div className="absolute top-0 right-0 h-full w-20 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col justify-center items-center gap-6 backdrop-blur-md opacity-0 group-hover:opacity-80 rounded-l-lg">
              <a
                href="https://calculator-vite-react-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-4 rounded-full hover:bg-blue-500 transition duration-200"
                title="Open"
              >
                <MdOpenInNew />
              </a>
              <a
                href="https://github.com/VIJAYADASS/Calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-4 rounded-full hover:bg-blue-500 transition duration-200"
                title="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="p-4 text-left">
            <h3 className="text-xl font-bold text-black mb-2">Calculator</h3>
            <p className="text-black">
              <strong>Tech stack:</strong> React.js
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
