import RevealOneDark from "../../ui/RevealOneDark";

export default function FeesContactOneDark({ fees = {}, phone = "", clinics = [], isDemo = false, content = {} }) {
  const currency = fees?.currency || "BDT";
  const consultationFee = fees?.consultationFee ?? 1000;
  const followUpFee = fees?.followUpFee ?? 500;
  const followUpPeriod = fees?.followUpPeriod || "Within 30 Days";
  const reportFee = fees?.reportFee ?? 0;
  const note = fees?.note?.trim() || "";

  const displayPhone = phone || (isDemo ? "+880 1888-876512" : "");
  const cleanPhone = String(displayPhone).replace(/\D/g, "");
  const primaryClinic = clinics?.[0] || {};
  const whatsappNumber = primaryClinic?.whatsapp || cleanPhone;

  return (
    <section className="py-24 relative overflow-hidden border-y border-white/10">
      <div className="max-w-[1440px] mx-auto px-10 relative z-10">
        <RevealOneDark className="text-center mb-16 max-w-2xl mx-auto" isDemo={isDemo}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-secondary-fixed font-label-md text-xs mb-4 border border-secondary-fixed/20 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
            {content.badge || "CONSULTATION FEES & CONTACT"}
          </div>
          <h2 className="font-display-lg text-4xl md:text-5xl text-secondary mb-4 leading-tight">
            {content.heading || "Transparent Fees & Direct Doctor Line"}
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed">
            {content.subheading || "Clear consultation fees designed with full patient transparency. Reach out directly for appointments and inquiries."}
          </p>
        </RevealOneDark>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Doctor Contact Card */}
          <RevealOneDark className="lg:col-span-4 glass-card p-8 rounded-2xl border border-white/10 space-y-6" isDemo={isDemo}>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Direct Access</span>
              <h3 className="text-2xl font-bold text-secondary mt-1">Direct Doctor Line</h3>
              <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                Connect directly for appointments, consultations, or time-sensitive health questions.
              </p>
            </div>

            {displayPhone ? (
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">call</span>
                  </div>
                  <div>
                    <span className="text-xs text-on-surface-variant block font-mono">Direct Phone</span>
                    <span className="text-base font-bold text-secondary">{displayPhone}</span>
                  </div>
                </div>
                <a
                  href={`tel:${cleanPhone}`}
                  className="w-full flex items-center justify-center gap-2 bg-primary-container text-on-primary-container py-3 px-4 rounded-xl font-bold text-xs tracking-wider uppercase glow-button text-center transition-all"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  Call Doctor
                </a>
              </div>
            ) : null}

            {whatsappNumber ? (
              <div className="p-5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <span className="material-symbols-outlined text-xl">chat</span>
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 block font-mono">WhatsApp Desk</span>
                    <span className="text-sm font-bold text-emerald-100">Direct Chat Support</span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 px-4 rounded-xl font-bold text-xs tracking-wider uppercase hover:bg-emerald-500 text-center transition-all"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Chat on WhatsApp
                </a>
              </div>
            ) : null}

            {primaryClinic?.chamberName ? (
              <div className="pt-2 border-t border-white/10 text-xs text-on-surface-variant space-y-1">
                <p className="font-semibold text-secondary flex items-center gap-1.5">
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
          </RevealOneDark>

          {/* Fee Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* 1. First Visit */}
            <RevealOneDark className="glass-card p-5 rounded-2xl border-2 border-primary/30 relative overflow-hidden flex flex-col justify-between" isDemo={isDemo}>
              <div className="absolute top-0 right-0 bg-primary-container text-on-primary-container text-[10px] font-bold px-2.5 py-0.5 rounded-bl-xl uppercase tracking-widest">
                1st Visit
              </div>
              <div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">New Patient</span>
                <div className="mt-2.5 flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-secondary">
                    {currency === "BDT" ? "৳" : currency} {Number(consultationFee).toLocaleString()}
                  </span>
                  <span className="text-xs text-on-surface-variant">/ visit</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Comprehensive clinical assessment, in-depth evaluation of medical history, and initial treatment planning.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-primary font-medium flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">verified</span>
                Full Patient Intake
              </div>
            </RevealOneDark>

            {/* 2. Follow-Up Visit */}
            <RevealOneDark className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between" isDemo={isDemo}>
              <div>
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-mono text-on-surface-variant uppercase tracking-wider">Follow-Up</span>
                  <span className="text-[10px] font-bold bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded-full">
                    {followUpPeriod}
                  </span>
                </div>
                <div className="mt-2.5 flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-secondary">
                    {currency === "BDT" ? "৳" : currency} {Number(followUpFee).toLocaleString()}
                  </span>
                  <span className="text-xs text-on-surface-variant">/ follow-up</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Progress check, symptom evaluation, and adjustments to current prescribed medications within validity.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-on-surface-variant font-medium flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                Validity: {followUpPeriod}
              </div>
            </RevealOneDark>

            {/* 3. Report Review */}
            <RevealOneDark className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between" isDemo={isDemo}>
              <div>
                <span className="text-xs font-mono text-on-surface-variant uppercase tracking-wider">Report Review</span>
                <div className="mt-2.5 flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-secondary">
                    {Number(reportFee) === 0 ? "FREE" : `${currency === "BDT" ? "৳" : currency} ${Number(reportFee).toLocaleString()}`}
                  </span>
                  <span className="text-xs text-on-surface-variant">/ review</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Review of laboratory tests, imaging scans, and pathology reports following primary appointment.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-on-surface-variant font-medium flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-primary">clinical_notes</span>
                Prescription guidance
              </div>
            </RevealOneDark>

            {/* Note */}
            {note ? (
              <RevealOneDark className="sm:col-span-3 glass-card p-4 rounded-xl border border-white/10 flex items-start gap-3" isDemo={isDemo}>
                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">info</span>
                <p className="text-xs text-secondary/80 leading-relaxed">
                  {note}
                </p>
              </RevealOneDark>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
