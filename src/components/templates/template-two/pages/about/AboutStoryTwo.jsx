import RevealTwo from "./RevealTwo";

export default function AboutStoryTwo({ content = {} , isDemo = false}) {
  const paragraphs = (content.body || "").split(/\n\n+/).filter(Boolean);
  const midpoint = Math.ceil(paragraphs.length / 2);
  const firstColumn = paragraphs.slice(0, midpoint);
  const secondColumn = paragraphs.slice(midpoint);

  return (
    <section className="py-[120px] px-[20px] md:px-[64px] max-w-[1200px] mx-auto">
      <RevealTwo className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
        <div className="md:col-span-8 md:col-start-3">
          {content.quote ? (
            <div className="text-center mb-24">
              <span className="abtwo-material-symbols text-[#6e5d16] text-4xl mb-6">
                format_quote
              </span>
              <h2 className="abtwo-display-lg italic leading-relaxed text-[#1a2026]">
                &quot;{content.quote}&quot;
              </h2>
              {content.quoteAuthor ? (
                <p className="abtwo-body-md text-[#45464d] mt-6">{content.quoteAuthor}</p>
              ) : null}
              <div className="w-24 h-1 bg-[#6e5d16] mx-auto mt-8" />
            </div>
          ) : null}

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="abtwo-body-md text-[#45464d] leading-relaxed">
                {content.heading ? (
                  <h3 className="abtwo-headline-sm text-[#1a2026] mb-6">{content.heading}</h3>
                ) : null}
                {firstColumn.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {secondColumn.length > 0 ? (
                <div className="abtwo-body-md text-[#45464d] leading-relaxed">
                  {secondColumn.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </RevealTwo>
    </section>
  );
}
