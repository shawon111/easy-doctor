import RevealOneDark from "../../ui/RevealOneDark";

const SERVICES = [
  {
    icon: "ecg",
    title: "Cardiovascular Health",
    description:
      "Advanced screenings and personalized cardiac risk assessments for long-term heart vitality.",
    iconWrapClass:
      "bg-primary-container/10 text-primary group-hover:bg-primary group-hover:text-on-primary shadow-primary/10",
    hoverClass: "hover:border-primary/40 hover:bg-primary/5",
    tagClass: "text-primary-fixed border-primary-fixed/20",
    tags: ["Diagnostics", "Prevention"],
    delay: "",
  },
  {
    icon: "genetics",
    title: "Genomic Medicine",
    description: "Unlocking your DNA profile to customize nutritional and preventative health strategies.",
    iconWrapClass:
      "bg-secondary-fixed/10 text-secondary-fixed group-hover:bg-secondary-fixed group-hover:text-on-secondary shadow-secondary-fixed/10",
    hoverClass: "hover:border-secondary-fixed/40 hover:bg-secondary-fixed/5",
    tagClass: "text-secondary-fixed border-secondary-fixed/20",
    tags: ["Precision", "Longevity"],
    delay: "delay-100",
  },
  {
    icon: "psychology",
    title: "Neurological Wellness",
    description: "Holistic approaches to cognitive performance, sleep optimization, and stress management.",
    iconWrapClass:
      "bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary shadow-tertiary/10",
    hoverClass: "hover:border-tertiary/40 hover:bg-tertiary/5",
    tagClass: "text-tertiary border-tertiary/20",
    tags: ["Cognitive", "Brain Health"],
    delay: "delay-200",
  },
];

export default function ServicesOneDark() {
  return (
    <section className="py-[120px] bg-surface-container-lowest/30 relative">
      <div className="max-w-[1440px] mx-auto px-10">
        <RevealOneDark className="text-center mb-20">
          <h2 className="font-headline-lg text-5xl text-secondary mb-6 tracking-tight">Specialized Medical Services</h2>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto opacity-80">
            Providing a comprehensive range of clinical solutions tailored to your longevity and performance.
          </p>
        </RevealOneDark>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <RevealOneDark
              key={service.title}
              className={`glass-card p-10 rounded-3xl border border-white/5 ${service.hoverClass} transition-all duration-500 group ${service.delay}`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 shadow-lg ${service.iconWrapClass}`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "36px" }}>
                  {service.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-2xl text-secondary mb-4">{service.title}</h3>
              <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-3">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-4 py-1.5 glass-card rounded-full text-[10px] font-bold tracking-widest uppercase border ${service.tagClass}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </RevealOneDark>
          ))}
        </div>
      </div>
    </section>
  );
}
