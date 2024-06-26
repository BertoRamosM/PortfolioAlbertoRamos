import React, { useEffect } from "react";
import { useStore } from "@nanostores/react";
import SunIcon from "../../src/icons/SunIcon";
import MoonIcon from "../../src/icons/MoonIcon";

import { darkMode, toggleDarkMode, initializeTheme } from "../DarkStore";

const Header = () => {
  const isDarkMode = useStore(darkMode);

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

    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > lastScrollY) {
        header?.classList.add("header-hidden");
      } else {
        header?.classList.remove("header-hidden");
      }
      lastScrollY = window.scrollY;
    };

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDarkMode]);

  const handleToggle = () => {
    toggleDarkMode();
  };

  return (
    <header
      id="header"
      className="fixed top-0 left-[5%] right-[5%] z-50 p-6 transition-transform duration-300 bg-purple-100 bg-opacity-10 backdrop-blur-lg backdrop-saturate-180 border border-white border-opacity-10 rounded-lg max-w-screen-xl mx-auto w-max "
    >
      <nav className="flex flex-row justify-between items-center gap-x-10 opacity-90 relative sm:text-lg">
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
