"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function NavbarTwoDark({ page = "home", slug, content = {} , isDemo = false}) {
  const base = isDemo ? `/preview/${slug}` : "";
  const navLinks = content.navLinks || [];
  const brandName = content.brandName || "Doctor";
  const appointmentCta = content.appointmentCta || "Book Appointment";
  const appointmentCtaLink = content.appointmentCtaLink || "/appointment";
  const appointmentHref = appointmentCtaLink.startsWith("/")
    ? `${base}${appointmentCtaLink}`
    : appointmentCtaLink;
  const [isOpen, setIsOpen] = useState(false);

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
      <Link href={base || "/"} className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
        {brandName}
      </Link>

      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => {
          const href = link.href ? `${base}${link.href}` : base || "/";
          const isActive = page === link.key;

          return (
            <Link
              key={link.key || link.label}
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
        href={appointmentHref}
        className="hidden md:block bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 rounded-lg luxury-button-hover transition-all active:scale-95"
      >
        {appointmentCta}
      </Link>
      <button type="button" className="md:hidden text-primary" aria-label="Menu" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
        <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>menu</span>
      </button>
      {isOpen ? (
        <div className="absolute left-0 top-20 w-full border-t border-outline-variant bg-[#0e141a] p-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.key || link.label} href={link.href ? `${base}${link.href}` : base || "/"} onClick={() => setIsOpen(false)}>{link.label}</Link>
            ))}
            <Link href={appointmentHref} onClick={() => setIsOpen(false)} className="bg-primary text-on-primary rounded-lg px-6 py-3 text-center">{appointmentCta}</Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
