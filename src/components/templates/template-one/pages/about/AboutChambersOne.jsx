import Reveal from "@/components/templates/ui/Reveal";
import { toGoogleMapsEmbedUrl } from "@/lib/content/map-embed";

export default function AboutChambersOne({ content = {} , isDemo = false}) {
  const locations = content.locations || [];
  const mapSrc = toGoogleMapsEmbedUrl(content.mapUrl);

  return (
    <Reveal
      as="section"
      className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-variant/30"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="space-y-stack-md">
            {content.heading ? (
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                {content.heading}
              </h2>
            ) : null}
            {content.subheading ? (
              <p className="text-body-lg text-on-surface-variant">{content.subheading}</p>
            ) : null}
            <div className="space-y-stack-sm">
              {locations.map((location) => (
                <div
                  key={location.name}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-[0px_10px_30px_rgba(30,41,59,0.04)]"
                >
                  <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                  <div>
                    <p className="font-bold">{location.name}</p>
                    <p className="text-on-surface-variant">{location.address}</p>
                    {location.hours ? (
                      <p className="text-on-surface-variant text-body-md mt-1">{location.hours}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-[0px_10px_30px_rgba(30,41,59,0.04)] aspect-[4/3] relative">
            {mapSrc ? (
              <iframe
                title={content.heading || "Chamber location map"}
                src={mapSrc}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="w-full h-full bg-surface-container-high flex items-center justify-center p-6 text-center text-sm text-on-surface-variant">
                Add a Google Maps link to show the chamber location.
              </div>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
