import FadeInThree from "../../ui/FadeInThree";

const TIMELINE_STYLES = [
  { periodClass: "text-primary", dotClass: "bg-primary ring-primary/10" },
  { periodClass: "text-secondary", dotClass: "bg-secondary ring-secondary/10" },
  { periodClass: "text-tertiary", dotClass: "bg-tertiary ring-tertiary/10" },
];

export default function AboutTimelineThree({ content = {} }) {
  const items = (content.items || []).map((item, index) => ({
    ...item,
    ...TIMELINE_STYLES[index % TIMELINE_STYLES.length],
  }));

  return (
    <section className="py-32 overflow-hidden bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-20">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">{content.heading}</h2>
          <p className="text-on-surface-variant mt-4">{content.subheading}</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full timeline-gradient opacity-20 hidden md:block" />

          <div className="space-y-24">
            {items.map((milestone) => (
              <div
                key={milestone.title}
                className={`relative flex flex-col ${milestone.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center md:justify-between group`}
              >
                <div className={`md:w-[45%] ${milestone.reverse ? "text-left" : "text-right"} hidden md:block`}>
                  <span className={`font-label-sm ${milestone.periodClass} mb-2 block`}>{milestone.period}</span>
                  <h3 className="font-headline-md text-on-surface">{milestone.title}</h3>
                  <p className="text-on-surface-variant mt-2">{milestone.description}</p>
                </div>

                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${milestone.dotClass} ring-8 z-20 hidden md:block group-hover:scale-125 transition-transform`}
                />

                <FadeInThree className="md:w-[45%] glass-card p-8 rounded-xl md:hidden mb-6">
                  <span className={`font-label-sm ${milestone.periodClass} mb-2 block`}>{milestone.period}</span>
                  <h3 className="font-headline-md text-on-surface">{milestone.title}</h3>
                  <p className="text-on-surface-variant mt-2">{milestone.mobileDescription}</p>
                </FadeInThree>

                <FadeInThree className="md:w-[45%] rounded-xl overflow-hidden border border-outline-variant shadow-lg hidden md:block">
                  <img className="w-full h-48 object-cover" alt={milestone.alt} src={milestone.image} />
                </FadeInThree>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
