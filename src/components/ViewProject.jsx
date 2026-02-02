import React from "react";
import backIcon from "../assets/back.png";

const ViewProject = ({ back, selectedProject }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => {
              back();
              setTimeout(() => {
                const projectSection = document.getElementById("project");
                if (projectSection) {
                  projectSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }, 100);
            }}
            className="group flex items-center gap-3 transition-all duration-300 hover:gap-4 cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-400 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src={backIcon}
                alt="Back"
                className="h-8 w-8 relative z-10 transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors duration-300">
              Back to Projects
            </span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="mb-12 animate-fadeIn">
          <h1 className="text-md md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-4 leading-tight">
            {selectedProject.project_name || "Project Details"}
          </h1>
          {selectedProject.category && (
            <div className="flex items-center gap-2">
              <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                {selectedProject.category}
              </span>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 group">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl shadow-indigo-200/50 border border-slate-200/60">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 blur-3xl"></div>

              <div className="relative p-8">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-50">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title || "Project"}
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200/60 hover:shadow-xl hover:shadow-indigo-200/30 transition-all duration-300">
              <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-3">
                Description
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {selectedProject.Description}
              </p>
            </div>

            {selectedProject.techstack && (
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-lg shadow-indigo-200/30 border border-indigo-200/60">
                <h3 className="text-sm font-bold text-indigo-700 uppercase tracking-wider mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techstack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-white text-indigo-600 rounded-lg text-sm font-medium shadow-sm border border-indigo-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="flex flex-col gap-3 pt-4">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg shadow-indigo-300/50 hover:shadow-xl hover:shadow-indigo-400/50 hover:scale-105 transition-all duration-300 text-center"
                >
                  View Live Demo
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-800 text-white py-3 px-6 rounded-xl font-semibold shadow-lg shadow-slate-300/50 hover:shadow-xl hover:bg-slate-900 hover:scale-105 transition-all duration-300 text-center"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ViewProject;
