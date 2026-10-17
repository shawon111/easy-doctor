export default function FeesContactTwo({ fees = {}, phone = "", clinics = [], isDemo = false, content = {} }) {
  const currency = fees?.currency || "BDT";
  const consultationFee = fees?.consultationFee ?? 1200;
  const followUpFee = fees?.followUpFee ?? 600;
  const followUpPeriod = fees?.followUpPeriod || "Within 30 Days";
  const reportFee = fees?.reportFee ?? 0;
  const note = fees?.note?.trim() || "";

  const displayPhone = phone || (isDemo ? "+880 1712-345678" : "");
  const cleanPhone = String(displayPhone).replace(/\D/g, "");
  const primaryClinic = clinics?.[0] || {};
  const whatsappNumber = primaryClinic?.whatsapp || cleanPhone;

  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant/30">
      <div className="max-w-container-max mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 glass-card rounded-full border-outline-variant">
            <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse" />
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
              {content.badge || "FEES & DIRECT ACCESS"}
            </span>
          </div>
          <h2 className="font-display-lg text-3xl md:text-4xl text-on-surface">
            {content.heading || "Consultation Schedule & Direct Line"}
          </h2>
          <p className="font-body-md text-on-surface-variant">
            {content.subheading || "Transparent, predictable professional fees with dedicated physician access."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Doctor Contact Card */}
          <div className="lg:col-span-4 rounded-2xl glass-card p-6 sm:p-8 border border-outline-variant shadow-sm space-y-6">
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-tertiary block">
                Direct Communication
              </span>
              <h3 className="text-xl font-serif font-bold text-on-surface mt-1">
                Reach Dr. Directly
              </h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Connect directly for emergency consultations, appointment requests, or schedule coordination.
              </p>
            </div>

            {displayPhone ? (
              <div className="p-4 rounded-xl bg-surface-container/60 border border-outline-variant/40 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">call</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-on-surface-variant block uppercase tracking-wider font-semibold">
                      Telephone
                    </span>
                    <span className="text-base font-bold text-on-surface">{displayPhone}</span>
                  </div>
                </div>
                <a
                  href={`tel:${cleanPhone}`}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-3 px-4 rounded-lg font-label-caps text-xs tracking-wider uppercase luxury-button-hover text-center transition-all"
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                  Call Doctor
                </a>
              </div>
            ) : null}

            {whatsappNumber ? (
              <div className="p-4 rounded-xl bg-[#128C7E]/5 border border-[#128C7E]/20 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#128C7E]/10 flex items-center justify-center text-[#128C7E]">
                    <span className="material-symbols-outlined text-lg">chat</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#128C7E] block uppercase tracking-wider font-semibold">
                      WhatsApp Line
                    </span>
                    <span className="text-sm font-bold text-on-surface">Direct Messaging</span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#128C7E] text-white py-3 px-4 rounded-lg font-label-caps text-xs tracking-wider uppercase hover:bg-[#075E54] text-center transition-all"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  Chat on WhatsApp
                </a>
              </div>
            ) : null}

            {primaryClinic?.chamberName ? (
              <div className="pt-3 border-t border-outline-variant/40 text-xs text-on-surface-variant space-y-1">
                <p className="font-semibold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-tertiary">location_on</span>
                  {primaryClinic.chamberName}
                </p>
                {primaryClinic.visitingHours ? (
                  <p className="flex items-center gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm text-tertiary">schedule</span>
                    {primaryClinic.visitingHours}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>

          {/* Consultation Fee Tiers */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* First Visit */}
            <div className="rounded-2xl glass-card p-5 border-2 border-tertiary/30 relative flex flex-col justify-between">
              <span className="absolute top-0 right-0 bg-tertiary text-on-tertiary text-[10px] font-bold px-2.5 py-0.5 rounded-bl-lg uppercase tracking-widest">
                Primary Intake
              </span>
              <div>
                <span className="text-[11px] font-label-caps text-tertiary uppercase tracking-widest block font-bold">
                  New Patient
                </span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-serif font-bold text-on-surface">
                    {currency === "BDT" ? "৳" : currency} {Number(consultationFee).toLocaleString()}
                  </span>
                  <span className="text-xs text-on-surface-variant">/ visit</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Comprehensive 45-minute clinical intake, detailed history review, diagnostic baseline, and personalized care strategy.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/30 text-xs text-tertiary font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span>
                Single Physician Care
              </div>
            </div>

            {/* Follow-Up Visit */}
            <div className="rounded-2xl glass-card p-5 border border-outline-variant flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[11px] font-label-caps text-on-surface-variant uppercase tracking-widest block font-bold">
                    Follow-Up
                  </span>
                  <span className="text-[10px] font-bold bg-tertiary/15 text-tertiary px-2 py-0.5 rounded-full">
                    {followUpPeriod}
                  </span>
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-serif font-bold text-on-surface">
                    {currency === "BDT" ? "৳" : currency} {Number(followUpFee).toLocaleString()}
                  </span>
                  <span className="text-xs text-on-surface-variant">/ follow-up</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Symptom progress tracking, medication adjustments, and therapy review within the dedicated follow-up window.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/30 text-xs text-on-surface-variant font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-tertiary">schedule</span>
                Window: {followUpPeriod}
              </div>
            </div>

            {/* Report Review */}
            <div className="rounded-2xl glass-card p-5 border border-outline-variant flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-label-caps text-on-surface-variant uppercase tracking-widest block font-bold">
                  Report Review
                </span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-serif font-bold text-on-surface">
                    {Number(reportFee) === 0 ? "FREE" : `${currency === "BDT" ? "৳" : currency} ${Number(reportFee).toLocaleString()}`}
                  </span>
                  <span className="text-xs text-on-surface-variant">/ review</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Detailed evaluation of prescribed lab findings, imaging, and specialty biomarker panels.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/30 text-xs text-on-surface-variant font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-tertiary">clinical_notes</span>
                Prescription guidance
              </div>
            </div>

            {/* Note */}
            {note ? (
              <div className="sm:col-span-3 rounded-xl bg-amber-50/60 border border-amber-200/50 p-4 flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-lg shrink-0 mt-0.5">info</span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {note}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
