export default function CtaTwo({ content = {} , isDemo = false}) {
  return (
    <section className="mb-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto bg-primary text-on-primary p-12 md:p-24 rounded-xl text-center relative overflow-hidden group border-none shadow-2xl">
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="font-display-lg text-display-lg text-on-primary">
            {content.heading}
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/80">
            {content.body}
          </p>
          <button
            type="button"
            className="px-12 py-5 bg-surface-container-lowest text-primary font-label-caps text-label-caps rounded-lg luxury-button-hover shadow-xl transition-all flex items-center gap-4 mx-auto"
          >
            {content.primaryCta}
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
