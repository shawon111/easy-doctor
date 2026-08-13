import RevealTwo from "./RevealTwo";

export default function AboutQualificationsTwo({ content = {} }) {
  const items = content.items || [];

  return (
    <section className="py-[120px] px-[20px] md:px-[64px] max-w-[1200px] mx-auto">
      <RevealTwo className="text-center mb-16">
        <h2 className="abtwo-headline-md mb-2 text-[#1a2026]">{content.heading}</h2>
        <p className="abtwo-label-caps text-[#45464d]">{content.subheading}</p>
      </RevealTwo>

      <RevealTwo className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-[#f2f4f6] p-8 rounded-[8px] flex flex-col items-center text-center group hover:bg-[#eceef0] transition-all border border-[#c6c6cd]/30"
          >
            <span
              className="abtwo-material-symbols text-4xl text-[#6e5d16] mb-4"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {item.icon}
            </span>
            <h5 className="abtwo-label-caps mb-2 text-[#1a2026]">{item.title}</h5>
            <p className="text-[10px] text-[#45464d] uppercase tracking-widest">
              {item.detail}
            </p>
          </div>
        ))}
      </RevealTwo>
    </section>
  );
}
