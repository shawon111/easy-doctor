import { templateThreeDefaults } from "@/content/defaults/template-three";
import HomeAboutPreviewDarkThree from "./HomeAboutPreviewDarkThree";
import HomeFinalCtaDarkThree from "./HomeFinalCtaDarkThree";
import HomeHeroDarkThree from "./HomeHeroDarkThree";
import HomeHighlightsDarkThree from "./HomeHighlightsDarkThree";
import HomeHowToStartDarkThree from "./HomeHowToStartDarkThree";
import HomeMapLocationDarkThree from "./HomeMapLocationDarkThree";
import HomeServicesGridDarkThree from "./HomeServicesGridDarkThree";
import HomeWhyTrustDarkThree from "./HomeWhyTrustDarkThree";

export default function HomePageDarkThree({ slug, content }) {
  const home = content?.pages?.home ?? templateThreeDefaults.pages.home;

  return (
    <>
      <HomeHeroDarkThree slug={slug} content={home.hero} />
      <HomeHighlightsDarkThree content={home.highlights} />
      <HomeAboutPreviewDarkThree slug={slug} content={home.aboutPreview} />
      <HomeServicesGridDarkThree slug={slug} content={home.servicesGrid} />
      <HomeWhyTrustDarkThree content={home.whyTrust} />
      <HomeHowToStartDarkThree content={home.howToStart} />
      <HomeMapLocationDarkThree content={home.mapLocation} />
      <HomeFinalCtaDarkThree slug={slug} content={home.finalCta} />
    </>
  );
}
