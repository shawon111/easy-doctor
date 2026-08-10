export default function CtaTwo() {
  return (
    <section className="mb-[120px] px-[20px] md:px-[64px]">
      <div className="max-w-[1200px] mx-auto bg-[#2563eb] text-white p-12 md:p-24 rounded-[16px] text-center relative overflow-hidden group border-none shadow-2xl">
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="dstwo-display-lg text-white">
            The Pinnacle of Clinical Care
          </h2>
          <p className="dstwo-body-lg text-white/80">
            Secure your appointment with London&apos;s leading precision
            specialist today. Limited intake ensures individualized mastery.
          </p>
          <button className="px-12 py-5 bg-white text-[#2563eb] dstwo-label-caps rounded-[8px] dstwo-luxury-btn-hover shadow-xl transition-all flex items-center gap-4 mx-auto">
            Inquire About Registration
            <span className="dstwo-material-symbols">chevron_right</span>
          </button>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
