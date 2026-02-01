import React from "react";
import aboutImage from "../assets/about.png";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  AOS.init();

  return (
    <div
      className="flex-1 bg-white shadow-md border border-gray-300 lg:max-h-min rounded-md  p-4"
      data-aos="fade-right"
    >
      <div>
        <img src={aboutImage} alt="About" className="h-5 w-5 inline-block" />
        <h4 className="text-lg font-bold inline-block translate-y-1 ml-2">
          About
        </h4>
        <p className="mt-5 text-justify ">
          I am a graduate of the University of Science and Technology of
          Southern Philippines (USTP) with a Bachelor of Science in Information
          Technology. Throughout my academic journey, I developed a strong
          foundation in software development, database systems, and web
          technologies, which helped shape my interest in building efficient and
          reliable applications.
        </p>
        <p className="mt-5 text-justify">
          I am deeply passionate about my work and genuinely enjoy solving
          real-world problems through technology. I thrive on analyzing
          challenges, designing logical solutions, and continuously learning new
          tools and best practices to improve my skills. For me, development is
          not just about writing code, but about creating meaningful systems
          that make a positive impact.
        </p>

        <p className="mt-5 text-justify">
          Currently, I am actively seeking job opportunities as a{" "}
          <span className="font-bold">Backend Developer</span>, where I can
          contribute my technical skills, problem-solving abilities, and
          dedication to a professional team. I am eager to grow in a
          collaborative environment, take on new challenges, and help build
          scalable and secure backend systems.
        </p>
      </div>
    </div>
  );
};

export default About;
