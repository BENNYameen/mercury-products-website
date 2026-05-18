import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import GlowSlider from "@/components/GlowSlider";
import PaperThickness from "@/components/PaperThickness";
import { products, SITE_URL, COMPANY_NAME } from "@/lib/products";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} — Premium UV Printing Since 1990`,
  description:
    "Mercury Products delivers premium UV printing on sunpack, acrylic, glass, wood, canvas, vinyl stickers, flex banners and display stands. Custom signage, branding and display solutions. Get a quote today.",
  openGraph: {
    title: `${COMPANY_NAME} — Premium UV Printing Since 1990`,
    description: "Premium UV printing on sunpack, acrylic, glass, wood, canvas, vinyl stickers, flex banners and display stands.",
    url: SITE_URL,
  },
  alternates: { canonical: SITE_URL },
};

const stats = [
  { value: "12M+", label: "PRINTS / YEAR" },
  { value: "24", label: "PRESS MACHINES" },
  { value: "1,400+", label: "BRAND CLIENTS" },
  { value: "98.7%", label: "ON-TIME DELIVERY" },
];

const featuredProducts = [
  { category: "UV PRINT", badge: "POPULAR", badgeColor: "#f472b6", dotColor: "#f472b6", name: "Sunpack UV Direct", tagline: "Bold outdoor signage with vivid, permanent colour.", href: "/products/sunpack-uv-direct", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85" },
  { category: "UV PRINT", badge: "PREMIUM", badgeColor: "#818cf8", dotColor: "#818cf8", name: "Acrylic UV Print", tagline: "Premium clarity for signage, awards and display.", href: "/products/acrylic-uv-print", img: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=800&q=85" },
  { category: "STICKERS", badge: "BESTSELLER", badgeColor: "#4ade80", dotColor: "#4ade80", name: "Vinyl Stickers", tagline: "Die-cut precision. Colours that outlast everything.", href: "/products/vinyl-stickers", img: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&q=85" },
  { category: "FLEX", badge: "NEW", badgeColor: "#22d3ee", dotColor: "#22d3ee", name: "Front Lit Flex", tagline: "Maximum visibility for hoardings and signage.", href: "/products/front-lit-flex", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=85" },
];

const possibilitiesProducts = [
  {
    category: "STATIONERY",
    badge: "BESTSELLER",
    badgeBg: "rgba(236,72,153,0.22)",
    badgeBorder: "rgba(236,72,153,0.45)",
    badgeText: "#f9a8d4",
    name: "Premium Business Cards",
    tagline: "First impressions, pressed to perfection.",
    price: "$49",
    img: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=900&q=90",
  },
  {
    category: "PACKAGING",
    badge: "NEW",
    badgeBg: "rgba(34,211,238,0.18)",
    badgeBorder: "rgba(34,211,238,0.4)",
    badgeText: "#67e8f9",
    name: "Custom Packaging Boxes",
    tagline: "Unboxing that goes viral.",
    price: "$189",
    img: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=900&q=90",
  },
  {
    category: "STICKERS",
    badge: "POPULAR",
    badgeBg: "rgba(168,85,247,0.22)",
    badgeBorder: "rgba(168,85,247,0.45)",
    badgeText: "#d8b4fe",
    name: "Die-Cut Stickers",
    tagline: "Loud colors, low effort.",
    price: "$19",
    img: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=900&q=90",
  },
];

const testimonials = [
  { quote: "Mercury made our launch packaging feel like a museum piece. Our customers post unboxing videos unprompted.", name: "Maya Chen", role: "Brand Director, Nuvo Coffee", initials: "MC", color: "#ec4899" },
  { quote: "The soft-touch + foil combo on our business cards is unreasonably good. Best print partner we've ever worked with.", name: "Daniel Park", role: "Founder, Atlas Studio", initials: "DP", color: "#22d3ee" },
  { quote: "They caught a CMYK conversion issue our agency missed. That care is rare. We're lifers now.", name: "Lena Souza", role: "Creative Lead, Florae", initials: "LS", color: "#fb923c" },
  { quote: "Edge-painted triplex cards arrived exactly the Pantone we asked for. No drama, just press magic.", name: "Theo Klein", role: "Art Director, Hex&Co", initials: "TK", color: "#a855f7" },
];

const finishItems = [
  { text: "Spot UV",      color: "#ffffff" },
  { text: "Embossing",    color: "#22d3ee" },
  { text: "Debossing",    color: "#f472b6" },
  { text: "Die-Cutting",  color: "#facc15" },
  { text: "Edge Painting",color: "#ffffff" },
];

// Cycling starburst accent colors
const starColors = ["#7C5CFF", "#FF5FC7", "#00C2FF", "#FF9B2F", "#c084fc", "#f472b6", "#22d3ee", "#fb923c", "#818cf8", "#4ade80"];

// Gradient used for highlighted items and active star icons
const HIGHLIGHT_GRADIENT = "linear-gradient(90deg, #00C2FF 0%, #7C5CFF 40%, #FF5FC7 70%, #FF9B2F 100%)";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <Reveal>
        <section className="pt-0 pb-14 md:pt-0 md:pb-20">
          <div className="hero-premium-bg relative min-h-[100vh] overflow-hidden rounded-[36px] flex flex-col justify-start pt-36 md:pt-40 px-6 md:px-10">
            <div className="hero-grid-overlay pointer-events-none" />
            <div className="hero-vertical-bands pointer-events-none" />
            <div className="hero-noise pointer-events-none" />
            <div className="hero-vignette pointer-events-none" />

            <div className="relative z-10 max-w-5xl">
              {/* Brand Stamp Logo */}
              <div className="flex items-center gap-3.5 mb-6">
                <img
                  src="/logo.png"
                  alt="Mercury Products Brand Logo"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "1.5px solid var(--card-border)",
                    boxShadow: "0 0 25px rgba(0, 194, 255, 0.25)",
                    objectFit: "cover",
                    transition: "border-color 0.4s ease"
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Times New Roman', Times, Georgia, serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    letterSpacing: "0.05em",
                    color: "var(--text-primary)",
                    transition: "color 0.4s ease"
                  }}
                >
                  MERCURY
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full text-text-muted transition-colors duration-355"
                  style={{ background: "rgba(var(--hover-bg-rgb), 0.07)", border: "1px solid var(--card-border)" }}>
                  <span className="text-text-dim">✦</span> EST. 1990 · INDIA
                </span>
                <span className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full text-text-muted transition-colors duration-355"
                  style={{ background: "rgba(var(--hover-bg-rgb), 0.07)", border: "1px solid var(--card-border)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                  Press running · 24/7
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-6">
                <span className="text-text-primary transition-colors duration-355">Print that</span>
                <br />
                <span className="gradient-text">feels like art.</span>
              </h1>

              <p className="text-base md:text-lg text-text-muted max-w-lg leading-relaxed mb-10 transition-colors duration-355">
                Mercury Products is a creative printing press obsessed with color, paper and the small details that make great brands feel inevitable. Business cards to packaging, foil to spot UV — we press it like we mean it.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/quote"
                  className="gradient-btn flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-full text-white">
                  Start a Quote →
                </Link>
                <Link href="/catalog"
                  className="flex items-center gap-2 text-sm font-medium px-7 py-3.5 rounded-full text-text-muted hover:text-text-primary transition-colors"
                  style={{ background: "rgba(var(--hover-bg-rgb), 0.07)", border: "1px solid var(--card-border)" }}>
                  Explore Products ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Stats metrics row ── */}
      <Reveal delayMs={60}>
        <section className="px-6 md:px-10 mb-16">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4"
            style={{ gap: "20px" }}>
            {stats.map((s) => (
              <div key={s.label} className="stats-card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "108px" }}>
                <span
                  style={{
                    fontSize: "clamp(30px, 3.5vw, 42px)",
                    fontWeight: 800,
                    background: "linear-gradient(90deg, #00C2FF 0%, #FF5FC7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    lineHeight: 1,
                    marginTop: "3px",
                    transition: "color 0.3s ease"
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          {/* Centered Ambient Glow intensity slider from screenshot */}
          <div className="flex justify-center mt-10">
            <GlowSlider />
          </div>
        </section>
      </Reveal>

      {/* ── Product showcase grid ── */}
      <Reveal delayMs={90}>
        <section className="px-6 md:px-10 mb-20">
          <div className="max-w-7xl mx-auto">
            <div
              className="grid grid-cols-2 md:grid-cols-4"
              style={{ gap: "20px" }}
            >
              {featuredProducts.map((p) => (
                <Link
                  href={p.href}
                  key={p.name}
                  className="showcase-card block"
                  style={{ height: "clamp(380px, 42vw, 580px)" }}
                >
                  {/* Cover image */}
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    className="showcase-img absolute inset-0"
                    style={{ position: "absolute", inset: 0 }}
                  />

                  {/* Bottom gradient */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.38) 45%, transparent 75%)",
                    }}
                  />

                  {/* Top-left badge */}
                  <div className="absolute" style={{ top: "16px", left: "16px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "5px 11px",
                        borderRadius: "9999px",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.9)",
                        background: "rgba(255,255,255,0.12)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>

                  {/* Top-right accent dot */}
                  <div
                    className="absolute"
                    style={{ top: "20px", right: "18px" }}
                  >
                    <div
                      className="accent-dot"
                      style={{
                        background: p.dotColor,
                        boxShadow: `0 0 8px ${p.dotColor}`,
                      }}
                    />
                  </div>

                  {/* Bottom info */}
                  <div
                    className="absolute"
                    style={{ bottom: 0, left: 0, right: 0, padding: "22px 20px" }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.52)",
                        marginBottom: "6px",
                      }}
                    >
                      {p.category}
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#ffffff",
                        lineHeight: 1.2,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {p.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Specialty Finishes Marquee ── */}
      <Reveal delayMs={120}>
        <section
          className="mb-20 overflow-hidden relative"
          style={{
            background: "#050508",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            minHeight: "72px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Left fade mask */}
          <div
            className="absolute top-0 bottom-0 left-0 pointer-events-none"
            style={{
              width: "80px",
              background: "linear-gradient(to right, #050508 0%, transparent 100%)",
              zIndex: 3,
            }}
          />
          {/* Right fade mask */}
          <div
            className="absolute top-0 bottom-0 right-0 pointer-events-none"
            style={{
              width: "80px",
              background: "linear-gradient(to left, #050508 0%, transparent 100%)",
              zIndex: 3,
            }}
          />

          {/* Scrolling track */}
          <div
            className="ticker-track"
            style={{
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              paddingTop: "20px",
              paddingBottom: "20px",
              position: "relative",
              zIndex: 2,
            }}
          >
            {[...finishItems, ...finishItems, ...finishItems, ...finishItems].map((item, i) => {
              return (
                <span
                  key={i}
                  style={{ display: "inline-flex", alignItems: "center" }}
                >
                  {/* Clean dot separator */}
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "14px",
                      padding: "0 clamp(16px, 2.5vw, 24px)",
                      color: "rgba(255,255,255,0.25)",
                      lineHeight: 1,
                    }}
                  >
                    •
                  </span>

                  {/* Finish label */}
                  <span
                    style={{
                      fontSize: "clamp(20px, 2.8vw, 26px)",
                      fontWeight: 700,
                      letterSpacing: "-0.015em",
                      lineHeight: 1,
                      color: item.color,
                    }}
                  >
                    {item.text}
                  </span>
                </span>
              );
            })}
          </div>
        </section>
      </Reveal>

      {/* ── A spectrum of possibilities ── */}
      <Reveal delayMs={140}>
        <section className="px-6 md:px-10 mb-20">
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div className="flex items-center gap-2 mb-5">
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)" }}>
                ⊙ WHAT WE PRESS
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
              <h2
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  color: "#ffffff",
                }}
              >
                A spectrum of{" "}
                <span className="gradient-text-2">possibilities</span>.
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", maxWidth: "320px", lineHeight: 1.6 }}>
                Six core product families, hundreds of permutations. Pick a shape, a stock, a finish — we&apos;ll handle the rest.
              </p>
            </div>

            {/* Card grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ gap: "20px" }}
            >
              {possibilitiesProducts.map((p) => (
                <Link
                  key={p.name}
                  href="/catalog"
                  className="poss-card block"
                  style={{ height: "clamp(420px, 46vw, 560px)" }}
                >
                  {/* Full-bleed image */}
                  <img src={p.img} alt={p.name} loading="lazy" decoding="async" className="poss-img" />

                  {/* Cinematic gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.55) 38%, rgba(0,0,0,0.18) 60%, transparent 80%)",
                    }}
                  />

                  {/* Subtle top vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, transparent 35%)",
                    }}
                  />

                  {/* ── Top-left category pill ── */}
                  <div
                    className="absolute"
                    style={{ top: "18px", left: "18px" }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "5px 13px",
                        borderRadius: "9999px",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.78)",
                        background: "rgba(0,0,0,0.42)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.16)",
                      }}
                    >
                      {p.category}
                    </span>
                  </div>

                  {/* ── Top-right status pill ── */}
                  <div
                    className="absolute"
                    style={{ top: "18px", right: "18px" }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "5px 13px",
                        borderRadius: "9999px",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: p.badgeText,
                        background: p.badgeBg,
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: `1px solid ${p.badgeBorder}`,
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>

                  {/* ── Bottom content stack ── */}
                  <div
                    className="absolute"
                    style={{ bottom: 0, left: 0, right: 0, padding: "28px 24px" }}
                  >
                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "clamp(20px, 2.2vw, 26px)",
                        fontWeight: 700,
                        color: "#ffffff",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                        marginBottom: "7px",
                      }}
                    >
                      {p.name}
                    </h3>

                    {/* Subtitle */}
                    <p
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.55)",
                        lineHeight: 1.5,
                        marginBottom: "18px",
                      }}
                    >
                      {p.tagline}
                    </p>

                    {/* Price + CTA row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        paddingTop: "16px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "rgba(255,255,255,0.55)",
                        }}
                      >
                        From{" "}
                        <span style={{ color: "#ffffff", fontWeight: 700 }}>
                          {p.price}
                        </span>
                      </span>

                      <span
                        className="poss-arrow"
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.7)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          letterSpacing: "0.01em",
                        }}
                      >
                        View
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 14 14"
                          fill="none"
                          style={{ display: "block" }}
                        >
                          <path
                            d="M2 12L12 2M12 2H5M12 2V9"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Paper Thickness Section ── */}
      <PaperThickness />

      {/* About preview */}
      <Reveal delayMs={180}>
        <section className="px-6 md:px-10 mb-20">
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden p-10 md:p-16 relative transition-all duration-355"
            style={{ background: "linear-gradient(135deg, var(--card-bg) 0%, rgba(var(--card-bg-rgb), 0.8) 50%, var(--card-bg) 100%)", border: "1px solid var(--card-border)" }}>
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg text-xs font-semibold text-text-muted transition-colors duration-355"
              style={{ background: "rgba(var(--hover-bg-rgb), 0.07)", border: "1px solid var(--card-border)" }}>
              CERTIFIED · FSC · ISO 9001
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-text-dim transition-colors duration-355">✦ ABOUT MERCURY</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-xl text-text-primary transition-colors duration-355">
              A press built by <span className="gradient-text-3">designers</span>, for designers.
            </h2>
            <p className="text-sm md:text-base text-text-muted max-w-lg leading-relaxed mb-8 transition-colors duration-355">
              We started Mercury Products in a 400 sq-ft Brooklyn studio in 2014 with one Heidelberg, two letterpresses, and an obsession with color science. A decade later we run a 12,000 sq-ft facility with Komori UV presses, hot-foil decks, die-cutters, and an in-house finishing studio — but we still answer every email ourselves.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              {[{ v: "2014", l: "FOUNDED" }, { v: "42", l: "CRAFTERS" }, { v: "4 cities", l: "STUDIOS" }].map((s) => (
                <div key={s.l}>
                  <p className="text-2xl font-bold gradient-text">{s.v}</p>
                  <p className="text-xs tracking-widest uppercase text-text-dim mt-0.5 transition-colors duration-355">{s.l}</p>
                </div>
              ))}
            </div>
            <Link href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors">
              Learn more about us →
            </Link>
          </div>
        </section>
      </Reveal>

      {/* Testimonials */}
      <Reveal delayMs={220}>
        <section className="px-6 md:px-10 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold tracking-widest uppercase text-text-dim transition-colors duration-355">★ KIND WORDS</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-text-primary transition-colors duration-355">
                  Brands that <span className="gradient-text">press</span> with us.
                </h2>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-lg">★</span>)}
                </div>
                <span className="text-sm text-text-muted transition-colors duration-355">4.9 from 1,200+ projects</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.map((t) => (
                <div key={t.name} className="card p-7 transition-all duration-355">
                  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="mb-5 opacity-20 text-text-primary transition-colors duration-355">
                    <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6.4 7.2 10.4H12V24H0zm20 0V14.4C20 6.4 24.8 1.6 34.4 0L36 2.4C30.4 3.6 27.6 6.4 27.2 10.4H32V24H20z" fill="currentColor" />
                  </svg>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed mb-6 transition-colors duration-355">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                       style={{ background: t.color }}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary transition-colors duration-355">{t.name}</p>
                      <p className="text-xs text-text-dim transition-colors duration-355">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/testimonials" className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors">
                Read all client stories →
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Services overview ── */}
      <Reveal delayMs={240}>
        <section className="px-6 md:px-10 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-5">
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-dim)", transition: "color 0.3s ease" }}>⊙ WHAT WE DO</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
              <h2 style={{ fontSize: "clamp(32px,5vw,58px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--text-primary)", transition: "color 0.3s ease" }}>
                Every print service,<br /><span className="gradient-text-warm">under one roof.</span>
              </h2>
              <Link href="/services" className="view-all-link" style={{ fontSize: "14px", color: "var(--text-muted)", textDecoration: "none", fontWeight: 500, whiteSpace: "nowrap", transition: "color 0.3s ease" }}>
                View all services →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: "◈", title: "UV Direct Printing", desc: "Print directly onto rigid substrates — acrylic, glass, wood, sunpack, foam board, and canvas — with UV-cured inks that bond permanently.", color: "#f472b6", href: "/services" },
                { icon: "◎", title: "Flex & Banner Printing", desc: "Front-lit, back-lit, and one-way-vision media for outdoor hoardings, illuminated signage, window displays and vehicle graphics.", color: "#22d3ee", href: "/services" },
                { icon: "◇", title: "Display & Standee Systems", desc: "Aluminium standee frames, product display stands, and custom retail fixtures — fabricated and branded end-to-end.", color: "#818cf8", href: "/services" },
                { icon: "◉", title: "Vinyl Stickers & Decals", desc: "Cast vinyl die-cut stickers with UV-resistant inks and gloss or matte laminate. Waterproof and rated 5+ years outdoors.", color: "#4ade80", href: "/services" },
                { icon: "◈", title: "Industrial Packaging", desc: "Rigid sunpack boxes and trays fabricated to precise specifications for industrial, pharmaceutical, and commercial applications.", color: "#fb923c", href: "/services" },
                { icon: "◎", title: "Custom Solutions", desc: "Bespoke print and fabrication for unique requirements. Our team will scope, design, and produce whatever you have in mind.", color: "#c084fc", href: "/services" },
              ].map((s) => (
                <Link key={s.title} href={s.href} className="service-card-link">
                  <span style={{ fontSize: "20px", color: s.color, display: "block", marginBottom: "14px" }}>{s.icon}</span>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", margin: "0 0 8px 0", letterSpacing: "-0.01em", transition: "color 0.3s ease" }}>{s.title}</h3>
                  <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.65, margin: 0, transition: "color 0.3s ease" }}>{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Trust indicators ── */}
      <Reveal delayMs={260}>
        <section className="px-6 md:px-10 mb-20">
          <div className="max-w-6xl mx-auto">
            <div style={{ borderRadius: "24px", padding: "40px 48px", background: "var(--thickness-bg)", border: "1px solid var(--thickness-border)", display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "space-between", alignItems: "center", transition: "all 0.3s ease" }}>
              {[
                { icon: "✓", label: "Printing Since 1990", sub: "35+ years of expertise" },
                { icon: "⚡", label: "3–5 Day Delivery", sub: "Rush orders available" },
                { icon: "✦", label: "Custom Sizes", sub: "Any dimension, any substrate" },
                { icon: "◎", label: "UV-Cured Inks", sub: "Fade-proof, weather-resistant" },
                { icon: "★", label: "4.9/5 Rating", sub: "1,200+ completed projects" },
              ].map((t) => (
                <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "18px", color: "var(--text-dim)", transition: "color 0.3s ease" }}>{t.icon}</span>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", margin: 0, lineHeight: 1.2, transition: "color 0.3s ease" }}>{t.label}</p>
                    <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0, marginTop: "2px", transition: "color 0.3s ease" }}>{t.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Final CTA ── */}
      <Reveal delayMs={280}>
        <section className="px-6 md:px-10 mb-24">
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative transition-all duration-355"
            style={{ background: "linear-gradient(135deg, var(--card-bg) 0%, rgba(var(--card-bg-rgb), 0.8) 40%, var(--card-bg) 100%)", border: "1px solid var(--card-border)", padding: "clamp(48px,6vw,80px)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 80% at 50% 40%,rgba(236,72,153,0.09),transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", textAlign: "center" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-dim)", display: "block", marginBottom: "18px", transition: "color 0.3s ease" }}>✦ GET STARTED</span>
              <h2 style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--text-primary)", margin: "0 0 18px 0", transition: "color 0.3s ease" }}>
                Ready to print<br /><span className="gradient-text">something unforgettable?</span>
              </h2>
              <p style={{ fontSize: "17px", color: "var(--text-muted)", maxWidth: "480px", lineHeight: 1.65, margin: "0 auto 36px", transition: "color 0.3s ease" }}>
                Tell us what you need — custom sizes, materials, finishes, quantities. We'll quote within 24 hours.
              </p>
              <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/quote" className="gradient-btn flex items-center gap-2 text-sm font-bold px-8 py-4 rounded-full text-white" style={{ fontSize: "15px" }}>
                  Get a Free Quote →
                </Link>
                <Link href="/catalog" className="browse-products-btn" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", borderRadius: "9999px", background: "rgba(var(--hover-bg-rgb), 0.07)", border: "1px solid var(--card-border)", color: "var(--text-muted)", fontWeight: 600, fontSize: "15px", textDecoration: "none", transition: "all 0.3s ease" }}>
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
