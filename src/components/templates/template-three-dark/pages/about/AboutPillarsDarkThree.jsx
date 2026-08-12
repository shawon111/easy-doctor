const PILLARS = [
  {
    icon: "psychology",
    title: "Unwavering Integrity",
    description:
      "Clinical honesty is the foundation of our practice. We provide clear, data-backed insights for every medical decision.",
    iconClass: "bg-primary/10 text-primary",
    hoverBorder: "hover:border-primary/50",
  },
  {
    icon: "public",
    title: "Global Communication",
    description:
      "Breaking language barriers through intuitive digital portals that speak the patient's language—literally and metaphorically.",
    iconClass: "bg-secondary/10 text-secondary",
    hoverBorder: "hover:border-secondary/50",
  },
  {
    icon: "precision_manufacturing",
    title: "Precision First",
    description:
      "Utilizing molecular-level diagnostics to tailor treatments that are as unique as your own DNA sequence.",
    iconClass: "bg-tertiary/10 text-tertiary",
    hoverBorder: "hover:border-tertiary/50",
  },
];

export default function AboutPillarsDarkThree() {
  return (
    <section className="py-24 bg-surface-container-low relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Our Core Pillars</h2>
            <p className="text-on-surface-variant mt-4">
              We believe that global healthcare requires a universal language of empathy and technological transparency.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 text-primary border border-primary/30 px-6 py-2 rounded-full hover:bg-primary/5 transition-colors"
          >
            View Ethics Charter <span className="material-symbols-outlined">north_east</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className={`glass-card p-10 rounded-3xl group transition-all duration-300 ${pillar.hoverBorder}`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${pillar.iconClass}`}
              >
                <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-4">{pillar.title}</h3>
              <p className="text-on-surface-variant">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
