import Reveal from "@/components/templates/ui/Reveal";

const DELAYS = ["", "delay-100", "delay-200"];

export default function AppointmentProcessOne({ content = {} }) {
  const steps = content.steps || [];

  return (
    <section className="py-section-padding bg-primary text-on-primary">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <Reveal className="text-center mb-16" as="div">
          {content.heading ? (
            <h2 className="font-display-lg text-headline-lg mb-4">
              {content.heading}
            </h2>
          ) : null}
          {content.subheading ? (
            <p className="text-body-lg opacity-80 max-w-2xl mx-auto">
              {content.subheading}
            </p>
          ) : null}
        </Reveal>

        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/20 -translate-y-1/2" />

          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              className={`relative z-10 bg-primary-container p-8 rounded-2xl w-full md:w-1/4 text-center soft-bloom-lg border border-white/10 ${DELAYS[index] || ""}`}
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
