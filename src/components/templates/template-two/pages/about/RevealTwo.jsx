"use client";

// Shared client component — the only interactive piece in this set.
// The original <script> used an IntersectionObserver to fade+slide each
// top-level section's direct child div into view on scroll. That needs
// the browser, so it's isolated here. Every other component stays a
// Server Component and simply wraps its content in <RevealTwo>, passing
// server-rendered children straight through the client boundary.

import { useEffect, useRef, useState } from "react";

export default function RevealTwo({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}
