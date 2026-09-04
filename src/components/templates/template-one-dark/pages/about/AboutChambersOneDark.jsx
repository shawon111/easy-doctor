import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

export default function AboutChambersOneDark({ content = {}, isDemo = false }) {
  const locations = content.locations || [];

  return (
    <SectionFadeOneDark className="py-32 px-6 md:px-10 mesh-gradient" isDemo={isDemo}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {content.heading ? (
              <h2 className="font-headline-lg text-headline-lg text-on-surface">{content.heading}</h2>
            ) : null}
            {content.subheading ? (
              <p className="text-body-lg text-on-surface-variant">{content.subheading}</p>
            ) : null}
            <div className="grid grid-cols-1 gap-6">
              {locations.map((location, index) => (
                <div key={location.name} className="flex items-start gap-5 p-6 rounded-3xl glass-container">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${index === 0 ? "bg-primary/10" : "bg-secondary/10"}`}>
                    <span className={`material-symbols-outlined ${index === 0 ? "text-primary" : "text-secondary-fixed"}`}>
                      {index === 0 ? "location_on" : "schedule"}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-on-surface">{location.name}</p>
                    <p className="text-on-surface-variant">{location.address}</p>
                    {location.hours ? (
                      <p className="text-on-surface-variant mt-1">{location.hours}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/3] relative">
            <div
              aria-hidden="true"
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: content.imageUrl ? `url('${content.imageUrl}')` : undefined,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>
      </div>
    </SectionFadeOneDark>
  );
}
