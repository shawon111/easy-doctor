import FadeInThree from "../../ui/FadeInThree";

const PILLARS = [
  {
    icon: "psychology",
    title: "Unwavering Integrity",
    description:
      "Clinical honesty is the foundation of our practice. We provide clear, data-backed insights for every medical decision.",
    iconClass: "bg-primary-container text-primary",
    shadowClass: "hover:shadow-primary/5",
  },
  {
    icon: "public",
    title: "Global Communication",
    description:
      "Breaking language barriers through intuitive digital portals that speak the patient's language—literally and metaphorically.",
    iconClass: "bg-secondary-container text-secondary",
    shadowClass: "hover:shadow-secondary/5",
  },
  {
    icon: "precision_manufacturing",
    title: "Precision First",
    description:
      "Utilizing molecular-level diagnostics to tailor treatments that are as unique as your own DNA sequence.",
    iconClass: "bg-tertiary-container text-tertiary",
    shadowClass: "hover:shadow-tertiary/5",
  },
];

export default function AboutPillarsThree() {
  return (
    <section className="py-24 bg-surface-variant/50 relative">
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
            className="flex items-center gap-2 text-primary border border-primary/20 px-6 py-2.5 rounded-lg hover:bg-primary/5 transition-all font-semibold"
          >
            View Ethics Charter <span className="material-symbols-outlined text-xl">north_east</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {PILLARS.map((pillar) => (
            <FadeInThree
              key={pillar.title}
              className={`bg-surface p-10 rounded-2xl group hover:shadow-2xl ${pillar.shadowClass} transition-all duration-300 border border-outline-variant/60`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${pillar.iconClass}`}
              >
                <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-4">{pillar.title}</h3>
              <p className="text-on-surface-variant">{pillar.description}</p>
            </FadeInThree>
          ))}
        </div>
      </div>
    </section>
  );
}
