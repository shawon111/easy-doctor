export default function ServicesFaqOneDark({ content = {} }) {
  const items = content.items || [];

  return (
    <section className="py-16 px-6 md:px-10 bg-surface-container-lowest">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-20">
          {content.heading ? (
            <h2 className="text-display-lg font-display-lg text-on-surface uppercase mb-4 italic">
              {content.heading}
            </h2>
          ) : null}
        </div>
        <div className="space-y-4">
          {items.map((item, index) => (
            <details
              key={item.question}
              className="group bg-surface-container/30 border border-white/5 rounded-2xl overflow-hidden"
              defaultOpen={item.openByDefault}
            >
              <summary className="flex justify-between items-center p-8 cursor-pointer list-none hover:bg-white/5 transition-colors">
                <span className="font-bold text-on-surface uppercase tracking-wider flex items-center gap-4">
                  <span className="text-cyber-mint font-label-md">{String(index + 1).padStart(2, "0")} //</span>
                  {item.question}
                </span>
                <span className="material-symbols-outlined group-open:rotate-45 transition-transform text-cyber-mint">
                  add
                </span>
              </summary>
              <div className="p-8 pt-0 text-on-surface-variant text-body-md leading-relaxed border-t border-white/5">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
