import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ProjectCard = ({ project_name, description, tech, image, openCard, type }) => {
  AOS.init({
    duration: 2000,
  });
  return (
    <div
      className="group relative flex-1 min-h-96 max-w-full lg:max-w-[25%] overflow-hidden rounded-2xl bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-300/50 dark:hover:shadow-slate-900/50 hover:-translate-y-1"
      data-aos="flip-right"
    >
      <div className="relative h-48 overflow-hidden rounded-t-2xl bg-linear-to-br from-indigo-400 via-purple-400 to-pink-400">
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 group-hover:scale-110 transition-transform duration-500">
          <img src={image} alt="" className="h-full" />
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <button
            className="px-4 py-2 cursor-pointer bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-white dark:hover:bg-slate-700"
            onClick={openCard}
          >
            View Project
          </button>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
            {project_name}
          </h3>
          <h4 className="text-xs italic">{type}</h4>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-slate-200 dark:border-slate-700">
          {tech?.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-md border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute -top-8 -right-8 w-32 h-32 bg-linear-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
    </div>
  );
};

export default ProjectCard;
