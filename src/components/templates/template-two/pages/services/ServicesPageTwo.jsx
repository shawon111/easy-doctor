import { templateTwoDefaults } from "@/content/defaults/template-two";
import ServicesHeroTwo from "./ServicesHeroTwo";
import ServicesFeaturedTwo from "./ServicesFeaturedTwo";
import ServicesCardsTwo from "./ServicesCardsTwo";
import ServicesBenefitsTwo from "./ServicesBenefitsTwo";
import ServicesFaqTwo from "./ServicesFaqTwo";
import ServicesCtaTwo from "./ServicesCtaTwo";

const ServicesPageTwo = ({ slug, content }) => {
  const services = content?.pages?.services ?? templateTwoDefaults.pages.services;

  return (
    <>
      <ServicesHeroTwo content={services.hero} />
      <ServicesFeaturedTwo content={services.featured} slug={slug} />
      <ServicesCardsTwo content={services.cards} slug={slug} />
      <ServicesBenefitsTwo content={services.benefits} />
      <ServicesFaqTwo content={services.faq} />
      <ServicesCtaTwo content={services.finalCta} slug={slug} />
    </>
  );
};

export default ServicesPageTwo;
