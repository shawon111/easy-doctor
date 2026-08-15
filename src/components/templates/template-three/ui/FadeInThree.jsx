"use client";

import useReveal from "@/hooks/useReveal";

export default function FadeInThree({ as: Tag = "div", className = "", children, isDemo = false, ...rest }) {
  const { ref, isActive } = useReveal({ threshold: 0.1, rootMargin: "0px" });

  return (
    <Tag
      ref={ref}
      className={`t3-fade-in ${isActive ? "t3-active" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
