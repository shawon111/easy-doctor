import AboutCtaTwoDark from "./AboutCtaTwoDark";
import AboutHeroTwoDark from "./AboutHeroTwoDark";
import AboutPracticesTwoDark from "./AboutPracticesTwoDark";
import AboutQualificationsTwoDark from "./AboutQualificationsTwoDark";
import AboutStoryTwoDark from "./AboutStoryTwoDark";
import AboutTimelineTwoDark from "./AboutTimelineTwoDark";

export default function AboutPageTwoDark({ slug }) {
  return (
    <>
      <AboutHeroTwoDark />
      <div className="gold-shimmer opacity-50" />
      <AboutStoryTwoDark />
      <AboutTimelineTwoDark />
      <AboutQualificationsTwoDark />
      <AboutPracticesTwoDark slug={slug} />
      <AboutCtaTwoDark slug={slug} />
    </>
  );
}
