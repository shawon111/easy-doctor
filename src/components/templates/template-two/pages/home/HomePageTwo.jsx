import { templateTwoDefaults } from "@/content/defaults/template-two";
import HeroTwo from "./HeroTwo";
import CredentialsTwo from "./CredentialsTwo";
import TreatmentsTwo from "./TreatmentsTwo";
import TimelineTwo from "./TimelineTwo";
import OnboardingTwo from "./OnboardingTwo";
import ChamberTwo from "./ChamberTwo";
import CtaTwo from "./CtaTwo";

const HomePageTwo = ({ content }) => {
  const home = content?.pages?.home ?? templateTwoDefaults.pages.home;

  return (
    <>
      <HeroTwo content={home.hero} />
      <div className="px-margin-mobile md:px-margin-desktop py-12">
        <div className="gold-shimmer opacity-30" />
      </div>
      <CredentialsTwo content={home.credentials} />
      <TreatmentsTwo content={home.treatments} />
      <TimelineTwo content={home.timeline} user={content?.user} />
      <OnboardingTwo content={home.onboarding} />
      <ChamberTwo content={home.chamber} />
      <CtaTwo content={home.finalCta} />
    </>
  );
};

export default HomePageTwo;
