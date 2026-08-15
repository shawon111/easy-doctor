import Reveal from "@/components/templates/ui/Reveal";

export default function AppointmentFaqOne({ content = {} , isDemo = false}) {
  const items = content.items || [];

  return (
    <Reveal as="section" id="faq" className="py-section-padding px-margin-mobile md:px-margin-desktop">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-stack-lg">
          {content.heading ? (
            <h2 className="font-headline-lg text-headline-lg text-on-background">
              {content.heading}
            </h2>
          ) : null}
        </div>

        <div className="space-y-4">
          {items.map((faq) => (
            <details
              key={faq.question}
              className="group bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/50"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-surface-container transition-colors list-none">
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
