import Reveal from "@/components/templates/ui/Reveal";


const SERVICES = [
  {
    icon: "ecg",
    title: "Cardiovascular Health",
    description:
      "Advanced screenings and personalized cardiac risk assessments for long-term heart vitality.",
    tags: ["Diagnostics", "Prevention"],
    delay: "",
  },
  {
    icon: "genetics",
    title: "Genomic Medicine",
    description:
      "Unlocking your DNA profile to customize nutritional and preventative health strategies.",
    tags: ["Precision", "Longevity"],
    delay: "delay-100",
  },
  {
    icon: "psychology",
    title: "Neurological Wellness",
    description:
      "Holistic approaches to cognitive performance, sleep optimization, and stress management.",
    tags: ["Cognitive", "Brain Health"],
    delay: "delay-200",
  },
];

export default function ServicesOne() {
  return (
    <section className="py-section-padding bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <Reveal className="text-center mb-stack-lg" as="div">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Specialized Medical Services
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Providing a comprehensive range of clinical solutions tailored to your
            longevity and performance.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {SERVICES.map((service) => (
            <Reveal
              key={service.title}
              className={`bg-white p-8 rounded-2xl soft-bloom border border-outline-variant/30 hover:border-primary/50 transition-all group ${service.delay}`}
            >
              <div className="w-16 h-16 bg-primary-container/20 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>
                  {service.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                {service.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#F0FDFA] text-[#0F766E] rounded-full text-label-caps font-label-caps"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
