import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-border/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link className="flex items-center gap-2" href="/">
            <Image
              alt="Docxio Logo"
              className="object-contain"
              width={160}
              height={36}
              src="/docxio-logo.webp"
            />
          </Link>
          <span className="hidden md:inline-flex text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
            Physician CMS
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors" href="#templates">
            Clinical Templates
          </Link>
          <Link className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors" href="#dashboard-preview">
            Doctor Portal
          </Link>
          <Link className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors" href="#faq">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 transition-colors" href="/login">
            Log In
          </Link>
          <Link
            className="inline-flex items-center justify-center text-sm font-semibold px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-slate-800 transition-all shadow-sm"
            href="/dashboard/website/create"
          >
            Create My Website
            <span className="material-symbols-outlined ml-1.5 text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
