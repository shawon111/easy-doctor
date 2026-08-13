export default function TreatmentsTwo({ content = {} }) {
  const items = content.items || [];
  const [featured, secondary, tertiary, quaternary] = items;

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-2">
            Specializations
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface italic">
            {content.heading}
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md text-right">
          {content.subheading}
        </p>
      </div>

      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {featured ? (
          <div className="md:col-span-8 glass-card p-12 min-h-[400px] flex flex-col justify-end relative overflow-hidden group border-outline-variant shadow-md">
            {featured.image ? (
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-[2000ms]"
                alt={featured.imageAlt || featured.title}
                src={featured.image}
              />
            ) : null}
            <div className="relative z-10 space-y-4">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                {featured.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                {featured.description}
              </p>
              <a
                className="inline-flex items-center gap-2 text-primary font-label-caps text-label-caps hover:gap-4 transition-all"
                href="#"
              >
                Explore Procedure{" "}
                <span className="material-symbols-outlined">north_east</span>
              </a>
            </div>
          </div>
        ) : null}

        {secondary ? (
          <div className="md:col-span-4 glass-card p-8 flex flex-col justify-between group border-outline-variant shadow-sm">
            {secondary.image ? (
              <div className="w-full h-48 bg-surface-container rounded-lg mb-6 overflow-hidden">
                <img
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity"
                  alt={secondary.imageAlt || secondary.title}
                  src={secondary.image}
                />
              </div>
            ) : null}
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                {secondary.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                {secondary.description}
              </p>
              <a className="text-primary font-label-caps text-label-caps hover:underline" href="#">
                Learn More
              </a>
            </div>
          </div>
        ) : null}

        {tertiary ? (
          <div className="md:col-span-4 glass-card p-8 group border-outline-variant shadow-sm">
            <div className="text-primary mb-6">
              <span className="material-symbols-outlined text-4xl">{tertiary.icon}</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
              {tertiary.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {tertiary.description}
            </p>
          </div>
        ) : null}

        {quaternary ? (
          <div className="md:col-span-8 glass-card p-8 flex items-center gap-8 group border-outline-variant shadow-sm">
            {quaternary.image ? (
              <div className="hidden sm:block w-48 h-48 rounded-lg overflow-hidden shrink-0 border border-outline-variant">
                <img
                  className="w-full h-full object-cover"
                  alt={quaternary.imageAlt || quaternary.title}
                  src={quaternary.image}
                />
              </div>
            ) : null}
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                {quaternary.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                {quaternary.description}
              </p>
              <button
                type="button"
                className="text-primary font-label-caps text-label-caps flex items-center gap-2"
              >
                Protocol Details{" "}
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
