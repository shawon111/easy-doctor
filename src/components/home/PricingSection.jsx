import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface-subtle border-b border-slate-border" id="pricing">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-secondary bg-secondary-soft px-3 py-1 rounded-full border border-secondary/20">Transparent Physician Billing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-heading tracking-tight mt-4 mb-4">
            Simple Pricing, Built for Doctors.
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            Choose your billing cadence. All plans include full template access, free docxio.site subdomain, and instant dashboard updates.
          </p>
        </div>
        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Tier 1: Monthly */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-border shadow-subtle flex flex-col justify-between hover:shadow-elevated transition-all">
            <div>
              <span className="text-[11px] uppercase font-bold tracking-widest text-slate-500">Monthly Access</span>
              <div className="flex items-baseline gap-1 mt-3 mb-4">
                <span className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">৳999</span>
                <span className="text-sm font-semibold text-slate-500">/ month</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Ideal for doctors establishing their initial digital appointment presence and evaluating patient response.
              </p>
              <ul className="space-y-3.5 text-xs text-slate-700 font-medium mb-8">
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[18px]">check</span> Free .docxio.site subdomain included</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[18px]">check</span> All 6 light &amp; dark doctor templates</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[18px]">check</span> Single chamber scheduling &amp; WhatsApp</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[18px]">check</span> Instant self-service dashboard updates</li>
              </ul>
            </div>
            <div>
              <Link className="w-full py-3.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs rounded-xl transition-colors text-center block" href="#subdomain-claimer">
                Start Monthly Plan
              </Link>
              <p className="text-[10px] text-center text-slate-400 mt-2">bKash, Nagad &amp; local cards supported</p>
            </div>
          </div>
          {/* Tier 2: Bi-Annual (6 Months) */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-border shadow-subtle flex flex-col justify-between hover:shadow-elevated transition-all">
            <div>
              <span className="text-[11px] uppercase font-bold tracking-widest text-secondary">6-Month Practice Pack</span>
              <div className="flex items-baseline gap-1 mt-3 mb-4">
                <span className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">৳4,999</span>
                <span className="text-sm font-semibold text-slate-500">/ 6 months</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Cost-saving tier for consultants with regular multiple chambers requiring ongoing patient serial intake.
              </p>
              <ul className="space-y-3.5 text-xs text-slate-700 font-medium mb-8">
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[18px]">check</span> Free .docxio.site subdomain included</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[18px]">check</span> Up to 3 chamber locations &amp; timing slots</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[18px]">check</span> Google Maps integration &amp; directions</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[18px]">check</span> Priority doctor onboarding assistance</li>
              </ul>
            </div>
            <div>
              <Link className="w-full py-3.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs rounded-xl transition-colors text-center block" href="#subdomain-claimer">
                Start 6-Month Plan
              </Link>
              <p className="text-[10px] text-center text-slate-400 mt-2">Save ~৳1,000 compared to monthly</p>
            </div>
          </div>
          {/* Tier 3: Annual Complete (Featured) */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl border-2 border-secondary shadow-window flex flex-col justify-between relative ring-4 ring-secondary/10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
              Most Recommended for Specialists
            </div>
            <div>
              <span className="text-[11px] uppercase font-bold tracking-widest text-secondary">Annual Complete</span>
              <div className="flex items-baseline gap-1 mt-3 mb-4">
                <span className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">৳8,999</span>
                <span className="text-sm font-semibold text-slate-500">/ year</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                The definitive clinical package for distinguished professors, senior consultants, and department heads.
              </p>
              <ul className="space-y-3.5 text-xs text-slate-700 font-medium mb-8">
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[18px]">check</span> Custom domain connection (.com) + Free Subdomain</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[18px]">check</span> Unlimited chambers &amp; hospital attachments</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[18px]">check</span> Full Schema.org Google metadata optimization</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[18px]">check</span> Priority WhatsApp VIP support desk</li>
                <li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[18px]">check</span> Automated 256-bit SSL renewal included</li>
              </ul>
            </div>
            <div>
              <Link className="w-full py-3.5 px-4 bg-secondary hover:bg-secondary-hover text-white font-bold text-xs rounded-xl transition-colors text-center block shadow-md" href="#subdomain-claimer">
                Start Annual Plan
              </Link>
              <p className="text-[10px] text-center text-slate-500 mt-2 font-medium">Instant setup • bKash / Nagad / Visa / Mastercard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
