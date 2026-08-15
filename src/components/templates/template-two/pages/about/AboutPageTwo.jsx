import { templateTwoDefaults } from "@/content/defaults/template-two";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import AboutHeroTwo from "./AboutHeroTwo";
import AboutStoryTwo from "./AboutStoryTwo";
import AboutTimelineTwo from "./AboutTimelineTwo";
import AboutQualificationsTwo from "./AboutQualificationsTwo";
import AboutPracticesTwo from "./AboutPracticesTwo";
import AboutCtaTwo from "./AboutCtaTwo";

const AboutPageTwo = ({ slug, content, isDemo = false }) => {
  const about = resolveTemplateContent(content?.pages?.about, templateTwoDefaults.pages.about, isDemo);

  return (
    <>
      <AboutHeroTwo content={about.hero} user={isDemo ? undefined : content?.user}  isDemo={isDemo}/>
      <div className="abtwo-gold-shimmer opacity-30" />
      <AboutStoryTwo content={about.story}  isDemo={isDemo}/>
      <AboutTimelineTwo content={about.timeline}  isDemo={isDemo}/>
      <AboutQualificationsTwo content={about.qualifications}  isDemo={isDemo}/>
      <AboutPracticesTwo content={about.practices} slug={slug}  isDemo={isDemo}/>
      <AboutCtaTwo content={about.finalCta} slug={slug}  isDemo={isDemo}/>
    </>
  );
};

export default AboutPageTwo;
