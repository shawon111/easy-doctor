"use client";

import { useEffect, useRef } from "react";

export default function ParallaxImageThree({ src, alt, className = "" }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return undefined;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      image.style.transform = `translateY(${scrolled * 0.05}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <img
      ref={imageRef}
      className={`relative z-10 w-full h-[500px] object-cover rounded-2xl border border-outline-variant shadow-xl transition-transform ${className}`}
      alt={alt}
      src={src}
    />
  );
}
