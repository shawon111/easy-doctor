"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
];

export default function Navbar() {
  const params = useParams();
  const { slug } = params;
  const preUrl = `doctor/${slug}`;
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto">
        <div className="text-headline-md font-headline-md font-bold text-on-surface">
          Dr. Julian Vance
        </div>

        <div className="hidden md:flex items-center gap-gutter">
          {NAV_LINKS.map((link) => (

            <Link
              key={link.label}
              href={`/${preUrl}/${link.href}`}
              className={
                link.active
                  ? "text-primary font-semibold border-b-2 border-primary text-body-md font-body-md py-1 transition-colors duration-300"
                  : "text-on-surface-variant hover:text-primary transition-colors duration-300 text-body-md font-body-md"
              }
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            className="bg-primary text-on-primary rounded-lg font-button text-button scale-95 active:scale-90 transition-transform"
          >
            <Link className="block px-6 py-2.5 w-full h-full" href={`/${preUrl}/appointment`}>Book Appointment</Link>
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
