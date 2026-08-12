"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Home", href: "", key: "home" },
  { label: "About", href: "/about", key: "about" },
  { label: "Services", href: "/services", key: "services" },
];

export default function NavbarTwoDark({ page = "home", slug }) {
  const base = slug ? `/doctor/${slug}` : "#";
  const navRef = useRef(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return undefined;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        nav.classList.remove("shadow-lg");
      } else if (currentScroll > lastScroll.current) {
        nav.style.transform = "translateY(-100%)";
      } else {
        nav.style.transform = "translateY(0)";
        nav.classList.add("shadow-lg");
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="t2d-nav backdrop-blur-xl border-b shadow-sm flex justify-between items-center px-5 md:px-16 h-20 w-full z-50 top-0 sticky transition-transform duration-300"
    >
      <Link href={base} className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
        Dr. Specialist
      </Link>

      <div className="hidden md:flex space-x-8">
        {NAV_LINKS.map((link) => {
          const href = link.href ? `${base}${link.href}` : base;
          const isActive = page === link.key;

          return (
            <Link
              key={link.key}
              href={href}
              className={
                isActive
                  ? "font-label-caps text-label-caps text-tertiary border-b-2 border-tertiary pb-1"
                  : "font-label-caps text-label-caps text-on-surface-variant hover:text-tertiary transition-colors duration-300"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <Link
        href={`${base}/appointment`}
        className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 rounded-lg luxury-button-hover transition-all active:scale-95"
      >
        Book Appointment
      </Link>
    </nav>
  );
}
