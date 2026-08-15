import FadeInThree from "../../../template-three/ui/FadeInThree";

const PILLAR_STYLES = [
  { iconClass: "bg-primary/10 text-primary", shadowClass: "hover:shadow-primary/5" },
  { iconClass: "bg-secondary/10 text-secondary-fixed-dim", shadowClass: "hover:shadow-secondary/5" },
  { iconClass: "bg-tertiary/10 text-tertiary-fixed-dim", shadowClass: "hover:shadow-tertiary/5" },
];

export default function AboutPillarsDarkThree({ content = {} , isDemo = false}) {
  const items = (content.items || []).map((item, index) => ({
    ...item,
    ...PILLAR_STYLES[index % PILLAR_STYLES.length],
  }));

  return (
    <section className="py-24 bg-surface-container-low relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">{content.heading}</h2>
            <p className="text-on-surface-variant mt-4">{content.subheading}</p>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 text-primary border border-primary/20 px-6 py-2.5 rounded-lg hover:bg-primary/5 transition-all font-semibold"
          >
            {content.cta} <span className="material-symbols-outlined text-xl">north_east</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {items.map((pillar) => (
            <FadeInThree
              key={pillar.title}
              className={`glass-card p-10 rounded-2xl group hover:shadow-2xl ${pillar.shadowClass} transition-all duration-300 border border-outline-variant/60`}
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
