import HeroTwo from "./HeroTwo";
import CredentialsTwo from "./CredentialsTwo";
import TreatmentsTwo from "./TreatmentsTwo";
import TimelineTwo from "./TimelineTwo";
import OnboardingTwo from "./OnboardingTwo";
import ChamberTwo from "./ChamberTwo";
import CtaTwo from "./CtaTwo";

const HomePageTwo = () => {
  return (
    <>
      <HeroTwo />
      <div className="px-margin-mobile md:px-margin-desktop py-12">
        <div className="gold-shimmer opacity-30" />
      </div>
      <CredentialsTwo />
      <TreatmentsTwo />
      <TimelineTwo />
      <OnboardingTwo />
      <ChamberTwo />
      <CtaTwo />
    </>
  );
};

export default HomePageTwo;
