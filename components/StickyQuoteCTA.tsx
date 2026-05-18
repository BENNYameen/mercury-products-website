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
      <Link href="/quote" className="sticky-quote-cta">
        Get a Quote →
      </Link>
    </div>
  );
}
