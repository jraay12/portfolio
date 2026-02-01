import React from "react";
import { useState } from "react";
const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  };
  return (
    <div className="flex items-center justify-end px-4 bg-[#F5F5F0] h-16 ">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={() => toggleDarkMode()}
        />
        <div className="relative w-9 h-5 bg-black peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
        <span className="select-none ms-3 text-sm font-medium text-heading">
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </span>
      </label>
    </div>
  );
};

export default Header;
