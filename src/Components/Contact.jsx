import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

React;

const Contact = () => {
  return (
    <section id="contact" className="bg-black-900 text-white py-12 px-16">
      <footer className="flex flex-col md:flex-row items-center  pt-4">
        {/* Left Section */}
        <div className="flex items-center gap-4 w-full md:w-1/2">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-500">
            <img
              src="/src/assets/P1.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-center font-bold ">Vijayadass M</h4>
            <p>
              Mail me at{" "}
              <a
                href="mailto:Vijaydass0702@gmail.com"
                className="text-blue-400 hover:underline text-center"
              >
                Vijaydass0702@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="hidden md:block w-px h-12 bg-gray-600"></div>

        {/* Right Section */}
        <div className=" w-full  md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h4 className="text-lg font-bold mb-3 text-center">
            Let’s connect! Follow me on social media to stay in touch.
          </h4>
          <div className="flex justify-center md:justify-center gap-4.5 ">
            <a href="#" className="group">
              <div className="w-12 h-12 flex items-center justify-around rounded-full bg-black-800 transition duration-300 group-hover:bg-[#0A66C2]">
                <FaLinkedin
                  size={24}
                  className="text-white group-hover:text-white"
                />
              </div>
            </a>
            <a href="#" className="group">
              <div className="w-12 h-12 flex items-center justify-around rounded-full bg-black-800 transition duration-300 group-hover:bg-[#171515]">
                <FaGithub
                  size={24}
                  className="text-white group-hover:text-white"
                />
              </div>
            </a>
            <a href="#" className="group">
              <div className="w-12 h-12 flex items-center justify-around rounded-full bg-black-800 transition duration-300 group-hover:bg-[#E4405F]">
                <FaInstagram
                  size={24}
                  className="text-white group-hover:text-white"
                />
              </div>
            </a>
            <a href="#" className="group">
              <div className="w-12 h-12 flex items-center justify-around rounded-full bg-black-800 transition duration-300 group-hover:bg-[#1DA1F2]">
                <FaTwitter
                  size={24}
                  className="text-white group-hover:text-white"
                />
              </div>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
