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
            Give patients a public place to find the practice information you provide, such as clinic locations, visiting hours, professional background, and appointment options.
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
                Share a public website with practice details, contact information, and directions supplied by your clinic.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-[11px] font-mono text-secondary font-semibold">https://dr-sarah.docxio.com</div>
              <div className="text-xs font-bold text-slate-900 mt-1">Doctor Website Example</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Profile and clinic details</div>
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
                Add qualifications and professional registration details to your profile. Docxio displays information you provide; it does not independently verify credentials.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-emerald-600 text-[20px]">badge</span>
                <div>
                  <div className="text-xs font-bold text-slate-800">Professional details</div>
                  <div className="text-[10px] text-slate-500">Provided by the doctor</div>
                </div>
              </div>
              <span className="text-[10px] bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded">Profile</span>
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
                Show the contact options configured for each practice, such as WhatsApp, phone, or website appointment requests.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span>Direct Chamber Hotline</span>
                <span className="text-emerald-600 font-semibold">01711-XXXXXX</span>
              </div>
              <div className="text-[10px] text-slate-500">Contact options depend on your profile settings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
