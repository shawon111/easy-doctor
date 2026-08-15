const BENEFITS_IMAGE_FALLBACK =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCMnzyNVVzbtBCUayb8cPumdCi_8F0iPFr0wIttqUVZPsBSfXyB-y9RONuOLfCJCWohjlONLcOBNp3KTGS0UFwfWwOneaCxCLyFsuaW2j22MslZRdTygeeJE-5SsN7JiXYzrWnwwZTqiHjVl5Lucao9spI3sZQUFvCHNTd9yN7LwIJ8LSX_P_n2MZxRBQ5OPxaMEpZYiivcK3Eohf6c7k4zU3gZqhaeousdesI6Rx_OD3wmx5iFWXs3xg";

export default function ServicesBenefitsTwoDark({ content = {} , isDemo = false}) {
  const items = content.items || [];
  const imageSrc = content.image || BENEFITS_IMAGE_FALLBACK;

  return (
    <section className="py-[120px] px-5 md:px-16 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl" />
          <img
            className="relative z-10 w-full aspect-square object-cover rounded-xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000"
            alt={content.imageAlt || ""}
            src={imageSrc}
          />
          <div className="absolute bottom-6 right-6 z-20 glass-panel px-6 py-4 rounded shadow-2xl">
            <p className="font-headline-sm text-headline-sm text-tertiary">25+ Years</p>
            <p className="font-label-caps text-label-caps text-on-surface-variant">Clinical Mastery</p>
          </div>
        </div>

        <div className="space-y-12 lg:pl-16">
          <div>
            <h2 className="font-headline-md text-headline-md mb-6">{content.heading}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">{content.subheading}</p>
          </div>
          <div className="space-y-8">
            {items.map((benefit) => (
              <div key={benefit.title} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 border border-tertiary/30 rounded-full flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-sm">{benefit.icon}</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-[20px] mb-2">{benefit.title}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
