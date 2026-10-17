import { templateThreeDefaults } from "@/content/defaults/template-three";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import FeesContactThreeDark from "./FeesContactThreeDark";
import HomeAboutPreviewDarkThree from "./HomeAboutPreviewDarkThree";
import HomeFinalCtaDarkThree from "./HomeFinalCtaDarkThree";
import HomeHeroDarkThree from "./HomeHeroDarkThree";
import HomeHighlightsDarkThree from "./HomeHighlightsDarkThree";
import HomeHowToStartDarkThree from "./HomeHowToStartDarkThree";
import HomeMapLocationDarkThree from "./HomeMapLocationDarkThree";
import HomeServicesGridDarkThree from "./HomeServicesGridDarkThree";
import HomeWhyTrustDarkThree from "./HomeWhyTrustDarkThree";

export default function HomePageDarkThree({ slug, content, isDemo = false }) {
  const home = resolveTemplateContent(content?.pages?.home, templateThreeDefaults.pages.home, isDemo);
  const fees = isDemo ? templateThreeDefaults.fees : (content?.fees || templateThreeDefaults.fees);
  const phone = isDemo ? (templateThreeDefaults.contact?.phone || "+880 1912-345678") : (content?.phone || "");

  return (
    <>
      <HomeHeroDarkThree slug={slug} content={home.hero} isDemo={isDemo} fees={fees} phone={phone} />
      <HomeHighlightsDarkThree content={home.highlights} isDemo={isDemo} />
      <FeesContactThreeDark content={home.feesContact} fees={fees} phone={phone} clinics={content?.clinics} isDemo={isDemo} />
      <HomeAboutPreviewDarkThree slug={slug} content={home.aboutPreview} isDemo={isDemo} />
      <HomeServicesGridDarkThree slug={slug} content={home.servicesGrid} isDemo={isDemo} />
      <HomeWhyTrustDarkThree content={home.whyTrust} isDemo={isDemo} />
      <HomeHowToStartDarkThree content={home.howToStart} isDemo={isDemo} />
      <HomeMapLocationDarkThree content={home.mapLocation} isDemo={isDemo} />
      <HomeFinalCtaDarkThree slug={slug} content={home.finalCta} isDemo={isDemo} />
    </>
  );
}
