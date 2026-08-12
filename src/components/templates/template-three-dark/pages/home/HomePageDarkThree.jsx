import HomeAboutPreviewDarkThree from "./HomeAboutPreviewDarkThree";
import HomeFinalCtaDarkThree from "./HomeFinalCtaDarkThree";
import HomeHeroDarkThree from "./HomeHeroDarkThree";
import HomeHighlightsDarkThree from "./HomeHighlightsDarkThree";
import HomeHowToStartDarkThree from "./HomeHowToStartDarkThree";
import HomeMapLocationDarkThree from "./HomeMapLocationDarkThree";
import HomeServicesGridDarkThree from "./HomeServicesGridDarkThree";
import HomeWhyTrustDarkThree from "./HomeWhyTrustDarkThree";

export default function HomePageDarkThree({ slug }) {
  return (
    <>
      <HomeHeroDarkThree slug={slug} />
      <HomeHighlightsDarkThree />
      <HomeAboutPreviewDarkThree slug={slug} />
      <HomeServicesGridDarkThree slug={slug} />
      <HomeWhyTrustDarkThree />
      <HomeHowToStartDarkThree />
      <HomeMapLocationDarkThree />
      <HomeFinalCtaDarkThree slug={slug} />
    </>
  );
}
