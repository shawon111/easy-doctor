import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

const HERO_IMAGE_FALLBACK =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBtIcOn5s8uXofUKNHfqczLLOWAnkOaZdVnAGVe5ZUYtv8tuQNH72g1A4aP6PHg-jpgAajEFQDp0BzqSWmwUlL6hChndREg-88t_lMhR-Be8mG8Bqg1LzYhtW2thD3I7SqW9x2h4inO6i6Btll1ILcFPcZKNnDuodiamvTzgiBHxl4yw2YlsP59yFqyi94osRqkB3pBuAviNJ14mLgiMoWizrjD27hFYCtK9oE6UN94NrO3fEg9mF4-gA";

export default function AboutHeroOneDark({ content = {}, user = {}, isDemo = false }) {
  const imageSrc = content.image || HERO_IMAGE_FALLBACK;

  return (
    <SectionFadeOneDark className="relative min-h-[80vh] flex items-center px-6 md:px-10 py-24 mesh-gradient overflow-hidden" isDemo={isDemo}>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          {content.badge ? (
            <span className="inline-block bg-secondary-container/10 text-secondary-fixed px-4 py-1.5 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-secondary-fixed/20">
              {content.badge}
            </span>
          ) : null}
          {content.heading ? (
            <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
              {content.heading}
            </h1>
          ) : null}
          {content.body ? (
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
              {content.body}
            </p>
          ) : null}
          {!isDemo && user.experience ? (
            <div className="flex items-center gap-12 pt-4">
              <div className="flex flex-col">
                <span className="font-bold text-primary-fixed text-display-lg leading-none" style={{ fontSize: "48px" }}>
                  {user.experience}+
                </span>
                <span className="text-label-sm font-label-sm text-outline uppercase mt-2">Years Experience</span>
              </div>
            </div>
          ) : null}
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
          <img
            alt={content.imageAlt || ""}
            className="relative w-full aspect-square object-cover rounded-[3rem] border border-white/10"
            src={imageSrc}
          />
        </div>
      </div>
    </SectionFadeOneDark>
  );
}
