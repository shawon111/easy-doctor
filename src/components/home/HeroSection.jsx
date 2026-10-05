import SubdomainInputForm from "./SubdomainInputForm";

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-b from-surface-subtle via-white to-white overflow-hidden border-b border-slate-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Copy Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-soft border border-secondary/20 text-secondary text-xs font-bold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Tailored Digital Architecture for Physicians
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] lg:leading-[1.1] font-extrabold text-slate-heading tracking-tight mb-6">
              Your Professional Doctor Website. <br className="hidden sm:inline" />
              <span className="font-serif font-normal italic text-secondary">Ready in 2 Minutes.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-muted leading-relaxed max-w-2xl mb-8">
              Create your own verified practice website with Docxio — no coding, no developer, and no technical friction. Choose an editorial layout, add your chamber schedules, and publish to your own free web address instantly.
            </p>
            {/* Fast Domain Test input pill */}
            <SubdomainInputForm />
            {/* Micro Proof Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-semibold text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[18px]">verified</span> Zero Code or Setup
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[18px]">schedule</span> Live in ~2 Minutes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[18px]">domain</span> Free .docxio.site Subdomain Included
              </span>
            </div>
          </div>
          {/* Right Visual Column: Doctor Screen Previews Layered Window */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[480px]">
              {/* Subtle Backdrop glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl blur-2xl -z-10 opacity-70"></div>
              {/* Top Status Tag */}
              <div className="absolute -top-3.5 right-6 z-20 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Verified Doctor Template 03
              </div>
              {/* Main Desktop Browser Frame */}
              <div className="bg-white rounded-2xl shadow-window border border-slate-200 overflow-hidden">
                {/* Window Bar */}
                <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                  </div>
                  <div className="bg-white px-3 py-1 rounded-md text-[11px] font-mono text-slate-600 border border-slate-200/80 flex items-center gap-1.5 shadow-sm">
                    <span className="material-symbols-outlined text-[13px] text-emerald-600">lock</span>
                    dr-tariqul.docxio.site
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Active</span>
                </div>
                {/* Mini Live Mockup Header */}
                <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm ring-2 ring-white/20">TI</div>
                    <div>
                      <h4 className="font-bold text-sm leading-snug">Prof. Dr. Tariqul Islam</h4>
                      <p className="text-[11px] text-slate-300">FCPS, MD (Cardiology) • Senior Consultant</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold bg-blue-500 text-white px-2.5 py-1 rounded shadow-sm">Chamber Book</span>
                </div>
                {/* Content preview */}
                <div className="p-4 bg-slate-50 space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-secondary">Chamber 1</div>
                      <div className="font-bold text-slate-800 mt-0.5">Popular Diagnostic</div>
                      <div className="text-[11px] text-slate-500">Dhanmondi, Dhaka</div>
                      <div className="mt-2 text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block">5:00 PM – 9:00 PM</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-secondary">Chamber 2</div>
                      <div className="font-bold text-slate-800 mt-0.5">Square Hospital</div>
                      <div className="text-[11px] text-slate-500">Panthapath, Dhaka</div>
                      <div className="mt-2 text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block">10:00 AM – 2:00 PM</div>
                    </div>
                  </div>
                  {/* Quick Trust strip inside preview */}
                  <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-slate-200 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                      <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
                      BMDC Reg: A-48291
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">Appointment Serial Enabled</span>
                  </div>
                </div>
              </div>
              {/* Floated Card: Speed Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-xl shadow-elevated border border-slate-200 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">bolt</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">2-Minute Publishing</p>
                  <p className="text-[11px] text-slate-500">Instant SSL &amp; chamber routing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
