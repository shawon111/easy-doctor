import Link from "next/link";
import RevealTwo from "./RevealTwo";

function getPracticeLocations(content = {}) {
  const raw = content.locations?.length ? content.locations : content.items || [];

  return raw.map((loc, index) => {
    if (loc.title) {
      return {
        key: loc.title,
        name: loc.title,
        tag: index === 0 ? "PRIMARY CHAMBER" : "PRIVATE CONSULTANCY",
        alt: loc.imageAlt || loc.title,
        image: loc.image,
        description: loc.description,
      };
    }

    return {
      key: loc.subtitle || loc.city || loc.address,
      name: loc.subtitle || loc.city || "Clinic",
      tag: loc.city || "",
      alt: loc.alt || loc.subtitle || "",
      image: loc.image,
      address: loc.address,
      hours: loc.hours,
    };
  });
}

export default function AboutPracticesTwo({ content = {}, slug }) {
  const locations = getPracticeLocations(content);
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="py-[120px] bg-[#eceef0]">
      <RevealTwo className="px-[20px] md:px-[64px] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] items-start">
          <div className="md:col-span-4">
            <h2 className="abtwo-headline-md mb-6 text-[#1a2026]">{content.heading}</h2>
            <p className="abtwo-body-md text-[#45464d] mb-8">{content.subheading}</p>
            <Link
              className="inline-flex items-center gap-2 text-[#6e5d16] abtwo-label-caps group"
              href={`${base}/appointment`}
            >
              VIEW FULL SCHEDULE
              <span className="abtwo-material-symbols group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {locations.map((loc) => (
              <div
                key={loc.key}
                className="bg-white rounded-[8px] overflow-hidden border border-[#c6c6cd]/50 group shadow-sm"
              >
                {loc.image ? (
                  <div className="h-48 relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      alt={loc.alt}
                      src={loc.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      {loc.tag ? (
                        <span className="abtwo-label-caps text-[#ffe088]">{loc.tag}</span>
                      ) : null}
                      <h4 className="abtwo-headline-sm text-white">{loc.name}</h4>
                    </div>
                  </div>
                ) : null}
                <div className="p-8 space-y-4">
                  {loc.description ? (
                    <div className="flex items-start gap-4">
                      <span className="abtwo-material-symbols text-[#6e5d16]">location_on</span>
                      <p className="abtwo-body-md text-[#45464d]">{loc.description}</p>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-start gap-4">
                        <span className="abtwo-material-symbols text-[#6e5d16]">location_on</span>
                        <p className="abtwo-body-md text-[#45464d]">{loc.address}</p>
                      </div>
                      {loc.hours ? (
                        <div className="flex items-start gap-4">
                          <span className="abtwo-material-symbols text-[#6e5d16]">schedule</span>
                          <p className="abtwo-body-md text-[#45464d]">{loc.hours}</p>
                        </div>
                      ) : null}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealTwo>
    </section>
  );
}
