import SectionFadeTwoDark from "../../ui/SectionFadeTwoDark";

export default function AboutTimelineTwoDark({ content = {} , isDemo = false}) {
  const items = content.items || [];

  return (
    <SectionFadeTwoDark className="py-[120px] bg-surface-container-low/50 relative">
      <div className="px-5 md:px-16 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md mb-2">{content.heading}</h2>
          <p className="font-label-caps text-label-caps text-tertiary">{content.subheading}</p>
        </div>

        <div className="relative max-w-4xl mx-auto py-12">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-outline-variant/30 hidden md:block" />
          <div className="space-y-16">
            {items.map((item, index) => {
              const align = item.reverse ?? index % 2 === 1 ? "right" : "left";

              return (
                <div key={`${item.period}-${item.title}`} className="relative grid md:grid-cols-2 gap-8 items-center">
                  {align === "left" ? (
                    <>
                      <div className="md:text-right">
                        <span className="font-display-lg text-display-lg text-tertiary opacity-30">{item.period}</span>
                        <h4 className="font-headline-sm text-headline-sm">{item.title}</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">{item.description}</p>
                      </div>
                      <div
                        className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10 ${
                          index === 0 ? "bg-tertiary shadow-[0_0_15px_rgba(212,175,55,0.5)]" : "bg-outline-variant"
                        }`}
                      />
                      <div className="md:pl-12">
                        {(item.mobileDescription || item.description) && (
                          <div className={`glass-card p-6 rounded shadow-sm ${index === 0 ? "hover:border-tertiary/50 transition-colors" : ""}`}>
                            <p className="font-body-md text-body-md">{item.mobileDescription || item.description}</p>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="md:order-2">
                        <span className="font-display-lg text-display-lg text-tertiary opacity-30">{item.period}</span>
                        <h4 className="font-headline-sm text-headline-sm">{item.title}</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">{item.description}</p>
                      </div>
                      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-outline-variant border-4 border-background z-10" />
                      <div className="md:order-1 md:text-right md:pr-12">
                        {(item.mobileDescription || item.description) && (
                          <div className="glass-card p-6 rounded shadow-sm">
                            <p className="font-body-md text-body-md">{item.mobileDescription || item.description}</p>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionFadeTwoDark>
  );
}
