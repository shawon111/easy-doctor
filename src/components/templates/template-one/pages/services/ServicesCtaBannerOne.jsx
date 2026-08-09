export default function ServicesCtaBannerOne() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop pb-section-padding">
      <div className="max-w-[1200px] mx-auto bg-primary rounded-2xl p-12 text-center text-on-primary relative overflow-hidden shadow-[0px_10px_30px_rgba(30,41,59,0.04)]">
        <div className="relative z-10 space-y-stack-md">
          <h2 className="text-headline-lg font-headline-lg">Not sure which service you need?</h2>
          <p className="text-on-primary/80 max-w-xl mx-auto text-body-lg">
            Speak with our triage coordinator for a preliminary assessment and guidance on
            the best path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="bg-surface text-primary px-8 py-4 rounded-lg font-button hover:bg-surface-variant transition-colors">
              Get in Touch
            </button>
            <button className="border border-on-primary/30 text-on-primary px-8 py-4 rounded-lg font-button hover:bg-on-primary/10 transition-colors">
              View Patient Portal
            </button>
          </div>
        </div>

        {/* Glassy Decorative Blob */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
      </div>
    </section>
  );
}
