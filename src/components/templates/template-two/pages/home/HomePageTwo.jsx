import { templateTwoDefaults } from "@/content/defaults/template-two";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import HeroTwo from "./HeroTwo";
import CredentialsTwo from "./CredentialsTwo";
import TreatmentsTwo from "./TreatmentsTwo";
import TimelineTwo from "./TimelineTwo";
import OnboardingTwo from "./OnboardingTwo";
import ChamberTwo from "./ChamberTwo";
import FeesContactTwo from "./FeesContactTwo";
import CtaTwo from "./CtaTwo";

const HomePageTwo = ({ slug, content, isDemo = false }) => {
  const home = resolveTemplateContent(content?.pages?.home, templateTwoDefaults.pages.home, isDemo);
  const fees = isDemo ? templateTwoDefaults.fees : (content?.fees || templateTwoDefaults.fees);
  const phone = isDemo ? (templateTwoDefaults.contact?.phone || "+880 1712-345678") : (content?.phone || "");

  return (
    <>
      <HeroTwo content={home.hero} slug={slug} isDemo={isDemo} fees={fees} phone={phone} />
      <div className="px-margin-mobile md:px-margin-desktop py-12">
        <div className="gold-shimmer opacity-30" />
      </div>
      <CredentialsTwo content={home.credentials} isDemo={isDemo} />
      <FeesContactTwo content={home.feesContact} fees={fees} phone={phone} clinics={content?.clinics} isDemo={isDemo} />
      <TreatmentsTwo content={home.treatments} slug={slug} isDemo={isDemo} />
      <TimelineTwo content={home.timeline} isDemo={isDemo} />
      <OnboardingTwo content={home.onboarding} isDemo={isDemo} />
      <ChamberTwo content={home.chamber} isDemo={isDemo} />
      <CtaTwo content={home.finalCta} slug={slug} isDemo={isDemo} />
    </>
  );
};

export default HomePageTwo;
