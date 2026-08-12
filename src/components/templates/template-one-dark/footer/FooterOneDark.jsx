import Link from "next/link";

export default function FooterOneDark({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <footer className="bg-surface-container-lowest w-full pt-[120px] pb-12 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-10 py-12 max-w-[1440px] mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-bold tracking-tighter text-secondary mb-8">DR. JULIAN VANCE</div>
          <p className="text-on-surface-variant text-base mb-10 leading-relaxed max-w-xs">
            Precision medicine for a life lived to its fullest potential. Clinical elegance, personal connection.
          </p>
          <div className="flex gap-4">
            <a
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary hover:bg-primary/5 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary hover:bg-primary/5 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-secondary text-sm tracking-widest uppercase mb-10">Quick Links</h4>
          <ul className="space-y-6">
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href={base}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href={`${base}/about`}>
                About
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href={`${base}/services`}>
                Medical Services
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href={`${base}/appointment`}>
                Patient Portal
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-secondary text-sm tracking-widest uppercase mb-10">Patient Resources</h4>
          <ul className="space-y-6">
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href={`${base}/appointment#schedule`}>
                Clinic Locations
              </Link>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href="#">
                New Patient Forms
              </a>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" href={`${base}/appointment#faq`}>
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-bold text-secondary text-sm tracking-widest uppercase mb-10">Office Hours</h4>
          <p className="text-on-surface-variant text-sm mb-4">Mon - Fri: 8:00 - 18:00</p>
          <p className="text-on-surface-variant text-sm mb-4">Saturday: 9:00 - 13:00</p>
          <p className="text-on-surface-variant text-sm mb-10">Sunday: Closed</p>
          <div className="bg-primary-container/10 p-6 rounded-2xl border border-primary-container/20">
            <p className="text-primary-fixed font-bold text-xs tracking-widest uppercase mb-2">Urgent Care Line</p>
            <p className="text-secondary font-bold text-2xl">+1 (555) 012-3456</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-10 pt-12 mt-12 border-t border-white/5 text-center">
        <p className="text-on-surface-variant/60 text-xs tracking-widest uppercase font-bold">
          © 2024 Dr. Julian Vance. Precision Excellence in Practice.
        </p>
      </div>
    </footer>
  );
}
