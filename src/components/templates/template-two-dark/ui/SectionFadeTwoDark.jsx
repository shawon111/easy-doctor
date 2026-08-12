"use client";

import useReveal from "@/hooks/useReveal";

export default function SectionFadeTwoDark({ as: Tag = "section", className = "", children, ...rest }) {
  const { ref, isActive } = useReveal({ threshold: 0.1, rootMargin: "0px" });

  return (
    <Tag
      ref={ref}
      className={`t2d-fade-section ${isActive ? "t2d-active" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
