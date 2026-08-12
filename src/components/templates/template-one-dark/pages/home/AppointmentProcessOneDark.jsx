import RevealOneDark from "../../ui/RevealOneDark";

const STEPS = [
  {
    number: "1",
    title: "Consult",
    description: "A deep-dive assessment of your medical history and lifestyle.",
    badgeClass: "bg-primary-container text-on-primary-container shadow-primary/20",
    delay: "",
  },
  {
    number: "2",
    title: "Diagnose",
    description: "Advanced diagnostics and data analysis for precise insights.",
    badgeClass: "bg-secondary-container text-on-secondary-container shadow-secondary/20",
    delay: "delay-100",
  },
  {
    number: "3",
    title: "Treat",
    description: "Execution of your personalized health and wellness roadmap.",
    badgeClass: "bg-tertiary-container text-on-tertiary-container shadow-tertiary/20",
    delay: "delay-200",
  },
];

export default function AppointmentProcessOneDark() {
  return (
    <section className="py-[120px] bg-surface-container-highest/20">
      <div className="max-w-[1440px] mx-auto px-10">
        <RevealOneDark className="text-center mb-20">
          <h2 className="font-headline-lg text-5xl text-secondary mb-6 tracking-tight">The Journey to Better Health</h2>
          <p className="text-lg text-on-surface-variant opacity-80 max-w-2xl mx-auto">
            A streamlined, stress-free process designed for busy professionals.
          </p>
        </RevealOneDark>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
          {STEPS.map((step) => (
            <RevealOneDark
              key={step.number}
              className={`relative z-10 glass-card p-10 rounded-3xl w-full md:w-1/3 text-center border border-white/5 ${step.delay}`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 font-bold text-2xl shadow-xl ${step.badgeClass}`}
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
