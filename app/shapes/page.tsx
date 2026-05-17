"use client";
import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const SHAPE_GRADIENT = "linear-gradient(90deg, #2EDBFF 0%, #7567FF 38%, #E458FF 68%, #FF962A 100%)";

const shapes = [
  {
    name: "Rectangle",
    desc: "The classic format. Works for everything from business cards to premium invitations and hang tags.",
    finishes: ["Matte", "Gloss", "Foil Stamp", "Soft-touch", "Spot UV"],
    popular: false,
    svg: (id: string) => (
      <rect x="8" y="28" width="84" height="44" rx="0"
        fill="none" stroke={`url(#${id})`} strokeWidth="2.5" strokeLinejoin="round" />
    ),
  },
  {
    name: "Square",
    desc: "Perfect symmetry. Ideal for stickers, coasters, luxury gift cards, and bold brand moments.",
    finishes: ["Matte", "Gloss", "Die-Cut", "Foil", "Emboss"],
    popular: false,
    svg: (id: string) => (
      <rect x="14" y="14" width="72" height="72" rx="0"
        fill="none" stroke={`url(#${id})`} strokeWidth="2.5" strokeLinejoin="round" />
    ),
  },
  {
    name: "Rounded",
    desc: "Soft corners, elevated feel. Our most popular card shape — chosen by 60% of premium brand clients.",
    finishes: ["Soft-touch", "Foil Stamp", "Spot UV", "Matte", "Emboss"],
    popular: true,
    svg: (id: string) => (
      <rect x="8" y="24" width="84" height="52" rx="14"
        fill="none" stroke={`url(#${id})`} strokeWidth="2.5" />
    ),
  },
  {
    name: "Circle",
    desc: "Perfect roundness. Eye-catching stickers, wax seals, and high-end hang tags that stop the scroll.",
    finishes: ["Gloss", "Matte", "Holographic", "Foil", "Die-Cut"],
    popular: false,
    svg: (id: string) => (
      <circle cx="50" cy="50" r="37"
        fill="none" stroke={`url(#${id})`} strokeWidth="2.5" />
    ),
  },
  {
    name: "Oval",
    desc: "Elegant and organic. Perfectly suits wine labels, soap packaging, cosmetic inserts, and spirit brands.",
    finishes: ["Matte", "Gloss", "Foil", "Emboss", "Soft-touch"],
    popular: false,
    svg: (id: string) => (
      <ellipse cx="50" cy="50" rx="41" ry="25"
        fill="none" stroke={`url(#${id})`} strokeWidth="2.5" />
    ),
  },
  {
    name: "Die-Cut",
    desc: "Any shape you imagine. Our laser and rotary cutters work at hair-line precision on the heaviest stocks.",
    finishes: ["Any finish", "Edge Paint", "Foil", "Spot UV", "Soft-touch"],
    popular: false,
    svg: (id: string) => (
      <polygon
        points="50,12 59,37 86,38 65,55 72,81 50,66 28,81 35,55 14,38 41,37"
        fill="none" stroke={`url(#${id})`} strokeWidth="2.5" strokeLinejoin="round"
      />
    ),
  },
  {
    name: "Custom",
    desc: "Got a dieline? Upload it. We'll verify tolerances, confirm bleed margins, and send a cut proof in 24hrs.",
    finishes: ["Any finish", "Any stock", "Edge Paint", "Foil", "Emboss"],
    popular: false,
    svg: (id: string) => (
      <ellipse cx="50" cy="50" rx="41" ry="26"
        fill="none" stroke={`url(#${id})`} strokeWidth="2" strokeDasharray="6 4" />
    ),
  },
];

// SVG gradient definition factory
function ShapeGradDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#2EDBFF" />
        <stop offset="38%"  stopColor="#7567FF" />
        <stop offset="68%"  stopColor="#E458FF" />
        <stop offset="100%" stopColor="#FF962A" />
      </linearGradient>
    </defs>
  );
}

// Precision layers icon for the section label
function LayersIcon() {
  return (
    <svg width="16" height="14" viewBox="0 0 22 18" fill="none" style={{ display: "block", flexShrink: 0 }}>
      <polygon points="11,1 21,6.5 11,12 1,6.5"
        stroke="#00D9FF" strokeWidth="1.6" strokeLinejoin="round" />
      <polyline points="1,11 11,16.5 21,11"
        stroke="#00D9FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

export default function ShapesPage() {
  const [selected, setSelected] = useState("Rounded");
  const active = shapes.find((s) => s.name === selected)!;

  return (
    <Reveal>
    <div
      style={{
        maxWidth: "1320px",
        margin: "0 auto",
        paddingTop: "72px",
        paddingBottom: "100px",
        paddingLeft: "clamp(24px, 4vw, 48px)",
        paddingRight: "clamp(24px, 4vw, 48px)",
      }}
    >
      {/* ── Section label ── */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "9px",
          marginBottom: "28px",
        }}
      >
        <LayersIcon />
        <span
          style={{
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#00D9FF",
            lineHeight: 1,
          }}
        >
          CUT TO FEEL
        </span>
      </div>

      {/* ── Header row ── */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "32px",
          marginBottom: "60px",
          flexWrap: "wrap",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(44px, 7vw, 80px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            color: "#ffffff",
            margin: 0,
          }}
        >
          Every{" "}
          <span
            style={{
              background: SHAPE_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            shape
          </span>
          , on cue.
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "340px",
            lineHeight: 1.65,
            margin: 0,
            flexShrink: 0,
          }}
        >
          Standard or custom die — our laser and rotary cutters handle
          hair-line precision on the heaviest stocks.
        </p>
      </div>

      {/* ── Shape selector row ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "12px",
          marginBottom: "40px",
        }}
        className="shape-grid"
      >
        {shapes.map((s) => {
          const isSelected = s.name === selected;
          const gradId = `sg-${s.name.replace(/\s/g, "")}`;
          return (
            <button
              key={s.name}
              onClick={() => setSelected(s.name)}
              className={`shape-card${isSelected ? " shape-selected" : ""}`}
              aria-pressed={isSelected}
            >
              {/* Popular badge */}
              {s.popular && (
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    fontSize: "8px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#f9a8d4",
                    background: "rgba(236,72,153,0.18)",
                    border: "1px solid rgba(236,72,153,0.35)",
                    padding: "2px 6px",
                    borderRadius: "9999px",
                  }}
                >
                  Popular
                </span>
              )}

              {/* Shape SVG */}
              <svg
                viewBox="0 0 100 100"
                style={{ width: "clamp(44px, 6vw, 68px)", height: "clamp(44px, 6vw, 68px)", overflow: "visible" }}
              >
                <ShapeGradDefs id={gradId} />
                {s.svg(gradId)}
              </svg>

              {/* Label */}
              <span className="shape-label">{s.name}</span>
            </button>
          );
        })}
      </div>

      {/* ── Selected shape detail panel ── */}
      <div
        style={{
          borderRadius: "24px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "clamp(24px, 3vw, 40px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "32px",
          flexWrap: "wrap",
          marginBottom: "64px",
          transition: "background 0.3s ease",
        }}
      >
        {/* Left — shape preview + info */}
        <div style={{ display: "flex", alignItems: "center", gap: "28px", flex: "1", minWidth: "260px" }}>
          <div
            style={{
              width: "84px",
              height: "84px",
              borderRadius: "16px",
              background: "rgba(46,219,255,0.05)",
              border: "1px solid rgba(46,219,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 100 100" width="52" height="52">
              <ShapeGradDefs id="sg-detail" />
              {active.svg("sg-detail")}
            </svg>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                {active.name}
              </h3>
              {active.popular && (
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#f9a8d4",
                    background: "rgba(236,72,153,0.18)",
                    border: "1px solid rgba(236,72,153,0.3)",
                    padding: "3px 8px",
                    borderRadius: "9999px",
                  }}
                >
                  Most Popular
                </span>
              )}
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0, maxWidth: "420px" }}>
              {active.desc}
            </p>
          </div>
        </div>

        {/* Right — finishes + CTA */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px", flexShrink: 0 }}>
          <div>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "9px" }}>
              AVAILABLE FINISHES
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {active.finishes.map((f) => (
                <span
                  key={f}
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    color: "rgba(255,255,255,0.65)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
          <Link
            href="/quote"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #ec4899, #f97316)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "13px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              letterSpacing: "0.01em",
            }}
          >
            Quote this shape →
          </Link>
        </div>
      </div>

      {/* ── CTA banner ── */}
      <div
        style={{
          borderRadius: "28px",
          padding: "clamp(40px, 5vw, 64px)",
          textAlign: "center",
          background: "linear-gradient(135deg, #0e0e1c 0%, #111128 50%, #0e0e1c 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(117,103,255,0.08), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <h2
          style={{
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            color: "#ffffff",
            marginBottom: "16px",
            position: "relative",
          }}
        >
          Have a custom shape in mind?
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "420px",
            margin: "0 auto 32px",
            lineHeight: 1.65,
            position: "relative",
          }}
        >
          Upload your dieline or sketch — our team will verify tolerances and
          send a cut proof within 24 hours.
        </p>
        <Link
          href="/quote"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "16px 36px",
            borderRadius: "9999px",
            background: "linear-gradient(135deg, #ec4899, #f97316)",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "15px",
            textDecoration: "none",
            position: "relative",
            letterSpacing: "0.01em",
          }}
        >
          Request a Custom Die →
        </Link>
      </div>
    </div>
    </Reveal>
  );
}
