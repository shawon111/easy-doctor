export default function HomeWhyTrustDarkThree({ content = {} }) {
  const items = content.items || [];

  return (
    <section className="py-32 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="font-display-lg text-headline-lg mb-12">{content.heading}</h2>
          <div className="space-y-12">
            {items.map((item) => (
              <div key={item.number || item.title} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold">
                  {item.number}
                </div>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2 text-on-surface">{item.title}</h4>
                  <p className="text-on-surface-variant">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-high h-full rounded-[40px] relative overflow-hidden flex items-center justify-center border border-outline-variant/30">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5" />
          <span className="material-symbols-outlined text-surface-variant text-[120px] opacity-50">
            health_and_safety
          </span>
        </div>
      </div>
    </section>
  );
}
