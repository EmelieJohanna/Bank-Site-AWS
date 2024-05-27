"use client";
import { useEffect } from "react";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import "./globals.css";

function MyApp({ children }) {
  const { state } = useTheme();

  useEffect(() => {
    console.log("Theme changed:", state.userPreferences.theme);
    // Implement dark theme if toggle changes to add
    document.documentElement.classList.toggle(
      "dark",
      state.userPreferences.theme === "dark"
    );
  }, [state.userPreferences.theme]);

  return (
    <div
      className={`flex flex-col min-h-screen bg-background text-text${
        state.userPreferences.theme === "dark" ? "dark" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default ({ children }) => (
  <ThemeProvider>
    <MyApp>{children}</MyApp>
  </ThemeProvider>
);
