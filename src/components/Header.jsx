import React, { useEffect, useState } from "react";

import SunIcon from "../../src/icons/SunIcon";
import MoonIcon from "../../src/icons/MoonIcon";

import Spain from "../flags-icons/Spain";
import Cat from "../flags-icons/Catalonia";
import Uk from "../flags-icons/Uk";
import France from "../flags-icons/France";

import { darkMode, toggleDarkMode } from "../DarkStore";

import ArrowDown from "../icons/ArrowDown.jsx";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(darkMode.value);
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

    const handleScroll = () => {
      const header = document.getElementById("header");
      let lastScrollY = window.scrollY;

      window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
          header?.classList.add("header-hidden");
        } else {
          header?.classList.remove("header-hidden");
        }
        lastScrollY = window.scrollY;
      });
    };

    handleScroll();

    const unsubscribe = darkMode.subscribe((value) => {
      setIsDarkMode(value);
      updateTheme(value);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleToggle = () => {
    toggleDarkMode();
    setIsDarkMode(!isDarkMode);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const [openNavbar, setOpenNavbar] = useState(false)
  const handleNavbar = () => {
    setOpenNavbar(!openNavbar)
  }

  return (
    <header id="header" className="flex justify-center mx-auto w-max">
      <nav className="flex flex-row justify-between items-center sm:gap-x-10 opacity-90 relative text-xs sm:text-lg">
        <div className="flex gap-4 sm:gap-6 ">
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
            <div className="absolute bg-white shadow-md rounded-md mt-2 right-0">
              <ul className="flex flex-col items-center">
                {languages.map((language) => (
                  <li key={language.name} className="mx-4 my-1 font-semibold">
                    <a href={`/${language.name}`}>
                      <language.component className="size-8" />
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
            <SunIcon className="theme-icon" />
          ) : (
            <MoonIcon className="theme-icon" />
          )}
        </button>
      </nav>
      <style jsx>{`
        @media screen and (max-width: 560px) {
          .nav-link {
            font-size: 0.7rem;
          }
          header > * {
            gap: 1rem;
          }
          @media screen and (max-width: 335px) {
            .nav-link {
              font-size: 0.6rem;
            }
          }
        }
        @media screen and (max-width: 450px) {
          header > * {
            gap: 0.7rem;
          }
        }

        header {
          position: fixed;
          top: 0;
          left: 5%;
          right: 5%;
          z-index: 50;
          padding: 1.5rem;
          transition: transform 0.3s ease;
          background-color: rgba(169, 85, 247, 0.082);
          backdrop-filter: blur(19px) saturate(180%);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.125);
        }

        .header-hidden {
          transform: translateY(-115%);
        }

        .theme-icon {
          width: 18px;
          height: 18px;
        }

        .hidden {
          display: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
