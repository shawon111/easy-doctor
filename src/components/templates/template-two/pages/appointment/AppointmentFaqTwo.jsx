export default function AppointmentFaqTwo({ content = {} , isDemo = false}) {
  const items = content.items || [];

  return (
    <section className="py-[120px] px-[20px] md:px-[64px] bg-[#f2f4f6]/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="apttwo-headline-md text-[#0f172a]">{content.heading}</h2>
          <p className="text-[#475569]">Essential information for your upcoming visit.</p>
        </div>

        <div className="space-y-6">
          {items.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white rounded-[12px] border border-[#cbd5e1]/50 overflow-hidden shadow-sm"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-[#f2f4f6] transition-colors">
                <span className="apttwo-headline-sm text-[#0f172a] text-lg">{faq.question}</span>
                <span className="apttwo-material-symbols transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-[#475569] leading-relaxed">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
