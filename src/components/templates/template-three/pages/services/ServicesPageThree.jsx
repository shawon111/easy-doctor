import ServicesBenefitsThree from "./ServicesBenefitsThree";
import ServicesCtaThree from "./ServicesCtaThree";
import ServicesFaqThree from "./ServicesFaqThree";
import ServicesHeroThree from "./ServicesHeroThree";
import ServicesTreatmentsThree from "./ServicesTreatmentsThree";

export default function ServicesPageThree({ slug }) {
  return (
    <>
      <ServicesHeroThree />
      <ServicesTreatmentsThree />
      <ServicesBenefitsThree />
      <ServicesFaqThree />
      <ServicesCtaThree slug={slug} />
    </>
  );
}
