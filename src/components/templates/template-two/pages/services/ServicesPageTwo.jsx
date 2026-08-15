import { templateTwoDefaults } from "@/content/defaults/template-two";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import ServicesHeroTwo from "./ServicesHeroTwo";
import ServicesFeaturedTwo from "./ServicesFeaturedTwo";
import ServicesCardsTwo from "./ServicesCardsTwo";
import ServicesBenefitsTwo from "./ServicesBenefitsTwo";
import ServicesFaqTwo from "./ServicesFaqTwo";
import ServicesCtaTwo from "./ServicesCtaTwo";

const ServicesPageTwo = ({ slug, content, isDemo = false }) => {
  const services = resolveTemplateContent(content?.pages?.services, templateTwoDefaults.pages.services, isDemo);

  return (
    <>
      <ServicesHeroTwo content={services.hero}  isDemo={isDemo}/>
      <ServicesFeaturedTwo content={services.featured} slug={slug}  isDemo={isDemo}/>
      <ServicesCardsTwo content={services.cards} slug={slug}  isDemo={isDemo}/>
      <ServicesBenefitsTwo content={services.benefits}  isDemo={isDemo}/>
      <ServicesFaqTwo content={services.faq}  isDemo={isDemo}/>
      <ServicesCtaTwo content={services.finalCta} slug={slug}  isDemo={isDemo}/>
    </>
  );
};

export default ServicesPageTwo;
