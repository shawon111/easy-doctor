const STEPS = [
  {
    icon: "calendar_month",
    title: "01. Virtual Intake",
    detail:
      "Submit your medical records and schedule a preliminary digital assessment.",
  },
  {
    icon: "biotech",
    title: "02. Clinical Workup",
    detail:
      "In-depth diagnostics at our private facility, mapped to your unique physiology.",
  },
  {
    icon: "medical_services",
    title: "03. Intervention",
    detail:
      "Execution of your bespoke clinical protocol under white-glove supervision.",
  },
];

export default function OnboardingTwo() {
  return (
    <section className="py-[120px] px-[20px] md:px-[64px] bg-[#f2f4f6]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="dstwo-headline-md text-[#1a1c1e] italic mb-4">
            Patient Onboarding
          </h2>
          <p className="dstwo-body-md text-[#44474e]">
            A streamlined three-step journey to precision care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] relative">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[1px] bg-[#2563eb]/20" />

          {STEPS.map((step) => (
            <div key={step.title} className="text-center z-10">
              <div className="w-24 h-24 rounded-full dstwo-glass-card mx-auto flex items-center justify-center mb-6 text-[#2563eb] border-[#2563eb]/20 shadow-sm">
                <span className="dstwo-material-symbols text-4xl">{step.icon}</span>
              </div>
              <h3 className="dstwo-label-caps text-[#1a1c1e] mb-2">{step.title}</h3>
              <p className="dstwo-body-md text-[#44474e] px-4">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
