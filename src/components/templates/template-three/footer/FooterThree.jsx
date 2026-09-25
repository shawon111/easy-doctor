import Link from "next/link";
import { templateThreeDefaults } from "@/content/defaults/template-three";
import { pickLinks } from "@/lib/content/normalize-links";

export default function FooterThree({ slug, content, isDemo = false }) {
  const base = isDemo ? `/preview/${slug}` : "";
  const toHref = (href) => (href?.startsWith("/") ? `${base}${href}` : href || base || "/");
  const brandName = content?.brandName ?? "Doctor";
  const copyright = content?.copyright ?? "";
  const resourceLinks = pickLinks(content?.resourceLinks, templateThreeDefaults.footer.resourceLinks);
  const specialties = content?.specialties ?? [];
  const newsletter = content?.newsletter ?? {};

  return (
    <footer className="bg-surface-container-low w-full py-12 border-t border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="space-y-4">
          <div className="font-headline-md text-headline-md font-bold text-primary capitalize">{brandName}</div>
          <p className="font-label-sm text-label-sm text-on-surface-variant">{copyright}</p>
        </div>

        <div>
          <h5 className="font-headline-md text-[18px] mb-6 text-on-surface">Navigation</h5>
          <ul className="space-y-3">
            {resourceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href={toHref(link.href)}
                >
                  {link.label}
                </Link>
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
          <p className="text-on-surface-variant text-sm mb-6">{newsletter.body}</p>
          <Link
            className="inline-flex items-center gap-2 text-primary font-label-sm hover:gap-3 transition-all"
            href={`${base}/appointment`}
          >
            Book an appointment
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
