import Reveal from "@/components/templates/ui/Reveal";

const DELAYS = ["", "delay-100", "delay-200"];

export default function ServicesOne({ content = {} }) {
  const items = content.items || [];

  return (
    <section className="py-section-padding bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <Reveal className="text-center mb-stack-lg" as="div">
          {content.heading ? (
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
              {content.heading}
            </h2>
          ) : null}
          {content.subheading ? (
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              {content.subheading}
            </p>
          ) : null}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {items.map((service, index) => (
            <Reveal
              key={service.title}
              className={`bg-white p-8 rounded-2xl soft-bloom border border-outline-variant/30 hover:border-primary/50 transition-all group ${DELAYS[index] || ""}`}
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
              {service.tags?.length ? (
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
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
