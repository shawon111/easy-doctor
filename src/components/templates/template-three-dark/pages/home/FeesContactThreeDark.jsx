export default function FeesContactThreeDark({ fees = {}, phone = "", clinics = [], isDemo = false, content = {} }) {
  const currency = fees?.currency || "BDT";
  const consultationFee = fees?.consultationFee ?? 1000;
  const followUpFee = fees?.followUpFee ?? 500;
  const followUpPeriod = fees?.followUpPeriod || "Within 30 Days";
  const reportFee = fees?.reportFee ?? 0;
  const note = fees?.note?.trim() || "";

  const displayPhone = phone || (isDemo ? "+880 1912-345678" : "");
  const cleanPhone = String(displayPhone).replace(/\D/g, "");
  const primaryClinic = clinics?.[0] || {};
  const whatsappNumber = primaryClinic?.whatsapp || cleanPhone;

  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop relative overflow-hidden border-y border-outline-variant/30 bg-[#0B1120]/80">
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-xs font-semibold">
            <span className="material-symbols-outlined text-[14px]">payments</span>
            {content.badge || "TRANSPARENT FEES & CONTACT"}
          </div>
          <h2 className="font-display-lg text-3xl md:text-4xl text-on-surface">
            {content.heading || "Consultation Pricing & Direct Line"}
          </h2>
          <p className="font-body-md text-on-surface-variant">
            {content.subheading || "Transparent fees for primary consultations, follow-ups, and diagnostic reviews with direct physician access."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Card */}
          <div className="lg:col-span-4 rounded-3xl glass-card p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Direct Access</span>
              <h3 className="text-xl font-bold text-on-surface mt-1">Direct Physician Line</h3>
              <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                Reach out directly for clinical inquiries, urgent consultation scheduling, or appointment coordination.
              </p>
            </div>

            {displayPhone ? (
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">call</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-on-surface-variant block uppercase font-medium">Direct Telephone</span>
                    <span className="text-base font-bold text-on-surface">{displayPhone}</span>
                  </div>
                </div>
                <a
                  href={`tel:${cleanPhone}`}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-3 px-4 rounded-xl font-semibold text-sm hover:opacity-90 transition-all text-center"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  Call Doctor
                </a>
              </div>
            ) : null}

            {whatsappNumber ? (
              <div className="p-4 rounded-2xl bg-[#128C7E]/10 border border-[#128C7E]/30 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#128C7E]/20 flex items-center justify-center text-[#25D366]">
                    <span className="material-symbols-outlined text-lg">chat</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#25D366] block uppercase font-medium">WhatsApp Desk</span>
                    <span className="text-sm font-bold text-on-surface">Message Doctor</span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#128C7E] text-white py-3 px-4 rounded-xl font-semibold text-sm hover:bg-[#075E54] transition-all text-center"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Chat on WhatsApp
                </a>
              </div>
            ) : null}

            {primaryClinic?.chamberName ? (
              <div className="pt-3 border-t border-white/10 text-xs text-on-surface-variant space-y-1">
                <p className="font-semibold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                  {primaryClinic.chamberName}
                </p>
                {primaryClinic.visitingHours ? (
                  <p className="flex items-center gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                    {primaryClinic.visitingHours}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>

          {/* Fee Breakdown Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* First Visit */}
            <div className="rounded-3xl glass-card p-5 border-2 border-primary/40 relative flex flex-col justify-between">
              <span className="absolute top-0 right-0 bg-primary text-on-primary text-[10px] font-bold px-2.5 py-0.5 rounded-bl-2xl uppercase tracking-wider">
                1st Visit
              </span>
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                  New Patient
                </span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-on-surface">
                    {currency === "BDT" ? "৳" : currency} {Number(consultationFee).toLocaleString()}
                  </span>
                  <span className="text-xs text-on-surface-variant">/ visit</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Comprehensive clinical assessment, initial physical checkup, diagnostic requisition, and customized therapy regimen.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-primary font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                Full Consultation
              </div>
            </div>

            {/* Follow-Up */}
            <div className="rounded-3xl glass-card p-5 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
                    Follow-Up
                  </span>
                  <span className="text-[10px] font-bold bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded-full">
                    {followUpPeriod}
                  </span>
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-on-surface">
                    {currency === "BDT" ? "৳" : currency} {Number(followUpFee).toLocaleString()}
                  </span>
                  <span className="text-xs text-on-surface-variant">/ follow-up</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Follow-up review, symptom progression check, and prescription updates within the initial validity window.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-on-surface-variant font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                Validity: {followUpPeriod}
              </div>
            </div>

            {/* Report Review */}
            <div className="rounded-3xl glass-card p-5 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
                  Report Review
                </span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-on-surface">
                    {Number(reportFee) === 0 ? "FREE" : `${currency === "BDT" ? "৳" : currency} ${Number(reportFee).toLocaleString()}`}
                  </span>
                  <span className="text-xs text-on-surface-variant">/ review</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Review of prescribed laboratory test results and diagnostic imaging following initial consultation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-on-surface-variant font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-primary">clinical_notes</span>
                Prescription guidance
              </div>
            </div>

            {/* Note */}
            {note ? (
              <div className="sm:col-span-3 rounded-2xl bg-white/[0.03] border border-white/10 p-4 flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">info</span>
                <p className="text-xs text-on-surface-variant leading-relaxed">
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
