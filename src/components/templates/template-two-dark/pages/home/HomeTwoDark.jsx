import { templateTwoDefaults } from "@/content/defaults/template-two";
import ChamberTwoDark from "./ChamberTwoDark";
import CredentialsTwoDark from "./CredentialsTwoDark";
import CtaTwoDark from "./CtaTwoDark";
import GoldDividerTwoDark from "./GoldDividerTwoDark";
import HeroTwoDark from "./HeroTwoDark";
import OnboardingTwoDark from "./OnboardingTwoDark";
import TimelineTwoDark from "./TimelineTwoDark";
import TreatmentsTwoDark from "./TreatmentsTwoDark";

export default function HomeTwoDark({ slug, content }) {
  const home = content?.pages?.home ?? templateTwoDefaults.pages.home;

  return (
    <>
      <HeroTwoDark slug={slug} content={home.hero} />
      <GoldDividerTwoDark />
      <CredentialsTwoDark content={home.credentials} />
      <TreatmentsTwoDark slug={slug} content={home.treatments} />
      <TimelineTwoDark content={home.timeline} user={content?.user} />
      <OnboardingTwoDark content={home.onboarding} />
      <ChamberTwoDark content={home.chamber} />
      <CtaTwoDark slug={slug} content={home.finalCta} />
    </>
  );
}
