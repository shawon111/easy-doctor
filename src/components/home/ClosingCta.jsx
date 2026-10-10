import Link from "next/link";

export default function ClosingCta() {
  return (
    <section className="py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          Doctor Website Builder
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Your Doctor Website Can Start
          <br />
          <span className="font-serif font-normal italic text-blue-400">in About 2 Minutes.</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto mb-10">
          Share your professional profile, clinic details, and appointment options on a website you can manage through Docxio.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            className="w-full sm:w-auto px-8 py-4 bg-secondary text-white font-bold text-sm rounded-xl hover:bg-secondary-hover transition-colors shadow-lg shadow-blue-600/20"
            href="/register"
          >
            Create My Website Now
          </Link>
          <Link
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-slate-200 font-bold text-sm rounded-xl hover:bg-slate-700 transition-colors border border-slate-700"
            href="/templates"
          >
            Explore All 6 Templates
          </Link>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-emerald-400 text-[16px]">check</span> Free Subdomain Included
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-emerald-400 text-[16px]">check</span> Zero Tech Knowledge Needed
          </span>
        </div>
      </div>
    </section>
  );
}
