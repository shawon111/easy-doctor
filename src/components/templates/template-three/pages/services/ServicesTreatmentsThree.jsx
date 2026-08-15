const CARD_CONFIG = [
  {
    colSpan: "md:col-span-8",
    flexClass: "md:flex-row",
    badgeClass: "bg-primary-container text-on-primary-container",
    icon: "favorite",
    ctaClass: "text-primary",
    showBullets: true,
  },
  {
    colSpan: "md:col-span-4",
    badgeClass: "bg-tertiary-container text-on-tertiary-container",
    icon: "genetics",
    ctaClass: "text-tertiary",
  },
  {
    colSpan: "md:col-span-4",
    badgeClass: "bg-secondary-container text-on-secondary-container",
    icon: "spa",
    ctaClass: "text-secondary",
  },
  {
    colSpan: "md:col-span-8",
    flexClass: "md:flex-row-reverse",
    badgeClass: "bg-surface-container text-on-surface-variant",
    icon: "medical_services",
    showStats: true,
  },
];

export default function ServicesTreatmentsThree({ content = {} , isDemo = false}) {
  const cards = content.cards || [];

  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">{content.heading}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">{content.subheading}</p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg border border-outline-variant flex items-center justify-center text-primary cursor-pointer hover:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined text-xl">west</span>
            </div>
            <div className="w-12 h-12 rounded-lg border border-outline-variant flex items-center justify-center text-primary cursor-pointer hover:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined text-xl">east</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {cards.map((card, index) => {
            const config = CARD_CONFIG[index] || CARD_CONFIG[0];
            const imageMinHeight = config.showStats ? "min-h-[300px]" : "h-48";

            return (
              <div
                key={card.title}
                className={`${config.colSpan} glass-card rounded-xl p-8 flex flex-col ${config.flexClass || ""} gap-8 hover-lift cursor-default overflow-hidden`}
              >
                <div className={config.showStats || config.showBullets ? "md:w-1/2" : ""}>
                  <div className={`inline-flex ${config.colSpan.includes("4") ? "w-fit" : ""} items-center gap-2 px-3 py-1 ${config.badgeClass} rounded-lg mb-6`}>
                    <span className="material-symbols-outlined text-[18px]">{config.icon}</span>
                    <span className="font-label-sm text-label-sm font-semibold">{card.badge}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4">{card.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">{card.body}</p>

                  {config.showBullets && card.bullets?.length > 0 && (
                    <ul className="space-y-3 mb-8">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-3 text-on-surface-variant">
                          <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {config.showStats && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/50">
                        <div className="text-primary font-bold text-headline-md mb-1">{card.stat1Value}</div>
                        <div className="text-on-surface-variant text-label-sm">{card.stat1Label}</div>
                      </div>
                      <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/50">
                        <div className="text-primary font-bold text-headline-md mb-1">{card.stat2Value}</div>
                        <div className="text-on-surface-variant text-label-sm">{card.stat2Label}</div>
                      </div>
                    </div>
                  )}

                  {card.cta && (
                    <button
                      type="button"
                      className={`flex items-center gap-2 ${config.ctaClass} font-bold hover:gap-4 transition-all ${config.showStats ? "hidden" : ""}`}
                    >
                      {card.cta} <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </button>
                  )}
                </div>

                <div
                  className={`${config.showStats || config.showBullets ? "md:w-1/2" : ""} rounded-lg bg-surface-container overflow-hidden ${config.showStats ? "min-h-[300px]" : config.colSpan.includes("4") ? "mt-auto" : ""}`}
                >
                  <div
                    className={`w-full h-full bg-cover bg-center ${imageMinHeight}`}
                    style={{ backgroundImage: `url('${card.image}')` }}
                  />
                  {card.cta && config.colSpan.includes("4") && (
                    <button
                      type="button"
                      className={`flex items-center gap-2 ${config.ctaClass} font-bold hover:gap-4 transition-all mt-6`}
                    >
                      {card.cta} <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
