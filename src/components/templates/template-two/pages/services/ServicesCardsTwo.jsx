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
    description:
      "Advanced treatment for complex neural pathways and cognitive enhancement therapies.",
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

export default function ServicesCardsTwo() {
  return (
    <section className="py-[120px] bg-[#f2f4f6]/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full">
        <div className="svctwo-gold-shimmer opacity-30" />
      </div>

      <div className="px-[20px] md:px-[64px] max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="svctwo-headline-md mb-4 text-[#1a1c1e]">All Clinical Services</h2>
            <p className="svctwo-body-md text-[#44474e]">
              Explore our full range of specialized care, designed for
              individuals who demand nothing less than clinical excellence.
            </p>
          </div>
          <div className="hidden md:block">
            <button className="bg-[#2563eb] text-white svctwo-label-caps px-8 py-3 rounded-[4px] hover:bg-[#2563eb]/90 transition-all shadow-sm active:scale-95">
              Download Catalog
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group bg-[#e1e2e5] border border-[#c4c6cf]/30 p-8 rounded-[8px] svctwo-hover-gold-border flex flex-col h-full transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#d7e2ff] text-[#2563eb] rounded-[4px] mb-6 group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                <span
                  className="svctwo-material-symbols"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {service.icon}
                </span>
              </div>
              <h4 className="svctwo-headline-sm mb-3 text-[#1a1c1e]">{service.title}</h4>
              <p className="svctwo-body-md text-[#44474e] mb-6 flex-1">{service.description}</p>
              <ul className="space-y-2 mb-8 svctwo-label-caps text-[11px] text-[#1a1c1e]/60">
                {service.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2563eb]/40 rounded-full" />
                    {tag}
                  </li>
                ))}
              </ul>
              <a className="text-[#2563eb] svctwo-label-caps flex items-center gap-2 group/link" href="#">
                Explore
                <span className="svctwo-material-symbols text-[16px] group-hover/link:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
