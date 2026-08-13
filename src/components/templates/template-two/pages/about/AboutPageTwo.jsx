import { templateTwoDefaults } from "@/content/defaults/template-two";
import AboutHeroTwo from "./AboutHeroTwo";
import AboutStoryTwo from "./AboutStoryTwo";
import AboutTimelineTwo from "./AboutTimelineTwo";
import AboutQualificationsTwo from "./AboutQualificationsTwo";
import AboutPracticesTwo from "./AboutPracticesTwo";
import AboutCtaTwo from "./AboutCtaTwo";

const AboutPageTwo = ({ slug, content }) => {
  const about = content?.pages?.about ?? templateTwoDefaults.pages.about;

  return (
    <>
      <AboutHeroTwo content={about.hero} user={content?.user} />
      <div className="abtwo-gold-shimmer opacity-30" />
      <AboutStoryTwo content={about.story} />
      <AboutTimelineTwo content={about.timeline} />
      <AboutQualificationsTwo content={about.qualifications} />
      <AboutPracticesTwo content={about.practices} slug={slug} />
      <AboutCtaTwo content={about.finalCta} slug={slug} />
    </>
  );
};

export default AboutPageTwo;
