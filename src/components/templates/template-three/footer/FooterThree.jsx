import Link from "next/link";

export default function FooterThree({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <footer className="bg-surface-container-low w-full py-12 border-t border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="space-y-4">
          <div className="font-headline-md text-headline-md font-bold text-primary">Dr. MedLink</div>
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            © 2024 Dr. MedLink. Advanced Clinical Excellence. Empowering health through precision technology.
          </p>
        </div>

        <div>
          <h5 className="font-headline-md text-[18px] mb-6 text-on-surface">Navigation</h5>
          <ul className="space-y-3">
            <li>
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
                Clinic Locations
              </a>
            </li>
            <li>
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
                Patient Portal
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-headline-md text-[18px] mb-6 text-on-surface">Specialties</h5>
          <ul className="space-y-3">
            <li>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href={`${base}/services`}>
                Cardiology
              </Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href={`${base}/services`}>
                Neurology
              </Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href={`${base}/services`}>
                Longevity Science
              </Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href={`${base}/services`}>
                Genomics
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-headline-md text-[18px] mb-6 text-on-surface">Newsletter</h5>
          <p className="text-on-surface-variant text-sm mb-4">Latest health insights delivered to your inbox.</p>
          <div className="flex gap-2">
            <input
              className="bg-white border border-outline-variant rounded-lg px-4 py-2 flex-1 focus:border-primary focus:ring-0 transition-colors"
              placeholder="Email address"
              type="email"
            />
            <button type="button" className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-sm shadow-sm">
              JOIN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
