"use client";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/lib/products";
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from "@/lib/products";

const productLinks = products.slice(0, 7).map((p) => ({ label: p.name.split(" — ")[0], href: `/products/${p.slug}` }));

const serviceLinks = [
  { label: "UV Direct Printing", href: "/services" },
  { label: "Flex & Banners", href: "/services" },
  { label: "Vinyl Stickers", href: "/services" },
  { label: "Display Stands", href: "/services" },
  { label: "Industrial Packaging", href: "/services" },
  { label: "Custom Solutions", href: "/services" },
];

const resourceLinks = [
  { label: "Blog & Guides", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Shapes", href: "/shapes" },
  { label: "Thickness Guide", href: "/thickness" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Quote", href: "/quote" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleNewsletter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubscribed(true);
  }

  return (
    <footer style={{ padding: "0 clamp(16px,3vw,40px) 32px" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", borderRadius: "28px", overflow: "hidden", background: "#111118", border: "1px solid rgba(255,255,255,0.07)" }}>

        {/* Top CTA band */}
        <div style={{ padding: "clamp(40px,5vw,56px) clamp(32px,4vw,56px)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", justifyContent: "space-between", background: "linear-gradient(135deg,rgba(236,72,153,0.06),rgba(249,115,22,0.04))" }}>
          <div>
            <h3 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.025em", margin: "0 0 8px 0" }}>
              Ready to start printing?
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.6 }}>
              Custom sizes, materials, and quantities — quoted within 24 hours.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/quote" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "13px 24px", borderRadius: "9999px", background: "linear-gradient(135deg,#ec4899,#f97316)", color: "#ffffff", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
              Get a Free Quote →
            </Link>
            <Link href="/catalog" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "13px 22px", borderRadius: "9999px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
              Browse Products
            </Link>
          </div>
        </div>

        {/* Main footer grid */}
        <div style={{ padding: "clamp(40px,5vw,56px) clamp(32px,4vw,56px)", display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr", gap: "40px" }} className="footer-grid">

          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <img
                src="/logo.png"
                alt="Mercury Products Logo"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 0 10px rgba(0, 194, 255, 0.2)",
                  objectFit: "cover"
                }}
              />
              <span style={{ fontFamily: "'Times New Roman', Times, Georgia, serif", fontWeight: 700, fontSize: "16px", color: "#ffffff", letterSpacing: "0.01em" }}>{COMPANY_NAME}</span>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: "0 0 20px 0", maxWidth: "220px" }}>
              Premium UV printing since 1990. Custom signage, display, stickers, and industrial packaging.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a href={`tel:${COMPANY_PHONE}`} style={{ fontSize: "13px", color: "rgba(255,255,255,0.42)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.42)")}>
                {COMPANY_PHONE}
              </a>
              <a href={`mailto:${COMPANY_EMAIL}`} style={{ fontSize: "13px", color: "rgba(255,255,255,0.42)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.42)")}>
                {COMPANY_EMAIL}
              </a>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.42)" }}>{COMPANY_ADDRESS}</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "16px" }}>Products</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: "13px", color: "rgba(255,255,255,0.52)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.52)")}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/catalog" style={{ fontSize: "13px", color: "#f472b6", textDecoration: "none" }}>View all →</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "16px" }}>Services</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} style={{ fontSize: "13px", color: "rgba(255,255,255,0.52)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.52)")}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "16px" }}>Resources</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
              {resourceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: "13px", color: "rgba(255,255,255,0.52)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.52)")}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "16px" }}>Company</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: "13px", color: "rgba(255,255,255,0.52)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.52)")}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div style={{ padding: "24px clamp(32px,4vw,56px)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", margin: "0 0 3px 0" }}>Print knowledge, delivered</p>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", margin: 0 }}>New guides and material tips. Unsubscribe anytime.</p>
          </div>
          {subscribed ? (
            <p style={{ fontSize: "14px", color: "#4ade80", fontWeight: 600 }}>✓ You&apos;re subscribed!</p>
          ) : (
            <form onSubmit={handleNewsletter} style={{ display: "flex", gap: "8px" }}>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com"
                style={{ padding: "10px 16px", borderRadius: "9999px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#ffffff", fontSize: "13px", outline: "none", fontFamily: "inherit", minWidth: "200px" }} />
              <button type="submit" style={{ padding: "10px 18px", borderRadius: "9999px", background: "#ffffff", color: "#000000", fontWeight: 700, fontSize: "13px", border: "none", cursor: "pointer", whiteSpace: "nowrap", fontFamily: "inherit" }}>
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Bottom bar */}
        <div style={{ padding: "20px clamp(32px,4vw,56px)", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", margin: 0 }}>© 2026 {COMPANY_NAME}. All rights reserved.</p>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/privacy" style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Privacy</Link>
            <Link href="/terms" style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Terms</Link>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.18)" }}>UV Direct · Flex · Stickers · Display</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
