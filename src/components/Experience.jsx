import React from "react";
import experienceImage from "../assets/briefcase.png";
import { experience } from "../utils/experience";
import AOS from "aos";
import "aos/dist/aos.css";
const Experience = () => {
  AOS.init({
    duration: 2000
  });
  
  return (
    <div className="flex-1 shadow-md border border-gray-300 max-h-170 rounded-md min-w-[30%] p-10 overflow-y-auto"  data-aos="fade-left">
      <div className="inline-block -translate-y-4">
        <img
          src={experienceImage}
          alt="Experience"
          className="h-5 w-5 inline-block"
        />
        <h4 className="md:text-lg font-bold inline-block ml-2 translate-y-1 ">
          Professional Experience
        </h4>
      </div>
      <ol className="relative border-s border-default">
        {experience.map((item, index) => (
          <li className="mb-10 ms-4" key={index}>
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-buffer"></div>

            <h3 className="text-lg font-semibold text-heading">
              {item.company_name}
            </h3>
            <h4 className="font-extrabold text-sm italic">{item.role}</h4>
            <p className="mb-4 text-base font-normal text-body mt-4">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
