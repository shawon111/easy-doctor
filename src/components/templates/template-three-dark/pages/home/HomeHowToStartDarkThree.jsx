export default function HomeHowToStartDarkThree({ content = {} , isDemo = false}) {
  const steps = content.steps || [];

  return (
    <section className="py-32 bg-primary/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-headline-lg mb-4">{content.heading}</h2>
          <p className="text-on-surface-variant">{content.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="relative text-center">
              <div
                className={`w-20 h-20 bg-surface-container-high rounded-full mx-auto flex items-center justify-center mb-6 z-10 relative shadow-sm ${
                  step.active ? "border border-primary" : "border border-outline-variant/50"
                }`}
              >
                <span className="material-symbols-outlined text-primary text-3xl">{step.icon}</span>
              </div>
              <h4 className="font-headline-md text-[20px] mb-2 text-on-surface">{step.title}</h4>
              <p className="text-on-surface-variant text-sm px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
