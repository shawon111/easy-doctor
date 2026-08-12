import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

export default function AppointmentProcessOneDark() {
  return (
    <SectionFadeOneDark className="bg-surface-container-lowest py-[120px] px-5 md:px-16 relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-background uppercase tracking-widest italic">
            The Interface <span className="text-neon-mint">Process</span>
          </h2>
          <p className="font-label-md text-on-surface-variant mt-4">STREAMLINED BOOKING ARCHITECTURE v1.0</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div
            className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cobalt/30 to-transparent -translate-y-1/2 -z-0"
            aria-hidden="true"
          />
          <div className="glass-card p-10 rounded-xl relative z-10 hover:border-cobalt/50 transition-colors group">
            <div className="w-16 h-16 border border-cobalt/30 bg-cobalt/5 text-cobalt rounded-lg flex items-center justify-center mb-8 group-hover:bg-cobalt group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-4xl">send</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 uppercase text-on-surface">01_COMMUNICATE</h3>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              Initialize a direct encrypted channel via WhatsApp with our medical concierge.
            </p>
          </div>
          <div className="glass-card p-10 rounded-xl relative z-10 border-t-4 border-t-neon-mint/20 hover:border-neon-mint/50 transition-colors group">
            <div className="w-16 h-16 border border-neon-mint/30 bg-neon-mint/5 text-neon-mint rounded-lg flex items-center justify-center mb-8 group-hover:bg-neon-mint group-hover:text-on-secondary transition-all">
              <span className="material-symbols-outlined text-4xl">event_available</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 uppercase text-on-surface">02_CALIBRATE</h3>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              Real-time slot synchronization. Select the optimal timeframe for your clinical visit.
            </p>
          </div>
          <div className="glass-card p-10 rounded-xl relative z-10 hover:border-cobalt/50 transition-colors group">
            <div className="w-16 h-16 border border-cobalt/30 bg-cobalt/5 text-cobalt rounded-lg flex items-center justify-center mb-8 group-hover:bg-cobalt group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-4xl">task_alt</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 uppercase text-on-surface">03_FINALIZE</h3>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              System-generated confirmation and digital intake instructions delivered instantly.
            </p>
          </div>
        </div>
      </div>
    </SectionFadeOneDark>
  );
}
