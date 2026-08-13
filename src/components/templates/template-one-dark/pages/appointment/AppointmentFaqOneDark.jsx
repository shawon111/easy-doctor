import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

export default function AppointmentFaqOneDark({ content = {} }) {
  const items = content.items || [];

  return (
    <SectionFadeOneDark id="faq" className="py-[120px] px-5 md:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          {content.heading ? (
            <h2 className="font-headline-lg text-headline-lg text-on-background uppercase italic">
              {content.heading}
            </h2>
          ) : null}
        </div>
        <div className="space-y-6">
          {items.map((item) => (
            <details
              key={item.question}
              className="group bg-surface-container-low rounded-lg overflow-hidden border border-outline-variant/20 hover:border-cobalt/40 transition-colors"
            >
              <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
                <span className="font-bold text-lg uppercase tracking-tight text-on-surface">{item.question}</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-cobalt">
                  expand_more
                </span>
              </summary>
              <div className="p-8 pt-0 text-on-surface-variant font-body-md border-l-2 border-cobalt mx-8 mb-8">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </SectionFadeOneDark>
  );
}
