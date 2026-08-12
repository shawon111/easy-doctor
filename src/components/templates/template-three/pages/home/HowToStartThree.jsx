const STEPS = [
  {
    icon: "event_available",
    title: "Book Online",
    description: "Choose your preferred time via our seamless booking system.",
    active: true,
  },
  {
    icon: "clinical_notes",
    title: "Consultation",
    description: "A deep-dive 60-minute initial assessment with Dr. MedLink.",
    active: false,
  },
  {
    icon: "biotech",
    title: "Analysis",
    description: "Comprehensive lab testing and genetic health screening.",
    active: false,
  },
  {
    icon: "favorite",
    title: "Care Plan",
    description: "Receive your custom long-term health and vitality roadmap.",
    active: false,
  },
];

export default function HowToStartThree() {
  return (
    <section className="py-32 bg-primary/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-headline-lg mb-4">Start Your Journey</h2>
          <p className="text-on-surface-variant">Transparent steps to your personalized health transformation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {STEPS.map((step) => (
            <div key={step.title} className="relative text-center">
              <div
                className={`w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center mb-6 z-10 relative shadow-sm ${
                  step.active ? "border border-primary" : "border border-outline-variant/50"
                }`}
              >
                <span className="material-symbols-outlined text-primary text-3xl">{step.icon}</span>
              </div>
              <h4 className="font-headline-md text-[20px] mb-2 text-on-surface">{step.title}</h4>
              <p className="text-on-surface-variant text-sm px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
