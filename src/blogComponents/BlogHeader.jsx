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

  return (
    <header
      id="header"
      className="flex justify-center mx-auto w-max bg-purple-900/20"
    >
      <nav className="flex flex-row justify-center items-center gap-x-10 opacity-90 relative">
        <a
          href="/"
          className="hover:underline hover:text-purple-400 nav-link font-semibold flex items-center justify-center gap-2"
        >
          <span className="mt-2 font-bold">Portfolio</span>
        </a>
        <button
          id="theme-toggle"
          className="bg-transparent"
          onClick={handleToggle}
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
