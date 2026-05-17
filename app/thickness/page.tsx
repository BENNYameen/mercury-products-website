"use client";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const THICKNESS_GRADIENT = "linear-gradient(90deg, #25D8FF 0%, #6B6CFF 35%, #D84BFF 70%, #FF9A2A 100%)";

const stocks = [
  {
    gsm: "170gsm",
    label: "LIGHT",
    use: "Brochures, flyers",
    mm: "0.20 mm",
    barWidth: "20%",
    accent: "#25D8FF",
    rgb: "37,216,255",
    desc: "Our lightest option — clean, crisp, and economical. Perfect for high-volume brochures, flyers, and inserts.",
    finishes: ["Matte", "Gloss"],
  },
  {
    gsm: "300gsm",
    label: "STANDARD",
    use: "Postcards, menus",
    mm: "0.38 mm",
    barWidth: "35%",
    accent: "#818cf8",
    rgb: "129,140,248",
    desc: "The industry standard for quality postcards, menus, and lightweight cards. Holds color beautifully.",
    finishes: ["Matte", "Gloss", "Soft-touch"],
  },
  {
    gsm: "400gsm",
    label: "HEAVY",
    use: "Premium cards",
    mm: "0.51 mm",
    barWidth: "45%",
    accent: "#D84BFF",
    rgb: "216,75,255",
    desc: "Noticeably substantial in hand. Ideal for premium business cards and high-touch brand materials.",
    finishes: ["Matte", "Gloss", "Soft-touch", "Foil"],
  },
  {
    gsm: "600gsm",
    label: "ULTRA",
    use: "Luxury cards",
    mm: "0.78 mm",
    barWidth: "60%",
    accent: "#f472b6",
    rgb: "244,114,182",
    desc: "Our most popular premium stock. Thick, rigid, and unmistakable. The card that says 'we mean it'.",
    finishes: ["Soft-touch", "Foil", "Spot UV", "Emboss"],
  },
  {
    gsm: "Triplex 900gsm",
    label: "TRIPLEX",
    use: "Edge-painted statement",
    mm: "1.20 mm",
    barWidth: "75%",
    accent: "#FF9A2A",
    rgb: "255,154,42",
    desc: "Three layers laminated together — edge-paint it, duplex it, go wild. Maximum tactile impact.",
    finishes: ["Edge Paint", "Soft-touch", "Foil", "Duplex"],
  },
  {
    gsm: "Rigid 2mm",
    label: "RIGID",
    use: "Luxury packaging",
    mm: "2.00 mm",
    barWidth: "100%",
    accent: "#4ade80",
    rgb: "74,222,128",
    desc: "Board-level rigidity for luxury packaging, booklets, and premium boxes. Wrap it in anything you like.",
    finishes: ["Foil", "Soft-touch", "Gloss", "Emboss"],
  },
];

function TagIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" style={{ display: "block", flexShrink: 0 }}>
      <path
        d="M2 2h7.172a2 2 0 011.414.586l7 7a2 2 0 010 2.828l-5.172 5.172a2 2 0 01-2.828 0l-7-7A2 2 0 012 9.172V2z"
        stroke="#FFC93A" strokeWidth="1.6" strokeLinejoin="round"
      />
      <circle cx="6" cy="6" r="1.4" fill="#FFC93A" />
    </svg>
  );
}

export default function ThicknessPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Reveal>
    <div
      style={{
        maxWidth: "1320px",
        margin: "0 auto",
        paddingTop: "90px",
        paddingBottom: "120px",
        paddingLeft: "clamp(24px, 4vw, 48px)",
        paddingRight: "clamp(24px, 4vw, 48px)",
      }}
    >
      {/* ── Section label ── */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: "9px", marginBottom: "28px" }}>
        <TagIcon />
        <span
          style={{
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#FFC93A",
            lineHeight: 1,
          }}
        >
          WEIGHT MATTERS
        </span>
      </div>

      {/* ── Headline ── */}
      <h1
        style={{
          fontSize: "clamp(48px, 7vw, 78px)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: 1.0,
          color: "#ffffff",
          margin: "0 0 20px 0",
        }}
      >
        From{" "}
        <span
          style={{
            background: THICKNESS_GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          whisper-thin
        </span>
        {" "}to bank-vault.
      </h1>

      {/* ── Supporting copy ── */}
      <p
        style={{
          fontSize: "20px",
          color: "rgba(255,255,255,0.68)",
          maxWidth: "520px",
          lineHeight: 1.65,
          margin: "0 0 72px 0",
        }}
      >
        170gsm flyers to 2mm rigid board. Hover any card to see how thick it really feels.
      </p>

      {/* ── Cards grid ── */}
      <div
        className="thick-grid"
        style={{ marginBottom: "80px" }}
      >
        {stocks.map((s) => {
          const isHov = hovered === s.gsm;
          return (
            <div
              key={s.gsm}
              onMouseEnter={() => setHovered(s.gsm)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "28px",
                border: `1px solid ${isHov ? `rgba(${s.rgb},0.28)` : "rgba(255,255,255,0.06)"}`,
                background: "rgba(255,255,255,0.04)",
                padding: "28px",
                overflow: "hidden",
                cursor: "default",
                transition:
                  "transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease",
                transform: isHov ? "translateY(-8px) scale(1.015)" : "translateY(0) scale(1)",
                boxShadow: isHov
                  ? `0 24px 60px rgba(0,0,0,0.5), 0 0 48px rgba(${s.rgb},0.14)`
                  : "0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              {/* Per-card ambient glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "200px",
                  height: "200px",
                  background: `radial-gradient(circle at top right, rgba(${s.rgb},${isHov ? 0.24 : 0.13}), transparent 65%)`,
                  pointerEvents: "none",
                  transition: "background 0.4s ease",
                }}
              />

              {/* Top block: title + badge + subtitle */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "12px",
                    marginBottom: "6px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "clamp(28px, 3.5vw, 48px)",
                      fontWeight: 800,
                      color: "#ffffff",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    {s.gsm}
                  </h3>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "6px 14px",
                      borderRadius: "9999px",
                      color: s.accent,
                      background: `rgba(${s.rgb},0.15)`,
                      border: `1px solid rgba(${s.rgb},0.32)`,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    {s.label}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "18px",
                    color: "rgba(255,255,255,0.65)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {s.use}
                </p>
              </div>

              {/* Bottom block: progress bar + measurement */}
              <div>
                <div
                  style={{
                    height: "6px",
                    width: "100%",
                    borderRadius: "9999px",
                    background: "rgba(255,255,255,0.08)",
                    overflow: "hidden",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      borderRadius: "9999px",
                      width: s.barWidth,
                      background: `linear-gradient(90deg, rgba(${s.rgb},0.65), ${s.accent})`,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.45)",
                    margin: 0,
                  }}
                >
                  {s.mm}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── CTA banner ── */}
      <div
        style={{
          borderRadius: "28px",
          padding: "clamp(40px, 5vw, 60px)",
          background: "linear-gradient(135deg, #0e0e1c 0%, #111128 50%, #0e0e1c 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "32px",
          flexWrap: "wrap",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(117,103,255,0.06), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 34px)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              margin: "0 0 12px 0",
            }}
          >
            Not sure which weight fits?
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "400px",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Order a free paper sample pack — six stocks, all finishes, shipped to your door in 3 days.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexShrink: 0,
            position: "relative",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/quote"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #ec4899, #f97316)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "14px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              letterSpacing: "0.01em",
            }}
          >
            Get a Sample Pack →
          </Link>
          <Link
            href="/catalog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
    </Reveal>
  );
}
