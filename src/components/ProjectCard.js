import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.viewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group perspective w-full h-80 md:h-96 block">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 rounded-xl shadow-lg">
        <div className="absolute inset-0 flex flex-col justify-between bg-gray-900 rounded-xl shadow-lg backface-hidden overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover opacity-90"
          />

          <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-sm font-semibold px-3 py-1 rounded">
            {project.title}
          </div>
          <span className="flex items-center gap-2 absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            View Project
            <ArrowRightIcon className="w-5 h-5" />
          </span>
        </div>
        <div className="absolute inset-0 flex flex-col justify-between bg-gray-800 text-white p-6 rounded-xl shadow-lg rotate-y-180 backface-hidden">
          <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-sm font-semibold px-3 py-1 rounded">
            {project.title}
          </div>

          <p className="text-sm text-gray-300 text-justify mt-10 max-h-52 overflow-auto">
            {project.description}
          </p>
          <span className="flex items-center gap-2 absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            View Project
            <ArrowRightIcon className="w-5 h-5" />
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
