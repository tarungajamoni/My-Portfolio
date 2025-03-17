import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import resume from "../assets/SaiTarun.pdf";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          About Me
        </h2>

        <h3 className="text-2xl font-semibold text-blue-400 mb-6 border-l-4 border-blue-500 pl-4">
          AI-Powered Web Developer 🚀
        </h3>

        <div className="text-lg leading-relaxed text-gray-300 space-y-4">
          <p>
            Hey there! I'm a{" "}
            <span className="font-semibold text-white">web developer</span>{" "}
            passionate about building{" "}
            <span className="font-semibold text-white">
              scalable applications
            </span>{" "}
            and exploring the intersection of{" "}
            <span className="font-semibold text-white">
              AI and full-stack development
            </span>
            .
          </p>

          <p>
            With expertise in{" "}
            <span className="text-blue-300 font-medium">
              React, Next.js, and TypeScript
            </span>
            , I craft seamless and user-friendly web experiences.
          </p>

          <p>
            My curiosity extends beyond front-end development—I’m diving into
            <span className="text-purple-300 font-medium">
              {" "}
              GenAI and full-stack engineering
            </span>
            , leveraging AI-driven solutions to enhance user interactions and
            automation.
          </p>

          <p>
            Currently, I'm developing{" "}
            <span className="text-orange-300 font-medium">SkillForge</span>, an
            <span className="text-orange-300 font-medium">
              {" "}
              AI-powered learning platform
            </span>{" "}
            that combines personalized education with AI-assisted development
            tools.
          </p>

          <p>
            Let’s connect and build the future of{" "}
            <span className="text-red-300 font-medium">
              AI-driven web applications
            </span>{" "}
            together!
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition">
            Download Resume
            <ArrowDownTrayIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
