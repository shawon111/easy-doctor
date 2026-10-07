export default function PatientSearchExperience() {
  return (
    <section className="py-24 lg:py-32 bg-surface-subtle border-b border-slate-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-[11px] uppercase font-bold tracking-[0.2em] text-secondary mb-3">Healthcare Discovery &amp; Legitimacy</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-heading tracking-tight mb-5">
            Patients Google You First. <br />
            <span className="font-serif font-normal italic text-slate-700">What Do They Find?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            Before booking a consultation, patients search for your chamber locations, off-days, visiting hours, and academic credentials. Without your own verified website, they encounter outdated aggregator directories, wrong assistant numbers, or competitor recommendations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-border shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-secondary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[26px]">search</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Be Found on Google</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Direct patients to one clean, authoritative URL containing verified hospital attachments, chamber serial instructions, and map directions.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-[11px] font-mono text-secondary font-semibold">https://dr-sarah.docxio.com</div>
              <div className="text-xs font-bold text-slate-900 mt-1">Prof. Sarah Rahman | Pediatric Neurology</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Evercare &amp; Popular Diagnostic Dhanmondi</div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-border shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[26px]">verified_user</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Build Clinical Authority</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Showcase your BMDC registration, university faculty posts, international fellowships (FRCP, FCPS), and publication pedigrees with pride.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-emerald-600 text-[20px]">badge</span>
                <div>
                  <div className="text-xs font-bold text-slate-800">BMDC Reg. No. A-55204</div>
                  <div className="text-[10px] text-slate-500">Government Registered Practitioner</div>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Verified</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-border shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[26px]">phone_in_talk</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Eliminate Booking Friction</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Give patients a 1-tap WhatsApp serial inquiry button or direct assistant telephone line for every individual chamber you attend.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span>Direct Chamber Hotline</span>
                <span className="text-emerald-600 font-semibold">01711-XXXXXX</span>
              </div>
              <div className="text-[10px] text-slate-500">Instant WhatsApp routing to assistant serial desk</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
