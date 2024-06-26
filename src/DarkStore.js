import { atom } from "nanostores";


export const darkMode = atom('dark');

// Function to toggle the current state of 'darkMode'
export function toggleDarkMode() {
  darkMode.set(!darkMode.get());
  
}
