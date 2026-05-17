import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blog";

const BASE = "https://www.mercuryproducts.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                     lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/catalog`,        lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/services`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/quote`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`,            lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/testimonials`,   lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog`,           lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/shapes`,         lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/thickness`,      lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy`,        lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms`,          lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((b) => ({
    url: `${BASE}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
