export default function FooterTwo({ content = {} }) {
  const brandName = content.brandName || "Doctor";
  const tagline = content.tagline || "";
  const phone = content.phone || "";
  const resourceLinks = content.resourceLinks || [];
  const copyright = content.copyright || "";
  const legalLinks = content.legalLinks || [];

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        <div className="md:col-span-4 space-y-6">
          <div className="font-headline-md text-headline-md text-primary">{brandName}</div>
          {tagline ? (
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
              {tagline}
            </p>
          ) : null}
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="font-label-caps text-label-caps text-on-surface uppercase">Practice</h4>
          <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
            <li><a className="hover:text-primary transition-colors" href="#">Our Approach</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Specializations</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Clinical Research</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Patient Stories</a></li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="font-label-caps text-label-caps text-on-surface uppercase">Resources</h4>
          <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
            {resourceLinks.map((link) => (
              <li key={link.label}>
                <a className="hover:text-primary transition-colors" href={link.href || "#"}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 space-y-4 md:text-right">
          <h4 className="font-label-caps text-label-caps text-on-surface uppercase">
            International Hotline
          </h4>
          {phone ? (
            <p className="font-headline-sm text-headline-sm text-on-surface">{phone}</p>
          ) : null}
          <div className="flex md:justify-end gap-4 mt-6">
            <a
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary text-on-surface-variant hover:text-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">language</span>
            </a>
            <a
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary text-on-surface-variant hover:text-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-label-caps text-on-surface-variant/60">
        {copyright ? <div>{copyright}</div> : null}
        {legalLinks.length > 0 ? (
          <div className="flex gap-8">
            {legalLinks.map((link) => (
              <span key={link.label}>{link.label}</span>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
