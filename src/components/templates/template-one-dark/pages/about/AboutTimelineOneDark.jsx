import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

const TIMELINE_STYLES = [
  { icon: "school", colorClass: "text-primary", nodeClass: "bg-primary text-on-primary glow-node" },
  { icon: "clinical_notes", colorClass: "text-secondary-fixed", nodeClass: "bg-secondary-fixed text-on-secondary glow-node-mint" },
  { icon: "workspace_premium", colorClass: "text-tertiary", nodeClass: "bg-tertiary text-on-tertiary glow-node" },
];

export default function AboutTimelineOneDark({ content = {}, isDemo = false }) {
  const items = content.items || [];

  return (
    <SectionFadeOneDark className="py-32 px-6 md:px-10 bg-surface-container-lowest relative overflow-hidden" isDemo={isDemo}>
      <div className="max-w-[1440px] mx-auto relative">
        <div className="text-center mb-24">
          {content.heading ? (
            <h2 className="font-headline-lg text-headline-lg text-on-surface">{content.heading}</h2>
          ) : null}
          {content.subheading ? (
            <p className="text-on-surface-variant mt-3 text-body-lg">{content.subheading}</p>
          ) : null}
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary via-secondary-fixed to-tertiary hidden md:block" />
          <div className="space-y-16">
            {items.map((item, index) => {
              const style = TIMELINE_STYLES[index % TIMELINE_STYLES.length];
              const reverse = item.reverse ?? index % 2 === 1;

              return (
                <div
                  key={item.title}
                  className={`flex flex-col md:flex-row${reverse ? "-reverse" : ""} items-center gap-8`}
                >
                  <div className={`md:w-1/2 ${reverse ? "text-left" : "md:text-right"}`}>
                    <div className={`glass-container p-8 rounded-2xl md:max-w-md inline-block text-left ${index === 1 ? "border-secondary-fixed/10" : index === 2 ? "border-tertiary/10" : ""}`}>
                      <h4 className={`font-headline-md text-headline-md ${style.colorClass} mb-2`}>{item.title}</h4>
                      <p className="text-body-md text-on-surface-variant font-medium">{item.mobileDescription || item.description}</p>
                      <p className="mt-4 text-on-surface-variant/80">{item.description}</p>
                    </div>
                  </div>
                  <div
                    className={`z-10 w-14 h-14 rounded-full flex items-center justify-center border-4 border-background ${style.nodeClass}`}
                    style={index === 2 ? { boxShadow: "0 0 20px rgba(209, 188, 255, 0.4)" } : undefined}
                  >
                    <span className="material-symbols-outlined">{style.icon}</span>
                  </div>
                  <div className={`md:w-1/2 ${reverse ? "md:text-right" : ""}`}>
                    {item.period ? (
                      <p className={`text-label-md font-label-md ${style.colorClass} uppercase tracking-widest`}>{item.period}</p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionFadeOneDark>
  );
}
