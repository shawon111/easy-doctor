import AboutPreviewThree from "./AboutPreviewThree";
import FinalCtaThree from "./FinalCtaThree";
import HeroThree from "./HeroThree";
import HighlightsThree from "./HighlightsThree";
import HowToStartThree from "./HowToStartThree";
import MapLocationThree from "./MapLocationThree";
import ServicesGridThree from "./ServicesGridThree";
import WhyTrustThree from "./WhyTrustThree";

export default function HomeThree({ slug }) {
  return (
    <>
      <HeroThree slug={slug} />
      <HighlightsThree />
      <AboutPreviewThree slug={slug} />
      <ServicesGridThree slug={slug} />
      <WhyTrustThree />
      <HowToStartThree slug={slug} />
      <MapLocationThree />
      <FinalCtaThree slug={slug} />
    </>
  );
}
