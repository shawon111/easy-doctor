"use client";

import useReveal from "@/hooks/useReveal";

export default function SectionFadeOneDark({ as: Tag = "section", className = "", children, isDemo = false, ...rest }) {
  const { ref, isActive } = useReveal({ threshold: 0.1, rootMargin: "0px" });

  return (
    <Tag
      ref={ref}
      className={`t1d-fade-section ${isActive ? "t1d-active" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
