import SectionFadeTwoDark from "../../ui/SectionFadeTwoDark";

export default function AboutStoryTwoDark() {
  return (
    <SectionFadeTwoDark className="py-[120px] px-5 md:px-16 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 md:col-start-3">
          <div className="text-center mb-24">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-6">format_quote</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg italic leading-relaxed text-on-surface">
              &quot;Medicine is not merely a science of diagnosis, but an art of{" "}
              <span className="text-gradient-gold">precision, empathy, and foresight</span>.&quot;
            </h2>
            <div className="w-24 h-1 bg-tertiary mx-auto mt-8" />
          </div>
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">A Legacy of Care</h3>
                <p className="mb-6">
                  Dr. Sterling&apos;s journey began at the prestigious Johns Hopkins School of Medicine, where he
                  graduated at the top of his class. His early career was defined by a relentless pursuit of innovation
                  in complex diagnostics and internal medicine. Over the last two decades, he has pioneered specialized
                  protocols that bridge the gap between traditional clinical excellence and modern biotechnological
                  advancements.
                </p>
                <p>
                  His philosophy centers on the &apos;whole-patient&apos; paradigm—understanding that true health is the
                  synergy of biological precision, lifestyle architecture, and preventive vigilance.
                </p>
              </div>
              <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">Clinical Excellence</h3>
                <p className="mb-6">
                  Having served as a Chief Resident and later as a Lead Consultant at world-renowned clinics, Dr.
                  Sterling has handled over 5,000 complex cases. His reputation for solving &apos;unsolvable&apos;
                  diagnostic puzzles has made him the preferred choice for global executives and high-profile
                  individuals who demand absolute discretion and technical mastery.
                </p>
                <p>
                  Every patient strategy is bespoke, crafted with the same meticulous attention to detail as a master
                  watchmaker, ensuring that every variable of a patient&apos;s health is accounted for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionFadeTwoDark>
  );
}
