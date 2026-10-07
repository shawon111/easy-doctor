import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-border py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-200">
          <div className="lg:col-span-2">
            <Link className="flex items-center gap-2 mb-4" href="/">
              <Image
                alt="Docxio Logo"
                className="h-8 w-auto object-contain"
                src="/docxio-logo.webp"
                width={120}
                height={32}
              />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mb-4">
              Professional practice websites for physicians, surgeons, and medical specialists. Designed to clinic-grade standards with intuitive self-service backoffice control.
            </p>
            <div className="text-xs text-slate-500">
              Serving registered medical practitioners across Bangladesh and South Asia.
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Platform</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><Link className="hover:text-slate-900 transition-colors" href="/templates">6 Clinical Templates</Link></li>
              <li><Link className="hover:text-slate-900 transition-colors" href="#how-it-works">How It Works</Link></li>
              <li><Link className="hover:text-slate-900 transition-colors" href="#dashboard-preview">Doctor Portal</Link></li>
              <li><Link className="hover:text-slate-900 transition-colors" href="#pricing">Pricing &amp; Plans</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Doctor Support</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><Link className="hover:text-slate-900 transition-colors" href="#faq">Help &amp; FAQ</Link></li>
              <li><Link className="hover:text-slate-900 transition-colors" href="#">Appointment Guide</Link></li>
              <li><Link className="hover:text-slate-900 transition-colors" href="#">Website Creation Guide</Link></li>
              <li><Link className="hover:text-slate-900 transition-colors" href="#">Domain Connection Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Legal &amp; Trust</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><Link className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</Link></li>
              <li><Link className="hover:text-slate-900 transition-colors" href="#">Terms of Service</Link></li>
              <li><Link className="hover:text-slate-900 transition-colors" href="#">Subscription Policy</Link></li>
              <li><Link className="hover:text-slate-900 transition-colors" href="#">Security Architecture</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© 2025 Docxio. All rights reserved. Exclusively for medical professionals.</div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-secondary text-[16px]">lock</span> 256-Bit SSL Protected</span>
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-emerald-600 text-[16px]">verified</span> BMDC Standard Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
