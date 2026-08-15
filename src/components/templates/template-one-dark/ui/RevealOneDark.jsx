"use client";

import useReveal from "@/hooks/useReveal";

export default function RevealOneDark({ as: Tag = "div", className = "", children, isDemo = false, ...rest }) {
  const { ref, isActive } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`t1d-reveal ${isActive ? "t1d-active" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
