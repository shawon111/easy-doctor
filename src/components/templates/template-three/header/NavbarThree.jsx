"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Home", href: "", key: "home" },
  { label: "About", href: "/about", key: "about" },
  { label: "Services", href: "/services", key: "services" },
  { label: "Appointments", href: "/appointment", key: "appointment" },
];

export default function NavbarThree({ page = "home", slug }) {
  const base = slug ? `/doctor/${slug}` : "#";
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return undefined;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add("t3-nav-scrolled");
      } else {
        nav.classList.remove("t3-nav-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="t3-nav fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/30 h-20"
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full">
        <Link href={base} className="font-headline-md text-headline-md font-bold text-primary">
          Dr. MedLink
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const href = link.href ? `${base}${link.href}` : base;
            const isActive = page === link.key;

            return (
              <Link
                key={link.key}
                href={href}
                className={
                  isActive
                    ? "font-body-md text-body-md text-primary border-b-2 border-primary pb-1 transition-colors duration-200"
                    : "font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href={`${base}/appointment`}
          className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-headline-md text-[16px] hover:opacity-90 active:scale-95 transition-all"
        >
          Book Appointment
        </Link>
      </div>
    </nav>
  );
}
