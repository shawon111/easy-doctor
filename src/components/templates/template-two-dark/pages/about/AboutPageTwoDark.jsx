import { templateTwoDefaults } from "@/content/defaults/template-two";
import AboutCtaTwoDark from "./AboutCtaTwoDark";
import AboutHeroTwoDark from "./AboutHeroTwoDark";
import AboutPracticesTwoDark from "./AboutPracticesTwoDark";
import AboutQualificationsTwoDark from "./AboutQualificationsTwoDark";
import AboutStoryTwoDark from "./AboutStoryTwoDark";
import AboutTimelineTwoDark from "./AboutTimelineTwoDark";

export default function AboutPageTwoDark({ slug, content }) {
  const about = content?.pages?.about ?? templateTwoDefaults.pages.about;

  return (
    <>
      <AboutHeroTwoDark content={about.hero} user={content?.user} />
      <div className="gold-shimmer opacity-50" />
      <AboutStoryTwoDark content={about.story} />
      <AboutTimelineTwoDark content={about.timeline} />
      <AboutQualificationsTwoDark content={about.qualifications} />
      <AboutPracticesTwoDark content={about.practices} slug={slug} />
      <AboutCtaTwoDark content={about.finalCta} slug={slug} />
    </>
  );
}
