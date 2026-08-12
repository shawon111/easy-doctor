import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

export default function AppointmentWhatsappOneDark() {
  return (
    <SectionFadeOneDark id="whatsapp-section" className="py-[120px] px-5 md:px-16">
      <div className="max-w-[1440px] mx-auto bg-cobalt rounded-xl p-10 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 border border-white/10 cobalt-glow">
        <div className="absolute inset-0 scanline opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="text-center md:text-left relative z-10">
          <h2 className="font-display-lg text-4xl md:text-5xl text-white mb-6 uppercase italic leading-none">
            Initialize <br />
            <span className="text-neon-mint">Booking_</span>
          </h2>
          <p className="text-white/70 font-body-lg max-w-md">
            Our surgical-grade response system ensures a reply within 15 minutes during active operation hours.
          </p>
        </div>
        <div className="relative z-10 w-full md:w-auto">
          <a
            className="flex flex-col items-center bg-neon-mint text-on-secondary-fixed px-10 md:px-16 py-12 rounded-xl transition-all shadow-2xl whatsapp-neon group w-full border border-white/20 active:scale-95"
            href="https://wa.me/yournumber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform backdrop-blur-md">
              <span
                className="material-symbols-outlined text-5xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                forum
              </span>
            </div>
            <span className="font-headline-md text-headline-md uppercase tracking-tighter">OPEN CHANNEL_</span>
            <div className="flex items-center gap-2 mt-4 font-label-md">
              <span className="w-2 h-2 bg-on-secondary-fixed rounded-full animate-ping" />
              PROTOCOL: ACTIVE
            </div>
          </a>
        </div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon-mint/20 rounded-full blur-[100px]" aria-hidden="true" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[80px]" aria-hidden="true" />
      </div>
    </SectionFadeOneDark>
  );
}
