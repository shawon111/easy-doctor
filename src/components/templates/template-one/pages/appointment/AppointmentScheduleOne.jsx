import Reveal from "@/components/templates/ui/Reveal";

const BADGE_CLASSES = [
  "bg-secondary/10 text-secondary",
  "bg-outline-variant/30 text-on-surface-variant",
];

export default function AppointmentScheduleOne({ content = {} , isDemo = false}) {
  const items = content.items || [];

  return (
    <Reveal
      as="section"
      id="schedule"
      className="py-section-padding px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-stack-lg">
          {content.heading ? (
            <h2 className="font-headline-lg text-headline-lg text-on-background">
              {content.heading}
            </h2>
          ) : null}
          {content.subheading ? (
            <p className="text-body-md text-on-surface-variant">{content.subheading}</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {items.map((item, index) => (
            <div
              key={item.location || item.day}
              className="bg-surface p-stack-lg rounded-3xl border border-outline-variant flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-stack-md">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary">
                    {item.location}
                  </h3>
                </div>
                <span className={`px-3 py-1 ${BADGE_CLASSES[index % BADGE_CLASSES.length]} text-label-caps rounded-lg`}>
                  {index === 0 ? "PRIMARY CLINIC" : "CLINIC"}
                </span>
              </div>

              <div className="space-y-4 flex-grow">
                <div className="flex justify-between items-center py-3 border-b border-outline-variant/50">
                  <span className="font-semibold">{item.day}</span>
                  <span className="text-on-surface-variant">{item.hours}</span>
                </div>
              </div>

              <button className="mt-stack-md w-full py-4 rounded-xl border border-primary text-primary font-button hover:bg-primary/5 transition-colors">
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
