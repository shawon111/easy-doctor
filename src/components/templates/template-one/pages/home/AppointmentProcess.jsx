import Reveal from "@/components/templates/ui/Reveal";


const STEPS = [
  {
    number: 1,
    title: "Consult",
    description: "A deep-dive assessment of your medical history and lifestyle.",
    delay: "",
  },
  {
    number: 2,
    title: "Diagnose",
    description: "Advanced diagnostics and data analysis for precise insights.",
    delay: "delay-100",
  },
  {
    number: 3,
    title: "Treat",
    description: "Execution of your personalized health and wellness roadmap.",
    delay: "delay-200",
  },
];

export default function AppointmentProcessOne() {
  return (
    <section className="py-section-padding bg-primary text-on-primary">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <Reveal className="text-center mb-16" as="div">
          <h2 className="font-display-lg text-headline-lg mb-4">
            The Journey to Better Health
          </h2>
          <p className="text-body-lg opacity-80 max-w-2xl mx-auto">
            A streamlined, stress-free process designed for busy professionals.
          </p>
        </Reveal>

        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/20 -translate-y-1/2" />

          {STEPS.map((step) => (
            <Reveal
              key={step.number}
              className={`relative z-10 bg-primary-container p-8 rounded-2xl w-full md:w-1/4 text-center soft-bloom-lg border border-white/10 ${step.delay}`}
            >
              <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-headline-md">
                {step.number}
              </div>
              <h4 className="font-bold text-headline-md mb-2">{step.title}</h4>
              <p className="text-body-md opacity-90">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
