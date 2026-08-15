import { templateTwoDefaults } from "@/content/defaults/template-two";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import HeroTwo from "./HeroTwo";
import CredentialsTwo from "./CredentialsTwo";
import TreatmentsTwo from "./TreatmentsTwo";
import TimelineTwo from "./TimelineTwo";
import OnboardingTwo from "./OnboardingTwo";
import ChamberTwo from "./ChamberTwo";
import CtaTwo from "./CtaTwo";

const HomePageTwo = ({ content, isDemo = false }) => {
  const home = resolveTemplateContent(content?.pages?.home, templateTwoDefaults.pages.home, isDemo);

  return (
    <>
      <HeroTwo content={home.hero}  isDemo={isDemo}/>
      <div className="px-margin-mobile md:px-margin-desktop py-12">
        <div className="gold-shimmer opacity-30" />
      </div>
      <CredentialsTwo content={home.credentials}  isDemo={isDemo}/>
      <TreatmentsTwo content={home.treatments}  isDemo={isDemo}/>
      <TimelineTwo content={home.timeline} user={isDemo ? undefined : content?.user}  isDemo={isDemo}/>
      <OnboardingTwo content={home.onboarding}  isDemo={isDemo}/>
      <ChamberTwo content={home.chamber}  isDemo={isDemo}/>
      <CtaTwo content={home.finalCta}  isDemo={isDemo}/>
    </>
  );
};

export default HomePageTwo;
