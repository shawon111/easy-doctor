import { toGoogleMapsEmbedUrl } from "@/lib/content/map-embed";

export default function HomeMapLocationDarkThree({ content = {} , isDemo = false}) {
  const contact = content.contact || {};
  const labels = content.contactLabels || {};
  const mapSrc = toGoogleMapsEmbedUrl(content.mapUrl);
  const contactInfo = [
    { icon: "location_on", title: labels.location, detail: contact.location },
    { icon: "call", title: labels.phone, detail: contact.phone },
    { icon: "schedule", title: labels.hours, detail: contact.hours },
  ].filter((item) => item.detail);

  return (
    <section className="py-32 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="font-display-lg text-headline-lg">{content.heading}</h2>
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                <div>
                  <div className="font-headline-md text-[18px] text-on-surface">{item.title}</div>
                  <div className="text-on-surface-variant">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
          {content.mapUrl && content.directionsCta ? (
            <a
              href={content.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container-high text-on-surface px-8 py-3 rounded-lg border border-outline-variant hover:bg-surface-container transition-colors inline-block"
            >
              {content.directionsCta}
            </a>
          ) : null}
        </div>

        <div className="rounded-[32px] overflow-hidden border border-outline-variant/50 h-[400px] shadow-lg">
          {mapSrc ? (
            <iframe
              title={content.heading || "Clinic location map"}
              src={mapSrc}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="w-full h-full bg-surface-container-high flex items-center justify-center p-6 text-center text-sm text-on-surface-variant">
              Add a Google Maps link to show the clinic location.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
