import React from "react";

React;

const Skills = () => {
  const skills = [
    { name: "HTML", image: "./assets/HTML.png" },
    { name: "CSS", image: "./assets/CSS.png" },
    { name: "JavaScript", image: "./assets/Javascript.png" },
    { name: "React.js", image: "./assets/Reactjs.png" },
    { name: "Git", image: "./assets/Git.png" },
    { name: "GitHub", image: "./assets/Github.png" },
    { name: "Tailwind", image: "./assets/Tailwind.png" },
  ];
  return (
    <section id="skills" className="py-16 px-8 bg-gray-900 text-center">
      <h2 className="text-5xl font-bold text-green-500 mb-8">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center hover:-translate-y-1 transition-transform"
          >
            <img
              src={skill.image}
              alt={`${skill.name} icon`}
              className="w-12 h-12 mb-2"
            />
            <h3 className="text-lg text-gray-800">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
