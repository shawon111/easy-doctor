import { templateThreeDefaults } from "@/content/defaults/template-three";
import ServicesBenefitsDarkThree from "./ServicesBenefitsDarkThree";
import ServicesCtaDarkThree from "./ServicesCtaDarkThree";
import ServicesFaqDarkThree from "./ServicesFaqDarkThree";
import ServicesHeroDarkThree from "./ServicesHeroDarkThree";
import ServicesTreatmentsDarkThree from "./ServicesTreatmentsDarkThree";

export default function ServicesPageDarkThree({ slug, content }) {
  const services = content?.pages?.services ?? templateThreeDefaults.pages.services;

  return (
    <>
      <ServicesHeroDarkThree content={services.hero} />
      <ServicesTreatmentsDarkThree content={services.treatments} />
      <ServicesBenefitsDarkThree content={services.benefits} />
      <ServicesFaqDarkThree content={services.faq} />
      <ServicesCtaDarkThree slug={slug} content={services.finalCta} />
    </>
  );
}
