import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE_URL, COMPANY_NAME } from "@/lib/products";

export const metadata: Metadata = {
  title: "UV Printing Services",
  description:
    "Mercury Products offers UV direct printing, flex banner printing, vinyl sticker production, display stand fabrication, and industrial packaging — all under one roof.",
  openGraph: {
    title: `UV Printing Services | ${COMPANY_NAME}`,
    description: "UV direct printing, flex banners, vinyl stickers, display stands, and industrial packaging.",
    url: `${SITE_URL}/services`,
  },
  alternates: { canonical: `${SITE_URL}/services` },
};

const services = [
  {
    id: "uv-direct",
    accent: "#f472b6",
    rgb: "244,114,182",
    icon: "◈",
    category: "Core Service",
    title: "UV Direct Printing",
    desc: "We print directly onto rigid and semi-rigid substrates using state-of-the-art UV flatbed technology. UV-cured inks bond permanently to the surface, producing vivid, durable prints that resist fading, moisture, and physical damage.",
    substrates: ["Sunpack PVC (3mm / 5mm / 8mm)", "Foam Board (3mm / 5mm / 10mm)", "Cast Acrylic", "Float & Toughened Glass", "MDF & Birch Plywood", "Natural Timber", "Canvas (stretched or rolled)", "Ceramic tiles"],
    outputs: ["Retail signage & POS", "Exhibition panels", "Interior décor", "Awards & trophies", "Architectural features"],
  },
  {
    id: "flex-banners",
    accent: "#22d3ee",
    rgb: "34,211,238",
    icon: "◎",
    category: "Large Format",
    title: "Flex & Banner Printing",
    desc: "High-resolution solvent printing on front-lit, back-lit, and one-way-vision flex media. We produce seamless print widths up to 10 ft and heat-weld joins for formats beyond that. Reinforced hemming and grommets as standard.",
    substrates: ["440gsm Front Lit Flex", "500gsm Heavy Duty Flex", "380gsm Back Lit Flex", "OWV 50/50 Perforated Vinyl", "Mesh Banner Media"],
    outputs: ["Outdoor hoardings", "Illuminated lightbox graphics", "Retail window displays", "Vehicle graphics", "Event backdrops"],
  },
  {
    id: "vinyl-stickers",
    accent: "#4ade80",
    rgb: "74,222,128",
    icon: "◇",
    category: "Adhesive Media",
    title: "Vinyl Stickers & Decals",
    desc: "Cast vinyl stickers with UV-resistant solvent inks and gloss or matte laminate. We produce kiss-cut (on sheet) or full die-cut to custom shapes, in quantities from 10 to 100,000+ pieces.",
    substrates: ["Cast Vinyl", "Calendered Vinyl", "Transparent Vinyl", "Metallic Vinyl", "Holographic Vinyl"],
    outputs: ["Product labelling", "Brand stickers & giveaways", "Laptop & device decals", "Helmet and vehicle stickers", "Promotional campaigns"],
  },
  {
    id: "display-systems",
    accent: "#818cf8",
    rgb: "129,140,248",
    icon: "◉",
    category: "Display & Fabrication",
    title: "Display & Standee Systems",
    desc: "We design, fabricate, and brand aluminium standee frames, product display stands, and bespoke retail fixtures. Snap-frame systems allow graphic changes without tools, making them ideal for rotating promotional campaigns.",
    substrates: ["Extruded Aluminium Frames", "PVC Graphic Panels", "Flex Graphic Panels", "Acrylic Display Elements"],
    outputs: ["Retail POS displays", "Exhibition stands", "Corporate event displays", "Window standees", "Counter-top units"],
  },
  {
    id: "industrial",
    accent: "#fb923c",
    rgb: "251,146,60",
    icon: "◈",
    category: "Industrial",
    title: "Industrial Packaging",
    desc: "We fabricate rigid boxes and trays from 5mm expanded PVC (sunpack) for industrial, pharmaceutical, electronics, and commercial applications. CNC-cut and scored for dimensional precision across large production runs.",
    substrates: ["5mm White Sunpack PVC", "5mm Coloured Sunpack PVC", "5mm Anti-static Sunpack", "8mm Sunpack (heavy duty)"],
    outputs: ["Component trays", "Pharmaceutical packaging", "Electronics housing", "Display trays", "Reusable transport packaging"],
  },
  {
    id: "custom",
    accent: "#c084fc",
    rgb: "192,132,252",
    icon: "◎",
    category: "Bespoke",
    title: "Custom Solutions",
    desc: "Have a unique requirement that doesn't fit a standard category? Our team handles bespoke print and fabrication projects from brief to delivery. We scope, prototype, produce, and deliver — whatever you have in mind.",
    substrates: ["Any substrate by request", "Mixed media fabrication", "Prototype development"],
    outputs: ["Bespoke brand installations", "Unique retail experiences", "One-off commissions", "Trade show custom builds"],
  },
];

const process = [
  { step: "01", title: "Enquiry", desc: "Submit your requirements via our quote form or call us directly. We respond within 24 hours." },
  { step: "02", title: "Quote", desc: "We send a detailed, itemised quote with material options, lead times, and pricing." },
  { step: "03", title: "Artwork", desc: "Submit your files. Our prepress team checks resolution, colour mode, bleed, and file integrity." },
  { step: "04", title: "Proof", desc: "We send a digital proof for approval before any job goes to press." },
  { step: "05", title: "Production", desc: "Your order is printed, finished, and quality-checked by our production team." },
  { step: "06", title: "Delivery", desc: "Packed securely and dispatched for delivery to your door, typically within 3–7 business days." },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <Reveal>
        <section style={{ padding: "clamp(40px,6vw,80px) clamp(24px,4vw,48px)", maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)" }}>⊙ SERVICES</span>
          </div>
          <h1 style={{ fontSize: "clamp(48px,7vw,80px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.0, color: "#ffffff", margin: "0 0 20px 0" }}>
            Every print service,{" "}
            <span style={{ background: "linear-gradient(90deg,#22d3ee,#818cf8,#c084fc,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              under one roof.
            </span>
          </h1>
          <p style={{ fontSize: "19px", color: "rgba(255,255,255,0.55)", maxWidth: "600px", lineHeight: 1.65, margin: "0 0 36px 0" }}>
            From UV flatbed direct printing on rigid substrates to large-format flex banners, vinyl stickers, display stands, and industrial packaging — Mercury Products handles it all.
          </p>
          <Link href="/quote" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", borderRadius: "9999px", background: "linear-gradient(135deg,#ec4899,#f97316)", color: "#ffffff", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
            Get a Quote →
          </Link>
        </section>
      </Reveal>

      {/* Services list */}
      <section style={{ padding: "0 clamp(24px,4vw,48px) 80px", maxWidth: "1320px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {services.map((s, i) => (
            <Reveal key={s.id} delayMs={i * 60}>
              <div style={{ borderRadius: "28px", padding: "clamp(32px,4vw,48px)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }} className="service-card-grid">
                {/* Left */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "22px", color: s.accent }}>{s.icon}</span>
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>{s.category}</span>
                  </div>
                  <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#ffffff", margin: "0 0 14px 0" }}>{s.title}</h2>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: "0 0 24px 0" }}>{s.desc}</p>
                  <Link href="/quote" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: s.accent, textDecoration: "none" }}>
                    Get a quote for this service →
                  </Link>
                </div>

                {/* Right: substrates + outputs */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", margin: "0 0 12px 0" }}>Substrates</p>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "7px" }}>
                      {s.substrates.map((sub) => (
                        <li key={sub} style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "flex-start", gap: "7px" }}>
                          <span style={{ color: s.accent, flexShrink: 0 }}>–</span>{sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", margin: "0 0 12px 0" }}>Common Uses</p>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "7px" }}>
                      {s.outputs.map((o) => (
                        <li key={o} style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "flex-start", gap: "7px" }}>
                          <span style={{ color: s.accent, flexShrink: 0 }}>✓</span>{o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <Reveal delayMs={80}>
        <section style={{ padding: "0 clamp(24px,4vw,48px) 80px", maxWidth: "1320px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#ffffff", margin: "0 0 40px 0" }}>
            How it works
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="process-grid">
            {process.map((p) => (
              <div key={p.step} style={{ padding: "28px", borderRadius: "20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span style={{ fontSize: "32px", fontWeight: 900, color: "rgba(255,255,255,0.08)", letterSpacing: "-0.02em", display: "block", marginBottom: "12px", lineHeight: 1 }}>{p.step}</span>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", margin: "0 0 8px 0" }}>{p.title}</h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal delayMs={100}>
        <section style={{ padding: "0 clamp(24px,4vw,48px) 80px", maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ borderRadius: "28px", padding: "clamp(40px,5vw,64px)", background: "linear-gradient(135deg,#0e0e1c,#111128,#0e0e1c)", border: "1px solid rgba(255,255,255,0.08)", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 70% at 50% 50%,rgba(236,72,153,0.08),transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#ffffff", margin: "0 0 14px 0" }}>
                Ready to start your project?
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.45)", maxWidth: "440px", margin: "0 auto 32px", lineHeight: 1.65 }}>
                Get a detailed quote in 24 hours. No commitment required — just tell us what you need.
              </p>
              <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/quote" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", borderRadius: "9999px", background: "linear-gradient(135deg,#ec4899,#f97316)", color: "#ffffff", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
                  Get a Free Quote →
                </Link>
                <Link href="/catalog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 24px", borderRadius: "9999px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
