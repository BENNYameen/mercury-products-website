"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

export default function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Promote to GPU layer only for the duration of the animation,
            // then release so we don't hold a compositing layer indefinitely.
            node.style.willChange = "opacity, transform";
            setVisible(true);
            const release = setTimeout(() => {
              node.style.willChange = "auto";
            }, delayMs + 1100);
            observer.disconnect();
            return () => clearTimeout(release);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
