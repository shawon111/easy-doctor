import { templateThreeDefaults } from "@/content/defaults/template-three";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import AboutCtaThree from "./AboutCtaThree";
import AboutHeroThree from "./AboutHeroThree";
import AboutJourneyThree from "./AboutJourneyThree";
import AboutLocationsThree from "./AboutLocationsThree";
import AboutPillarsThree from "./AboutPillarsThree";
import AboutTimelineThree from "./AboutTimelineThree";

export default function AboutPageThree({ slug, content, isDemo = false }) {
  const about = resolveTemplateContent(content?.pages?.about, templateThreeDefaults.pages.about, isDemo);

  return (
    <div className="relative">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <AboutHeroThree content={about.hero}  isDemo={isDemo}/>
      <AboutJourneyThree content={about.journey}  isDemo={isDemo}/>
      <AboutTimelineThree content={about.timeline}  isDemo={isDemo}/>
      <AboutPillarsThree content={about.pillars}  isDemo={isDemo}/>
      <AboutLocationsThree content={about.locations}  isDemo={isDemo}/>
      <AboutCtaThree slug={slug} content={about.finalCta}  isDemo={isDemo}/>
    </div>
  );
}
