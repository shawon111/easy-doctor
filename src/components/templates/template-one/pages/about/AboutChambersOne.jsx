import Reveal from "@/components/templates/ui/Reveal";

export default function AboutChambersOne({ content = {} }) {
  const locations = content.locations || [];

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
            <div
              className="w-full h-full bg-cover bg-center"
              role="img"
              aria-label=""
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-JtnM4GUEG_-hpHQzxNdg0t6MYMX9xOVPcjXlGk39XKd3ZiBzGNv-o0Ez49Njbvw70u0id3e6ahXScC4jP-sQKpisIgyCKzJl1JUZf7IKICj8-R03YNDouEmJH6rk_9S2uT1d79n-TI3gmHtrb2lB3DiksPqFH1r02CfYCn6MhKwk5C3-0jGvejEHswgRKYW3xkjZXVoraYta5CyJW42kEHTfuOmehB21KclP62yNiHQi3uirxO87-Q')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
