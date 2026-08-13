import { templateThreeDefaults } from "@/content/defaults/template-three";
import ServicesBenefitsThree from "./ServicesBenefitsThree";
import ServicesCtaThree from "./ServicesCtaThree";
import ServicesFaqThree from "./ServicesFaqThree";
import ServicesHeroThree from "./ServicesHeroThree";
import ServicesTreatmentsThree from "./ServicesTreatmentsThree";

export default function ServicesPageThree({ slug, content }) {
  const services = content?.pages?.services ?? templateThreeDefaults.pages.services;

  return (
    <>
      <ServicesHeroThree content={services.hero} />
      <ServicesTreatmentsThree content={services.treatments} />
      <ServicesBenefitsThree content={services.benefits} />
      <ServicesFaqThree content={services.faq} />
      <ServicesCtaThree slug={slug} content={services.finalCta} />
    </>
  );
}
