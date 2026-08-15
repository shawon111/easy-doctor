import { templateThreeDefaults } from "@/content/defaults/template-three";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
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

  return (
    <>
      <HomeHeroDarkThree slug={slug} content={home.hero}  isDemo={isDemo}/>
      <HomeHighlightsDarkThree content={home.highlights}  isDemo={isDemo}/>
      <HomeAboutPreviewDarkThree slug={slug} content={home.aboutPreview}  isDemo={isDemo}/>
      <HomeServicesGridDarkThree slug={slug} content={home.servicesGrid}  isDemo={isDemo}/>
      <HomeWhyTrustDarkThree content={home.whyTrust}  isDemo={isDemo}/>
      <HomeHowToStartDarkThree content={home.howToStart}  isDemo={isDemo}/>
      <HomeMapLocationDarkThree content={home.mapLocation}  isDemo={isDemo}/>
      <HomeFinalCtaDarkThree slug={slug} content={home.finalCta}  isDemo={isDemo}/>
    </>
  );
}
