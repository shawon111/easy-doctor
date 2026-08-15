export default function AboutLocationsThree({ content = {} , isDemo = false}) {
  const items = content.items || [];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-grow bg-outline-variant" />
          <h2 className="font-headline-md text-on-surface-variant shrink-0 font-medium">{content.heading}</h2>
          <div className="h-px flex-grow bg-outline-variant" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {items.map((location) => (
            <div key={location.city} className="relative h-64 rounded-xl overflow-hidden group shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent z-10" />
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt={location.alt || location.city}
                src={location.image}
              />
              <div className="absolute bottom-6 left-6 z-20">
                <h4 className="font-headline-md text-white">{location.city}</h4>
                <p className="text-primary-container text-sm">{location.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
