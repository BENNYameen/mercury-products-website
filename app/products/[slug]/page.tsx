import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
  SITE_URL,
  COMPANY_NAME,
} from "@/lib/products";
import ProductDetail from "./ProductDetail";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  const title = `${product.name} — UV Printing | ${COMPANY_NAME}`;
  const description = `${product.shortDesc} ${product.features.slice(0, 3).join(". ")}.`;
  const url = `${SITE_URL}/products/${slug}`;

  return {
    title,
    description,
    keywords: [
      product.name,
      ...product.tags.map((t) => t.toLowerCase()),
      "UV printing India",
      "custom print",
      COMPANY_NAME,
    ],
    openGraph: {
      title,
      description,
      url,
      images: [{ url: product.img, width: 900, height: 600, alt: product.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [product.img] },
    alternates: { canonical: url },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.longDesc,
    image: product.gallery,
    brand: { "@type": "Brand", name: COMPANY_NAME },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@type": "Organization", name: COMPANY_NAME },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/catalog` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${SITE_URL}/products/${slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProductDetail product={product} related={related} />
    </>
  );
}
