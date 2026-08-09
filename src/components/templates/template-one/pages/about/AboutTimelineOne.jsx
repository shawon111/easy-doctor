import Reveal from "@/components/templates/ui/Reveal";


const MILESTONES = [
  {
    icon: "school",
    iconBg: "bg-primary",
    iconText: "text-on-primary",
    title: "Medical Doctorate",
    institution: "Johns Hopkins University School of Medicine",
    years: "2005 — 2009",
    description: "Graduated with high honors, specializing in advanced physiological systems.",
    reverse: false,
  },
  {
    icon: "clinical_notes",
    iconBg: "bg-secondary",
    iconText: "text-on-secondary",
    title: "Surgical Residency",
    institution: "Mayo Clinic Graduate School of Medical Education",
    years: "2009 — 2014",
    description: "Focused on minimally invasive techniques and robotic-assisted surgery.",
    reverse: true,
  },
  {
    icon: "workspace_premium",
    iconBg: "bg-tertiary",
    iconText: "text-on-tertiary",
    title: "Senior Fellowship",
    institution: "Stanford University Medical Center",
    years: "2014 — 2016",
    description: "Advanced fellowship in specialized regenerative medicine and patient recovery.",
    reverse: false,
  },
];

export default function AboutTimelineOne() {
  return (
    <Reveal
      as="section"
      className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-stack-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Academic &amp; Professional Journey
          </h2>
          <p className="text-on-surface-variant mt-2">
            A legacy of excellence and continuous learning.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-outline-variant hidden md:block" />
          <div className="space-y-gutter">
            {MILESTONES.map((m) => (
              <div
                key={m.title}
                className={`flex flex-col md:flex-row${m.reverse ? "-reverse" : ""} items-center gap-gutter`}
              >
                <div className={`md:w-1/2 ${m.reverse ? "text-left" : "text-right"} hidden md:block`}>
                  <h4 className="font-headline-md text-headline-md text-primary">{m.title}</h4>
                  <p className="text-body-md text-on-surface-variant">{m.institution}</p>
                </div>
                <div
                  className={`z-10 w-12 h-12 rounded-full ${m.iconBg} flex items-center justify-center ${m.iconText} ring-8 ring-surface`}
                >
                  <span className="material-symbols-outlined">{m.icon}</span>
                </div>
                <div className={`md:w-1/2 ${m.reverse ? "md:text-right" : ""}`}>
                  <div className="md:hidden">
                    <h4 className="font-headline-md text-headline-md text-primary">{m.title}</h4>
                    <p className="text-body-md text-on-surface-variant">{m.institution}</p>
                  </div>
                  <p className="text-label-caps font-label-caps text-outline mt-1">{m.years}</p>
                  <p className="mt-2 text-on-surface-variant">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
