"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { products, DOT_COLOR } from "@/lib/products";

const productGroups = [
  {
    label: "UV Print",
    color: "#f472b6",
    items: products.filter((p) => p.category === "UV Print").slice(0, 4),
  },
  {
    label: "Flex & Banners",
    color: "#22d3ee",
    items: products.filter((p) => p.category === "Flex"),
  },
  {
    label: "Stickers & Display",
    color: "#4ade80",
    items: [
      ...products.filter((p) => p.category === "Stickers"),
      ...products.filter((p) => p.category === "Display"),
    ],
  },
  {
    label: "Industrial",
    color: "#fb923c",
    items: products.filter((p) => p.category === "Industrial"),
  },
];

const resourceLinks = [
  { label: "Blog & Guides", href: "/blog", desc: "UV print knowledge base" },
  { label: "FAQ", href: "/faq", desc: "Common questions answered" },
  { label: "Testimonials", href: "/testimonials", desc: "Client success stories" },
  { label: "Shapes", href: "/shapes", desc: "Available cut shapes" },
  { label: "Thickness Guide", href: "/thickness", desc: "Material thickness options" },
];

const serviceLinks = [
  { label: "UV Direct Printing", href: "/services#uv-direct" },
  { label: "Flex & Banner Printing", href: "/services#flex-banners" },
  { label: "Vinyl Stickers", href: "/services#vinyl-stickers" },
  { label: "Display Systems", href: "/services#display-systems" },
  { label: "Industrial Packaging", href: "/services#industrial" },
  { label: "Custom Solutions", href: "/services#custom" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  function openMenu(name: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(name);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 180);
  }

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  const navItemStyle = (active: boolean): React.CSSProperties => ({
    fontSize: "14px",
    fontWeight: 500,
    color: active ? "var(--text-primary)" : "var(--text-muted)",
    textDecoration: "none",
    transition: "color 0.3s var(--ease-premium)",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    lineHeight: 1,
    position: "relative",
    whiteSpace: "nowrap",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
    fontFamily: "inherit",
  });

  return (
    <>
      <div
        className="fixed left-0 right-0 z-50 flex justify-center"
        style={{ top: "0px", transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)", opacity: mounted ? 1 : 0, transform: mounted ? "translate3d(0,0,0)" : "translate3d(0,-18px,0)", willChange: "transform, opacity" }}
      >
        <div style={{ width: "100%" }}>
          {/* Full bleed sticky header */}
          <nav
            style={{ 
              height: "72px", 
              background: "var(--navbar-bg)", 
              backdropFilter: "blur(24px) saturate(180%)", 
              WebkitBackdropFilter: "blur(24px) saturate(180%)", 
              borderBottom: "1px solid var(--navbar-border)", 
              boxShadow: "0 4px 30px rgba(0,0,0,0.15)", 
              isolation: "isolate",
              transition: "background 0.4s var(--ease-premium), border-color 0.4s var(--ease-premium)"
            }}
            className="flex items-center justify-center px-6 md:px-10"
          >
            <div style={{ width: "100%", maxWidth: "1200px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0" style={{ gap: "10px" }}>
              <img
                src="/logo.png"
                alt="Mercury Products Logo"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid var(--card-border)",
                  boxShadow: "0 0 10px rgba(0, 194, 255, 0.15)",
                  objectFit: "cover",
                  transition: "border-color 0.4s var(--ease-premium)"
                }}
              />
              <span style={{ fontFamily: "'Times New Roman', Times, Georgia, serif", fontWeight: 700, fontSize: "17px", letterSpacing: "0.01em", color: "var(--text-primary)", lineHeight: 1, whiteSpace: "nowrap", transition: "color 0.4s var(--ease-premium)" }}>Mercury Products</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center" style={{ gap: "4px" }} ref={dropdownRef}>

              {/* Products dropdown */}
              <div onMouseEnter={() => openMenu("products")} onMouseLeave={scheduleClose} style={{ position: "relative" }}>
                <button style={navItemStyle(pathname.startsWith("/products") || pathname === "/catalog")}
                  onFocus={() => openMenu("products")} aria-expanded={openDropdown === "products"} aria-haspopup="true">
                  <span style={{ padding: "4px 10px" }}>Products</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginLeft: "-4px", opacity: 0.5, transition: "transform 0.2s", transform: openDropdown === "products" ? "rotate(180deg)" : "rotate(0)" }}>
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>

                {openDropdown === "products" && (
                  <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}
                    style={{ position: "absolute", top: "calc(100% + 16px)", left: "50%", transform: "translateX(-50%)", width: "640px", borderRadius: "24px", background: "rgba(var(--card-bg-rgb), 0.97)", backdropFilter: "blur(24px)", border: "1px solid var(--card-border)", boxShadow: "0 24px 64px rgba(0,0,0,0.18)", padding: "24px", animation: "dropdownIn 0.2s cubic-bezier(0.22,1,0.36,1)" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                      {productGroups.map((group) => (
                        <div key={group.label}>
                          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: group.color, margin: "0 0 10px 0" }}>{group.label}</p>
                          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            {group.items.map((p) => (
                              <Link key={p.slug} href={`/products/${p.slug}`} className="nav-link-hover" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "7px 10px", borderRadius: "10px", textDecoration: "none", color: "var(--text-muted)", fontSize: "13px", fontWeight: 500 }}>
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: DOT_COLOR[p.category], flexShrink: 0 }} />
                                {p.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid var(--card-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Link href="/catalog" className="nav-text-hover" style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-dim)", textDecoration: "none" }}>
                        View all 13 products →
                      </Link>
                      <Link href="/quote" style={{ padding: "8px 16px", borderRadius: "9999px", background: "linear-gradient(135deg,#ec4899,#f97316)", color: "#ffffff", fontWeight: 700, fontSize: "12px", textDecoration: "none" }}>
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Services dropdown */}
              <div onMouseEnter={() => openMenu("services")} onMouseLeave={scheduleClose} style={{ position: "relative" }}>
                <button style={navItemStyle(pathname === "/services")} aria-expanded={openDropdown === "services"} aria-haspopup="true">
                  <span style={{ padding: "4px 10px" }}>Services</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginLeft: "-4px", opacity: 0.5, transition: "transform 0.2s", transform: openDropdown === "services" ? "rotate(180deg)" : "rotate(0)" }}>
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>

                {openDropdown === "services" && (
                  <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}
                    style={{ position: "absolute", top: "calc(100% + 16px)", left: "50%", transform: "translateX(-50%)", width: "240px", borderRadius: "20px", background: "rgba(var(--card-bg-rgb), 0.97)", backdropFilter: "blur(24px)", border: "1px solid var(--card-border)", boxShadow: "0 24px 64px rgba(0,0,0,0.18)", padding: "12px", animation: "dropdownIn 0.2s cubic-bezier(0.22,1,0.36,1)" }}>
                    {serviceLinks.map((s) => (
                      <Link key={s.href} href={s.href} className="nav-link-hover" style={{ display: "block", padding: "9px 12px", borderRadius: "10px", fontSize: "13px", fontWeight: 500, color: "var(--text-muted)", textDecoration: "none" }}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Static links */}
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="nav-text-hover" style={{ ...navItemStyle(pathname === l.href), padding: "4px 10px" }}>
                  {l.label}
                  {pathname === l.href && (
                    <span style={{ position: "absolute", bottom: "-6px", left: "50%", transform: "translateX(-50%)", width: "4px", height: "4px", borderRadius: "50%", background: "var(--text-primary)" }} />
                  )}
                </Link>
              ))}

              {/* Resources dropdown */}
              <div onMouseEnter={() => openMenu("resources")} onMouseLeave={scheduleClose} style={{ position: "relative" }}>
                <button style={navItemStyle(pathname === "/blog" || pathname === "/faq" || pathname === "/testimonials")} aria-expanded={openDropdown === "resources"} aria-haspopup="true">
                  <span style={{ padding: "4px 10px" }}>Resources</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginLeft: "-4px", opacity: 0.5, transition: "transform 0.2s", transform: openDropdown === "resources" ? "rotate(180deg)" : "rotate(0)" }}>
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>

                {openDropdown === "resources" && (
                  <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}
                    style={{ position: "absolute", top: "calc(100% + 16px)", right: "0", width: "220px", borderRadius: "20px", background: "rgba(var(--card-bg-rgb), 0.97)", backdropFilter: "blur(24px)", border: "1px solid var(--card-border)", boxShadow: "0 24px 64px rgba(0,0,0,0.18)", padding: "12px", animation: "dropdownIn 0.2s cubic-bezier(0.22,1,0.36,1)" }}>
                    {resourceLinks.map((r) => (
                      <Link key={r.href} href={r.href} className="nav-link-hover" style={{ display: "block", padding: "9px 12px", borderRadius: "10px", textDecoration: "none" }}>
                        <span style={{ fontSize: "13px", fontWeight: 500, color: "var(--text-primary)", display: "block" }}>{r.label}</span>
                        <span style={{ fontSize: "11px", color: "var(--text-dim)", display: "block", marginTop: "1px" }}>{r.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center" style={{ gap: "12px" }}>
              <Link href="/quote" className="hidden md:flex items-center nav-cta-btn" style={{ display: "flex", gap: "5px" }}>
                Get a Quote <span style={{ fontSize: "16px", lineHeight: 1 }}>→</span>
              </Link>

              <button className="md:hidden flex items-center justify-center"
                style={{ width: "42px", height: "42px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", cursor: "pointer", transition: "background 0.2s", flexShrink: 0 }}
                onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  {menuOpen
                    ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                    : <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>
                  }
                </svg>
              </button>
            </div>
          </div>
        </nav>

          {/* Mobile dropdown */}
          <div className="md:hidden"
            style={{ marginTop: "10px", borderRadius: "24px", background: "rgba(17,17,25,0.95)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", border: "1px solid rgba(255,255,255,0.09)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)", overflow: "hidden", transition: "max-height 0.35s cubic-bezier(0.22,1,0.36,1),opacity 0.3s ease", maxHeight: menuOpen ? "600px" : "0px", opacity: menuOpen ? 1 : 0 }}>
            <div style={{ padding: "20px 20px 24px" }}>
              {[
                { label: "Products", href: "/catalog" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((l, i, arr) => (
                <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 4px", fontSize: "16px", fontWeight: 500, color: pathname === l.href ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  {l.label}
                  <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "14px" }}>›</span>
                </Link>
              ))}
              <Link href="/quote" onClick={() => setMenuOpen(false)}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "16px", height: "52px", borderRadius: "9999px", background: "#ffffff", color: "#000000", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
                Get a Quote →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
