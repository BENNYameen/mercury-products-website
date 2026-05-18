"use client";

import { useState, useEffect } from "react";

export default function GlowSlider() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.add("light-mode");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    const nextState = !isDarkMode;
    setIsDarkMode(nextState);
    if (nextState) {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div
      onClick={toggleTheme}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "16px",
        background: isDarkMode ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.04)",
        border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.08)",
        borderRadius: "9999px",
        padding: "8px 10px 8px 18px",
        boxShadow: isDarkMode 
          ? "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
          : "0 8px 32px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        userSelect: "none",
      }}
      className="theme-toggle-container hover:scale-[1.02] active:scale-[0.98]"
    >
      {/* Sun/brightness icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ 
          color: isDarkMode ? "rgba(255, 255, 255, 0.75)" : "rgba(0, 0, 0, 0.65)",
          transition: "color 0.3s ease"
        }}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M17.66 17.66l1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M6.34 17.66l-1.41 1.41" />
        <path d="M19.07 4.93l-1.41 1.41" />
      </svg>

      {/* Slide Switch Capsule matching user screenshot */}
      <div
        style={{
          width: "56px",
          height: "28px",
          borderRadius: "9999px",
          background: isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
          border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid rgba(0, 0, 0, 0.06)",
          padding: "3px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          transition: "background 0.3s ease"
        }}
      >
        {/* Sliding thumb */}
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: isDarkMode ? "#ffffff" : "#0a0a0c",
            boxShadow: isDarkMode ? "0 0 10px #ffffff" : "0 2px 6px rgba(0,0,0,0.15)",
            position: "absolute",
            left: isDarkMode ? "31px" : "3px",
            transition: "left 0.3s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease, box-shadow 0.3s ease"
          }}
        />
      </div>
    </div>
  );
}
