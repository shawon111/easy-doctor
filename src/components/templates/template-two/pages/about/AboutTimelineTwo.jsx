import RevealTwo from "./RevealTwo";

const MILESTONES = [
  {
    year: "2024",
    title: "Global Medical Excellence Award",
    detail: "Recognized for groundbreaking research in preventive genomics.",
    tag: "HONOR",
    note: "Awarded at the Zurich International Summit for Medical Innovation.",
    dotActive: true,
    reversed: false,
    hoverCard: true,
  },
  {
    year: "2018",
    title: "Founder, Precision Clinic",
    detail: "Establishing a multi-disciplinary center for executive health.",
    tag: "LEADERSHIP",
    note: "Leading a team of 15 specialists in integrated healthcare.",
    dotActive: false,
    reversed: true,
    hoverCard: false,
  },
  {
    year: "2010",
    title: "Johns Hopkins Residency",
    detail: "Chief Resident, Internal Medicine.",
    tag: "EDUCATION",
    note: "Specialized in Cardiovascular and Metabolic disorders.",
    dotActive: false,
    reversed: false,
    hoverCard: false,
  },
];

export default function AboutTimelineTwo() {
  return (
    <section className="py-[120px] bg-[#f2f4f6] relative">
      <RevealTwo className="px-[20px] md:px-[64px] max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="abtwo-headline-md mb-2 text-[#1a2026]">
            Professional Milestone
          </h2>
          <p className="abtwo-label-caps text-[#6e5d16]">
            CHRONOLOGY OF EXCELLENCE
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto py-12">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#c6c6cd]/50 hidden md:block" />

          <div className="space-y-16">
            {MILESTONES.map((item) => (
              <div
                key={item.year}
                className="relative grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={item.reversed ? "md:order-2" : "md:text-right"}>
                  <span className="abtwo-display-lg text-[#6e5d16] opacity-30">
                    {item.year}
                  </span>
                  <h4 className="abtwo-headline-sm text-[#1a2026]">{item.title}</h4>
                  <p className="abtwo-body-md text-[#45464d]">{item.detail}</p>
                </div>

                <div
                  className={
                    item.dotActive
                      ? "hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#6e5d16] border-4 border-[#f7f9fb] z-10 shadow-[0_0_15px_rgba(110,93,22,0.3)]"
                      : "hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c6c6cd] border-4 border-[#f7f9fb] z-10"
                  }
                />

                <div
                  className={
                    item.reversed
                      ? "md:order-1 md:text-right md:pr-12"
                      : "md:pl-12"
                  }
                >
                  <div
                    className={
                      item.hoverCard
                        ? "bg-[#e0e2e5] p-6 rounded-[8px] shadow-sm border border-[#c6c6cd]/30 hover:border-[#6e5d16]/50 transition-colors"
                        : "bg-[#e0e2e5] p-6 rounded-[8px] shadow-sm border border-[#c6c6cd]/30"
                    }
                  >
                    <span className="abtwo-label-caps text-[#6e5d16] mb-2 block">
                      {item.tag}
                    </span>
                    <p className="abtwo-body-md text-[#1a2026]">{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealTwo>
    </section>
  );
}
