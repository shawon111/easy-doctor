import { templateOneDefaults } from "@/content/defaults/template-one";
import AboutBioStatsOneDark from "./AboutBioStatsOneDark";
import AboutChambersOneDark from "./AboutChambersOneDark";
import AboutFinalCtaOneDark from "./AboutFinalCtaOneDark";
import AboutHeroOneDark from "./AboutHeroOneDark";
import AboutPhilosophyOneDark from "./AboutPhilosophyOneDark";
import AboutTimelineOneDark from "./AboutTimelineOneDark";

export default function AboutPageOneDark({ slug, content }) {
  const about = content?.pages?.about ?? templateOneDefaults.pages.about;

  return (
    <>
      <AboutHeroOneDark content={about.hero} user={content?.user} />
      <AboutPhilosophyOneDark content={about.philosophy} />
      <AboutBioStatsOneDark content={about.bioStats} user={content?.user} />
      <AboutTimelineOneDark content={about.timeline} />
      <AboutChambersOneDark content={about.chambers} />
      <AboutFinalCtaOneDark content={about.finalCta} slug={slug} />
    </>
  );
}
