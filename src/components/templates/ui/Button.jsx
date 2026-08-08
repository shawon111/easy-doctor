"use client";
import { useState } from "react";

/**
 * Replaces this original global script that ran on every <button>:
 *
 *   document.querySelectorAll('button').forEach(btn => {
 *     btn.addEventListener('mouseenter', () => {
 *       btn.style.transform = 'translateY(-2px) scale(1.02)';
 *     });
 *     btn.addEventListener('mouseleave', () => {
 *       btn.style.transform = 'translateY(0) scale(1)';
 *     });
 *   });
 *
 * Rather than a document-wide querySelectorAll + manual style mutation,
 * each Button instance owns its own hover state and derives its inline
 * transform from it - the React way of doing the same micro-interaction.
 * Any button in the app that should have this lift-on-hover effect
 * renders through this component.
 */
export default function Button({ children, className = "", as: Tag = "button", ...rest }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tag
      className={className}
      style={{
        transform: isHovered ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
