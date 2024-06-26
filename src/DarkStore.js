import { atom } from "nanostores";

const STORAGE_KEY = "theme";

// Create an atom with a default value
export const darkMode = atom("light");

// Function to get the initial theme from localStorage or system preference
export const initializeTheme = () => {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme =
      storedTheme === "dark" || (!storedTheme && prefersDarkMode)
        ? "dark"
        : "light";
    darkMode.set(initialTheme);
  }
};

// Function to toggle the current state of 'darkMode'
export function toggleDarkMode() {
  const currentTheme = darkMode.get();
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  darkMode.set(newTheme);
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, newTheme);
  }
}
