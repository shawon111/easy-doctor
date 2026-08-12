import AboutBioStatsOneDark from "./AboutBioStatsOneDark";
import AboutChambersOneDark from "./AboutChambersOneDark";
import AboutFinalCtaOneDark from "./AboutFinalCtaOneDark";
import AboutHeroOneDark from "./AboutHeroOneDark";
import AboutPhilosophyOneDark from "./AboutPhilosophyOneDark";
import AboutTimelineOneDark from "./AboutTimelineOneDark";

export default function AboutPageOneDark({ slug }) {
  return (
    <>
      <AboutHeroOneDark />
      <AboutPhilosophyOneDark />
      <AboutBioStatsOneDark />
      <AboutTimelineOneDark />
      <AboutChambersOneDark />
      <AboutFinalCtaOneDark slug={slug} />
    </>
  );
}
