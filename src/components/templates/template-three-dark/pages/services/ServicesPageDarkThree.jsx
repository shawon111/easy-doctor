import ServicesBenefitsDarkThree from "./ServicesBenefitsDarkThree";
import ServicesCtaDarkThree from "./ServicesCtaDarkThree";
import ServicesFaqDarkThree from "./ServicesFaqDarkThree";
import ServicesHeroDarkThree from "./ServicesHeroDarkThree";
import ServicesTreatmentsDarkThree from "./ServicesTreatmentsDarkThree";

export default function ServicesPageDarkThree({ slug }) {
  return (
    <>
      <ServicesHeroDarkThree />
      <ServicesTreatmentsDarkThree />
      <ServicesBenefitsDarkThree />
      <ServicesFaqDarkThree />
      <ServicesCtaDarkThree slug={slug} />
    </>
  );
}
