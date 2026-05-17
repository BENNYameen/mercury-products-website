import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";
import { SITE_URL, COMPANY_NAME } from "@/lib/products";

export const metadata: Metadata = {
  title: "Product Catalog — UV Printing",
  description:
    "Browse the full Mercury Products UV printing catalog. Sunpack, foam board, vinyl stickers, flex banners, acrylic, glass, wood, canvas, display stands and industrial packaging.",
  openGraph: {
    title: `Product Catalog | ${COMPANY_NAME}`,
    description: "Complete UV printing product catalog — signage, display, stickers, flex, and more.",
    url: `${SITE_URL}/catalog`,
  },
  alternates: { canonical: `${SITE_URL}/catalog` },
};

const catalogSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Product Catalog | ${COMPANY_NAME}`,
  description: "UV printing products catalog including sunpack, flex, acrylic, glass, wood, canvas, vinyl stickers and display stands.",
  url: `${SITE_URL}/catalog`,
  provider: { "@type": "Organization", name: COMPANY_NAME, url: SITE_URL },
};

export default function CatalogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }} />
      <CatalogClient />
    </>
  );
}
