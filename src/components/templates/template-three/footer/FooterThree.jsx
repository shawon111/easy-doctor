import Link from "next/link";

export default function FooterThree({ slug, content }) {
  const base = slug ? `/doctor/${slug}` : "#";
  const brandName = content?.brandName ?? "Doctor";
  const copyright = content?.copyright ?? "";
  const resourceLinks = content?.resourceLinks ?? [];
  const specialties = content?.specialties ?? [];
  const newsletter = content?.newsletter ?? {};

  return (
    <footer className="bg-surface-container-low w-full py-12 border-t border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="space-y-4">
          <div className="font-headline-md text-headline-md font-bold text-primary">{brandName}</div>
          <p className="font-label-sm text-label-sm text-on-surface-variant">{copyright}</p>
        </div>

        <div>
          <h5 className="font-headline-md text-[18px] mb-6 text-on-surface">Navigation</h5>
          <ul className="space-y-3">
            {resourceLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-headline-md text-[18px] mb-6 text-on-surface">Specialties</h5>
          <ul className="space-y-3">
            {specialties.map((specialty) => (
              <li key={specialty.label}>
                <Link
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href={`${base}/services`}
                >
                  {specialty.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-headline-md text-[18px] mb-6 text-on-surface">{newsletter.heading}</h5>
          <p className="text-on-surface-variant text-sm mb-4">{newsletter.body}</p>
          <div className="flex gap-2">
            <input
              className="bg-white border border-outline-variant rounded-lg px-4 py-2 flex-1 focus:border-primary focus:ring-0 transition-colors"
              placeholder={newsletter.placeholder}
              type="email"
            />
            <button type="button" className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-sm shadow-sm">
              {newsletter.buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
