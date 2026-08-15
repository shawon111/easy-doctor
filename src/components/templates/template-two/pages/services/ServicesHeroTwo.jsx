export default function ServicesHeroTwo({ content = {} , isDemo = false}) {
  return (
    <section className="relative min-h-[614px] flex items-center justify-center pt-20 overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl px-[20px]">
        <span className="svctwo-label-caps text-[#2563eb] mb-4 block uppercase tracking-widest">
          {content.badge}
        </span>
        <h1 className="svctwo-display-lg-mobile mb-6 text-[#1a1c1e]">{content.heading}</h1>
        <p className="svctwo-body-lg text-[#44474e] max-w-2xl mx-auto">{content.body}</p>
        <div className="mt-10 flex justify-center">
          <div className="svctwo-gold-shimmer max-w-[200px]" />
        </div>
      </div>
    </section>
  );
}
