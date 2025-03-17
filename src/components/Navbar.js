import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-800 shadow-lg z-50">
      <div className="max-w-8xl mx-16 px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Sai Tarun Gajamoni</h1>
        <div className="hidden md:flex space-x-6">
          {["home", "about", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={1000}
              offset={-50}
              className="hover:text-blue-400 cursor-pointer">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
        <div className="md:hidden" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      {nav && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-4">
          {["home", "about", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={1000}
              onClick={() => setNav(false)}
              className="text-white cursor-pointer">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
