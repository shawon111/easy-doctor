import Link from "next/link";

export default function FooterOneDark({ content = {}, slug }) {
  const base = slug ? `/doctor/${slug}` : "#";
  const brandName = content.brandName || "Doctor";
  const tagline = content.tagline || "";
  const copyright = content.copyright || "";
  const phone = content.phone || "";
  const officeHours = content.officeHours;
  const officeHoursLabel = content.officeHoursLabel || "Office Hours";
  const urgentCareLabel = content.urgentCareLabel || "Urgent Care Line";
  const resourceLinks = content.resourceLinks || [];
  const legalLinks = content.legalLinks || [];

  return (
    <footer className="bg-surface-container-lowest w-full pt-[120px] pb-12 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-10 py-12 max-w-[1440px] mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-bold tracking-tighter text-secondary mb-8">{brandName}</div>
          {tagline ? (
            <p className="text-on-surface-variant text-base mb-10 leading-relaxed max-w-xs">
              {tagline}
            </p>
          ) : null}
          <div className="flex gap-4">
            <a
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary hover:bg-primary/5 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            {phone ? (
              <a
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary hover:bg-primary/5 transition-all"
                href={`tel:${phone}`}
              >
                <span className="material-symbols-outlined">call</span>
              </a>
            ) : (
              <a
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary hover:bg-primary/5 transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">call</span>
              </a>
            )}
          </div>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-secondary text-sm tracking-widest uppercase mb-10">Quick Links</h4>
          <ul className="space-y-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
                  href={link.href?.startsWith("/") ? `${base}${link.href}` : link.href || base}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-secondary text-sm tracking-widest uppercase mb-10">Patient Resources</h4>
          <ul className="space-y-6">
            {resourceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
                  href={link.href?.startsWith("/") ? `${base}${link.href}` : link.href || "#"}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-secondary text-sm tracking-widest uppercase mb-10">{officeHoursLabel}</h4>
          {officeHours ? (
            <p className="text-on-surface-variant text-sm mb-10">{officeHours}</p>
          ) : null}
          {phone ? (
            <div className="bg-primary-container/10 p-6 rounded-2xl border border-primary-container/20">
              <p className="text-primary-fixed font-bold text-xs tracking-widest uppercase mb-2">{urgentCareLabel}</p>
              <p className="text-secondary font-bold text-2xl">{phone}</p>
            </div>
          ) : null}
        </div>
      </div>

      {copyright ? (
        <div className="max-w-[1440px] mx-auto px-10 pt-12 mt-12 border-t border-white/5 text-center">
          <p className="text-on-surface-variant/60 text-xs tracking-widest uppercase font-bold">
            {copyright}
          </p>
        </div>
      ) : null}
    </footer>
  );
}
