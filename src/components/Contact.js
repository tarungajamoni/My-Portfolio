import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
      <div className="max-w-2xl mx-auto grid gap-6 sm:grid-cols-2">
        <a
          href="mailto:tarungajamoni@gmail.com"
          className="group flex items-center gap-4 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition">
          <FaEnvelope className="text-blue-400 text-2xl group-hover:scale-110 transition" />
          <span className="text-lg">tarungajamoni@gmail.com</span>
        </a>

        <a
          href="tel:+918686505849"
          className="group flex items-center gap-4 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition">
          <FaPhone className="text-green-400 text-2xl group-hover:scale-110 transition" />
          <span className="text-lg">+91 8686505849</span>
        </a>

        <a
          href="https://www.linkedin.com/in/sai-tarun-gajamoni-34b222146/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition">
          <FaLinkedin className="text-blue-600 text-2xl group-hover:scale-110 transition" />
          <span className="text-lg">LinkedIn Profile</span>
        </a>

        <a
          href="https://github.com/tarungajamoni"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition">
          <FaGithub className="text-gray-300 text-2xl group-hover:scale-110 transition" />
          <span className="text-lg">GitHub Profile</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
