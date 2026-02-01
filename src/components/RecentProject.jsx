import React from "react";
import Project from "../assets/project.jpg";
import ProjectCard from "./ProjectCard";
import { recentProjects } from "../utils/projects";
import ViewProject from "./ViewProject";
import { useState } from "react";
const RecentProject = () => {
  const [openModal, setOpenModal] = useState(false);
  const [projectData, setProjectData] = useState([]);

  const handleOpenModal = (item) => {
    setOpenModal(!openModal);
    setProjectData(item);
    console.log(openModal)
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setProjectData([]);
  };
  return (
    <div className="mt-10 border min-h-96 p-6 flex flex-col rounded-md shadow-md border-gray-300 ">
      <div className="inline-block -translate-y-4">
        <img src={Project} alt="Experience" className="h-5 w-5 inline-block" />
        <h4 className="md:text-lg font-bold inline-block ml-2 translate-y-1 ">
          Project
        </h4>
      </div>
      <div className="flex flex-col gap-10 sm:flex-row flex-wrap sm:justify-between md:justify-start mt-10">
        {recentProjects.map((item, index) => (
          <ProjectCard
            description={item.Description}
            tech={item.techstack}
            project_name={item.project_name}
            image={item.image}
            openCard={() => handleOpenModal(item)}
          />
        ))}
      </div>
      {openModal && (
        <ViewProject onClose={handleCloseModal} project={projectData} />
      )}
    </div>
  );
};

export default RecentProject;
