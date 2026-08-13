import SectionFadeTwoDark from "../../ui/SectionFadeTwoDark";

export default function AboutStoryTwoDark({ content = {} }) {
  const paragraphs = (content.body || "").split(/\n\n+/).filter(Boolean);
  const midpoint = Math.ceil(paragraphs.length / 2);
  const firstColumn = paragraphs.slice(0, midpoint);
  const secondColumn = paragraphs.slice(midpoint);

  return (
    <SectionFadeTwoDark className="py-[120px] px-5 md:px-16 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 md:col-start-3">
          {content.quote ? (
            <div className="text-center mb-24">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-6">format_quote</span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg italic leading-relaxed text-on-surface">
                &quot;{content.quote}&quot;
              </h2>
              {content.quoteAuthor ? (
                <p className="font-body-md text-body-md text-on-surface-variant mt-6">{content.quoteAuthor}</p>
              ) : null}
              <div className="w-24 h-1 bg-tertiary mx-auto mt-8" />
            </div>
          ) : null}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {content.heading ? (
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">{content.heading}</h3>
                ) : null}
                {firstColumn.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
              {secondColumn.length > 0 ? (
                <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
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
      </div>
    </SectionFadeTwoDark>
  );
}
