import { templateTwoDefaults } from "@/content/defaults/template-two";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import AboutCtaTwoDark from "./AboutCtaTwoDark";
import AboutHeroTwoDark from "./AboutHeroTwoDark";
import AboutPracticesTwoDark from "./AboutPracticesTwoDark";
import AboutQualificationsTwoDark from "./AboutQualificationsTwoDark";
import AboutStoryTwoDark from "./AboutStoryTwoDark";
import AboutTimelineTwoDark from "./AboutTimelineTwoDark";

export default function AboutPageTwoDark({ slug, content, isDemo = false }) {
  const about = resolveTemplateContent(content?.pages?.about, templateTwoDefaults.pages.about, isDemo);

  return (
    <>
      <AboutHeroTwoDark content={about.hero} user={isDemo ? undefined : content?.user}  isDemo={isDemo}/>
      <div className="gold-shimmer opacity-50" />
      <AboutStoryTwoDark content={about.story}  isDemo={isDemo}/>
      <AboutTimelineTwoDark content={about.timeline}  isDemo={isDemo}/>
      <AboutQualificationsTwoDark content={about.qualifications}  isDemo={isDemo}/>
      <AboutPracticesTwoDark content={about.practices} slug={slug}  isDemo={isDemo}/>
      <AboutCtaTwoDark content={about.finalCta} slug={slug}  isDemo={isDemo}/>
    </>
  );
}
