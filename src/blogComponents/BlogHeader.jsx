import React, { useEffect, useState } from "react";
import SunIcon from "../../src/icons/SunIcon";
import MoonIcon from "../../src/icons/MoonIcon";

import { darkMode, toggleDarkMode } from "../DarkStore";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(darkMode.value);


  useEffect(() => {
    const htmlElement = document.documentElement;

    const updateTheme = (isDark) => {
      if (isDark) {
        htmlElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        htmlElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    };

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      const isDark = storedTheme === "dark";
      setIsDarkMode(isDark);
      updateTheme(isDark);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
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
    toggleDarkMode();
    setIsDarkMode(!isDarkMode);
  };



  return (
    <header
      id="header"
      className="fixed top-0 left-[5%] right-[5%] z-50 p-6 transition-transform duration-300 bg-purple-100 bg-opacity-10 backdrop-blur-lg backdrop-saturate-180 border border-white border-opacity-10 rounded-lg max-w-screen-xl mx-auto w-max"
    >
      <nav className="flex flex-row justify-between items-center gap-x-10 opacity-90 relative text-xs sm:text-lg">
        <div className="flex gap-x-4 sm:gap-x-6">
          <a
            href="/"
            className="hover:underline hover:text-purple-400 nav-link font-semibold"
          >
            Portfolio
          </a>
          
          
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
