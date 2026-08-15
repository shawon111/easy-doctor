import SectionFadeTwoDark from "../../ui/SectionFadeTwoDark";

export default function AboutQualificationsTwoDark({ content = {} , isDemo = false}) {
  const items = content.items || [];

  return (
    <SectionFadeTwoDark className="py-[120px] px-5 md:px-16 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-headline-md text-headline-md mb-2">{content.heading}</h2>
        <p className="font-label-caps text-label-caps text-on-surface-variant">{content.subheading}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="glass-card p-8 rounded flex flex-col items-center text-center group hover:bg-white/5 transition-all"
          >
            <span className="material-symbols-outlined text-4xl text-tertiary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
              {item.icon}
            </span>
            <h5 className="font-label-caps text-label-caps mb-2">{item.title}</h5>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">{item.detail}</p>
          </div>
        ))}
      </div>
    </SectionFadeTwoDark>
  );
}
