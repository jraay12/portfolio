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
          Technology. My primary focus is Software and Web Development, where I
          build scalable, efficient, and user-centered applications. Throughout
          my academic and project experience, I developed strong foundations in
          backend systems, frontend development, and database architecture.
        </p>

        <p className="mt-5 text-justify">
          I specialize in developing full-stack web applications—designing
          responsive interfaces, building secure APIs, and managing structured
          data. In addition to web platforms, I also develop mobile
          applications, allowing me to create seamless cross-platform solutions
          that extend from web to mobile environments. I enjoy transforming
          complex requirements into clean, maintainable, and high-performing
          systems.
        </p>

        <p className="mt-5 text-justify">
          I am passionate about continuous improvement and problem-solving. For
          me, software development is not just about writing code, but about
          engineering reliable systems that solve real-world problems. I am
          currently seeking opportunities where I can contribute as a Software
          or Web Developer, collaborate with a strong team, and continue growing
          while building impactful digital solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
