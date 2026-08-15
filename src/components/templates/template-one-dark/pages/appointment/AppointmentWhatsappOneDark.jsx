import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

export default function AppointmentWhatsappOneDark({ content = {}, isDemo = false }) {
  const features = content.features || [];
  const whatsappUrl = content.whatsappUrl || "#";

  return (
    <SectionFadeOneDark id="whatsapp-section" className="py-[120px] px-5 md:px-16" isDemo={isDemo}>
      <div className="max-w-[1440px] mx-auto bg-cobalt rounded-xl p-10 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 border border-white/10 cobalt-glow">
        <div className="absolute inset-0 scanline opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="text-center md:text-left relative z-10">
          {content.heading ? (
            <h2 className="font-display-lg text-4xl md:text-5xl text-white mb-6 uppercase italic leading-none">
              {content.heading}
            </h2>
          ) : null}
          {content.body ? (
            <p className="text-white/70 font-body-lg max-w-md">{content.body}</p>
          ) : null}
        </div>
        <div className="relative z-10 w-full md:w-auto">
          <a
            className="flex flex-col items-center bg-neon-mint text-on-secondary-fixed px-10 md:px-16 py-12 rounded-xl transition-all shadow-2xl whatsapp-neon group w-full border border-white/20 active:scale-95"
            href={whatsappUrl}
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
            {content.cta ? (
              <span className="font-headline-md text-headline-md uppercase tracking-tighter">{content.cta}</span>
            ) : null}
            {features[0] ? (
              <div className="flex items-center gap-2 mt-4 font-label-md">
                <span className="w-2 h-2 bg-on-secondary-fixed rounded-full animate-ping" />
                {features[0]}
              </div>
            ) : null}
          </a>
        </div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon-mint/20 rounded-full blur-[100px]" aria-hidden="true" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[80px]" aria-hidden="true" />
      </div>
    </SectionFadeOneDark>
  );
}
