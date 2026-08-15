const HERO_IMAGE_FALLBACK =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDXxKwFcSECIyn9rW8o_uDKX37xePMxOsbGbwQgrLqtpWtQKANCJnZQqNHdmWfnFbCdUqTyykWUoNvrAeUWb85qQ6-TPkWREcdFn9eRACqOH2u7GQGSo79HfitvGpnPTGxeJzL0lb4_5WtxMioB_Tq_fum1baQMDk7JEkK6-ew6rOWcpBMngJGUd0eW8XUksnh2HbYT47otp692cTcjl_EG01vZ3TBhX6oW7vqHQDw-N_EHaAcxoAKT1w";

export default function HeroTwo({ content = {} , isDemo = false}) {
  const imageSrc = content.image || HERO_IMAGE_FALLBACK;

  return (
    <section className="relative min-h-[921px] flex items-center pt-20 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center z-10">
        <div className="md:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 glass-card rounded-full border-outline-variant">
            <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse" />
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
              {content.badge}
            </span>
          </div>

          <h1 className="font-display-lg text-display-lg md:text-display-lg text-on-surface leading-tight">
            {content.heading} <br />
            <span className="gold-text-gradient font-headline-md italic">
              {content.credentialsLine}
            </span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            {content.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              className="px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps rounded-lg luxury-button-hover transition-all flex items-center gap-2 group"
            >
              {content.primaryCta}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
            <button
              type="button"
              className="px-8 py-4 border border-outline text-on-surface font-label-caps text-label-caps rounded-lg hover:bg-surface-container transition-all"
            >
              {content.secondaryCta}
            </button>
          </div>
        </div>

        <div className="md:col-span-5 relative group mt-12 md:mt-0">
          <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
          <div className="relative rounded-xl overflow-hidden glass-card p-2 border-outline-variant shadow-lg">
            <img
              className="w-full aspect-[4/5] object-cover rounded-lg"
              alt={content.imageAlt || ""}
              src={imageSrc}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
