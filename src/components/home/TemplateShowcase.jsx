import TemplateGridInteractive from "./TemplateGridInteractive";

export default function TemplateShowcase() {
  return (
    <section className="py-24 lg:py-32 bg-surface-subtle border-b border-slate-border" id="templates">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <TemplateGridInteractive />
      </div>
    </section>
  );
}
