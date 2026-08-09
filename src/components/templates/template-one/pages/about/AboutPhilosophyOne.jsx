import Reveal from "@/components/templates/ui/Reveal";


export default function AboutPhilosophyOne() {
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
        <h2 className="font-headline-lg text-headline-lg text-on-surface italic">
          &ldquo;Medicine is not just the science of treating symptoms; it is the art of
          restoring the dignity and vitality of the human spirit through precise,
          compassionate care.&rdquo;
        </h2>
        <p className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
          — Dr. Julian Vance, MD, FACS
        </p>
      </div>
    </Reveal>
  );
}
