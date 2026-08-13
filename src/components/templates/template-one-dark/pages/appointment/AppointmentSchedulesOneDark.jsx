import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

const CARD_STYLES = [
  {
    borderClass: "border-neon-mint/30 hover:border-neon-mint",
    titleClass: "text-neon-mint",
    nodeLabel: "NODE_001",
    nodeClass: "text-neon-mint/30 group-hover:text-neon-mint",
    buttonClass: "border-neon-mint text-neon-mint hover:bg-neon-mint hover:text-on-secondary",
  },
  {
    borderClass: "border-cobalt/30 hover:border-cobalt",
    titleClass: "text-cobalt",
    nodeLabel: "NODE_002",
    nodeClass: "text-cobalt/30 group-hover:text-cobalt",
    buttonClass: "border-cobalt text-cobalt hover:bg-cobalt hover:text-white",
  },
];

export default function AppointmentSchedulesOneDark({ content = {} }) {
  const items = content.items || [];

  return (
    <SectionFadeOneDark
      id="schedule"
      className="py-[120px] px-5 md:px-16 bg-surface-container-lowest"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            {content.heading ? (
              <h2 className="font-headline-lg text-headline-lg text-on-background uppercase italic">
                {content.heading}
              </h2>
            ) : null}
            {content.subheading ? (
              <p className="font-label-md text-on-surface-variant mt-2 tracking-widest">{content.subheading}</p>
            ) : null}
          </div>
          <div className="h-[1px] flex-grow bg-outline-variant/20 mx-8 hidden md:block" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => {
            const style = CARD_STYLES[index % CARD_STYLES.length];

            return (
              <div
                key={item.location || item.day}
                className={`bg-surface-container-low p-10 rounded-xl border ${style.borderClass} flex flex-col h-full transition-all hover:bg-surface-container relative overflow-hidden group`}
              >
                <div className={`absolute top-0 right-0 p-4 font-label-sm ${style.nodeClass} transition-colors`}>
                  {style.nodeLabel}
                </div>
                <div className="mb-10">
                  <h3 className={`font-headline-md text-headline-md ${style.titleClass} mb-2`}>{item.location}</h3>
                </div>
                <div className="space-y-4 flex-grow font-label-md uppercase tracking-tight">
                  <div className="flex justify-between items-center py-4 border-b border-outline-variant/10">
                    <span className="text-on-surface/60">{item.day}</span>
                    <span className="text-on-surface font-bold">{item.hours}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className={`mt-10 w-full py-5 rounded-full border font-label-md transition-all uppercase tracking-widest ${style.buttonClass}`}
                >
                  Get Directions
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </SectionFadeOneDark>
  );
}
