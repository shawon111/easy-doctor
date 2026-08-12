import GlassCardRevealOneDark from "../../ui/GlassCardRevealOneDark";

const SERVICES = [
  {
    icon: "cardiology",
    title: "Cardio Systems",
    description:
      "High-resolution cardiovascular screenings and kinetic monitoring for sustained peak vital capacity.",
  },
  {
    icon: "medical_services",
    title: "Elite Practice",
    description: "Bio-integrated primary care focusing on rapid recovery and proactive wellness optimization.",
  },
  {
    icon: "biotech",
    title: "Bio-Diagnostics",
    description:
      "Advanced molecular testing and synthesis providing sub-cellular insights for precision intervention.",
  },
  {
    icon: "neurology",
    title: "Neural Optix",
    description: "Cognitive preservation and neural-mapping to maximize brain health and mental acuity.",
  },
  {
    icon: "nutrition",
    title: "Metabolic Flow",
    description:
      "Endocrine balancing and metabolic engineering for sustained energy and fat-oxidation performance.",
  },
  {
    icon: "elderly",
    title: "Infinity Protocols",
    description:
      "Biological clock assessment and longevity treatments designed to extend your high-performance window.",
  },
];

export default function ServicesGridOneDark() {
  return (
    <section className="py-16 px-6 md:px-10 bg-surface-container-lowest">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20">
          <h2 className="text-display-lg text-on-surface font-display-lg leading-tight uppercase">
            Medical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-cyber-mint">Architecture</span>
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mt-4">
            Elite diagnostic frameworks and biological engineering protocols.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <GlassCardRevealOneDark
              key={service.title}
              className="glass-card p-10 rounded-xl transition-all duration-500 group relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-cobalt/10 border border-cobalt/20 flex items-center justify-center mb-8 group-hover:bg-cobalt transition-colors duration-500">
                <span className="material-symbols-outlined text-cobalt group-hover:text-white text-3xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-headline-md mb-4 uppercase tracking-tighter">{service.title}</h3>
              <p className="text-on-surface-variant mb-10 text-body-md leading-relaxed">{service.description}</p>
              <a className="inline-flex items-center gap-3 text-cyber-mint font-label-md group-hover:gap-5 transition-all" href="#">
                CORE SPECS <span className="material-symbols-outlined">north_east</span>
              </a>
            </GlassCardRevealOneDark>
          ))}
        </div>
      </div>
    </section>
  );
}
