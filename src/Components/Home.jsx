import React from "react";

React;
const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between h-screen pt-20 px-22 gap-10 text-white bg-gray-900"
    >
      <div className="flex-1">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hey, I'm <span className="text-green-500">Vijayadass</span>
        </h1>
        <p className="mt-4 text-lg">
          As a frontend developer, I specialize in crafting intuitive and
          responsive web applications while also exploring backend development
          to enhance my full-stack capabilities.
        </p>
        <button
          className="group mt-6 inline-flex items-center bg-green-600 text-white py-2 px-4 rounded-full font-semibold transition duration-300 hover:bg-transparent hover:text-green-400"
          onClick={() => window.open("/vijayadass_resume.pdf", "_blank")}
        >
          <img
            src="/download.png"
            alt="download"
            className="w-5 h-5 mr-2 transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
          />
          Download CV
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-120 h-auto rounded-full p-1 overflow-hidden">
          {/* Animated gradient border (requires additional Tailwind configuration or custom CSS) */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-gradient-conic from-transparent via-green-500 to-transparent"></div>
          </div>
          <div className="relative w-full h-full bg-gray-900 rounded-full flex items-center justify-center ">
            <img
              src=".\assets\p1.png"
              alt="Profile"
              className="w-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
