"use client";

import { useState } from "react";
import Link from "next/link";

const Resources = ({ sections, title, subtitle, link = "#", isActive = false }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <li
      className="relative text-center group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={link}
        className={`text-sm lg:text-base font-semibold text-[#0c2e60] flex items-center relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:h-[3px] after:bg-[#d2292b] after:transition-all after:duration-300 ${
          isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
        }`}
      >
        {title}
      </Link>

      {/* Dropdown Menu */}
      <ul
        className={`absolute flex top-full left-1/2 -translate-x-[40%] w-[750px] max-w-[95vw] bg-[#0c2e60] z-[250] p-4 rounded-md shadow-lg transform transition-all duration-300 ease-in-out ${
          isDropdownVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="list"
      >
        {/* Left Section */}
        <li className="w-[35%] text-center p-6" role="listitem">
          <Link
            href={link}
            className="text-2xl font-bold mb-4 text-white hover:underline block"
          >
            {title}
          </Link>
          <p className="text-sm mb-8 text-justify text-gray-200 leading-relaxed">{subtitle}</p>
        </li>

        {/* Right Section */}
        <li className="w-[65%] p-6 bg-white text-black grid grid-cols-2 gap-6 rounded-md" role="listitem">
          {sections?.map((section, index) => (
            <div key={index} className="text-left">
              {section.title && <h3 className="text-lg font-bold text-[#0c2e60] mb-3 whitespace-nowrap">{section.title}</h3>}
              <ul className="list-none">
                {section.items?.map((item, idx) => (
                  <li key={idx} className="mb-2" role="listitem">
                    <Link
                      href={item.link}
                      className="text-sm font-semibold text-[#1267b1] hover:text-[#0c2e60] transition-colors duration-200 hover:underline whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </li>
      </ul>
    </li>
  );
};

export default Resources;
