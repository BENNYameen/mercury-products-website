"use client";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "6px", listStyle: "none", margin: 0, padding: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {i > 0 && (
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px" }}>›</span>
            )}
            {item.href ? (
              <Link href={item.href} className="breadcrumb-link" style={{ fontSize: "13px", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.15s ease" }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", fontWeight: 500 }} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
