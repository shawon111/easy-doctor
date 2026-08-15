export default function CredentialsTwo({ content = {} , isDemo = false}) {
  const items = content.items || [];

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
      <div className="max-w-container-max mx-auto text-center mb-16">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-4 italic">
          {content.heading}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          {content.subheading}
        </p>
      </div>

      <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {items.map((item) => (
          <div
            key={item.title}
            className="glass-card p-8 text-center flex flex-col items-center group hover:border-primary/30 transition-all duration-500 shadow-sm"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            </div>
            <h3 className="font-label-caps text-label-caps text-on-surface mb-1">
              {item.title}
            </h3>
            <p className="text-[14px] font-body-md text-on-surface-variant">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
