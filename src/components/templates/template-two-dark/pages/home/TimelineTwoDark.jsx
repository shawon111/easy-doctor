function splitHeading(heading = "") {
  const words = heading.trim().split(/\s+/);
  if (words.length <= 1) return { lead: heading, accent: "" };
  const accent = words.pop();
  return { lead: words.join(" "), accent };
}

export default function TimelineTwoDark({ content = {}, user = {}, isDemo = false }) {
  const items = content.items || [];
  const { lead, accent } = splitHeading(content.heading);
  const experienceStat = !isDemo && user.experience ? `${user.experience}+` : "25+";

  return (
    <section className="py-[120px] px-5 md:px-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <h2 className="font-headline-md text-headline-md text-on-surface italic">
            {lead ? (
              <>
                {lead} <br />
                <span className="gold-text-gradient">{accent}</span>
              </>
            ) : (
              content.heading
            )}
          </h2>
          <div className="space-y-8 border-l border-outline-variant/30 ml-4 pl-8">
            {items.map((item, index) => (
              <div key={`${item.period}-${item.title}`} className="relative">
                <div
                  className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full ${
                    index === 0 ? "bg-tertiary shadow-[0_0_10px_#D4AF37]" : "bg-outline-variant"
                  }`}
                />
                <span className={`font-label-caps text-label-caps ${index === 0 ? "text-tertiary" : "text-on-surface-variant"}`}>
                  {item.period}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mt-2">{item.title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="glass-card p-12 aspect-square flex flex-col justify-center items-center text-center space-y-6">
            <span className="text-7xl font-display-lg gold-text-gradient">{experienceStat}</span>
            <p className="font-headline-sm text-headline-sm text-on-surface">Years of Clinical Excellence</p>
            <div className="gold-shimmer max-w-[100px]" />
            {content.subheading ? (
              <p className="font-body-md text-body-md text-on-surface-variant italic">
                &quot;{content.subheading}&quot;
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
