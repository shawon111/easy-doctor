import { templateTwoDefaults } from "@/content/defaults/template-two";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import ServicesBenefitsTwoDark from "./ServicesBenefitsTwoDark";
import ServicesCardsTwoDark from "./ServicesCardsTwoDark";
import ServicesCtaTwoDark from "./ServicesCtaTwoDark";
import ServicesFaqTwoDark from "./ServicesFaqTwoDark";
import ServicesFeaturedTwoDark from "./ServicesFeaturedTwoDark";
import ServicesHeroTwoDark from "./ServicesHeroTwoDark";

export default function ServicesPageTwoDark({ slug, content, isDemo = false }) {
  const services = resolveTemplateContent(content?.pages?.services, templateTwoDefaults.pages.services, isDemo);

  return (
    <>
      <ServicesHeroTwoDark content={services.hero}  isDemo={isDemo}/>
      <ServicesFeaturedTwoDark content={services.featured} slug={slug}  isDemo={isDemo}/>
      <ServicesCardsTwoDark content={services.cards} slug={slug}  isDemo={isDemo}/>
      <ServicesBenefitsTwoDark content={services.benefits}  isDemo={isDemo}/>
      <ServicesFaqTwoDark content={services.faq}  isDemo={isDemo}/>
      <ServicesCtaTwoDark content={services.finalCta} slug={slug}  isDemo={isDemo}/>
    </>
  );
}
