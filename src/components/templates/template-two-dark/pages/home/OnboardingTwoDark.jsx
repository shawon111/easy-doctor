const STEPS = [
  {
    icon: "calendar_month",
    title: "01. Virtual Intake",
    description: "Submit your medical records and schedule a preliminary digital assessment.",
  },
  {
    icon: "biotech",
    title: "02. Clinical Workup",
    description: "In-depth diagnostics at our private facility, mapped to your unique physiology.",
  },
  {
    icon: "medical_services",
    title: "03. Intervention",
    description: "Execution of your bespoke clinical protocol under white-glove supervision.",
  },
];

export default function OnboardingTwoDark() {
  return (
    <section className="py-[120px] px-5 md:px-16 bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-on-surface italic mb-4">Patient Onboarding</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            A streamlined three-step journey to precision care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px bg-tertiary/20" />
          {STEPS.map((step) => (
            <div key={step.title} className="text-center z-10">
              <div className="w-24 h-24 rounded-full glass-card mx-auto flex items-center justify-center mb-6 text-tertiary border border-tertiary/30">
                <span className="material-symbols-outlined text-4xl">{step.icon}</span>
              </div>
              <h3 className="font-label-caps text-label-caps text-on-surface mb-2">{step.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
