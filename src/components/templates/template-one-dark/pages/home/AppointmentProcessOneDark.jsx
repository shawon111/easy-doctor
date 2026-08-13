import RevealOneDark from "../../ui/RevealOneDark";

const BADGE_CLASSES = [
  "bg-primary-container text-on-primary-container shadow-primary/20",
  "bg-secondary-container text-on-secondary-container shadow-secondary/20",
  "bg-tertiary-container text-on-tertiary-container shadow-tertiary/20",
];
const DELAYS = ["", "delay-100", "delay-200"];

export default function AppointmentProcessOneDark({ content = {} }) {
  const steps = content.steps || [];

  return (
    <section className="py-[120px] bg-surface-container-highest/20">
      <div className="max-w-[1440px] mx-auto px-10">
        <RevealOneDark className="text-center mb-20">
          {content.heading ? (
            <h2 className="font-headline-lg text-5xl text-secondary mb-6 tracking-tight">{content.heading}</h2>
          ) : null}
          {content.subheading ? (
            <p className="text-lg text-on-surface-variant opacity-80 max-w-2xl mx-auto">
              {content.subheading}
            </p>
          ) : null}
        </RevealOneDark>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
          {steps.map((step, index) => (
            <RevealOneDark
              key={step.title}
              className={`relative z-10 glass-card p-10 rounded-3xl w-full md:w-1/3 text-center border border-white/5 ${DELAYS[index] || ""}`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 font-bold text-2xl shadow-xl ${BADGE_CLASSES[index % BADGE_CLASSES.length]}`}
              >
                {step.number}
              </div>
              <h4 className="font-bold text-2xl text-secondary mb-4">{step.title}</h4>
              <p className="text-on-surface-variant leading-relaxed">{step.description}</p>
            </RevealOneDark>
          ))}
        </div>
      </div>
    </section>
  );
}
