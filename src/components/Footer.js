import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 text-center bg-gray-800">
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/tarungajamoni"
          target="_blank"
          className="text-gray-300 hover:text-white transition">
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/sai-tarun-gajamoni-34b222146/"
          target="_blank"
          className="text-gray-300 hover:text-white transition">
          <FaLinkedin size={28} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
