import { templateTwoDefaults } from "@/content/defaults/template-two";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import ChamberTwoDark from "./ChamberTwoDark";
import CredentialsTwoDark from "./CredentialsTwoDark";
import CtaTwoDark from "./CtaTwoDark";
import GoldDividerTwoDark from "./GoldDividerTwoDark";
import HeroTwoDark from "./HeroTwoDark";
import OnboardingTwoDark from "./OnboardingTwoDark";
import TimelineTwoDark from "./TimelineTwoDark";
import TreatmentsTwoDark from "./TreatmentsTwoDark";

export default function HomeTwoDark({ slug, content, isDemo = false }) {
  const home = resolveTemplateContent(content?.pages?.home, templateTwoDefaults.pages.home, isDemo);

  return (
    <>
      <HeroTwoDark slug={slug} content={home.hero}  isDemo={isDemo}/>
      <GoldDividerTwoDark  isDemo={isDemo}/>
      <CredentialsTwoDark content={home.credentials}  isDemo={isDemo}/>
      <TreatmentsTwoDark slug={slug} content={home.treatments}  isDemo={isDemo}/>
      <TimelineTwoDark content={home.timeline} user={isDemo ? undefined : content?.user}  isDemo={isDemo}/>
      <OnboardingTwoDark content={home.onboarding}  isDemo={isDemo}/>
      <ChamberTwoDark content={home.chamber}  isDemo={isDemo}/>
      <CtaTwoDark slug={slug} content={home.finalCta}  isDemo={isDemo}/>
    </>
  );
}
