const BENEFIT_STYLES = [
  {
    iconClass: "bg-primary/10 text-primary",
    hoverClass: "group-hover:bg-primary group-hover:text-on-primary",
  },
  {
    iconClass: "bg-secondary/10 text-secondary-fixed-dim",
    hoverClass: "group-hover:bg-secondary group-hover:text-on-secondary",
  },
  {
    iconClass: "bg-tertiary/10 text-tertiary-fixed-dim",
    hoverClass: "group-hover:bg-tertiary group-hover:text-on-tertiary",
  },
];

export default function ServicesBenefitsDarkThree({ content = {} }) {
  const items = (content.items || []).map((item, index) => ({
    ...item,
    ...BENEFIT_STYLES[index % BENEFIT_STYLES.length],
  }));

  return (
    <section className="py-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">{content.heading}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">{content.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((benefit) => (
            <div key={benefit.title} className="group">
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${benefit.iconClass} ${benefit.hoverClass}`}
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
