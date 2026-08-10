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
    <section className="py-[120px] px-[20px] md:px-[64px] bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <h2 className="dstwo-headline-md text-[#1a1c1e] italic">
            A Career Defined by <br />
            <span className="dstwo-gold-text-gradient">Precision</span>
          </h2>

          <div className="space-y-8 border-l border-[#c4c6cf] ml-4 pl-8">
            {TIMELINE.map((item) => (
              <div key={item.title} className="relative">
                <div
                  className={
                    item.active
                      ? "absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#2563eb] shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                      : "absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#c4c6cf]"
                  }
                />
                <span
                  className={
                    item.active
                      ? "dstwo-label-caps text-[#2563eb]"
                      : "dstwo-label-caps text-[#44474e]"
                  }
                >
                  {item.period}
                </span>
                <h4 className="dstwo-headline-sm text-[#1a1c1e] mt-2">{item.title}</h4>
                <p className="dstwo-body-md text-[#44474e]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="dstwo-glass-card p-12 aspect-square flex flex-col justify-center items-center text-center space-y-6 border-[#c4c6cf] shadow-xl">
            <span className="text-7xl dstwo-display-lg dstwo-gold-text-gradient">
              25+
            </span>
            <p className="dstwo-headline-sm text-[#1a1c1e]">
              Years of Clinical Excellence
            </p>
            <div className="dstwo-gold-shimmer max-w-[100px] opacity-40" />
            <p className="dstwo-body-md text-[#44474e] italic">
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
