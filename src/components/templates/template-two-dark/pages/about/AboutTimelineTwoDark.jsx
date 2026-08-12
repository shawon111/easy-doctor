import SectionFadeTwoDark from "../../ui/SectionFadeTwoDark";

const MILESTONES = [
  {
    year: "2024",
    title: "Global Medical Excellence Award",
    subtitle: "Recognized for groundbreaking research in preventive genomics.",
    tag: "HONOR",
    detail: "Awarded at the Zurich International Summit for Medical Innovation.",
    align: "left",
  },
  {
    year: "2018",
    title: "Founder, Precision Clinic",
    subtitle: "Establishing a multi-disciplinary center for executive health.",
    tag: "LEADERSHIP",
    detail: "Leading a team of 15 specialists in integrated healthcare.",
    align: "right",
  },
  {
    year: "2010",
    title: "Johns Hopkins Residency",
    subtitle: "Chief Resident, Internal Medicine.",
    tag: "EDUCATION",
    detail: "Specialized in Cardiovascular and Metabolic disorders.",
    align: "left",
  },
];

export default function AboutTimelineTwoDark() {
  return (
    <SectionFadeTwoDark className="py-[120px] bg-surface-container-low/50 relative">
      <div className="px-5 md:px-16 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md mb-2">Professional Milestone</h2>
          <p className="font-label-caps text-label-caps text-tertiary">CHRONOLOGY OF EXCELLENCE</p>
        </div>

        <div className="relative max-w-4xl mx-auto py-12">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-outline-variant/30 hidden md:block" />
          <div className="space-y-16">
            {MILESTONES.map((item, index) => (
              <div key={item.year} className="relative grid md:grid-cols-2 gap-8 items-center">
                {item.align === "left" ? (
                  <>
                    <div className="md:text-right">
                      <span className="font-display-lg text-display-lg text-tertiary opacity-30">{item.year}</span>
                      <h4 className="font-headline-sm text-headline-sm">{item.title}</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">{item.subtitle}</p>
                    </div>
                    <div
                      className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10 ${
                        index === 0 ? "bg-tertiary shadow-[0_0_15px_rgba(212,175,55,0.5)]" : "bg-outline-variant"
                      }`}
                    />
                    <div className="md:pl-12">
                      <div className={`glass-card p-6 rounded shadow-sm ${index === 0 ? "hover:border-tertiary/50 transition-colors" : ""}`}>
                        <span className="font-label-caps text-label-caps text-tertiary mb-2 block">{item.tag}</span>
                        <p className="font-body-md text-body-md">{item.detail}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:order-2">
                      <span className="font-display-lg text-display-lg text-tertiary opacity-30">{item.year}</span>
                      <h4 className="font-headline-sm text-headline-sm">{item.title}</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">{item.subtitle}</p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-outline-variant border-4 border-background z-10" />
                    <div className="md:order-1 md:text-right md:pr-12">
                      <div className="glass-card p-6 rounded shadow-sm">
                        <span className="font-label-caps text-label-caps text-tertiary mb-2 block">{item.tag}</span>
                        <p className="font-body-md text-body-md">{item.detail}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionFadeTwoDark>
  );
}
