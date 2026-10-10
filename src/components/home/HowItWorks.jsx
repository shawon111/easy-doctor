import SubdomainBannerForm from "./SubdomainBannerForm";

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-slate-border" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-secondary bg-secondary-soft px-3 py-1 rounded-full border border-secondary/20">Zero Developer Dependency</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-heading tracking-tight mt-4 mb-4">
            You Don’t Need a Developer. <br />
            <span className="font-serif font-normal italic text-secondary">You Just Need Docxio.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            Choose a doctor website template, add your practice details, and publish when your website is ready to share.
          </p>
        </div>
        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="bg-surface-subtle p-8 lg:p-10 rounded-2xl border border-slate-border relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="w-12 h-12 rounded-xl bg-primary text-white font-bold text-xl flex items-center justify-center">01</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">6 Curated Styles</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Choose a Template</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Choose from six website templates, each available in light and dark styles.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-secondary flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">palette</span>
              Handcrafted clinical typography &amp; palettes
            </div>
          </div>
          {/* Step 2 (Emphasized Subdomain Step) */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl border-2 border-secondary shadow-window relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
              Included with website access
            </div>
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="w-12 h-12 rounded-xl bg-secondary text-white font-bold text-xl flex items-center justify-center">02</span>
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">                Docxio web address</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Choose a Subdomain</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Choose a Docxio subdomain, such as <span className="font-mono font-bold text-slate-900">dr-yourname.docxio.com</span>, when publishing. A subdomain is included with website access.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-700 bg-emerald-50 -mx-4 -mb-4 p-4 rounded-b-xl flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">lock</span>
              HTTPS for published sites
            </div>
          </div>
          {/* Step 3 */}
          <div className="bg-surface-subtle p-8 lg:p-10 rounded-2xl border border-slate-border relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="w-12 h-12 rounded-xl bg-primary text-white font-bold text-xl flex items-center justify-center">03</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Publish when ready</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Publish Your Website</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Add your practice details, review the generated site, and publish it when the information is ready to share.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-secondary flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
              Review before sharing with patients
            </div>
          </div>
        </div>
        {/* Interactive Subdomain Claimer Banner */}
        <div className="mt-14 bg-slate-900 text-white rounded-2xl p-8 lg:p-10 shadow-elevated border border-slate-800" id="subdomain-claimer">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                <span className="material-symbols-outlined text-[16px]">link</span> Included With Every Plan
              </div>
              <h4 className="text-2xl font-extrabold text-white">Claim Your Free Doctor Subdomain Now</h4>
              <p className="text-slate-400 text-sm mt-1">Start with a Docxio subdomain. Custom domains require separate registration and DNS setup.</p>
            </div>
            <SubdomainBannerForm />
          </div>
        </div>
      </div>
    </section>
  );
}
