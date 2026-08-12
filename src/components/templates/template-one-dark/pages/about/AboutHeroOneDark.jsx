import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

export default function AboutHeroOneDark() {
  return (
    <SectionFadeOneDark className="relative min-h-[80vh] flex items-center px-6 md:px-10 py-24 mesh-gradient overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <span className="inline-block bg-secondary-container/10 text-secondary-fixed px-4 py-1.5 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-secondary-fixed/20">
            About the Physician
          </span>
          <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
            Meet
            <br />
            <span className="text-primary">Dr. Vance.</span>
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
            A pioneer in modern clinical practice, blending world-class medical expertise with a deeply personal
            commitment to patient well-being and clinical elegance.
          </p>
          <div className="flex items-center gap-12 pt-4">
            <div className="flex flex-col">
              <span className="font-bold text-primary-fixed text-display-lg leading-none" style={{ fontSize: "48px" }}>
                15+
              </span>
              <span className="text-label-sm font-label-sm text-outline uppercase mt-2">Years Experience</span>
            </div>
            <div className="w-px h-16 bg-outline-variant" />
            <div className="flex flex-col">
              <span className="font-bold text-secondary-fixed text-display-lg leading-none" style={{ fontSize: "48px" }}>
                10k+
              </span>
              <span className="text-label-sm font-label-sm text-outline uppercase mt-2">Lives Impacted</span>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
          <img
            alt="Dr. Julian Vance"
            className="relative w-full aspect-square object-cover rounded-[3rem] border border-white/10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtIcOn5s8uXofUKNHfqczLLOWAnkOaZdVnAGVe5ZUYtv8tuQNH72g1A4aP6PHg-jpgAajEFQDp0BzqSWmwUlL6hChndREg-88t_lMhR-Be8mG8Bqg1LzYhtW2thD3I7SqW9x2h4inO6i6Btll1ILcFPcZKNnDuodiamvTzgiBHxl4yw2YlsP59yFqyi94osRqkB3pBuAviNJ14mLgiMoWizrjD27hFYCtK9oE6UN94NrO3fEg9mF4-gA"
          />
        </div>
      </div>
    </SectionFadeOneDark>
  );
}
