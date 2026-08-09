import Reveal from "@/components/templates/ui/Reveal";


export default function AppointmentWhatsappCtaOne() {
  return (
    <Reveal
      as="section"
      id="whatsapp-section"
      className="py-section-padding px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-[1200px] mx-auto bg-primary rounded-[40px] p-stack-lg md:p-[80px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-stack-lg">
        <div className="text-center md:text-left relative z-10">
          <h2 className="font-headline-lg text-headline-lg text-on-primary mb-4">
            Ready to Schedule?
          </h2>
          <p className="text-primary-fixed-dim text-body-lg max-w-md">
            Our clinical team is online and ready to assist you. Average response time is
            under 15 minutes during clinic hours.
          </p>
        </div>

        <div className="relative z-10 w-full md:w-auto">
          <a
            className="flex flex-col items-center bg-surface-container-lowest text-on-background px-8 md:px-12 py-8 rounded-[32px] hover:scale-105 active:scale-95 transition-all shadow-2xl group w-full"
            href="https://wa.me/yournumber"
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
            <span className="font-headline-md text-headline-md">Chat with our team</span>
            <p className="text-on-surface-variant text-sm mt-2 flex items-center gap-1">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              WhatsApp Support Online
            </p>
          </a>
        </div>

        {/* Abstract BG circles */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-2xl" />
      </div>
    </Reveal>
  );
}
