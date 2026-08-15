export default function AppointmentFaqTwoDark({ content = {} , isDemo = false}) {
  const items = content.items || [];

  return (
    <section className="py-[120px] px-5 md:px-16 bg-surface-container-lowest/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">{content.heading}</h2>
          <p className="text-on-surface-variant">Essential information for your upcoming visit.</p>
        </div>
        <div className="space-y-6">
          {items.map((item) => (
            <details key={item.question} className="group glass-card rounded-xl border-white/5 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-headline-sm text-headline-sm text-on-surface text-lg">{item.question}</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
