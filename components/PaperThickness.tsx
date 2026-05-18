"use client";

import Reveal from "./Reveal";
import { useState } from "react";

const weights = [
  {
    num: "01",
    gsm: "130gsm",
    label: "LIGHT",
    useCases: "Flyers - Inserts - Leaflets",
    pills: ["#00C2FF"]
  },
  {
    num: "02",
    gsm: "170gsm",
    label: "STANDARD",
    useCases: "Posters - Brochures",
    pills: ["#00C2FF", "#FF5FC7"]
  },
  {
    num: "03",
    gsm: "250gsm",
    label: "PREMIUM",
    useCases: "Postcards - Covers",
    pills: ["#00C2FF", "#FF5FC7", "#FFD02C"]
  },
  {
    num: "04",
    gsm: "350gsm",
    label: "HEAVY",
    useCases: "Business Cards - Hangtags",
    pills: ["#00C2FF", "#FF5FC7", "#FFD02C", "#00C2FF"]
  },
  {
    num: "05",
    gsm: "450gsm",
    label: "LUXURY",
    useCases: "Premium Cards - Invitations",
    pills: ["#00C2FF", "#FF5FC7", "#FFD02C", "#00C2FF", "#FF5FC7"]
  },
  {
    num: "06",
    gsm: "600gsm",
    label: "ULTRA PREMIUM",
    useCases: "Triplexed Cards - VIP",
    pills: ["#00C2FF", "#FF5FC7", "#FFD02C", "#00C2FF", "#FF5FC7", "#FFD02C"]
  }
];

export default function PaperThickness() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-10 mb-24 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              {/* Category tag */}
              <div className="flex items-center gap-2 mb-3">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-amber-400"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    transition: "color 0.3s ease"
                  }}
                >
                  / THICKNESS
                </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  color: "var(--text-primary)",
                  transition: "color 0.3s ease"
                }}
              >
                Featherweight to <br />
                <span
                  style={{
                    background: "linear-gradient(90deg, #00C2FF 0%, #FF5FC7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  triplexed luxury.
                </span>
              </h2>
            </div>
            <div className="md:max-w-md">
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "var(--text-muted)",
                  transition: "color 0.3s ease"
                }}
              >
                Six paper weights. Each tuned for a job. Hold it. You'll feel the difference.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Thickness Cards List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {weights.map((w, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <Reveal key={w.gsm} delayMs={idx * 40}>
                <div
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: isHovered ? "var(--thickness-bg-hover)" : "var(--thickness-bg)",
                    border: isHovered ? "1px solid var(--thickness-border-hover)" : "1px solid var(--thickness-border)",
                    borderRadius: "16px",
                    padding: "20px 28px",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: isHovered 
                      ? "0 12px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(var(--hover-bg-rgb), 0.05)" 
                      : "inset 0 1px 0 rgba(var(--hover-bg-rgb), 0.02)",
                  }}
                >
                  {/* Left Section: GSM info */}
                  <div style={{ display: "flex", alignItems: "center", gap: "28px", minWidth: "180px" }}>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#FF5FC7",
                        textShadow: "0 0 12px rgba(255, 95, 199, 0.35)",
                        letterSpacing: "-0.01em"
                      }}
                    >
                      {w.num}
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: 800,
                          color: "var(--text-primary)",
                          letterSpacing: "-0.01em",
                          transition: "color 0.3s ease"
                        }}
                      >
                        {w.gsm}
                      </span>
                      <span
                        style={{
                          fontSize: "9px",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          color: "var(--text-dim)",
                          marginTop: "3px",
                          transition: "color 0.3s ease"
                        }}
                      >
                        {w.label}
                      </span>
                    </div>
                  </div>

                  {/* Middle Section: Visual Layer Capsules & Connector Line */}
                  <div 
                    style={{ 
                      flex: 1, 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "24px",
                      paddingLeft: "32px",
                      paddingRight: "32px"
                    }}
                  >
                    {/* Glowing Vertical Pill Capsules */}
                    <div style={{ display: "flex", gap: "5px", alignItems: "center", position: "relative" }}>
                      {w.pills.map((color, pIdx) => (
                        <div
                          key={pIdx}
                          style={{
                            width: "10px",
                            height: isHovered ? "32px" : "26px",
                            borderRadius: "9999px",
                            background: `linear-gradient(180deg, ${color} 0%, ${color}d0 100%)`,
                            boxShadow: isHovered 
                              ? `0 0 14px ${color}bf, 0 1px 2px rgba(0,0,0,0.4)` 
                              : `0 0 6px ${color}50`,
                            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                            transform: isHovered ? "scaleY(1.08) scaleX(1.05)" : "scaleY(1) scaleX(1)",
                          }}
                        />
                      ))}
                    </div>

                    {/* Connector Line */}
                    <div 
                      style={{ 
                        flex: 1, 
                        height: "1px", 
                        background: isHovered ? "var(--thickness-line-hover)" : "var(--thickness-line)",
                        transition: "background 0.3s ease",
                        position: "relative"
                      }}
                    >
                      {/* Interactive glowing slider head on connector line */}
                      {isHovered && (
                        <div 
                          style={{
                            position: "absolute",
                            left: "0%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "3px",
                            height: "3px",
                            borderRadius: "50%",
                            background: "#00C2FF",
                            boxShadow: "0 0 8px #00C2FF, 0 0 15px #00C2FF",
                            animation: "moveLine 1.5s infinite linear"
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Right Section: Use Cases / Products */}
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: isHovered ? "var(--text-primary)" : "var(--text-muted)",
                      letterSpacing: "0.03em",
                      textAlign: "right",
                      transition: "color 0.3s ease",
                      minWidth: "200px"
                    }}
                  >
                    {w.useCases}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* CSS Animation for connector line */}
      <style jsx global>{`
        @keyframes moveLine {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
