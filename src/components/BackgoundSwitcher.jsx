import { useEffect, useState } from "react";
import { StarBackground } from "./StarBackground";
import { CloudBackground } from "./CloudBackground";

export const BackgroundSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
  const updateTheme = () => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
  };

  updateTheme(); // for initial load
  window.addEventListener("themeChange", updateTheme);

  return () => window.removeEventListener("themeChange", updateTheme);
}, []);

  return isDarkMode ? <StarBackground /> : <CloudBackground />;
};