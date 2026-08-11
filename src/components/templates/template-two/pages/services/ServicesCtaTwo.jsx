export default function ServicesCtaTwo() {
  return (
    <section className="py-[120px] px-[20px] md:px-[64px] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 svctwo-glass-panel p-12 md:p-20 rounded-[16px] text-center border border-[#2563eb]/10 shadow-lg">
        <h2 className="svctwo-display-lg mb-6 text-[#1a1c1e]">
          Experience Medical Precision
        </h2>
        <p className="svctwo-body-lg text-[#44474e] max-w-2xl mx-auto mb-10">
          Your health is your greatest asset. Secure an appointment with a
          world-recognized leader in specialized clinical medicine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#2563eb] text-white svctwo-label-caps px-10 py-4 rounded-[4px] hover:bg-[#2563eb]/90 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95">
            Book a Consultation
            <span className="svctwo-material-symbols">calendar_today</span>
          </button>
          <button className="border border-[#2563eb] text-[#2563eb] svctwo-label-caps px-10 py-4 rounded-[4px] hover:bg-[#2563eb]/5 transition-all active:scale-95">
            Contact Concierge
          </button>
        </div>
      </div>
    </section>
  );
}
