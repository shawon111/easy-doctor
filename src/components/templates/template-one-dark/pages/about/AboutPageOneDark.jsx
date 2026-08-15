import { templateOneDefaults } from "@/content/defaults/template-one";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import AboutBioStatsOneDark from "./AboutBioStatsOneDark";
import AboutChambersOneDark from "./AboutChambersOneDark";
import AboutFinalCtaOneDark from "./AboutFinalCtaOneDark";
import AboutHeroOneDark from "./AboutHeroOneDark";
import AboutPhilosophyOneDark from "./AboutPhilosophyOneDark";
import AboutTimelineOneDark from "./AboutTimelineOneDark";

export default function AboutPageOneDark({ slug, content, isDemo = false }) {
  const about = resolveTemplateContent(content?.pages?.about, templateOneDefaults.pages.about, isDemo);

  return (
    <>
      <AboutHeroOneDark content={about.hero} user={isDemo ? undefined : content?.user}  isDemo={isDemo}/>
      <AboutPhilosophyOneDark content={about.philosophy}  isDemo={isDemo}/>
      <AboutBioStatsOneDark content={about.bioStats} user={isDemo ? undefined : content?.user}  isDemo={isDemo}/>
      <AboutTimelineOneDark content={about.timeline}  isDemo={isDemo}/>
      <AboutChambersOneDark content={about.chambers}  isDemo={isDemo}/>
      <AboutFinalCtaOneDark content={about.finalCta} slug={slug}  isDemo={isDemo}/>
    </>
  );
}
