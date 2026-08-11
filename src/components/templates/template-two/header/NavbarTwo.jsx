"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Home", href: "" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" }
];

export default function NavbarTwo() {
  const params = useParams();
  const pathname = usePathname();
  const slug = params?.slug;
  const basePath = `/doctor/${slug}`;

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

  const isActive = (href) => {
    const path = href ? `${basePath}${href}` : basePath;
    if (href === "") {
      return pathname === basePath || pathname === `${basePath}/`;
    }
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <nav
      ref={navRef}
      className="bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant shadow-sm flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 w-full z-50 top-0 sticky transition-transform duration-300"
    >
      <div className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
        Dr. Specialist
      </div>

      <div className="hidden md:flex space-x-8">
        {NAV_LINKS.map((link) => {
          const href = link.href ? `${basePath}${link.href}` : basePath;
          const active = isActive(link.href);

          return (
            <Link
              key={link.label}
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
        href={`${basePath}/appointment`}
        className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 rounded-lg luxury-button-hover transition-all active:scale-95"
      >
        Book Appointment
      </Link>
    </nav>
  );
}
