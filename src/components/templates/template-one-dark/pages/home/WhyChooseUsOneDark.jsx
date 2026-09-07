import Image from "next/image";
import RevealOneDark from "../../ui/RevealOneDark";

const ICON_CLASSES = [
  "text-primary",
  "text-secondary-fixed",
  "text-tertiary",
  "text-primary-container",
];

export default function WhyChooseUsOneDark({ content = {}, isDemo = false }) {
  const items = content.items || [];

  return (
    <section className="py-[120px]">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <RevealOneDark isDemo={isDemo}>
            {content.heading ? (
              <h2 className="font-headline-lg text-5xl text-secondary mb-12 tracking-tight">{content.heading}</h2>
            ) : null}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {items.map((item, index) => (
                <div key={item.title} className="flex gap-6">
                  <div className={ICON_CLASSES[index % ICON_CLASSES.length]}>
                    <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOneDark>

          <RevealOneDark className="delay-200" isDemo={isDemo}>
            <div className="glass-card rounded-3xl p-16 relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16" />
              <h3 className="font-headline-md text-3xl text-secondary mb-8 relative z-10 leading-tight">
                {content.quoteHeading || "Clinical Excellence Meets Personal Care"}
              </h3>
              {content.quote ? (
                <p className="font-body-lg text-xl text-on-surface-variant mb-10 relative z-10 italic leading-relaxed opacity-90">
                  &quot;{content.quote}&quot;
                </p>
              ) : null}
              {content.quoteAuthor ? (
                <div className="flex items-center gap-6 relative z-10">
                  <Image width={1200} height={800}
                    className="h-10 invert brightness-100"
                    alt={content.quoteImageAlt  || "Medical practice image"}
                    src={content.quoteImageUrl}
                  />
                  <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">{content.quoteAuthor}</p>
                </div>
              ) : null}
            </div>
          </RevealOneDark>
        </div>
      </div>
    </section>
  );
}
