import Reveal from "@/components/templates/ui/Reveal";

export default function AppointmentWhatsappCtaOne({ content = {} }) {
  const features = content.features || [];
  const whatsappUrl = content.whatsappUrl || "#";

  return (
    <Reveal
      as="section"
      id="whatsapp-section"
      className="py-section-padding px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-[1200px] mx-auto bg-primary rounded-[40px] p-stack-lg md:p-[80px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-stack-lg">
        <div className="text-center md:text-left relative z-10">
          {content.heading ? (
            <h2 className="font-headline-lg text-headline-lg text-on-primary mb-4">
              {content.heading}
            </h2>
          ) : null}
          {content.body ? (
            <p className="text-primary-fixed-dim text-body-lg max-w-md">{content.body}</p>
          ) : null}
        </div>

        <div className="relative z-10 w-full md:w-auto">
          <a
            className="flex flex-col items-center bg-surface-container-lowest text-on-background px-8 md:px-12 py-8 rounded-[32px] hover:scale-105 active:scale-95 transition-all shadow-2xl group w-full"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6 text-on-secondary group-hover:rotate-12 transition-transform">
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                forum
              </span>
            </div>
            {content.cta ? (
              <span className="font-headline-md text-headline-md">{content.cta}</span>
            ) : null}
            {features[0] ? (
              <p className="text-on-surface-variant text-sm mt-2 flex items-center gap-1">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                {features[0]}
              </p>
            ) : null}
          </a>
        </div>

        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-2xl" />
      </div>
    </Reveal>
  );
}
