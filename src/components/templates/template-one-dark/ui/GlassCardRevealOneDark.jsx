"use client";

import useReveal from "@/hooks/useReveal";

export default function GlassCardRevealOneDark({ className = "", children, isDemo = false, ...rest }) {
  const { ref, isActive } = useReveal({ threshold: 0.1, rootMargin: "0px" });

  return (
    <div
      ref={ref}
      className={`t1d-glass-card-enter ${isActive ? "t1d-active" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
}
