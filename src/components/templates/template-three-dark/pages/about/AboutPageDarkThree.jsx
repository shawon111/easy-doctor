import { templateThreeDefaults } from "@/content/defaults/template-three";
import AboutCtaDarkThree from "./AboutCtaDarkThree";
import AboutHeroDarkThree from "./AboutHeroDarkThree";
import AboutJourneyDarkThree from "./AboutJourneyDarkThree";
import AboutLocationsDarkThree from "./AboutLocationsDarkThree";
import AboutPillarsDarkThree from "./AboutPillarsDarkThree";
import AboutTimelineDarkThree from "./AboutTimelineDarkThree";

export default function AboutPageDarkThree({ slug, content }) {
  const about = content?.pages?.about ?? templateThreeDefaults.pages.about;

  return (
    <div className="relative">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <AboutHeroDarkThree content={about.hero} />
      <AboutJourneyDarkThree content={about.journey} />
      <AboutTimelineDarkThree content={about.timeline} />
      <AboutPillarsDarkThree content={about.pillars} />
      <AboutLocationsDarkThree content={about.locations} />
      <AboutCtaDarkThree slug={slug} content={about.finalCta} />
    </div>
  );
}
