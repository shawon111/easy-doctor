const HERO_IMAGE_FALLBACK =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC6E94N4ihuxDnC1fKJmF2jN7fNcNgbm2BYOBjiBjvoKhWAFtOdRackfeSEGaNAOqXUZGYze11OX_DLJd1Jn2X1St5Sbj0paJDGp7UmiqbqHl9nwGWGoLDq1wfFeoPiXG3NL-Gn05fI172zWcz7P9k0A8adGWqtO8OeWoU-cTW1icWJKgzCELXF_t2Y4vMoZejyWfVCdojwZp9UKP6nvs-RF8rScj6x3vaMn9omwEE31xVTrLn5XmaLEA";

export default function AboutHeroTwoDark({ content = {}, user = {}, isDemo = false }) {
  const languages = isDemo ? content.languages || [] : user.languages || [];
  const imageSrc = content.image || HERO_IMAGE_FALLBACK;

  return (
    <section className="relative min-h-[716px] flex items-center overflow-hidden pt-20">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 px-5 md:px-16 max-w-[1200px] mx-auto w-full items-center">
        <div className="md:col-span-7">
          <span className="font-label-caps text-label-caps text-tertiary tracking-[0.2em] mb-4 block">
            {content.badge}
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">{content.heading}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-8">{content.body}</p>
          {languages.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {languages.map((lang) => (
                <div key={lang} className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    language
                  </span>
                  <span className="font-label-caps text-label-caps">{lang}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="md:col-span-5 relative mt-12 md:mt-0">
          <div className="aspect-[4/5] glass-card p-2 rounded-lg relative overflow-hidden group">
            <img
              className="w-full h-full object-cover rounded shadow-2xl transition-transform duration-700 group-hover:scale-105"
              alt={content.imageAlt || ""}
              src={imageSrc}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
