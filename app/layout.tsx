import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import StickyQuoteCTA from "@/components/StickyQuoteCTA";
import { SITE_URL, COMPANY_NAME } from "@/lib/products";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${COMPANY_NAME}`,
    default: `${COMPANY_NAME} — Premium UV Printing Since 1990`,
  },
  description:
    "Mercury Products is a premium UV printing company in India. We print on sunpack, foam board, acrylic, glass, wood, canvas, vinyl, and flex — delivering professional-grade signage, display, and branding solutions.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "UV printing India",
    "sunpack printing",
    "flex banner printing",
    "acrylic UV print",
    "vinyl stickers India",
    "one way vision",
    "display stands India",
    "foam board printing",
    "canvas UV print",
    "wood UV print",
    "glass UV print",
    "custom signage",
    "large format printing",
    "Mercury Products",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — Premium UV Printing Since 1990`,
    description:
      "Premium UV printing on sunpack, acrylic, glass, wood, canvas, vinyl, and flex. Professional signage and display solutions.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} — Premium UV Printing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} — Premium UV Printing`,
    description:
      "Premium UV printing on sunpack, acrylic, glass, wood, canvas, vinyl, and flex.",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: COMPANY_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-default.jpg`,
  description:
    "Mercury Products is a premium UV printing company offering high-quality printing on sunpack, foam board, acrylic, glass, wood, canvas, vinyl stickers, flex banners, and display stands.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "241 Wythe Ave",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11249",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-98765-43210",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
  foundingDate: "1990",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased" style={{ background: "#05070d", color: "#fff" }}>
        <div className="site-premium-bg">
          <div className="site-grid-overlay pointer-events-none" />
          <div className="site-vertical-bands pointer-events-none" />
          <div className="site-noise pointer-events-none" />
          <div className="site-vignette pointer-events-none" />
          <div className="relative z-10">
            <Navbar />
            <main className="site-main">{children}</main>
            <Footer />
          </div>
        </div>
        <CookieConsent />
        <StickyQuoteCTA />
      </body>
    </html>
  );
}
