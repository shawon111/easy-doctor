"use client";
import useReveal from "@/hooks/useReveal";


/**
 * Drop-in replacement for elements that had `class="reveal"` (optionally
 * plus a Tailwind `delay-*` class) in the original HTML.
 *
 * Usage:
 *   <Reveal className="delay-200"><h1>...</h1></Reveal>
 */
export default function Reveal({ as: Tag = "div", className = "", children, isDemo = false, ...rest }) {
  const { ref, isActive } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isActive ? "active" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
