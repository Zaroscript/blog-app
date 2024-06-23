"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { CgClose } from "react-icons/cg";
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleNavState = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav className="container py-4 px-8 flex justify-between items-center border-b border-slate-900 dark:border-slate-200 max-sm:relative">
      <Link href="/">
        <h2 className="text-2xl font-bold">/Blog</h2>
      </Link>

      <div
        className={`max-sm:absolute max-sm:z-50  max-sm:top-full max-sm:right-4 max-sm:w-44 flex max-sm:flex-col gap-2 sm:gap-8 sm:animate-appear  ${
          !isOpen && "max-sm:hidden"
        }`}
      >
        <Link
          href="/"
          className="max-sm:bg-slate-200 max-sm:dark:bg-slate-900 max-sm:dark:hover:bg-slate-800 max-sm:w-full max-sm:p-4 max-sm:text-center max-sm:block shadow-md max-sm:hover:bg-slate-100 
            max-sm:rounded-sm text-lg sm:underline-effect sm:shadow-none sm:p-0 sm:ml-0 sm:opacity-100"
          onClick={handleNavState}
        >
          Home
        </Link>
        <Link
          href="/createPost"
          className="max-sm:bg-slate-200 max-sm:dark:bg-slate-900 max-sm:dark:hover:bg-slate-800 max-sm:w-full max-sm:p-4 max-sm:text-center max-sm:block shadow-md max-sm:hover:bg-slate-100
            max-sm:rounded-sm text-lg sm:underline-effect sm:shadow-none sm:p-0 sm:ml-0 sm:opacity-100"
          onClick={handleNavState}
        >
          CreatePost
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <div
          className="w-12 h-6 rounded-full bg-slate-900 dark:bg-white shadow-inner cursor-pointer flex items-center"
          onClick={toggleDarkMode}
        >
          <div
            className={`w-6 h-6 shadow-sm bg-white dark:bg-black rounded-full flex justify-center items-center transition duration-300 ${
              isDarkMode && "translate-x-full"
            }`}
          >
            {isDarkMode ? (
              <FaRegSun className="text-sm" />
            ) : (
              <FaMoon className="text-sm" />
            )}
          </div>
        </div>

        {isOpen ? (
          <CgClose
            className="text-3xl cursor-pointer hover:opacity-50 transition animate-appear sm:hidden"
            onClick={handleNavState}
          />
        ) : (
          <TiThMenuOutline
            className="text-3xl cursor-pointer hover:opacity-50 transition animate-appear sm:hidden"
            onClick={handleNavState}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
