import Link from "next/link";

export default function FooterOne({ content = {}, slug }) {
  const base = slug ? `/doctor/${slug}` : "#";
  const brandName = content.brandName || "Doctor";
  const tagline = content.tagline || "";
  const copyright = content.copyright || "";
  const phone = content.phone || "";
  const officeHours = content.officeHours;
  const officeHoursLabel = content.officeHoursLabel || "Office Hours";
  const urgentCareLabel = content.urgentCareLabel || "Urgent Care Line:";
  const resourceLinks = content.resourceLinks || [];
  const legalLinks = content.legalLinks || [];

  return (
    <footer className="bg-surface-container-low w-full rounded-t-xl pt-section-padding pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-stack-lg max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-headline-md font-headline-md font-bold text-primary mb-6">
            {brandName}
          </div>
          {tagline ? (
            <p className="text-on-surface-variant text-body-md mb-6">
              {tagline}
            </p>
          ) : null}
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            {phone ? (
              <a
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
                href={`tel:${phone}`}
              >
                <span className="material-symbols-outlined">call</span>
              </a>
            ) : (
              <a
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">call</span>
              </a>
            )}
          </div>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-on-surface mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors text-body-md"
                  href={link.href?.startsWith("/") ? `${base}${link.href}` : link.href || "#"}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-on-surface mb-6">Patient Resources</h4>
          <ul className="space-y-4">
            {resourceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors text-body-md"
                  href={link.href?.startsWith("/") ? `${base}${link.href}` : link.href || "#"}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-on-surface mb-6">{officeHoursLabel}</h4>
          {officeHours ? (
            <p className="text-on-surface-variant text-body-md mb-6">{officeHours}</p>
          ) : null}
          {phone ? (
            <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
              <p className="text-primary font-bold text-body-md">{urgentCareLabel}</p>
              <p className="text-on-surface font-headline-md">{phone}</p>
            </div>
          ) : null}
        </div>
      </div>

      {copyright ? (
        <div className="max-w-container-max mx-auto px-margin-desktop pt-8 mt-8 border-t border-outline-variant/30 text-center">
          <p className="text-on-surface-variant text-body-md">
            {copyright}
          </p>
        </div>
      ) : null}
    </footer>
  );
}
