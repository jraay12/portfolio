import React from "react";
import recent from "../assets/recent.jpg";
import { recentLearning } from "../utils/recentLearning";
import AOS from "aos";
import "aos/dist/aos.css";
const RecentLearning = () => {
   AOS.init({
      duration: 2000
    });
  return (
    <div className="flex-1 shadow-md border border-gray-300 max-h-110 rounded-md w-full p-10 overflow-y-auto" data-aos="zoom-in-left">
      <div className="inline-block -translate-y-4">
        <img src={recent} alt="Experience" className="h-6 w-6 inline-block" />
        <h4 className="md:text-lg font-bold inline-block ml-2 translate-y-1 ">
          Recently Learned
        </h4>
        <div className="flex flex-col justify-between">
          {recentLearning
            .slice()
            .reverse()
            .map((item, index) => (
              <>
                <h1 className="italic font-semibold mb-4 mt-4 ">
                  {item.month}
                </h1>
                {item.learned.map((learned, index) => (
                  <ul className="list-disc pl-5" key={index}>
                    <li className="text-sm">{learned}</li>
                  </ul>
                ))}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecentLearning;
