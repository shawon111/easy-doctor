import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

const STEP_ICONS = ["send", "event_available", "task_alt"];

export default function AppointmentProcessOneDark({ content = {}, isDemo = false }) {
  const steps = content.steps || [];

  return (
    <SectionFadeOneDark className="bg-surface-container-lowest py-[120px] px-5 md:px-16 relative" isDemo={isDemo}>
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          {content.heading ? (
            <h2 className="font-headline-lg text-headline-lg text-on-background uppercase tracking-widest italic">
              {content.heading}
            </h2>
          ) : null}
          {content.subheading ? (
            <p className="font-label-md text-on-surface-variant mt-4">{content.subheading}</p>
          ) : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div
            className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cobalt/30 to-transparent -translate-y-1/2 -z-0"
            aria-hidden="true"
          />
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`glass-card p-10 rounded-xl relative z-10 hover:border-cobalt/50 transition-colors group ${index === 1 ? "border-t-4 border-t-neon-mint/20 hover:border-neon-mint/50" : ""}`}
            >
              <div
                className={`w-16 h-16 border rounded-lg flex items-center justify-center mb-8 group-hover:bg-cobalt group-hover:text-white transition-all ${
                  index === 1
                    ? "border-neon-mint/30 bg-neon-mint/5 text-neon-mint group-hover:bg-neon-mint group-hover:text-on-secondary"
                    : "border-cobalt/30 bg-cobalt/5 text-cobalt"
                }`}
              >
                <span className="material-symbols-outlined text-4xl">{step.icon || STEP_ICONS[index]}</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase text-on-surface">{step.title}</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionFadeOneDark>
  );
}
