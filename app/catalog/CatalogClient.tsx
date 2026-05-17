"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { products, CATEGORIES, DOT_COLOR } from "@/lib/products";
import Reveal from "@/components/Reveal";

const SORT_OPTIONS = ["Default", "Name A–Z", "Name Z–A", "Category"];
const CATALOG_GRADIENT = "linear-gradient(90deg, #27D7FF 0%, #6E6EFF 35%, #E14CFF 70%, #FFA32C 100%)";

function SparkleIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" style={{ display: "block", flexShrink: 0 }}>
      <path d="M10 2v4M10 14v4M2 10h4M14 10h4M4.93 4.93l2.83 2.83M12.24 12.24l2.83 2.83M4.93 15.07l2.83-2.83M12.24 7.76l2.83-2.83" stroke="#2DE7C4" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function CatalogClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sort, setSort] = useState("Default");
  const [search, setSearch] = useState("");
  const [hoveredPill, setHoveredPill] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeFilter !== "All") list = list.filter((p) => p.category === activeFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (sort === "Name A–Z") list.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "Name Z–A") list.sort((a, b) => b.name.localeCompare(a.name));
    else if (sort === "Category") list.sort((a, b) => a.category.localeCompare(b.category));
    return list;
  }, [activeFilter, sort, search]);

  return (
    <Reveal>
      <div style={{ maxWidth: "1320px", margin: "0 auto", paddingTop: "100px", paddingBottom: "120px", paddingLeft: "clamp(24px, 4vw, 48px)", paddingRight: "clamp(24px, 4vw, 48px)" }}>

        {/* Section label */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "9px", marginBottom: "28px" }}>
          <SparkleIcon />
          <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2DE7C4", lineHeight: 1 }}>THE FULL MENU</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: "36px" }}>
          <h1 style={{ fontSize: "clamp(52px, 7vw, 78px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.0, color: "#ffffff", margin: "0 0 16px 0" }}>
            Product{" "}
            <span style={{ background: CATALOG_GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>catalog</span>
            <span style={{ WebkitTextFillColor: "#ffffff", color: "#ffffff" }}>.</span>
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0, maxWidth: "560px" }}>
            13 premium UV printing products — from rigid substrates to flexible media. Every item custom-quoted for your exact requirements.
          </p>
        </div>

        {/* Controls: search + filter + sort */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", marginBottom: "40px" }}>
          {/* Search */}
          <div style={{ position: "relative", flexGrow: 1, maxWidth: "340px" }}>
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
              <circle cx="9" cy="9" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" />
              <path d="M15 15l-3.5-3.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products…"
              style={{ width: "100%", paddingLeft: "38px", paddingRight: "16px", paddingTop: "12px", paddingBottom: "12px", borderRadius: "9999px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#ffffff", fontSize: "14px", outline: "none", fontFamily: "inherit", transition: "border-color 0.2s ease" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>

          {/* Category filter pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {CATEGORIES.map((c) => {
              const isActive = activeFilter === c;
              const isHov = hoveredPill === c && !isActive;
              return (
                <button key={c} onClick={() => setActiveFilter(c)}
                  onMouseEnter={() => setHoveredPill(c)} onMouseLeave={() => setHoveredPill(null)}
                  style={{ padding: "10px 18px", borderRadius: "9999px", fontSize: "13px", fontWeight: 600, cursor: "pointer", border: `1px solid ${isActive ? "#ffffff" : "rgba(255,255,255,0.08)"}`, background: isActive ? "#ffffff" : isHov ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)", color: isActive ? "#111111" : isHov ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.72)", transition: "background 0.2s, color 0.2s, border-color 0.2s", whiteSpace: "nowrap", letterSpacing: "-0.01em" }}>
                  {c}
                </button>
              );
            })}
          </div>

          {/* Sort */}
          <select value={sort} onChange={(e) => setSort(e.target.value)}
            style={{ padding: "10px 16px", borderRadius: "9999px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.75)", fontSize: "13px", fontWeight: 600, cursor: "pointer", outline: "none", fontFamily: "inherit", marginLeft: "auto" }}>
            {SORT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        {/* Result count */}
        {(search || activeFilter !== "All") && (
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginBottom: "24px" }}>
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
            {search && ` for "${search}"`}
            {activeFilter !== "All" && ` in ${activeFilter}`}
          </p>
        )}

        {/* Cards grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 20px" }}>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.35)" }}>No products match your search.</p>
            <button onClick={() => { setSearch(""); setActiveFilter("All"); }} style={{ marginTop: "16px", padding: "12px 24px", borderRadius: "9999px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontSize: "14px", cursor: "pointer", fontFamily: "inherit" }}>
              Clear filters
            </button>
          </div>
        ) : (
          <div className="cat-grid">
            {filtered.map((p) => {
              const dotColor = DOT_COLOR[p.category] ?? "#ffffff";
              return (
                <div key={p.id} className="cat-card">
                  {/* Image — 40% */}
                  <div className="cat-card-img" style={{ width: "40%", flexShrink: 0, overflow: "hidden", borderRadius: "20px 0 0 20px" }}>
                    <img src={p.img} alt={p.name} loading="lazy" decoding="async" className="cat-img" />
                  </div>

                  {/* Content — 60% */}
                  <div style={{ flex: 1, padding: "28px 28px 24px", display: "flex", flexDirection: "column", justifyContent: "space-between", minWidth: 0 }}>
                    <div>
                      {/* Category dot + badge */}
                      <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "10px", flexWrap: "wrap" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: dotColor, flexShrink: 0, boxShadow: `0 0 6px ${dotColor}` }} />
                        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", lineHeight: 1 }}>{p.category}</span>
                        {p.badge && (
                          <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 9px", borderRadius: "9999px", color: dotColor, background: `${dotColor}18`, border: `1px solid ${dotColor}40` }}>{p.badge}</span>
                        )}
                      </div>

                      <h3 style={{ fontSize: "clamp(18px, 2vw, 28px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 8px 0" }}>{p.name}</h3>
                      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: "0 0 14px 0", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>{p.shortDesc}</p>

                      {/* Tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {p.tags.slice(0, 3).map((t) => (
                          <span key={t} style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 10px", borderRadius: "9999px", color: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px" }}>
                      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.28)", fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>Custom pricing</span>
                      <Link href={`/products/${p.slug}`} className="cat-details-link">
                        View details <span className="cat-arrow">›</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Reveal>
  );
}
