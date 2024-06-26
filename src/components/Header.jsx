import React, { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import SunIcon from "../../src/icons/SunIcon";
import MoonIcon from "../../src/icons/MoonIcon";
import Spain from "../flags-icons/Spain";
import Cat from "../flags-icons/Catalonia";
import Uk from "../flags-icons/Uk";
import France from "../flags-icons/France";
import { darkMode, toggleDarkMode, initializeTheme } from "../DarkStore";
import ArrowDown from "../icons/ArrowDown.jsx";

const Header = () => {
  const isDarkMode = useStore(darkMode);
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { name: "", component: Uk },
    { name: "es", component: Spain },
    { name: "ca", component: Cat },
    { name: "fr", component: France },
  ];

  useEffect(() => {
    // Initialize theme when the component is loaded on the client side
    initializeTheme();

    const htmlElement = document.documentElement;

    const updateTheme = (isDark) => {
      if (isDark === "dark") {
        htmlElement.classList.add("dark");
        htmlElement.classList.remove("light");
      } else {
        htmlElement.classList.remove("dark");
        htmlElement.classList.add("light");
      }
    };

    updateTheme(isDarkMode);

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > lastScrollY) {
        header?.classList.add("header-hidden");
      } else {
        header?.classList.remove("header-hidden");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDarkMode]);

  const handleToggle = () => {
    toggleDarkMode();
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      id="header"
      className="fixed top-0 sm:left-[5%] sm:right-[5%] z-50 p-6 transition-transform duration-300 bg-purple-100 bg-opacity-10 backdrop-blur-lg backdrop-saturate-180 border border-white border-opacity-10 sm:rounded-lg max-w-screen-xl mx-auto sm:w-max w-full"
    >
      <nav className="flex flex-row justify-between items-center gap-x-4 sm:gap-x-10 opacity-90 relative text-xs sm:text-lg">
        <div className="flex gap-x-2 sm:gap-x-6">
          <a
            href="#projects"
            className="hover:underline hover:text-purple-400 nav-link font-semibold"
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:underline hover:text-purple-400 nav-link font-semibold border-l-2 border-l-black dark:border-l-white pl-1 sm:border-none sm:pl-0"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:underline hover:text-purple-400 nav-link font-semibold border-l-2 pl-1 sm:border-none sm:pl-0 border-l-black dark:border-l-white "
          >
            Contact
          </a>
          <a
            href="/blog"
            className="hover:underline hover:text-purple-400 nav-link font-semibold border-l-2 pl-1 sm:border-none sm:pl-0 border-l-black dark:border-l-white "
          >
            Blog
          </a>
        </div>

        <div className="relative">
          <button
            onClick={handleDropdownToggle}
            className="flex items-center hover:text-purple-300 hover:underline group"
          >
            <p className="nav-link py-2 font-semibold">Language</p>
            <ArrowDown className="group-hover:animate-bounce" />
          </button>
          {isOpen && (
            <div className="absolute bg-transparent shadow-md dark:shadow-purple-200 rounded-md right-0">
              <ul className="flex gap-2 items-center rounded-xl py-4">
                {languages.map((language) => (
                  <li
                    key={language.name}
                    className="mx-4 my-1 font-semibold hover:scale-125 transition-transform duration-100 ease-in-out"
                  >
                    <a href={`/${language.name}`}>
                      <language.component height={20} width={20} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button
          id="theme-toggle"
          onClick={handleToggle}
          className="bg-transparent"
        >
          {isDarkMode === "dark" ? (
            <SunIcon height={24} width={24} />
          ) : (
            <MoonIcon height={24} width={24} />
          )}
        </button>
      </nav>
      <style jsx="true">{`
        .header-hidden {
          transform: translateY(-115%);
        }
      `}</style>
    </header>
  );
};

export default Header;
