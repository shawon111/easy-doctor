"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Navbar({ content = {}, slug, page , isDemo = false}) {
  const params = useParams();
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

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto">
        <Link href={basePath || "/"} className="text-headline-md font-headline-md font-bold text-on-surface">
          {brandName}
        </Link>

        <div className="hidden md:flex items-center gap-gutter">
          {navLinks.map((link) => {
            const href = link.href ? `${basePath}${link.href}` : basePath || "/";
            const isActive = page ? page === link.key : false;

            return (
              <Link
                key={link.key || link.label}
                href={href}
                className={
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary text-body-md font-body-md py-1 transition-colors duration-300"
                    : "text-on-surface-variant hover:text-primary transition-colors duration-300 text-body-md font-body-md"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <button
            type="button"
            className="bg-primary text-on-primary rounded-lg font-button text-button scale-95 active:scale-90 transition-transform"
          >
            <Link className="block px-6 py-2.5 w-full h-full" href={appointmentHref}>
              {appointmentCta}
            </Link>
          </button>
        </div>

        <button type="button" className="md:hidden text-primary" aria-label="Menu" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
          <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>
            menu
          </span>
        </button>
      </div>
      {isOpen ? (
        <div className="md:hidden border-t border-outline-variant bg-surface px-margin-mobile py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.key || link.label} href={link.href ? `${basePath}${link.href}` : basePath || "/"} onClick={() => setIsOpen(false)} className="text-on-surface-variant">
                {link.label}
              </Link>
            ))}
            <Link href={appointmentHref} onClick={() => setIsOpen(false)} className="bg-primary text-on-primary rounded-lg px-6 py-2.5 text-center">
              {appointmentCta}
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
