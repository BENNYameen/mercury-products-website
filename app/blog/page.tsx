import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { blogPosts, blogCategories } from "@/lib/blog";
import { SITE_URL, COMPANY_NAME } from "@/lib/products";
import BlogNewsletter from "./BlogNewsletter";

export const metadata: Metadata = {
  title: "Print Knowledge — Blog & Resources",
  description:
    "UV printing guides, material comparisons, file preparation tips, and industry knowledge from the Mercury Products team.",
  openGraph: {
    title: `Blog & Resources | ${COMPANY_NAME}`,
    description: "UV printing guides, material comparisons, and file preparation tips.",
    url: `${SITE_URL}/blog`,
  },
  alternates: { canonical: `${SITE_URL}/blog` },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(40px,6vw,80px) clamp(24px,4vw,48px) 100px" }}>
      {/* Header */}
      <Reveal>
        <div style={{ marginBottom: "56px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)" }}>⊙ KNOWLEDGE BASE</span>
          </div>
          <h1 style={{ fontSize: "clamp(44px,6vw,72px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#ffffff", margin: "0 0 16px 0" }}>
            Print{" "}
            <span style={{ background: "linear-gradient(90deg,#22d3ee,#818cf8,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              knowledge.
            </span>
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", maxWidth: "560px", lineHeight: 1.65, margin: 0 }}>
            Guides, material comparisons, file prep tips, and industry insight from the Mercury Products team.
          </p>
        </div>
      </Reveal>

      {/* Featured post */}
      <Reveal delayMs={60}>
        <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderRadius: "28px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", marginBottom: "40px" }}
          className="featured-post-grid featured-post-card">
          <div style={{ overflow: "hidden", aspectRatio: "16/10" }}>
            <img src={featured.img} alt={featured.title} className="featured-post-img" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} loading="eager" decoding="async" />
          </div>
          <div style={{ padding: "40px 44px", background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#22d3ee" }}>FEATURED</span>
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "10px" }}>·</span>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.38)" }}>{featured.category}</span>
              </div>
              <h2 style={{ fontSize: "clamp(22px,2.8vw,32px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.025em", lineHeight: 1.2, margin: "0 0 14px 0" }}>{featured.title}</h2>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{featured.excerpt}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "28px" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{formatDate(featured.date)} · {featured.readTime}</span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>Read guide →</span>
            </div>
          </div>
        </Link>
      </Reveal>

      {/* Post grid */}
      <Reveal delayMs={100}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="blog-grid">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card"
              style={{ textDecoration: "none", borderRadius: "20px", overflow: "hidden", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column" }}>
              <div style={{ overflow: "hidden", aspectRatio: "3/2" }}>
                <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" decoding="async" />
              </div>
              <div style={{ padding: "22px 24px 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
                    <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)" }}>{post.category}</span>
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", lineHeight: 1.3, letterSpacing: "-0.015em", margin: "0 0 10px 0" }}>{post.title}</h3>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.42)", lineHeight: 1.6, margin: 0, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>{post.excerpt}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px" }}>
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.28)" }}>{formatDate(post.date)}</span>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.45)" }}>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>

      {/* Newsletter CTA */}
      <Reveal delayMs={140}>
        <BlogNewsletter />
      </Reveal>
    </div>
  );
}
