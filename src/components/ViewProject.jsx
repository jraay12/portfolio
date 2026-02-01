import React from "react";

const ViewProject = ({ project, onClose }) => {
  
  return (
    <div 
      className="z-50 flex justify-center items-center fixed inset-0 bg-black/70 backdrop-blur-sm transition-all duration-300 ease-out"
      onClick={onClose}
    >
      <div 
        className="w-96 h-96 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 transition-all duration-300 ease-out hover:scale-105"
        
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors duration-200"
        >
          <svg 
            className="w-6 h-6 text-slate-600 dark:text-slate-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {project?.project_name || "Project Name"}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-4">
            {project?.Description || "Project description goes here..."}
          </p>
          {/* {project?.techstack && (
            <div className="flex flex-wrap gap-2 justify-center">
              {project.techstack.split(',').map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-lg"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ViewProject;