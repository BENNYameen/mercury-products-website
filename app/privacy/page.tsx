import type { Metadata } from "next";
import { SITE_URL, COMPANY_NAME, COMPANY_EMAIL } from "@/lib/products";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Mercury Products privacy policy — how we collect, use, and protect your personal information.`,
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "clamp(40px,6vw,80px) clamp(24px,4vw,48px) 100px" }}>
      <h1 style={{ fontSize: "clamp(36px,5vw,56px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#ffffff", margin: "0 0 8px 0" }}>Privacy Policy</h1>
      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)", marginBottom: "48px" }}>Last updated: 1 January 2026</p>

      {[
        {
          title: "1. Who we are",
          body: `${COMPANY_NAME} ("Mercury Products", "we", "us", "our") operates the website at ${SITE_URL}. This Privacy Policy explains how we collect, use, and protect personal information when you use our website or contact us about our services.`,
        },
        {
          title: "2. Information we collect",
          body: "We may collect personal information including your name, email address, phone number, company name, and project details when you submit a quote request, contact form, or newsletter subscription. We may also collect usage data (pages visited, device type, location) via analytics tools.",
        },
        {
          title: "3. How we use your information",
          body: "We use your information to respond to enquiries, process quote requests, send project updates, and improve our services. With your consent, we may send occasional marketing communications. We do not sell or rent your personal data to third parties.",
        },
        {
          title: "4. Cookies",
          body: "We use essential cookies necessary for the website to function and, with your consent, analytics cookies to understand usage patterns. You can manage cookie preferences via the banner on your first visit or by clearing browser cookies.",
        },
        {
          title: "5. Data retention",
          body: "We retain personal data for as long as necessary to fulfil the purpose for which it was collected, or as required by law. Quote and project records are typically retained for 3 years.",
        },
        {
          title: "6. Your rights",
          body: "You have the right to access, correct, or delete your personal data, and to object to its processing. To exercise these rights, contact us at the email address below. We will respond within 30 days.",
        },
        {
          title: "7. Security",
          body: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or alteration. Our website uses HTTPS encryption for all data in transit.",
        },
        {
          title: "8. Third-party services",
          body: "We may use third-party services including analytics providers and form processors. These providers have their own privacy policies and process data on our behalf under appropriate data processing agreements.",
        },
        {
          title: "9. Changes to this policy",
          body: "We may update this Privacy Policy from time to time. The 'Last updated' date above indicates when changes were made. Continued use of our website constitutes acceptance of the updated policy.",
        },
        {
          title: "10. Contact",
          body: `For any privacy-related enquiries, contact us at ${COMPANY_EMAIL}.`,
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
