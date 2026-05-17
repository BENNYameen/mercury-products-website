import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE_URL, COMPANY_NAME } from "@/lib/products";

export const metadata: Metadata = {
  title: "FAQ — UV Printing Questions Answered",
  description:
    "Frequently asked questions about Mercury Products UV printing services — file prep, turnaround times, materials, pricing, shipping, and more.",
  openGraph: {
    title: `FAQ | ${COMPANY_NAME}`,
    description: "Common questions about our UV printing services, materials, file requirements, and delivery.",
    url: `${SITE_URL}/faq`,
  },
  alternates: { canonical: `${SITE_URL}/faq` },
};

const faqs = [
  {
    category: "Getting Started",
    items: [
      { q: "How do I get a quote?", a: "Fill out our online quote form with your product type, size, quantity, and finish requirements — we respond within 24 hours with a detailed, itemised quote. For urgent enquiries, call us directly." },
      { q: "What is the minimum order quantity?", a: "Minimum order quantities vary by product. Most UV print on rigid substrates can be ordered from 1 piece. Vinyl stickers have a minimum of 10 pieces per design. Industrial packaging is from 10 units. We'll confirm minimums in your quote." },
      { q: "Do you offer samples before placing a full order?", a: "Yes — for orders above a certain value, we offer printed samples on your chosen substrate. Contact us to discuss sample options. We also maintain a free material sample pack that we can dispatch on request." },
      { q: "Do you work with individuals or only businesses?", a: "We work with everyone — individual designers, small businesses, agencies, and large enterprises. Our quote process is the same regardless of company size." },
    ],
  },
  {
    category: "Files & Artwork",
    items: [
      { q: "What file formats do you accept?", a: "We accept PDF, AI, EPS, TIFF, and high-resolution PNG files. PDF is preferred for most jobs. All files should be supplied at the final print size, in CMYK colour mode, with 3–5mm bleed and all fonts embedded or outlined." },
      { q: "What resolution should my file be?", a: "For UV printing on rigid substrates (short viewing distance): minimum 150 dpi at final print size, ideally 300 dpi. For large-format flex banners (viewed from distance): 72–100 dpi at final print size is sufficient." },
      { q: "Do you provide colour proofs before printing?", a: "Yes — we send a digital PDF proof for every job before going to press. Physical proofs on the actual substrate are available at additional cost for high-value or colour-critical jobs." },
      { q: "Can you help with artwork or design?", a: "We offer basic artwork modifications (resize, bleed extension, colour conversion) as part of our prepress service. For full design work, we can refer you to our trusted design partners." },
      { q: "What colour mode should I use?", a: "CMYK for print files. If you supply RGB files, our prepress team will convert them — but colour shifts can occur, particularly in highly saturated blues and greens. For Pantone-critical work, provide Pantone references in addition to the CMYK values." },
    ],
  },
  {
    category: "Production & Turnaround",
    items: [
      { q: "How long does production take?", a: "Standard turnaround is 3–7 business days from artwork approval, depending on the product. Express options (1–2 days) are available for most products at a surcharge. Contact us for rush requirements." },
      { q: "When does the turnaround clock start?", a: "Production begins after artwork has been approved. A job submitted on Monday with same-day artwork approval will be in production by Monday. Jobs submitted late on Friday begin the following Monday." },
      { q: "Can I make changes after approving the proof?", a: "Once a proof is approved and production has begun, changes are not possible without incurring costs. We strongly recommend reviewing proofs carefully before approval. Contact us immediately if you spot an error after approval." },
    ],
  },
  {
    category: "Materials & Finishes",
    items: [
      { q: "What is the difference between 3mm and 5mm sunpack?", a: "3mm sunpack is lighter and more flexible — suitable for indoor signage and applications where weight matters. 5mm provides better rigidity and is the standard for outdoor and structural applications. 8mm is for extra rigidity or where the material will be handled repeatedly." },
      { q: "Are UV-printed materials suitable for outdoor use?", a: "UV-cured inks on sunpack PVC, aluminium composite, and cast acrylic are suitable for outdoor use. Durability depends on the substrate — sunpack and aluminium are weather-resistant, while foam board and canvas are primarily indoor materials." },
      { q: "What is the difference between gloss and matte finish?", a: "Gloss finish produces vivid, high-contrast prints with a reflective surface. Matte finish reduces glare and gives a more tactile, premium feel — popular for interior environments and high-end display applications." },
      { q: "Can you print white ink?", a: "Yes — our UV printers support white ink as a base layer on transparent or coloured substrates, enabling full-opacity prints on clear acrylic, transparent vinyl, or coloured materials." },
    ],
  },
  {
    category: "Shipping & Delivery",
    items: [
      { q: "Do you ship across India?", a: "Yes — we ship to all major cities and most locations across India via courier partners. Delivery times vary by destination, typically 1–3 business days after dispatch." },
      { q: "How are products packaged for shipping?", a: "Rigid prints are sandwiched between protective boards and wrapped in bubble wrap. Large flex banners are rolled on cardboard cores. Display stands are flat-packed in reinforced boxes." },
      { q: "Do you offer international shipping?", a: "We can arrange international shipping for bulk orders. Please contact us with your location and requirements for a shipping quotation." },
    ],
  },
  {
    category: "Pricing",
    items: [
      { q: "Why do you use custom pricing rather than fixed prices?", a: "UV print pricing depends on substrate, size, quantity, finish, and turnaround — combinations that create thousands of possible price points. Custom quoting ensures you pay the right price for exactly what you need, without padding." },
      { q: "Do you offer volume discounts?", a: "Yes — per-unit pricing decreases with volume on most products. The savings vary by product type. Our quotes always show the per-unit cost so you can compare quantities." },
      { q: "Is there a setup or plate charge?", a: "No setup charges for standard UV printing. For custom die-cutting shapes (beyond simple rectangles), a CNC tooling charge may apply — always stated transparently in your quote." },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "clamp(40px,6vw,80px) clamp(24px,4vw,48px) 100px" }}>
        {/* Header */}
        <Reveal>
          <div style={{ marginBottom: "60px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)" }}>⊙ FAQ</span>
            </div>
            <h1 style={{ fontSize: "clamp(40px,6vw,70px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#ffffff", margin: "0 0 18px 0" }}>
              Questions,{" "}
              <span style={{ background: "linear-gradient(90deg,#22d3ee,#818cf8,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                answered.
              </span>
            </h1>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", lineHeight: 1.65, margin: 0 }}>
              Everything you need to know about our UV printing services. Can't find your answer? <Link href="/contact" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "underline" }}>Contact us directly.</Link>
            </p>
          </div>
        </Reveal>

        {/* FAQ categories */}
        {faqs.map((cat, ci) => (
          <Reveal key={cat.category} delayMs={ci * 60}>
            <div style={{ marginBottom: "52px" }}>
              <h2 style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.3)", margin: "0 0 16px 0" }}>{cat.category}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {cat.items.map((item, i) => (
                  <details key={i} className="faq-item" style={{ borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden" }}>
                    <summary style={{ padding: "18px 22px", fontSize: "15px", fontWeight: 600, color: "#ffffff", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", userSelect: "none" }}>
                      {item.q}
                      <span className="faq-chevron" style={{ color: "rgba(255,255,255,0.3)", fontSize: "20px", flexShrink: 0, marginLeft: "16px", fontWeight: 300 }}>+</span>
                    </summary>
                    <div style={{ padding: "0 22px 20px", fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        {/* Contact CTA */}
        <Reveal delayMs={200}>
          <div style={{ borderRadius: "24px", padding: "36px 40px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#ffffff", margin: "0 0 10px 0" }}>Still have questions?</h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", margin: "0 0 24px 0", lineHeight: 1.6 }}>
              Our team responds to every enquiry within 24 hours, Monday to Friday.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 24px", borderRadius: "9999px", background: "linear-gradient(135deg,#ec4899,#f97316)", color: "#ffffff", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                Contact Us →
              </Link>
              <Link href="/quote" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 22px", borderRadius: "9999px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                Get a Quote
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
