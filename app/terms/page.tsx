import type { Metadata } from "next";
import { SITE_URL, COMPANY_NAME, COMPANY_EMAIL } from "@/lib/products";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions governing the use of Mercury Products services and website.`,
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "clamp(40px,6vw,80px) clamp(24px,4vw,48px) 100px" }}>
      <h1 style={{ fontSize: "clamp(36px,5vw,56px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#ffffff", margin: "0 0 8px 0" }}>Terms & Conditions</h1>
      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)", marginBottom: "48px" }}>Last updated: 1 January 2026</p>

      {[
        {
          title: "1. Acceptance of terms",
          body: `By using this website or placing an order with ${COMPANY_NAME}, you agree to these terms and conditions. If you do not agree, please do not use our services.`,
        },
        {
          title: "2. Ordering and quotes",
          body: "All quotes are valid for 30 days from issue and are subject to confirmation of artwork and final specifications. Orders are confirmed upon written acceptance of a quote and provision of approved artwork. We reserve the right to decline orders at our discretion.",
        },
        {
          title: "3. Artwork and file responsibility",
          body: "The client is responsible for the accuracy and legality of all submitted artwork, including content, trademarks, and copyright. We do not conduct legal review of content. By submitting artwork, you confirm you have rights to reproduce it.",
        },
        {
          title: "4. Proofs and approval",
          body: "A digital proof will be provided for approval before production begins. Production commences only after written approval. We are not responsible for errors in approved proofs. Changes after approval may incur additional charges.",
        },
        {
          title: "5. Turnaround and delivery",
          body: "Turnaround times stated are estimates from artwork approval and are not guaranteed unless expressly agreed in writing. We are not liable for delays caused by courier services, force majeure, or events beyond our control.",
        },
        {
          title: "6. Payment",
          body: "Payment terms are as stated in your quote. For new clients, full payment is required before production. Established clients may have net-30 terms by prior agreement. Late payments may attract a 2% monthly charge.",
        },
        {
          title: "7. Returns and defects",
          body: "We guarantee our print quality. If a product is defective due to our error, we will reprint or refund at our discretion. Claims must be made within 5 business days of delivery with photographic evidence. We do not accept returns for correctly produced goods.",
        },
        {
          title: "8. Limitation of liability",
          body: "Our liability is limited to the value of the order in question. We are not liable for indirect or consequential losses. This does not affect statutory rights.",
        },
        {
          title: "9. Intellectual property",
          body: `${COMPANY_NAME} retains copyright in all designs created by us. Client-supplied designs remain the property of the client. We may photograph finished work for portfolio use unless instructed otherwise in writing.`,
        },
        {
          title: "10. Governing law",
          body: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of India.",
        },
        {
          title: "11. Contact",
          body: `For questions about these terms, contact us at ${COMPANY_EMAIL}.`,
        },
      ].map((section) => (
        <div key={section.title} style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", margin: "0 0 10px 0" }}>{section.title}</h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: 0 }}>{section.body}</p>
        </div>
      ))}
    </div>
  );
}
