"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Replaces the original vanilla-JS scroll reveal:
 *
 *   const observer = new IntersectionObserver((entries) => {
 *     entries.forEach(entry => {
 *       if (entry.isIntersecting) entry.target.classList.add('active');
 *     });
 *   }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
 *   document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
 *
 * Instead of one global observer that queries the whole DOM, each component
 * that needs the "reveal" effect gets its own observer scoped to its own
 * element via this hook - no document.querySelectorAll needed.
 */
export default function useReveal({ threshold = 0.1, rootMargin = "0px 0px -50px 0px" } = {}) {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          // Matches the original behavior of observing only until revealed once
          observer.unobserve(entry.target);
        }
      });
    }, { threshold, rootMargin });

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isActive };
}
