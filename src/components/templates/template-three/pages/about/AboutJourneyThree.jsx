export default function AboutJourneyThree() {
  return (
    <section className="py-24 bg-surface-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
              A Journey Fueled by <br />
              <span className="text-secondary">Curiosity.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="text-on-surface-variant text-body-lg leading-relaxed">
              It began in a small research lab where the interplay between technology and biology first sparked a
              lifelong obsession. Dr. MedLink didn&apos;t just want to treat symptoms; he wanted to decode the human
              condition using the most advanced tools available to modern science.
            </p>
            <p className="text-on-surface-variant text-body-lg leading-relaxed">
              Through years of intensive study across Europe and North America, he developed a unique methodology
              that merges data-driven diagnostics with the art of patient-first consultation. Today, that curiosity
              remains the engine behind every clinical breakthrough at MedLink Labs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
