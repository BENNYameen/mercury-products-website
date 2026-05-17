"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function StickyQuoteCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      style={{
        position: "fixed",
        bottom: "28px",
        right: "24px",
        zIndex: 200,
        transition: "opacity 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.92)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <Link
        href="/quote"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "14px 22px",
          borderRadius: "9999px",
          background: "linear-gradient(135deg,#ec4899,#f97316)",
          color: "#ffffff",
          fontWeight: 700,
          fontSize: "14px",
          textDecoration: "none",
          boxShadow: "0 8px 28px rgba(236,72,153,0.45), 0 2px 8px rgba(0,0,0,0.4)",
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
          e.currentTarget.style.boxShadow = "0 14px 36px rgba(236,72,153,0.55), 0 4px 12px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 28px rgba(236,72,153,0.45), 0 2px 8px rgba(0,0,0,0.4)";
        }}
      >
        Get a Quote →
      </Link>
    </div>
  );
}
