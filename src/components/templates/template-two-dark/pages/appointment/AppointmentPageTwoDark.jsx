import AppointmentCtaTwoDark from "./AppointmentCtaTwoDark";
import AppointmentFaqTwoDark from "./AppointmentFaqTwoDark";
import AppointmentHeroTwoDark from "./AppointmentHeroTwoDark";
import AppointmentSchedulesTwoDark from "./AppointmentSchedulesTwoDark";
import AppointmentWhatsappTwoDark from "./AppointmentWhatsappTwoDark";

export default function AppointmentPageTwoDark({ slug }) {
  return (
    <>
      <AppointmentHeroTwoDark />
      <AppointmentSchedulesTwoDark />
      <AppointmentWhatsappTwoDark />
      <AppointmentFaqTwoDark />
      <AppointmentCtaTwoDark slug={slug} />
    </>
  );
}
