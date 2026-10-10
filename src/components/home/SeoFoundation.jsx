import Link from "next/link";

export default function SeoFoundation() {
  return (
    <section className="py-24 lg:py-32 bg-surface-subtle border-b border-slate-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-secondary mb-3 inline-block">Search Engine Foundation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-heading tracking-tight mb-5">
              SEO Foundations for <br />
              <span className="font-serif font-normal italic text-slate-800">Doctor Websites.</span>
            </h2>
            <p className="text-base text-slate-muted leading-relaxed mb-8">
              Docxio provides editable page titles and descriptions, canonical URLs, crawl files, and structured data based on the doctor and clinic details entered in the profile. These foundations help search engines understand a site but do not guarantee ranking or indexing.
            </p>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                <span><strong className="text-slate-900">Doctor and clinic structured data</strong> — Schema.org Physician data can include supplied doctor and clinic details.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                <span><strong className="text-slate-900">Clinic locations</strong> — Structured data can include the clinic addresses supplied in the profile.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                <span><strong className="text-slate-900">Sitemaps and robots.txt</strong> — Public crawl routes are generated for published, indexable sites.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                <span><strong className="text-slate-900">Custom domain or subdomain</strong> — Publish on a Docxio subdomain or connect a domain with the dashboard DNS instructions.</span>
              </li>
            </ul>
          </div>
          {/* Google Structured Search Result Card */}
          <div className="lg:col-span-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-border shadow-elevated">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">preview</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Illustrative Search Preview</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">Example Only</span>
              </div>
              {/* Google Result Layout */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">D</div>
                  <div className="text-xs text-slate-500 font-mono">https://doctor.docxio.com</div>
                </div>
                <Link className="text-lg font-semibold text-blue-700 hover:underline block leading-snug" href="#">
                  Doctor Name | Medical Specialty | City
                </Link>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Doctor profile, clinic location, and appointment details entered for this example website.
                </p>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200 text-[11px] text-slate-700 font-semibold">
                  <span className="bg-white px-2 py-1 rounded border border-slate-200 shadow-sm">Clinic location</span>
                  <span className="bg-white px-2 py-1 rounded border border-slate-200 shadow-sm">Visiting hours</span>
                  <span className="bg-white px-2 py-1 rounded border border-slate-200 shadow-sm">Contact options</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 text-blue-900 rounded-lg text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                <span>Review page metadata after updates. Search engines control when and how they display it.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
