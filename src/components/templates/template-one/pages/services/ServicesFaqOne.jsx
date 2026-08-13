export default function ServicesFaqOne({ content = {} }) {
  const items = content.items || [];

  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          {content.heading ? (
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">{content.heading}</h2>
          ) : null}
        </div>

        <div className="space-y-4">
          {items.map((faq) => (
            <details
              key={faq.question}
              className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden"
              open={faq.openByDefault || undefined}
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-bold text-on-surface">{faq.question}</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant border-t border-outline-variant/10">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
