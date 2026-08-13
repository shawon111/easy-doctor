import { templateThreeDefaults } from "@/content/defaults/template-three";
import AboutCtaThree from "./AboutCtaThree";
import AboutHeroThree from "./AboutHeroThree";
import AboutJourneyThree from "./AboutJourneyThree";
import AboutLocationsThree from "./AboutLocationsThree";
import AboutPillarsThree from "./AboutPillarsThree";
import AboutTimelineThree from "./AboutTimelineThree";

export default function AboutPageThree({ slug, content }) {
  const about = content?.pages?.about ?? templateThreeDefaults.pages.about;

  return (
    <div className="relative">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <AboutHeroThree content={about.hero} />
      <AboutJourneyThree content={about.journey} />
      <AboutTimelineThree content={about.timeline} />
      <AboutPillarsThree content={about.pillars} />
      <AboutLocationsThree content={about.locations} />
      <AboutCtaThree slug={slug} content={about.finalCta} />
    </div>
  );
}
