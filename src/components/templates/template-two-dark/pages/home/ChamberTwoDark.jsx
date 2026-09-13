import { toGoogleMapsEmbedUrl } from "@/lib/content/map-embed";

export default function ChamberTwoDark({ content = {}, isDemo = false }) {
  const location = content.location;
  const mapSrc = toGoogleMapsEmbedUrl(content.mapUrl);

  return (
    <section className="py-[120px] px-5 md:px-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5 space-y-8">
          <h2 className="font-headline-md text-headline-md text-on-surface italic">{content.heading}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">{content.subheading}</p>
          {location ? (
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary mt-1">location_on</span>
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface">{location.name}</h4>
                  <p className="text-sm text-on-surface-variant">{location.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary mt-1">schedule</span>
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface">Visiting Hours</h4>
                  <p className="text-sm text-on-surface-variant">{location.hours}</p>
                </div>
              </div>
            </div>
          ) : null}
          {content.mapUrl ? (
            <a
              href={content.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary font-label-caps text-label-caps border-b border-tertiary pb-1 hover:text-white hover:border-white transition-all inline-block"
            >
              Get Directions
            </a>
          ) : null}
        </div>

        <div className="md:col-span-7 h-[450px] rounded-xl overflow-hidden glass-card">
          {mapSrc ? (
            <iframe
              title={content.heading || "Chamber location map"}
              src={mapSrc}
              className="w-full h-full border-0"
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
    </section>
  );
}
