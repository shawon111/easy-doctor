import Link from "next/link";

const SERVICES = [
  {
    icon: "cardiology",
    title: "Cardiac Optimization",
    description:
      "Proactive management of cardiovascular health using genomic data and real-time hemodynamic monitoring.",
    tags: ["GENETIC SCREENING", "STRESS ANALYSIS"],
  },
  {
    icon: "neurology",
    title: "Neurological Mastery",
    description: "Advanced treatment for complex neural pathways and cognitive enhancement therapies.",
    tags: ["NEURO-IMAGING", "COGNITIVE RECOVERY"],
  },
  {
    icon: "biotech",
    title: "Regenerative Orthopedics",
    description:
      "Stem cell interventions and bio-scaffolding to restore peak physical performance without invasive surgery.",
    tags: ["BIO-RESTORATION", "JOINT LONGEVITY"],
  },
];

export default function ServicesCardsTwoDark({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="py-[120px] bg-surface-container-low/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full">
        <div className="gold-shimmer opacity-30" />
      </div>
      <div className="px-5 md:px-16 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="font-headline-md text-headline-md mb-4">All Clinical Services</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Explore our full range of specialized care, designed for individuals who demand nothing less than
              clinical excellence.
            </p>
          </div>
          <div className="hidden md:block">
            <button
              type="button"
              className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-3 rounded hover:bg-primary/90 transition-all"
            >
              Download Catalog
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group bg-surface-container-highest border border-outline-variant/30 p-8 rounded hover-gold-border flex flex-col h-full transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-tertiary rounded mb-6 group-hover:bg-tertiary group-hover:text-primary-container transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {service.icon}
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm mb-3">{service.title}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">{service.description}</p>
              <ul className="space-y-2 mb-8 font-label-caps text-[11px] text-on-surface/60">
                {service.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-tertiary rounded-full" />
                    {tag}
                  </li>
                ))}
              </ul>
              <Link
                className="text-tertiary font-label-caps text-label-caps flex items-center gap-2 group/link"
                href={`${base}/appointment`}
              >
                Explore{" "}
                <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
