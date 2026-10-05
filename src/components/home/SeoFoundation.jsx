import Link from "next/link";

export default function SeoFoundation() {
  return (
    <section className="py-24 lg:py-32 bg-surface-subtle border-b border-slate-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-secondary mb-3 inline-block">Search Engine Foundation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-heading tracking-tight mb-5">
              Engineered for Legitimate <br />
              <span className="font-serif font-normal italic text-slate-800">Google Discoverability.</span>
            </h2>
            <p className="text-base text-slate-muted leading-relaxed mb-8">
              Generic website builders ignore medical structure. Docxio writes Schema.org MedicalBusiness data, BMDC identification fields, and chamber geolocation tags so search engines clearly index your credentials.
            </p>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                <span><strong className="text-slate-900">Structured Medical Entity Markup</strong> — Schema.org/Physician tags generated for every hospital attachment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                <span><strong className="text-slate-900">Local Chamber GEO Data</strong> — Pinpoint Dhanmondi, Panthapath, Chittagong, or Sylhet clinic addresses.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                <span><strong className="text-slate-900">Automated Sitemap &amp; Robots.txt</strong> — Clean search indexing protocols built without third-party plugins.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                <span><strong className="text-slate-900">Custom Domain or Subdomain</strong> — Immediate HTTPS encryption protocol for high browser trust.</span>
              </li>
            </ul>
          </div>
          {/* Google Structured Search Result Card */}
          <div className="lg:col-span-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-border shadow-elevated">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">preview</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Google Search Simulation</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">Schema.org Valid</span>
              </div>
              {/* Google Result Layout */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">D</div>
                  <div className="text-xs text-slate-500 font-mono">https://dr-tariqul.docxio.site</div>
                </div>
                <Link className="text-lg font-semibold text-blue-700 hover:underline block leading-snug" href="#">
                  Prof. Dr. Tariqul Islam | Cardiologist in Dhaka | Popular Diagnostic
                </Link>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Senior Consultant in Cardiology. BMDC Reg. A-48291. Visiting Popular Diagnostic Centre Dhanmondi (Sat-Wed 5 PM – 9 PM) &amp; Square Hospital. Direct serial WhatsApp support.
                </p>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200 text-[11px] text-slate-700 font-semibold">
                  <span className="bg-white px-2 py-1 rounded border border-slate-200 shadow-sm">📍 Dhanmondi, Dhaka</span>
                  <span className="bg-white px-2 py-1 rounded border border-slate-200 shadow-sm">🕒 5:00 PM – 9:00 PM</span>
                  <span className="bg-white px-2 py-1 rounded border border-slate-200 shadow-sm">📞 01711-XXXXXX</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 text-blue-900 rounded-lg text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                <span>All metadata tags update automatically when you edit your dashboard.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
