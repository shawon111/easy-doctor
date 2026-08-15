import Link from "next/link";
import SectionFadeTwoDark from "../../ui/SectionFadeTwoDark";

function getPracticeLocations(content = {}) {
  const raw = content.locations?.length ? content.locations : content.items || [];

  return raw.map((loc, index) => {
    if (loc.title) {
      return {
        key: loc.title,
        name: loc.title,
        badge: index === 0 ? "PRIMARY CHAMBER" : "PRIVATE CONSULTANCY",
        image: loc.image,
        description: loc.description,
      };
    }

    return {
      key: loc.subtitle || loc.city || loc.address,
      name: loc.subtitle || loc.city || "Clinic",
      badge: loc.city || "",
      image: loc.image,
      address: loc.address,
      hours: loc.hours,
    };
  });
}

export default function AboutPracticesTwoDark({ content = {}, slug , isDemo = false}) {
  const locations = getPracticeLocations(content);
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <SectionFadeTwoDark className="py-[120px] bg-surface-container-highest/20">
      <div className="px-5 md:px-16 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-4">
            <h2 className="font-headline-md text-headline-md mb-6">{content.heading}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">{content.subheading}</p>
            <Link
              className="inline-flex items-center gap-2 text-tertiary font-label-caps text-label-caps group"
              href={`${base}/appointment`}
            >
              VIEW FULL SCHEDULE
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((location) => (
              <div
                key={location.key}
                className="bg-surface-container rounded-lg overflow-hidden border border-outline-variant/30 group"
              >
                {location.image ? (
                  <div className="h-48 relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      alt={location.name}
                      src={location.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      {location.badge ? (
                        <span className="font-label-caps text-label-caps text-tertiary">{location.badge}</span>
                      ) : null}
                      <h4 className="font-headline-sm text-headline-sm text-white">{location.name}</h4>
                    </div>
                  </div>
                ) : null}
                <div className="p-8 space-y-4">
                  {location.description ? (
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-tertiary">location_on</span>
                      <p className="font-body-md text-body-md text-on-surface-variant">{location.description}</p>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-tertiary">location_on</span>
                        <p className="font-body-md text-body-md text-on-surface-variant whitespace-pre-line">
                          {location.address}
                        </p>
                      </div>
                      {location.hours ? (
                        <div className="flex items-start gap-4">
                          <span className="material-symbols-outlined text-tertiary">schedule</span>
                          <p className="font-body-md text-body-md text-on-surface-variant">{location.hours}</p>
                        </div>
                      ) : null}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionFadeTwoDark>
  );
}
