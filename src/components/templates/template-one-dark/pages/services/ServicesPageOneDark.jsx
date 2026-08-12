import ServicesBenefitsOneDark from "./ServicesBenefitsOneDark";
import ServicesCtaOneDark from "./ServicesCtaOneDark";
import ServicesFaqOneDark from "./ServicesFaqOneDark";
import ServicesGridOneDark from "./ServicesGridOneDark";
import ServicesHeroOneDark from "./ServicesHeroOneDark";

export default function ServicesPageOneDark({ slug }) {
  return (
    <>
      <ServicesHeroOneDark />
      <ServicesGridOneDark />
      <ServicesBenefitsOneDark />
      <ServicesFaqOneDark />
      <ServicesCtaOneDark slug={slug} />
    </>
  );
}
