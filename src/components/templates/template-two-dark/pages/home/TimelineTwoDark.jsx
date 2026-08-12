const TIMELINE = [
  {
    period: "2018 — Present",
    title: "Chief of Specialized Surgery",
    description:
      "Lead consultant at the International Precision Institute, focusing on neuro-vascular innovation.",
    active: true,
  },
  {
    period: "2012 — 2018",
    title: "Professor of Clinical Oncology",
    description: "Heading the research wing at Johns Hopkins University, publishing over 40 landmark studies.",
    active: false,
  },
  {
    period: "2005 — 2012",
    title: "Surgical Residency",
    description: "Royal London Hospital, completing fellowship under Sir Alistair Graham.",
    active: false,
  },
];

export default function TimelineTwoDark() {
  return (
    <section className="py-[120px] px-5 md:px-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <h2 className="font-headline-md text-headline-md text-on-surface italic">
            A Career Defined by <br />
            <span className="gold-text-gradient">Precision</span>
          </h2>
          <div className="space-y-8 border-l border-outline-variant/30 ml-4 pl-8">
            {TIMELINE.map((item) => (
              <div key={item.period} className="relative">
                <div
                  className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full ${
                    item.active ? "bg-tertiary shadow-[0_0_10px_#D4AF37]" : "bg-outline-variant"
                  }`}
                />
                <span className={`font-label-caps text-label-caps ${item.active ? "text-tertiary" : "text-on-surface-variant"}`}>
                  {item.period}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mt-2">{item.title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="glass-card p-12 aspect-square flex flex-col justify-center items-center text-center space-y-6">
            <span className="text-7xl font-display-lg gold-text-gradient">25+</span>
            <p className="font-headline-sm text-headline-sm text-on-surface">Years of Clinical Excellence</p>
            <div className="gold-shimmer max-w-[100px]" />
            <p className="font-body-md text-body-md text-on-surface-variant italic">
              &quot;Medicine is not merely a science, but an art. It does not consist of compounding pills and plasters;
              it deals with the very processes of life.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
