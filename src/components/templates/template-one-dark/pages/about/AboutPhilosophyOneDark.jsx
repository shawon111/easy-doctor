import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

export default function AboutPhilosophyOneDark({ content = {}, isDemo = false }) {
  return (
    <SectionFadeOneDark className="bg-surface-container-lowest py-32 px-6 md:px-10 relative overflow-hidden" isDemo={isDemo}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(45, 91, 255, 0.05) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <span className="material-symbols-outlined text-primary text-6xl opacity-50">format_quote</span>
        {content.quote ? (
          <h2 className="font-headline-lg text-headline-lg text-on-surface leading-snug italic px-4">
            &ldquo;{content.quote}&rdquo;
          </h2>
        ) : null}
        {content.author ? (
          <p className="font-label-md text-label-md text-primary tracking-[0.2em] uppercase">
            {content.author}
          </p>
        ) : null}
      </div>
    </SectionFadeOneDark>
  );
}
