import Reveal from "@/components/templates/ui/Reveal";

const TIMELINE_STYLES = [
  { icon: "school", iconBg: "bg-primary", iconText: "text-on-primary" },
  { icon: "clinical_notes", iconBg: "bg-secondary", iconText: "text-on-secondary" },
  { icon: "workspace_premium", iconBg: "bg-tertiary", iconText: "text-on-tertiary" },
];

export default function AboutTimelineOne({ content = {} , isDemo = false}) {
  const items = content.items || [];

  return (
    <Reveal
      as="section"
      className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-stack-lg">
          {content.heading ? (
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              {content.heading}
            </h2>
          ) : null}
          {content.subheading ? (
            <p className="text-on-surface-variant mt-2">{content.subheading}</p>
          ) : null}
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-outline-variant hidden md:block" />
          <div className="space-y-gutter">
            {items.map((m, index) => {
              const style = TIMELINE_STYLES[index % TIMELINE_STYLES.length];
              const reverse = m.reverse ?? index % 2 === 1;

              return (
                <div
                  key={m.title}
                  className={`flex flex-col md:flex-row${reverse ? "-reverse" : ""} items-center gap-gutter`}
                >
                  <div className={`md:w-1/2 ${reverse ? "text-left" : "text-right"} hidden md:block`}>
                    <h4 className="font-headline-md text-headline-md text-primary">{m.title}</h4>
                    <p className="text-body-md text-on-surface-variant">{m.mobileDescription || m.description}</p>
                  </div>
                  <div
                    className={`z-10 w-12 h-12 rounded-full ${style.iconBg} flex items-center justify-center ${style.iconText} ring-8 ring-surface`}
                  >
                    <span className="material-symbols-outlined">{style.icon}</span>
                  </div>
                  <div className={`md:w-1/2 ${reverse ? "md:text-right" : ""}`}>
                    <div className="md:hidden">
                      <h4 className="font-headline-md text-headline-md text-primary">{m.title}</h4>
                      <p className="text-body-md text-on-surface-variant">{m.mobileDescription || m.description}</p>
                    </div>
                    {m.period ? (
                      <p className="text-label-caps font-label-caps text-outline mt-1">{m.period}</p>
                    ) : null}
                    <p className="mt-2 text-on-surface-variant">{m.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
