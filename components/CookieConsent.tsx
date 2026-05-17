"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("mp-cookies-accepted");
    if (!accepted) setTimeout(() => setVisible(true), 1500);
  }, []);

  function accept() {
    localStorage.setItem("mp-cookies-accepted", "1");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("mp-cookies-accepted", "0");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 300,
        maxWidth: "420px",
        padding: "24px",
        borderRadius: "20px",
        background: "rgba(18,18,28,0.96)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
        animation: "slideUp 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.72)", lineHeight: 1.6, margin: "0 0 16px 0" }}>
        We use cookies to improve your experience and analyse site usage.{" "}
        <Link href="/privacy" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>
          Privacy Policy
        </Link>
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={accept}
          style={{ flex: 1, padding: "10px 16px", borderRadius: "9999px", background: "linear-gradient(135deg,#ec4899,#f97316)", color: "#ffffff", fontWeight: 700, fontSize: "13px", border: "none", cursor: "pointer" }}>
          Accept All
        </button>
        <button
          onClick={decline}
          style={{ flex: 1, padding: "10px 16px", borderRadius: "9999px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", fontWeight: 600, fontSize: "13px", cursor: "pointer" }}>
          Decline
        </button>
      </div>
    </div>
  );
}
