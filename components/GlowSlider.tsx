"use client";

import { useState, useEffect } from "react";

export default function GlowSlider() {
  const [opacity, setOpacity] = useState(0.85);

  useEffect(() => {
    // Dynamically set CSS custom property on the root HTML element
    document.documentElement.style.setProperty("--glow-opacity", opacity.toString());
  }, [opacity]);

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "14px",
        background: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "9999px",
        padding: "10px 24px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Sun/brightness icon */}
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "rgba(255, 255, 255, 0.75)" }}
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

      {/* Slider range input */}
      <input
        type="range"
        min="0.1"
        max="1.5"
        step="0.05"
        value={opacity}
        onChange={(e) => setOpacity(parseFloat(e.target.value))}
        aria-label="Ambient Glow Intensity"
        style={{
          width: "120px",
          height: "4px",
          borderRadius: "9999px",
          background: "rgba(255, 255, 255, 0.12)",
          outline: "none",
          appearance: "none",
          WebkitAppearance: "none",
          cursor: "pointer",
        }}
        className="glow-range-slider"
      />
    </div>
  );
}
