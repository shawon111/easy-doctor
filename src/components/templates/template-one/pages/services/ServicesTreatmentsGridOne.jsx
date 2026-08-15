import Reveal from "@/components/templates/ui/Reveal";

export default function ServicesTreatmentsGridOne({ content = {} , isDemo = false}) {
  const items = content.items || [];

  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          {content.heading ? (
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              {content.heading}
            </h2>
          ) : null}
          {content.subheading ? (
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              {content.subheading}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {items.map((service) => (
            <Reveal
              key={service.title}
              className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 hover:shadow-[0px_20px_40px_rgba(30,41,59,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-6">
                {service.icon}
              </span>
              <h3 className="text-headline-md font-headline-md mb-4">{service.title}</h3>
              <p className="text-on-surface-variant mb-8 text-body-md leading-relaxed">
                {service.description}
              </p>
              <button className="flex items-center gap-2 text-primary font-button hover:gap-4 transition-all">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
