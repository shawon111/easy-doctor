const BENEFITS = [
  {
    icon: "biotech",
    title: "Bio-Digital Integration",
    description:
      "Real-time wearable data synced directly with your clinical record for continuous health monitoring and proactive intervention.",
    iconClass: "bg-primary/10 text-primary",
    hoverClass: "group-hover:bg-primary group-hover:text-on-primary",
  },
  {
    icon: "neurology",
    title: "Evidence-Based Protocols",
    description:
      "Every treatment is backed by the latest peer-reviewed clinical research and adapted for your unique physiological profile.",
    iconClass: "bg-secondary/10 text-secondary",
    hoverClass: "group-hover:bg-secondary group-hover:text-on-secondary",
  },
  {
    icon: "chevron_left",
    title: "Proactive Safeguarding",
    description:
      "Focusing on early detection and prevention to ensure your health span matches your life span with uncompromising quality.",
    iconClass: "bg-tertiary/10 text-tertiary",
    hoverClass: "group-hover:bg-tertiary group-hover:text-on-tertiary",
  },
];

export default function ServicesBenefitsDarkThree() {
  return (
    <section className="py-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Why Our Treatments Work</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            We don&apos;t just treat symptoms; we engineer health through a multi-dimensional clinical approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="group">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${benefit.iconClass} ${benefit.hoverClass}`}
              >
                <span className="material-symbols-outlined text-[32px]">{benefit.icon}</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface mb-3">{benefit.title}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
