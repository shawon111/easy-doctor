import Reveal from "@/components/templates/ui/Reveal";

const DELAYS = ["", "delay-100"];

export default function ClinicLocationsOne({ content = {} }) {
  const locations = content.locations || [];

  return (
    <section className="py-section-padding bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <Reveal className="text-center mb-stack-lg" as="div">
          {content.heading ? (
            <h2 className="font-headline-lg text-headline-lg text-on-surface">{content.heading}</h2>
          ) : null}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {locations.map((clinic, index) => (
            <Reveal
              key={clinic.name}
              className={`bg-white rounded-[2rem] overflow-hidden soft-bloom border border-outline-variant/30 ${DELAYS[index] || ""}`}
            >
              <div className="h-64 bg-surface-container-high relative">
                {clinic.mapImage ? (
                  <div className="absolute inset-0 grayscale opacity-60">
                    <img className="w-full h-full object-cover" alt={clinic.mapAlt || clinic.name} src={clinic.mapImage} />
                  </div>
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                  {clinic.name}
                </h3>
                <p className="text-body-md text-on-surface-variant mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  {clinic.address}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-label-caps font-label-caps text-on-surface-variant">
                    {clinic.hours}
                  </span>
                  <button type="button" className="text-primary font-button text-button hover:underline">
                    Get Directions
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
