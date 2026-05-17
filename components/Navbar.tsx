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
    color: active ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.72)",
    textDecoration: "none",
    transition: "color 0.2s ease",
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
        className="fixed left-0 right-0 z-50 flex justify-center px-4"
        style={{ top: "32px", transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)", opacity: mounted ? 1 : 0, transform: mounted ? "translate3d(0,0,0)" : "translate3d(0,-18px,0)", willChange: "transform, opacity" }}
      >
        <div style={{ width: "100%", maxWidth: "1200px" }}>
          {/* Pill nav */}
          <nav
            style={{ height: "68px", background: "rgba(15,15,22,0.82)", backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "9999px", boxShadow: "0 12px 34px rgba(0,0,0,0.46), 0 3px 10px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.07)", isolation: "isolate" }}
            className="flex items-center justify-between px-6"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0" style={{ gap: "10px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg,#22d3ee 0%,#a855f7 50%,#f472b6 100%)", boxShadow: "0 0 0 1px rgba(168,85,247,0.3),0 0 10px rgba(168,85,247,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ width: "11px", height: "11px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.12)" }} />
              </div>
              <span style={{ fontFamily: "Times New Roman, Times, Georgia, serif", fontWeight: 700, fontSize: "17px", letterSpacing: "0.01em", color: "#ffffff", lineHeight: 1, whiteSpace: "nowrap" }}>Mercury Products</span>
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
                    style={{ position: "absolute", top: "calc(100% + 16px)", left: "50%", transform: "translateX(-50%)", width: "640px", borderRadius: "24px", background: "rgba(13,13,20,0.97)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 24px 64px rgba(0,0,0,0.6)", padding: "24px", animation: "dropdownIn 0.2s cubic-bezier(0.22,1,0.36,1)" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                      {productGroups.map((group) => (
                        <div key={group.label}>
                          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: group.color, margin: "0 0 10px 0" }}>{group.label}</p>
                          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            {group.items.map((p) => (
                              <Link key={p.slug} href={`/products/${p.slug}`} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "7px 10px", borderRadius: "10px", textDecoration: "none", transition: "background 0.15s ease", color: "rgba(255,255,255,0.72)", fontSize: "13px", fontWeight: 500 }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
                                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: DOT_COLOR[p.category], flexShrink: 0 }} />
                                {p.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Link href="/catalog" style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
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
                    style={{ position: "absolute", top: "calc(100% + 16px)", left: "50%", transform: "translateX(-50%)", width: "240px", borderRadius: "20px", background: "rgba(13,13,20,0.97)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 24px 64px rgba(0,0,0,0.6)", padding: "12px", animation: "dropdownIn 0.2s cubic-bezier(0.22,1,0.36,1)" }}>
                    {serviceLinks.map((s) => (
                      <Link key={s.href} href={s.href} style={{ display: "block", padding: "9px 12px", borderRadius: "10px", fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.72)", textDecoration: "none", transition: "background 0.15s ease" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
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
                <Link key={l.href} href={l.href} style={{ ...navItemStyle(pathname === l.href), padding: "4px 10px" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = pathname === l.href ? "#ffffff" : "rgba(255,255,255,0.72)")}>
                  {l.label}
                  {pathname === l.href && (
                    <span style={{ position: "absolute", bottom: "-6px", left: "50%", transform: "translateX(-50%)", width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,255,255,0.6)" }} />
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
                    style={{ position: "absolute", top: "calc(100% + 16px)", right: "0", width: "220px", borderRadius: "20px", background: "rgba(13,13,20,0.97)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 24px 64px rgba(0,0,0,0.6)", padding: "12px", animation: "dropdownIn 0.2s cubic-bezier(0.22,1,0.36,1)" }}>
                    {resourceLinks.map((r) => (
                      <Link key={r.href} href={r.href} style={{ display: "block", padding: "9px 12px", borderRadius: "10px", textDecoration: "none", transition: "background 0.15s ease" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                        <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.72)", display: "block" }}>{r.label}</span>
                        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", display: "block", marginTop: "1px" }}>{r.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center" style={{ gap: "12px" }}>
              <Link href="/quote" className="hidden md:flex items-center"
                style={{ height: "42px", paddingLeft: "22px", paddingRight: "22px", borderRadius: "9999px", background: "#ffffff", color: "#000000", fontWeight: 700, fontSize: "13px", letterSpacing: "-0.01em", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,0.25)", transition: "transform 0.2s cubic-bezier(0.22,1,0.36,1),box-shadow 0.2s ease", display: "flex", gap: "5px" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px) scale(1.02)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.25)"; }}>
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
