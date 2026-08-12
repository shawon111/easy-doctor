import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "", key: "home" },
  { label: "About", href: "/about", key: "about" },
  { label: "Services", href: "/services", key: "services" },
];

export default function NavbarOneDark({ page = "home", slug }) {
  const base = `/doctor/${slug}`;

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center h-20 px-10 max-w-[1440px] mx-auto">
        <Link href={base} className="text-headline-md font-bold tracking-tighter text-secondary">
          DR. JULIAN VANCE
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const href = link.href ? `${base}${link.href}` : base;
            const isActive = page === link.key;

            return (
              <Link
                key={link.key}
                href={href}
                className={
                  isActive
                    ? "text-primary font-bold text-label-md tracking-widest uppercase border-b-2 border-primary py-1 transition-colors duration-300"
                    : "text-on-surface-variant hover:text-primary transition-colors duration-300 text-label-md tracking-widest uppercase"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-bold text-label-md tracking-widest uppercase glow-button"
            href={`${base}/appointment`}
          >
            Book Now
          </Link>
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
