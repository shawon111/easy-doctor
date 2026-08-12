import Link from "next/link";

const SERVICES = [
  {
    icon: "cardiology",
    title: "Precision Cardiology",
    description:
      "Advanced cardiac screenings and preventive heart health strategies using AI-enhanced diagnostics.",
    iconClass: "bg-primary/10 text-primary",
  },
  {
    icon: "neurology",
    title: "Neuro-Wellness",
    description:
      "Integrative neurology services focusing on cognitive longevity and specialized neurological recovery.",
    iconClass: "bg-secondary/10 text-secondary",
  },
  {
    icon: "genetics",
    title: "Genomic Analysis",
    description:
      "Personalized health mapping through advanced genetic sequencing and nutritional clinical data.",
    iconClass: "bg-tertiary/10 text-tertiary",
  },
];

export default function ServicesGridThree({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-20">
          <h2 className="font-display-lg text-headline-lg mb-4">Specialized Medical Care</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Providing a comprehensive range of clinical services powered by diagnostic precision and advanced
            medical technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="glass-card p-8 rounded-[32px] group hover:bg-white transition-colors shadow-sm hover:shadow-md"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.iconClass}`}
              >
                <span className="material-symbols-outlined text-4xl">{service.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">{service.title}</h3>
              <p className="text-on-surface-variant mb-6">{service.description}</p>
              <Link
                href={`${base}/services`}
                className="inline-flex items-center gap-2 text-primary font-label-sm uppercase tracking-widest hover:gap-4 transition-all"
              >
                Learn More <span className="material-symbols-outlined text-xl">chevron_right</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
