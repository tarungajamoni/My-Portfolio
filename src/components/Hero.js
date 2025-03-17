import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        Hi, I'm <span className="text-blue-400">Tarun</span>
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400 mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}>
        Front-end Developer | GenAI & Full-Stack Enthusiast
      </motion.p>
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <motion.a
          href="#projects"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          View Projects
        </motion.a>

        <motion.a
          href="mailto:tarungajamoni@gmail.com"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-md transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          Hire Me
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
