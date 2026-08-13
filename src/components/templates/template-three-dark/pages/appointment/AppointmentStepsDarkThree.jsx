const STEP_STYLES = [
  { numberColor: "text-primary", iconClass: "bg-primary/10 text-primary" },
  { numberColor: "text-secondary-fixed-dim", iconClass: "bg-secondary/10 text-secondary-fixed-dim" },
  { numberColor: "text-tertiary-fixed-dim", iconClass: "bg-tertiary/10 text-tertiary-fixed-dim" },
];

export default function AppointmentStepsDarkThree({ content = {} }) {
  const items = (content.items || []).map((step, index) => ({
    ...step,
    ...STEP_STYLES[index % STEP_STYLES.length],
  }));

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-24">
      {items.map((step) => (
        <div
          key={step.title}
          className="glass-card p-8 rounded-xl relative overflow-hidden group hover:bg-surface-container-high transition-all duration-300 glow-hover"
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
