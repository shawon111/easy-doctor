const TIMELINE = [
  {
    period: "2018 — Present",
    title: "Chief of Specialized Surgery",
    detail:
      "Lead consultant at the International Precision Institute, focusing on neuro-vascular innovation.",
    active: true,
  },
  {
    period: "2012 — 2018",
    title: "Professor of Clinical Oncology",
    detail:
      "Heading the research wing at Johns Hopkins University, publishing over 40 landmark studies.",
    active: false,
  },
  {
    period: "2005 — 2012",
    title: "Surgical Residency",
    detail: "Royal London Hospital, completing fellowship under Sir Alistair Graham.",
    active: false,
  },
];

export default function TimelineTwo() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <h2 className="font-headline-md text-headline-md text-on-surface italic">
            A Career Defined by <br />
            <span className="gold-text-gradient">Precision</span>
          </h2>

          <div className="space-y-8 border-l border-outline-variant ml-4 pl-8">
            {TIMELINE.map((item) => (
              <div key={item.title} className="relative">
                <div
                  className={
                    item.active
                      ? "absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                      : "absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-outline-variant"
                  }
                />
                <span
                  className={
                    item.active
                      ? "font-label-caps text-label-caps text-primary"
                      : "font-label-caps text-label-caps text-on-surface-variant"
                  }
                >
                  {item.period}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mt-2">
                  {item.title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="glass-card p-12 aspect-square flex flex-col justify-center items-center text-center space-y-6 border-outline-variant shadow-xl">
            <span className="text-7xl font-display-lg gold-text-gradient">25+</span>
            <p className="font-headline-sm text-headline-sm text-on-surface">
              Years of Clinical Excellence
            </p>
            <div className="gold-shimmer max-w-[100px] opacity-40" />
            <p className="font-body-md text-body-md text-on-surface-variant italic">
              &quot;Medicine is not merely a science, but an art. It does not
              consist of compounding pills and plasters; it deals with the
              very processes of life.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
