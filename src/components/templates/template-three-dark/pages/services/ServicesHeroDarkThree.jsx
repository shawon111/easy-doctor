export default function ServicesHeroDarkThree({ content = {} , isDemo = false}) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <span className="font-label-sm text-label-sm text-secondary-fixed-dim uppercase tracking-[0.2em] mb-4 block font-semibold">
          {content.badge}
        </span>
        <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-3xl mx-auto text-glow-primary">
          {content.heading}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">{content.body}</p>
      </div>
    </section>
  );
}
