import Link from "next/link";
import ChamberTwoDark from "./ChamberTwoDark";
import CredentialsTwoDark from "./CredentialsTwoDark";
import CtaTwoDark from "./CtaTwoDark";
import GoldDividerTwoDark from "./GoldDividerTwoDark";
import HeroTwoDark from "./HeroTwoDark";
import OnboardingTwoDark from "./OnboardingTwoDark";
import TimelineTwoDark from "./TimelineTwoDark";
import TreatmentsTwoDark from "./TreatmentsTwoDark";

export default function HomeTwoDark({ slug }) {
  return (
    <>
      <HeroTwoDark slug={slug} />
      <GoldDividerTwoDark />
      <CredentialsTwoDark />
      <TreatmentsTwoDark slug={slug} />
      <TimelineTwoDark />
      <OnboardingTwoDark />
      <ChamberTwoDark />
      <CtaTwoDark slug={slug} />
    </>
  );
}
