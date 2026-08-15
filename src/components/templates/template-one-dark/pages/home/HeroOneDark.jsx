import Link from "next/link";
import RevealOneDark from "../../ui/RevealOneDark";

const HERO_IMAGE_FALLBACK =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDTyxeutP7i3bLEgOgReazJq3fL8gL_0nt-ZGg7tXDH26cuyHhAjEY_V0Ht4_Q_h-_sIcfCK5Kj2zn0tLJfkGSkLidk_x-eIwZsKtHSYGri4uoLUvsz1-T8u9X9JwdfPUma0Qi01jqaPZAT5EBM3U-Z-DmmCQKReacdwWCpkwAeBv00vHIfaxo4ylI1UmYSfO0kddOLLOBy8N0vd4ouvwUeTowUmhLHTDT3n5HEsHysG_2WybeexPH1cw";

export default function HeroOneDark({ content = {}, slug, isDemo = false }) {
  const base = slug ? `/doctor/${slug}` : "#";
  const imageSrc = content.image || HERO_IMAGE_FALLBACK;
  const statCard = content.statCard;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto px-10 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20">
        <RevealOneDark isDemo={isDemo}>
          {content.badge ? (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-secondary-fixed font-label-md text-xs mb-8 border border-secondary-fixed/20 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
              {content.badge}
            </div>
          ) : null}
          <h1 className="font-display-lg text-6xl md:text-8xl text-secondary mb-8 leading-[0.9] tracking-tighter">
            {content.heading}{" "}
            {content.headingHighlight ? (
              <span className="text-primary">{content.headingHighlight}</span>
            ) : null}
          </h1>
          {content.body ? (
            <p className="font-body-lg text-xl text-on-surface-variant mb-12 max-w-lg leading-relaxed">
              {content.body}
            </p>
          ) : null}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              className="bg-primary-container text-on-primary-container px-10 py-5 rounded-full font-bold text-label-md tracking-widest uppercase glow-button text-sm"
              href={`${base}/appointment`}
            >
              {content.primaryCta}
            </Link>
            <Link
              className="glass-card text-secondary px-10 py-5 rounded-full font-bold text-label-md tracking-widest uppercase hover:bg-white/5 transition-all text-sm border border-white/10"
              href={`${base}/about`}
            >
              {content.secondaryCta}
            </Link>
          </div>
        </RevealOneDark>

        <RevealOneDark className="relative delay-200" isDemo={isDemo}>
          <div className="aspect-[4/5] rounded-xl overflow-hidden glass-card p-2 border border-white/10">
            <img
              className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
              alt={content.imageAlt || ""}
              src={imageSrc}
            />
          </div>
          {statCard ? (
            <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-2xl hidden lg:block border border-white/20">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>
                    verified
                  </span>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">{statCard.value}</p>
                  <p className="text-xs font-bold tracking-widest text-primary uppercase">{statCard.label}</p>
                </div>
              </div>
            </div>
          ) : null}
        </RevealOneDark>
      </div>
    </section>
  );
}
