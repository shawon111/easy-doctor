import { templateThreeDefaults } from "@/content/defaults/template-three";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import AboutCtaDarkThree from "./AboutCtaDarkThree";
import AboutHeroDarkThree from "./AboutHeroDarkThree";
import AboutJourneyDarkThree from "./AboutJourneyDarkThree";
import AboutLocationsDarkThree from "./AboutLocationsDarkThree";
import AboutPillarsDarkThree from "./AboutPillarsDarkThree";
import AboutTimelineDarkThree from "./AboutTimelineDarkThree";

export default function AboutPageDarkThree({ slug, content, isDemo = false }) {
  const about = resolveTemplateContent(content?.pages?.about, templateThreeDefaults.pages.about, isDemo);

  return (
    <div className="relative">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <AboutHeroDarkThree content={about.hero}  isDemo={isDemo}/>
      <AboutJourneyDarkThree content={about.journey}  isDemo={isDemo}/>
      <AboutTimelineDarkThree content={about.timeline}  isDemo={isDemo}/>
      <AboutPillarsDarkThree content={about.pillars}  isDemo={isDemo}/>
      <AboutLocationsDarkThree content={about.locations}  isDemo={isDemo}/>
      <AboutCtaDarkThree slug={slug} content={about.finalCta}  isDemo={isDemo}/>
    </div>
  );
}
