import Reveal from "@/components/templates/ui/Reveal";

export default function AboutPhilosophyOne({ content = {} , isDemo = false}) {
  return (
    <Reveal
      as="section"
      className="bg-surface-container-low py-section-padding px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-4xl mx-auto text-center space-y-stack-md">
        <span
          className="material-symbols-outlined text-primary text-5xl"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          format_quote
        </span>
        {content.quote ? (
          <h2 className="font-headline-lg text-headline-lg text-on-surface italic">
            &ldquo;{content.quote}&rdquo;
          </h2>
        ) : null}
        {content.author ? (
          <p className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
            {content.author}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
