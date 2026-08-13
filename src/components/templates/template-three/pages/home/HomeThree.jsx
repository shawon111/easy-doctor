import { templateThreeDefaults } from "@/content/defaults/template-three";
import AboutPreviewThree from "./AboutPreviewThree";
import FinalCtaThree from "./FinalCtaThree";
import HeroThree from "./HeroThree";
import HighlightsThree from "./HighlightsThree";
import HowToStartThree from "./HowToStartThree";
import MapLocationThree from "./MapLocationThree";
import ServicesGridThree from "./ServicesGridThree";
import WhyTrustThree from "./WhyTrustThree";

export default function HomeThree({ slug, content }) {
  const home = content?.pages?.home ?? templateThreeDefaults.pages.home;

  return (
    <>
      <HeroThree slug={slug} content={home.hero} />
      <HighlightsThree content={home.highlights} />
      <AboutPreviewThree slug={slug} content={home.aboutPreview} />
      <ServicesGridThree slug={slug} content={home.servicesGrid} />
      <WhyTrustThree content={home.whyTrust} />
      <HowToStartThree content={home.howToStart} />
      <MapLocationThree content={home.mapLocation} />
      <FinalCtaThree slug={slug} content={home.finalCta} />
    </>
  );
}
