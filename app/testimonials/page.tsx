import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE_URL, COMPANY_NAME } from "@/lib/products";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews",
  description:
    "What our clients say about Mercury Products UV printing. Real reviews from businesses across retail, exhibitions, branding, and signage.",
  openGraph: {
    title: `Client Testimonials | ${COMPANY_NAME}`,
    description: "Real client reviews and success stories from Mercury Products customers.",
    url: `${SITE_URL}/testimonials`,
  },
  alternates: { canonical: `${SITE_URL}/testimonials` },
};

const testimonials = [
  { quote: "Mercury transformed our retail POS completely. The UV prints on sunpack came out vivid and clean — exactly what we spec'd. Delivered 3 days ahead of schedule.", name: "Rahul Mehta", role: "Marketing Director, RetailEdge India", initials: "RM", color: "#f472b6", rating: 5, product: "Sunpack UV Direct" },
  { quote: "The acrylic UV prints for our awards night were phenomenal. Crystal clear, the colours popped, and the edges were laser-cut to perfection. Every guest commented on them.", name: "Priya Sharma", role: "Events Manager, Luminar Events", initials: "PS", color: "#22d3ee", rating: 5, product: "Acrylic UV Print" },
  { quote: "We needed backlit flex graphics for our airport lightboxes in Mumbai and Delhi. Mercury supplied perfect panels — even colour, no hotspots. Exactly as specified.", name: "Arun Kapoor", role: "Brand Operations, FlyHigh Aviation", initials: "AK", color: "#818cf8", rating: 5, product: "Back Lit Flex" },
  { quote: "Vinyl stickers for our product launches. Ordered 5,000 pieces, multiple designs — delivered in 2 days, colours spot-on, cut perfectly. Will not go anywhere else.", name: "Deepika Nair", role: "Founder, Craft Co. Brand Studio", initials: "DN", color: "#4ade80", rating: 5, product: "Vinyl Stickers" },
  { quote: "The canvas UV prints for our hotel lobby are breathtaking. The quality is gallery standard and they've held up beautifully for two years without any fading.", name: "Vikram Singh", role: "Interior Design Lead, The Elara Group", initials: "VS", color: "#fb923c", rating: 5, product: "Canvas UV Print" },
  { quote: "We spec'd custom 5mm sunpack trays for our electronics division. Mercury got the dimensions exact, supplied 500 units, and the quality was consistent throughout.", name: "Anjali Gupta", role: "Procurement Manager, TechLink Manufacturing", initials: "AG", color: "#c084fc", rating: 5, product: "5mm Sunpack Box & Tray" },
  { quote: "The aluminium standees for our exhibition looked extremely premium. Snap-frame system worked perfectly — we changed graphics three times during the event without issues.", name: "Siddharth Rao", role: "Exhibition Manager, ExpoCraft", initials: "SR", color: "#f472b6", rating: 5, product: "Aluminium Standee" },
  { quote: "Our one-way-vision window graphics for the Mumbai store rollout were flawless. Perfect print, clean install, and the inside-out visibility was exactly as described.", name: "Meera Joshi", role: "Visual Merchandising, Trendhive Retail", initials: "MJ", color: "#22d3ee", rating: 5, product: "One Way Vision" },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: testimonials.length,
    bestRating: "5",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
    reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: "5" },
  })),
};

export default function TestimonialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(40px,6vw,80px) clamp(24px,4vw,48px) 100px" }}>
        {/* Header */}
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)" }}>★ CLIENT REVIEWS</span>
            </div>
            <h1 style={{ fontSize: "clamp(40px,6vw,70px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#ffffff", margin: "0 0 18px 0" }}>
              Brands that{" "}
              <span style={{ background: "linear-gradient(90deg,#22d3ee,#818cf8,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                trust us.
              </span>
            </h1>
            {/* Rating badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "12px 20px", borderRadius: "9999px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", gap: "3px" }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#fbbf24", fontSize: "16px" }}>★</span>)}
              </div>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>4.9 / 5</span>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>from 1,200+ projects</span>
            </div>
          </div>
        </Reveal>

        {/* Testimonials grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "20px", marginBottom: "64px" }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delayMs={i * 40}>
              <div style={{ padding: "32px", borderRadius: "24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", gap: "20px", height: "100%" }}>
                {/* Stars */}
                <div style={{ display: "flex", gap: "3px" }}>
                  {[...Array(t.rating)].map((_, i) => <span key={i} style={{ color: "#fbbf24", fontSize: "14px" }}>★</span>)}
                </div>

                {/* Quote */}
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.72)", lineHeight: 1.72, margin: 0, flex: 1 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Product tag */}
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "9999px", color: t.color, background: `${t.color}18`, border: `1px solid ${t.color}35`, alignSelf: "flex-start" }}>
                  {t.product}
                </span>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, color: "#ffffff", flexShrink: 0 }}>
                    {t.initials}
                  </div>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", margin: 0 }}>{t.name}</p>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", margin: 0, marginTop: "2px" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delayMs={160}>
          <div style={{ borderRadius: "24px", padding: "48px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#ffffff", margin: "0 0 12px 0" }}>Join 1,200+ satisfied clients</h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", margin: "0 auto 28px", maxWidth: "400px", lineHeight: 1.6 }}>
              Get a free, no-obligation quote for your next print project in 24 hours.
            </p>
            <Link href="/quote" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", borderRadius: "9999px", background: "linear-gradient(135deg,#ec4899,#f97316)", color: "#ffffff", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
              Get a Free Quote →
            </Link>
          </div>
        </Reveal>
      </div>
    </>
  );
}
