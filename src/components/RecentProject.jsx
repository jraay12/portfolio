import React from "react";
import Project from "../assets/project.jpg";
import ProjectCard from "./ProjectCard";
import { recentProjects } from "../utils/projects";
import ViewProject from "./ViewProject";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const RecentProject = ({ openProject }) => {
  AOS.init({
    duration: 2000,
  });
  return (
    <div className="mt-10 border min-h-96 p-6 flex flex-col rounded-md shadow-md border-gray-300 ">
      <div className="inline-block -translate-y-4">
        <img src={Project} alt="Experience" className="h-5 w-5 inline-block" />
        <h4 className="md:text-lg font-bold inline-block ml-2 translate-y-1 ">
          Project
        </h4>
      </div>
      <div
        id="project"
        className="flex flex-col gap-10 sm:flex-row flex-wrap sm:justify-between md:justify-evenly mt-10"
       
      >
        {recentProjects.map((item, index) => (
          <ProjectCard
            description={item.Description}
            tech={item.techstack}
            project_name={item.project_name}
            image={item.image}
            openCard={() => openProject(item)}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
