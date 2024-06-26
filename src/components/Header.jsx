import React, { useEffect, useState } from "react";
import SunIcon from "../../src/icons/SunIcon";
import MoonIcon from "../../src/icons/MoonIcon";
import Spain from "../flags-icons/Spain";
import Cat from "../flags-icons/Catalonia";
import Uk from "../flags-icons/Uk";
import France from "../flags-icons/France";
import { darkMode, toggleDarkMode } from "../DarkStore";
import ArrowDown from "../icons/ArrowDown.jsx";

const STORAGE_KEY = "theme";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { name: "", component: Uk },
    { name: "es", component: Spain },
    { name: "ca", component: Cat },
    { name: "fr", component: France },
  ];

  useEffect(() => {
    const htmlElement = document.documentElement;

    const updateTheme = (isDark) => {
      if (isDark) {
        htmlElement.classList.add("dark");
        htmlElement.classList.remove("light");
        localStorage.setItem(STORAGE_KEY, "dark");
      } else {
        htmlElement.classList.remove("dark");
        htmlElement.classList.add("light");
        localStorage.setItem(STORAGE_KEY, "light");
      }
    };

    const storedTheme = localStorage.getItem(STORAGE_KEY);
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    if (storedTheme === "dark" || (!storedTheme && prefersDarkMode.matches)) {
      setIsDarkMode(true);
      updateTheme(true);
    } else {
      setIsDarkMode(false);
      updateTheme(false);
    }

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

    const unsubscribe = darkMode.subscribe((value) => {
      setIsDarkMode(value);
      updateTheme(value);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, []);

  const handleToggle = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    toggleDarkMode();
    localStorage.setItem(STORAGE_KEY, newTheme);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    document.documentElement.classList.toggle("light", isDarkMode);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      id="header"
      className="fixed top-0 sm:left-[5%] sm:right-[5%] z-50 p-6 transition-transform duration-300 bg-purple-100 bg-opacity-10 backdrop-blur-lg backdrop-saturate-180 border border-white border-opacity-10 rounded-lg max-w-screen-xl mx-auto sm:w-max w-full"
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
            className="hover:underline hover:text-purple-400 nav-link font-semibold"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:underline hover:text-purple-400 nav-link font-semibold"
          >
            Contact
          </a>
          <a
            href="/blog"
            className="hover:underline hover:text-purple-400 nav-link font-semibold"
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
                      <language.component className="w-8 h-8 " />
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
          {isDarkMode ? (
            <SunIcon className="w-4 h-4" />
          ) : (
            <MoonIcon className="w-4 h-4" />
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
