import React from "react";
import { FaGraduationCap, FaBook } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "Master of Electronics and Communication and Systems - MSC",
      institution:
        "Sri Krishna Arts and Science College, Coimbatore, TamilNadu.",
      details: "A NAAC Reaccredited 'A' Grade University.",
      year: "Completed 2020-2022",
      icon: <FaGraduationCap className="text-6xl text-yellow-400" />,
    },
    {
      id: 2,
      title: "Bachelor of Electronics - BSC",
      institution: "St Joseph's College, Trichy, TamilNadu.",
      details: "A NAAC Reaccredited 'A++' Grade University.",
      year: "Completed 2017-2020",
      icon: <IoSchoolSharp className="text-6xl text-blue-400" />,
    },
    {
      id: 3,
      title: "HSC | Biology",
      institution: "E R Hr. Sec. School, Trichy, TamilNadu.",
      details: "",
      year: "Completed 2017",
      icon: <FaBook className="text-6xl text-green-400" />,
    },
  ];

  return (
    <section
      id="education"
      className="bg-gray-900 text-white py-16 px-6 text-center"
    >
      <h2 className="text-5xl font-bold text-green-500 mb-8">Education</h2>
      <h2 className="text-3xl font-bold mb-6">
        These are my past credentials.
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform 
            flex flex-col justify-between h-[325px] border border-gray-700 hover:border-green-500"
          >
            <div>
              <div className="mb-4">{edu.icon}</div>
              <h3 className="text-xl font-bold text-white">{edu.title}</h3>{" "}
              <p className="text-gray-300 text-sm">{edu.institution}</p>
              <p className="text-gray-400 text-xs italic">{edu.details}</p>{" "}
            </div>
            <span className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold mt-4 shadow-md">
              {edu.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
