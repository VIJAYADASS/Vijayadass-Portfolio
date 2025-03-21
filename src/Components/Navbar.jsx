import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-2 w-full bg-gray-900 h-16 flex justify-between items-center px-8 z-50">
      {/* Logo */}
      <div className="text-4xl font-bold text-green-500">
        Port<span className="text-white">folio</span>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="space-y-1">
          <span className="block w-7 h-0.5 bg-white"></span>
          <span className="block w-7 h-0.5 bg-white"></span>
          <span className="block w-7 h-0.5 bg-white"></span>
        </div>
      </div>

      {/* Navigation Links */}
      <ul
        className={`md:flex gap-8 text-lg font-medium ${
          isOpen
            ? "block absolute top-16 left-0 w-full bg-gray-900 py-8 text-center"
            : "hidden md:flex"
        }`}
      >
        <li>
          <a
            href="#home"
            className="!text-white transition duration-300 hover:!text-green-500 hover:!underline "
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="!text-white transition duration-300 hover:!text-green-500 hover:!underline"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="!text-white transition duration-300 hover:!text-green-500 hover:!underline"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="!text-white transition duration-300 hover:!text-green-500 hover:!underline"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="!text-white transition duration-300 hover:!text-green-500 hover:!underline"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="!text-white transition duration-300 hover:!text-green-500 hover:!underline"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
