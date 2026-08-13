import RevealOneDark from "../../ui/RevealOneDark";

const DELAYS = ["", "delay-100"];

export default function ClinicLocationsOneDark({ content = {} }) {
  const locations = content.locations || [];

  return (
    <section className="py-[120px]">
      <div className="max-w-[1440px] mx-auto px-10">
        <RevealOneDark className="text-center mb-20">
          {content.heading ? (
            <h2 className="font-headline-lg text-5xl text-secondary tracking-tight">{content.heading}</h2>
          ) : null}
        </RevealOneDark>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {locations.map((clinic, index) => (
            <RevealOneDark
              key={clinic.name}
              className={`glass-card rounded-[2.5rem] overflow-hidden border border-white/10 group ${DELAYS[index] || ""}`}
            >
              <div className="h-80 relative overflow-hidden">
                {clinic.mapImage ? (
                  <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000">
                    <img
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                      alt={clinic.mapAlt || clinic.name}
                      src={clinic.mapImage}
                    />
                  </div>
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent" />
              </div>
              <div className="p-12">
                <h3 className="font-headline-md text-3xl text-secondary mb-4">{clinic.name}</h3>
                <p className="text-lg text-on-surface-variant mb-10 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  {clinic.address}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold tracking-widest text-on-surface-variant/60 uppercase">
                    {clinic.hours}
                  </span>
                  <button
                    type="button"
                    className="text-primary font-bold tracking-widest uppercase text-xs hover:text-secondary-fixed transition-colors"
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            </RevealOneDark>
          ))}
        </div>
      </div>
    </section>
  );
}
