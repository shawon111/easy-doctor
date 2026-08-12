const STEPS = [
  {
    number: "01",
    numberColor: "text-primary",
    icon: "person_search",
    iconClass: "bg-primary/10 text-primary",
    title: "Select Service",
    description:
      "Choose from our specialized clinical consultations, diagnostic tests, or routine health checkups.",
  },
  {
    number: "02",
    numberColor: "text-secondary",
    icon: "event_available",
    iconClass: "bg-secondary/10 text-secondary",
    title: "Pick Time",
    description: "View the visiting schedule below and identify a slot that fits your personal calendar perfectly.",
  },
  {
    number: "03",
    numberColor: "text-tertiary",
    icon: "verified",
    iconClass: "bg-tertiary/10 text-tertiary",
    title: "Confirm Visit",
    description: "Use our WhatsApp integration or the booking portal to finalize your appointment details securely.",
  },
];

export default function AppointmentStepsThree() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-24">
      {STEPS.map((step) => (
        <div
          key={step.title}
          className="glass-card p-8 rounded-xl relative overflow-hidden group hover:bg-white transition-all duration-300 glow-hover"
        >
          <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className={`font-display-lg text-[120px] font-extrabold italic ${step.numberColor}`}>
              {step.number}
            </span>
          </div>
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${step.iconClass}`}>
            <span className="material-symbols-outlined text-2xl">{step.icon}</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-3">{step.title}</h3>
          <p className="text-on-surface-variant font-body-md">{step.description}</p>
        </div>
      ))}
    </section>
  );
}
