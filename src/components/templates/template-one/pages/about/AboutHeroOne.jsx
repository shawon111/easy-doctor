import Reveal from "@/components/templates/ui/Reveal";

export default function AboutHeroOne() {
  return (
    <Reveal
      as="section"
      className="relative min-h-[716px] flex items-center px-margin-mobile md:px-margin-desktop py-section-padding overflow-hidden"
    >
      <div className="absolute inset-0 z-0" />
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center relative z-10">
        <div className="space-y-stack-md">
          <span className="inline-block bg-[#F0FDFA] text-[#0F766E] px-4 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-widest">
            About the Physician
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
            Meet Dr. Vance.
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
            A pioneer in modern clinical practice, blending world-class medical expertise
            with a deeply personal commitment to patient well-being and clinical elegance.
          </p>
          <div className="flex items-center gap-stack-sm pt-4">
            <div className="flex flex-col">
              <span className="font-bold text-primary text-headline-md">15+</span>
              <span className="text-label-caps font-label-caps text-outline">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-outline-variant mx-4" />
            <div className="flex flex-col">
              <span className="font-bold text-primary text-headline-md">10k+</span>
              <span className="text-label-caps font-label-caps text-outline">Lives Impacted</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
          <img
            className="relative w-full aspect-square object-cover rounded-3xl shadow-[0px_10px_30px_rgba(30,41,59,0.04)]"
            alt="Dr. Julian Vance, a physician in a white medical coat, in a bright minimalist medical office"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtIcOn5s8uXofUKNHfqczLLOWAnkOaZdVnAGVe5ZUYtv8tuQNH72g1A4aP6PHg-jpgAajEFQDp0BzqSWmwUlL6hChndREg-88t_lMhR-Be8mG8Bqg1LzYhtW2thD3I7SqW9x2h4inO6i6Btll1ILcFPcZKNnDuodiamvTzgiBHxl4yw2YlsP59yFqyi94osRqkB3pBuAviNJ14mLgiMoWizrjD27hFYCtK9oE6UN94NrO3fEg9mF4-gA"
          />
        </div>
      </div>
    </Reveal>
  );
}
