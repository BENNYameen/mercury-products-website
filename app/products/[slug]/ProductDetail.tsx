"use client";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { DOT_COLOR } from "@/lib/products";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import ProductQuoteForm from "@/components/ProductQuoteForm";

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetail({ product, related }: Props) {
  const accent = DOT_COLOR[product.category] ?? "#f472b6";

  return (
    <div style={{ maxWidth: "1320px", margin: "0 auto", paddingLeft: "clamp(20px,4vw,48px)", paddingRight: "clamp(20px,4vw,48px)", paddingBottom: "100px" }}>

      {/* Breadcrumbs */}
      <div style={{ paddingTop: "24px", marginBottom: "32px" }}>
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/catalog" },
          { label: product.name },
        ]} />
      </div>

      {/* ── Hero ── */}
      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start", marginBottom: "80px" }} className="product-hero-grid">

          {/* Gallery */}
          <div>
            <div style={{ borderRadius: "28px", overflow: "hidden", aspectRatio: "4/3", marginBottom: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <img src={product.img} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="eager" decoding="async" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px" }}>
              {product.gallery.slice(0, 3).map((img, i) => (
                <div key={i} style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "4/3", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <img src={img} alt={`${product.name} ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: accent, flexShrink: 0, boxShadow: `0 0 8px ${accent}` }} />
              <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>{product.category}</span>
              {product.badge && (
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 12px", borderRadius: "9999px", color: accent, background: `${accent}20`, border: `1px solid ${accent}50` }}>{product.badge}</span>
              )}
            </div>

            <h1 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, color: "#ffffff", margin: "0 0 12px 0" }}>{product.name}</h1>
            <p style={{ fontSize: "18px", color: accent, fontWeight: 600, margin: "0 0 16px 0", lineHeight: 1.3 }}>{product.tagline}</p>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.58)", lineHeight: 1.7, margin: "0 0 28px 0" }}>{product.longDesc}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "28px" }}>
              {product.tags.map((t) => (
                <span key={t} style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 11px", borderRadius: "9999px", color: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>{t}</span>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "32px" }}>
              {[
                { label: "Turnaround", value: product.turnaround },
                { label: "Min. Quantity", value: `${product.minQuantity} piece${product.minQuantity > 1 ? "s" : ""}` },
              ].map((s) => (
                <div key={s.label} style={{ padding: "14px 16px", borderRadius: "14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", margin: "0 0 4px 0" }}>{s.label}</p>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", margin: 0 }}>{s.value}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href={`/quote?product=${encodeURIComponent(product.name)}`}
                className="gradient-btn"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", borderRadius: "9999px", color: "#ffffff", fontWeight: 700, fontSize: "14px", textDecoration: "none", letterSpacing: "-0.01em" }}>
                Get a Quote →
              </Link>
              <Link href="/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 24px", borderRadius: "9999px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.75)", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                Request Sample
              </Link>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "20px", flexWrap: "wrap" }}>
              {["✓ Printing Since 1990", "✓ 3–5 Day Delivery", "✓ Custom Sizes"].map((t) => (
                <span key={t} style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Features + Specs */}
      <Reveal delayMs={80}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "64px" }} className="details-2col">
          <div style={{ padding: "32px", borderRadius: "24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", margin: "0 0 20px 0" }}>Features</h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {product.features.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "rgba(255,255,255,0.62)", lineHeight: 1.55 }}>
                  <span style={{ color: accent, flexShrink: 0, marginTop: "1px" }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ padding: "32px", borderRadius: "24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", margin: "0 0 20px 0" }}>Specifications</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {product.specs.map((s, i) => (
                <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderBottom: i < product.specs.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", gap: "16px" }}>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>{s.label}</span>
                  <span style={{ fontSize: "13px", color: "#ffffff", fontWeight: 600, textAlign: "right" }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Finishes + Materials + Sizes */}
      <Reveal delayMs={100}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "64px" }} className="details-3col">
          {[
            { title: "Available Finishes", items: product.finishes, color: "#f472b6" },
            { title: "Materials", items: product.materials, color: "#22d3ee" },
            { title: "Standard Sizes", items: product.sizes.map((s) => s.label === "Custom" ? "Custom (any size)" : `${s.label} — ${s.dims}`), color: "#818cf8" },
          ].map((section) => (
            <div key={section.title} style={{ padding: "28px", borderRadius: "20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 14px 0" }}>{section.title}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {section.items.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.62)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Quote form */}
      <Reveal delayMs={120}>
        <div style={{ marginBottom: "64px" }}>
          <ProductQuoteForm productName={product.name} />
        </div>
      </Reveal>

      {/* FAQ */}
      <Reveal delayMs={140}>
        <div style={{ marginBottom: "64px" }}>
          <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#ffffff", margin: "0 0 32px 0" }}>Frequently asked questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {product.faqs.map((faq, i) => (
              <details key={i} className="faq-item" style={{ borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden" }}>
                <summary style={{ padding: "18px 22px", fontSize: "15px", fontWeight: 600, color: "#ffffff", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", userSelect: "none" }}>
                  {faq.q}
                  <span className="faq-chevron" style={{ color: "rgba(255,255,255,0.35)", fontSize: "18px", flexShrink: 0, marginLeft: "16px" }}>+</span>
                </summary>
                <div style={{ padding: "0 22px 20px", fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Related products */}
      {related.length > 0 && (
        <Reveal delayMs={160}>
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#ffffff", margin: "0 0 24px 0" }}>Related products</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="related-grid">
              {related.map((r) => {
                const rAccent = DOT_COLOR[r.category] ?? "#f472b6";
                return (
                  <Link key={r.slug} href={`/products/${r.slug}`} className="related-card" style={{ textDecoration: "none", display: "block", borderRadius: "20px", overflow: "hidden", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div style={{ aspectRatio: "3/2", overflow: "hidden" }}>
                      <img src={r.img} alt={r.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" decoding="async" />
                    </div>
                    <div style={{ padding: "16px 18px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: rAccent }} />
                        <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)" }}>{r.category}</span>
                      </div>
                      <p style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", margin: "0 0 4px 0", lineHeight: 1.3 }}>{r.name}</p>
                      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.42)", margin: 0, lineHeight: 1.5 }}>{r.shortDesc.slice(0, 70)}…</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>
      )}

      {/* Bottom CTA */}
      <Reveal delayMs={180}>
        <div style={{ borderRadius: "28px", padding: "clamp(36px,5vw,56px)", background: "linear-gradient(135deg,#0e0e1c 0%,#111128 50%,#0e0e1c 100%)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "28px", flexWrap: "wrap", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 50%,rgba(117,103,255,0.07),transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ fontSize: "clamp(22px,2.8vw,32px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#ffffff", margin: "0 0 10px 0" }}>Ready to print {product.name}?</h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.48)", maxWidth: "420px", lineHeight: 1.6, margin: 0 }}>Custom sizes, finishes, and quantities. Get a tailored quote in 24 hours.</p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", position: "relative" }}>
            <Link href={`/quote?product=${encodeURIComponent(product.name)}`}
              className="gradient-btn"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "9999px", color: "#ffffff", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
              Get a Quote →
            </Link>
            <Link href="/catalog"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 24px", borderRadius: "9999px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
              Browse All Products
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
