import React from "react";
import teachStackImage from "../assets/tech.png";
import { techStack } from "../utils/techStack";
import AOS from "aos";
import "aos/dist/aos.css";
const TechStack = () => {
   AOS.init({
      duration: 2000
    });
  return (
    <div className="flex-1 bg-white shadow-md border border-gray-300 rounded-md p-4" data-aos="fade-up-right">
      <div>
        <img
          src={teachStackImage}
          alt="Tech Stack"
          className="h-5 w-5 inline-block"
        />
        <h4 className="text-lg font-bold inline-block translate-y-1 ml-2">
          Tech Stack
        </h4>
        <h1 className="mt-10 font-bold">Language & Framework</h1>
        <div className="flex flex-wrap gap-5 md:gap-10">
          {techStack?.map((item) =>
            item.framework?.map((frontend, index) => (
              <div
                className="flex flex-col justify-between items-center gap-2 mt-4"
                key={index}
              >
                <img src={frontend.image} alt="" className="w-10" />
                <h1 className="text-xs font-semibold">{frontend.techname} </h1>
              </div>
            )),
          )}
        </div>
        <h1 className="mt-10 font-bold">DATABASE & API</h1>
        <div className="flex flex-wrap gap-5 md:gap-10">
          {techStack?.map((item) =>
            item.database?.map((frontend, index) => (
              <div
                className="flex flex-col justify-between items-center gap-2 mt-4"
                key={index}
              >
                <img src={frontend.image} alt="" className="w-10" />
                <h1 className="text-xs font-semibold">{frontend.techname} </h1>
              </div>
            )),
          )}
        </div>
        <h1 className="mt-10 font-bold">DevOps & Tools</h1>
        <div className="flex flex-wrap gap-4 md:gap-10">
          {techStack?.map((item) =>
            item.devops?.map((frontend, index) => (
              <div
                className="flex flex-col justify-between items-center gap-2 mt-4"
                key={index}
              >
                <img src={frontend.image} alt="" className="w-10" />
                <h1 className="text-xs font-semibold">{frontend.techname} </h1>
              </div>
            )),
          )}
        </div>
        <h1 className="mt-10 font-bold">Styling</h1>
        <div className="flex flex-wrap gap-4 md:gap-10">
          {techStack?.map((item) =>
            item.frontend?.map((frontend, index) => (
              <div
                className="flex flex-col justify-between items-center gap-2 mt-4"
                key={index}
              >
                <img src={frontend.image} alt="" className="w-10" />
                <h1 className="text-xs font-semibold">{frontend.techname} </h1>
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
