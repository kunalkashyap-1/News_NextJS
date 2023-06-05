"use client";
import React, { useState } from "react";
import Link from "next/link";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const categoryArr = [
    "top_stories",
    "entertainment",
    "tech",
    "education",
    "cricket",
    "india",
    "mumbai",
    "delhi",
  ];

  return (
    <div className="relative">
      <button
        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-medium"
        onClick={toggleDropdown}
      >
        <span className="mr-1">Categories</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
          <ul>
            {categoryArr &&
              categoryArr.map((el: string) => {
                return (
                  <li
                    key={el}
                    className="py-2 px-4 hover:bg-gray-100 hover:rounded-md"
                  >
                    <Link href={el} onClick={toggleDropdown}>
                      <p className="w-full" >{el.charAt(0).toUpperCase() + el.slice(1)}</p>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
