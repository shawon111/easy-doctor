export default function AboutJourneyDarkThree({ content = {} , isDemo = false}) {
  const paragraphs = (content.body || "").split("\n\n").filter(Boolean);
  const headingParts = (content.heading || "").split(" ");
  const highlightWord = headingParts.pop();
  const headingPrefix = headingParts.join(" ");

  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
              {headingPrefix} <br />
              <span className="text-secondary-fixed-dim">{highlightWord}</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-on-surface-variant text-body-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
