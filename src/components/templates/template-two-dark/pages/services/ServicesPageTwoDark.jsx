import ServicesBenefitsTwoDark from "./ServicesBenefitsTwoDark";
import ServicesCardsTwoDark from "./ServicesCardsTwoDark";
import ServicesCtaTwoDark from "./ServicesCtaTwoDark";
import ServicesFaqTwoDark from "./ServicesFaqTwoDark";
import ServicesFeaturedTwoDark from "./ServicesFeaturedTwoDark";
import ServicesHeroTwoDark from "./ServicesHeroTwoDark";

export default function ServicesPageTwoDark({ slug }) {
  return (
    <>
      <ServicesHeroTwoDark />
      <ServicesFeaturedTwoDark slug={slug} />
      <ServicesCardsTwoDark slug={slug} />
      <ServicesBenefitsTwoDark />
      <ServicesFaqTwoDark />
      <ServicesCtaTwoDark slug={slug} />
    </>
  );
}
