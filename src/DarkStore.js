import { atom } from "nanostores";

// Initialize the 'darkMode' store with a default value (e.g., false)
export const darkMode = atom(true);

// Function to toggle the current state of 'darkMode'
export function toggleDarkMode() {
  darkMode.set(!darkMode.get());
  console.log(dark.get())
}
