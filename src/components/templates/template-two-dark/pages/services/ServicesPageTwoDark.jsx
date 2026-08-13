import { templateTwoDefaults } from "@/content/defaults/template-two";
import ServicesBenefitsTwoDark from "./ServicesBenefitsTwoDark";
import ServicesCardsTwoDark from "./ServicesCardsTwoDark";
import ServicesCtaTwoDark from "./ServicesCtaTwoDark";
import ServicesFaqTwoDark from "./ServicesFaqTwoDark";
import ServicesFeaturedTwoDark from "./ServicesFeaturedTwoDark";
import ServicesHeroTwoDark from "./ServicesHeroTwoDark";

export default function ServicesPageTwoDark({ slug, content }) {
  const services = content?.pages?.services ?? templateTwoDefaults.pages.services;

  return (
    <>
      <ServicesHeroTwoDark content={services.hero} />
      <ServicesFeaturedTwoDark content={services.featured} slug={slug} />
      <ServicesCardsTwoDark content={services.cards} slug={slug} />
      <ServicesBenefitsTwoDark content={services.benefits} />
      <ServicesFaqTwoDark content={services.faq} />
      <ServicesCtaTwoDark content={services.finalCta} slug={slug} />
    </>
  );
}
