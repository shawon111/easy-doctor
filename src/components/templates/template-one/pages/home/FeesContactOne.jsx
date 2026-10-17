import Reveal from "@/components/templates/ui/Reveal";

export default function FeesContactOne({ fees = {}, phone = "", clinics = [], isDemo = false, content = {} }) {
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
    <section className="py-section-padding bg-surface-container-lowest border-y border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <Reveal className="text-center mb-stack-lg max-w-2xl mx-auto" as="div">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#F0FDFA] text-[#0F766E] font-label-caps text-label-caps mb-3">
            {content.badge || "CONSULTATION FEES & CONTACT"}
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">
            {content.heading || "Transparent Consultation Fees & Direct Contact"}
          </h2>
          <p className="text-body-md text-on-surface-variant">
            {content.subheading || "Know your visit charges in advance with full clarity. Reach the physician directly for inquiries and appointments."}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Card */}
          <Reveal className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-8 soft-bloom border border-outline-variant/40 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Direct Doctor Access</span>
              <h3 className="text-xl font-bold text-on-surface mt-1">Get in Touch Directly</h3>
              <p className="text-sm text-on-surface-variant mt-1.5">
                Have a question about consultation or need prompt assistance? Call or message directly.
              </p>
            </div>

            {displayPhone ? (
              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">call</span>
                  </div>
                  <div>
                    <span className="text-xs text-on-surface-variant block font-medium">Doctor Direct Phone</span>
                    <span className="text-base font-bold text-on-surface">{displayPhone}</span>
                  </div>
                </div>
                <a
                  href={`tel:${cleanPhone}`}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-2.5 px-4 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all text-center"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  Call Doctor
                </a>
              </div>
            ) : null}

            {whatsappNumber ? (
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/50 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-700">
                    <span className="material-symbols-outlined text-xl">chat</span>
                  </div>
                  <div>
                    <span className="text-xs text-emerald-800 block font-medium">WhatsApp Assistance</span>
                    <span className="text-sm font-bold text-emerald-950">Message for Appointment</span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 px-4 rounded-xl font-semibold text-sm hover:bg-emerald-700 transition-all text-center"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Chat on WhatsApp
                </a>
              </div>
            ) : null}

            {primaryClinic?.chamberName ? (
              <div className="pt-2 border-t border-outline-variant/30 text-xs text-on-surface-variant space-y-1">
                <p className="font-semibold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                  {primaryClinic.chamberName}
                </p>
                {primaryClinic.visitingHours ? (
                  <p className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                    {primaryClinic.visitingHours}
                  </p>
                ) : null}
              </div>
            ) : null}
          </Reveal>

          {/* Fee Breakdown Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* 1. First Visit */}
            <Reveal className="bg-white rounded-2xl p-5 soft-bloom border-2 border-primary/20 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 bg-primary text-on-primary text-[10px] font-bold px-2.5 py-0.5 rounded-bl-xl uppercase tracking-wider">
                1st Visit
              </div>
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">New Patient</span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-on-surface">
                    {currency === "BDT" ? "৳" : currency} {Number(consultationFee).toLocaleString()}
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">/ visit</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Full medical history examination, initial clinical consultation, and diagnostic prescription plan.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/30 text-xs text-primary font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span>
                Comprehensive Care
              </div>
            </Reveal>

            {/* 2. Follow-Up Visit */}
            <Reveal className="bg-white rounded-2xl p-5 soft-bloom border border-outline-variant/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Follow-Up</span>
                  <span className="text-[10px] font-bold bg-[#F0FDFA] text-[#0F766E] px-2 py-0.5 rounded-full">
                    {followUpPeriod}
                  </span>
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-on-surface">
                    {currency === "BDT" ? "৳" : currency} {Number(followUpFee).toLocaleString()}
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">/ follow-up</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Progress check, symptom assessment, and adjustment of ongoing medications within the validity period.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/30 text-xs text-on-surface-variant font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#0F766E]">schedule</span>
                Valid: {followUpPeriod}
              </div>
            </Reveal>

            {/* 3. Report Review */}
            <Reveal className="bg-white rounded-2xl p-5 soft-bloom border border-outline-variant/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Report Review</span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-on-surface">
                    {Number(reportFee) === 0 ? "FREE" : `${currency === "BDT" ? "৳" : currency} ${Number(reportFee).toLocaleString()}`}
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">/ review</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Diagnostic lab test & investigation assessment following your primary consultation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/30 text-xs text-on-surface-variant font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-primary">clinical_notes</span>
                Prescription guidance
              </div>
            </Reveal>

            {/* Note banner */}
            {note ? (
              <Reveal className="sm:col-span-3 bg-[#F0FDFA]/70 border border-[#0F766E]/20 rounded-xl p-3.5 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#0F766E] text-lg shrink-0 mt-0.5">info</span>
                <p className="text-xs text-[#0F766E] leading-relaxed font-medium">
                  {note}
                </p>
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
