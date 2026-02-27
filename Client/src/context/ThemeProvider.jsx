import { useState, useEffect } from "react";
import { ThemeContext } from "./theme-context.js";

const themes = {
  yellow: "#facc15",
  green: "#22c55e",
  orange: "#f97316",
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("yellow");

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", themes[theme]);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
