"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Navbar({ content = {}, slug, page }) {
  const params = useParams();
  const resolvedSlug = slug ?? params?.slug;
  const basePath = `/doctor/${resolvedSlug}`;
  const navLinks = content.navLinks || [];
  const brandName = content.brandName || "Doctor";
  const appointmentCta = content.appointmentCta || "Book Appointment";

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto">
        <Link href={basePath} className="text-headline-md font-headline-md font-bold text-on-surface">
          {brandName}
        </Link>

        <div className="hidden md:flex items-center gap-gutter">
          {navLinks.map((link) => {
            const href = link.href ? `${basePath}${link.href}` : basePath;
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
            <Link className="block px-6 py-2.5 w-full h-full" href={`${basePath}/appointment`}>
              {appointmentCta}
            </Link>
          </button>
        </div>

        <button type="button" className="md:hidden text-primary" aria-label="Menu">
          <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>
            menu
          </span>
        </button>
      </div>
    </nav>
  );
}
