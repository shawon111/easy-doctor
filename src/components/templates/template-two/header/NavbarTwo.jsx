"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function NavbarTwo({ content = {}, slug, page , isDemo = false}) {
  const params = useParams();
  const pathname = usePathname();
  const resolvedSlug = slug ?? params?.slug;
  const basePath = isDemo ? `/preview/${resolvedSlug}` : "";
  const navLinks = content.navLinks || [];
  const brandName = content.brandName || "Doctor";
  const appointmentCta = content.appointmentCta || "Book Appointment";
  const appointmentCtaLink = content.appointmentCtaLink || "/appointment";
  const appointmentHref = appointmentCtaLink.startsWith("/")
    ? `${basePath}${appointmentCtaLink}`
    : appointmentCtaLink;
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const nav = navRef.current;
      if (!nav) return;
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

  const isActive = (href, key) => {
    if (page && key) return page === key;
    const path = href ? `${basePath}${href}` : basePath;
    if (href === "" || !href) {
      return pathname === basePath || pathname === `${basePath}/`;
    }
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <nav
      ref={navRef}
      className="bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant shadow-sm flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 w-full z-50 top-0 sticky transition-transform duration-300"
    >
      <Link href={basePath || "/"} className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
        {brandName}
      </Link>

      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => {
          const href = link.href ? `${basePath}${link.href}` : basePath || "/";
          const active = isActive(link.href, link.key);

          return (
            <Link
              key={link.key || link.label}
              href={href}
              className={
                active
                  ? "font-label-caps text-label-caps text-primary border-b-2 border-primary pb-1"
                  : "font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300"
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
        <div className="absolute left-0 top-20 w-full border-t border-outline-variant bg-surface p-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.key || link.label} href={link.href ? `${basePath}${link.href}` : basePath || "/"} onClick={() => setIsOpen(false)}>{link.label}</Link>
            ))}
            <Link href={appointmentHref} onClick={() => setIsOpen(false)} className="bg-primary text-on-primary rounded-lg px-6 py-3 text-center">{appointmentCta}</Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
