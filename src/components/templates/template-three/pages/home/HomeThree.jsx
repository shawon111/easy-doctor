import { templateThreeDefaults } from "@/content/defaults/template-three";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import AboutPreviewThree from "./AboutPreviewThree";
import FinalCtaThree from "./FinalCtaThree";
import HeroThree from "./HeroThree";
import HighlightsThree from "./HighlightsThree";
import HowToStartThree from "./HowToStartThree";
import MapLocationThree from "./MapLocationThree";
import ServicesGridThree from "./ServicesGridThree";
import WhyTrustThree from "./WhyTrustThree";

export default function HomeThree({ slug, content, isDemo = false }) {
  const home = resolveTemplateContent(content?.pages?.home, templateThreeDefaults.pages.home, isDemo);

  return (
    <>
      <HeroThree slug={slug} content={home.hero}  isDemo={isDemo}/>
      <HighlightsThree content={home.highlights}  isDemo={isDemo}/>
      <AboutPreviewThree slug={slug} content={home.aboutPreview}  isDemo={isDemo}/>
      <ServicesGridThree slug={slug} content={home.servicesGrid}  isDemo={isDemo}/>
      <WhyTrustThree content={home.whyTrust}  isDemo={isDemo}/>
      <HowToStartThree content={home.howToStart}  isDemo={isDemo}/>
      <MapLocationThree content={home.mapLocation}  isDemo={isDemo}/>
      <FinalCtaThree slug={slug} content={home.finalCta}  isDemo={isDemo}/>
    </>
  );
}
