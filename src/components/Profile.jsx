import React, { useState } from "react";
import locationImage from "../assets/location.png";
import resumeImage from "../assets/resume.png";
import emailImage from "../assets/email.png";
import profileImage from "../assets/profile.jpeg";
import Pdf from "../assets/resume.pdf";
import PdfViewer from "./PdfViewer";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={`flex flex-col p-4 gap-4 ${isModalOpen ? 'blur-sm' : ''}`}>
        <div className="w-full flex items-center pl-4 gap-8 ">
          <div className="w-40 h-40 bg-white ">
            <img src={profileImage} alt="" />
          </div>
          <div className="flex flex-col h-40 gap-2">
            <h1 className="text-black text-2xl font-bold">John Ray Canete</h1>
            <div className="flex">
              <img src={locationImage} alt="Location" className="w-4 h-4" />
              <p className="text-xs ">12-28 St. Nazareth CDO, Philippines</p>
            </div>
            <p className="text-md font-semibold"> Full Stack Developer</p>
          </div>
        </div>
        <div className="md:absolute flex gap-5 md:translate-y-28 md:translate-x-52 md:w-96">
          <button 
            className="bg-white flex-1 text-black p-2 rounded-md text-xs font-semibold px-1 cursor-pointer border-2 border-black hover:bg-black hover:text-white transition duration-300" 
            onClick={openModal}
          >
            <img
              src={resumeImage}
              alt="resume"
              className="w-5 h-5 inline-block hover:invert"
            />
            <p className="inline-block ml-1 mt-1">View Resume</p>
          </button>
          {/* <button className="bg-white flex-1 text-black p-2 rounded-md text-xs font-semibold px-6 cursor-pointer border-2 border-black hover:bg-black hover:text-white transition duration-300">
            <img src={emailImage} alt="resume" className="w-5 h-5 inline-block" />
            <p className="inline-block ml-1 mt-1">Send Email</p>
          </button> */}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <PdfViewer fileUrl={Pdf} onClose={closeModal} />}
    </>
  );
};

export default Profile;