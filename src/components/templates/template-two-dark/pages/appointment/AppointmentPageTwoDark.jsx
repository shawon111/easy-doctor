import { templateTwoDefaults } from "@/content/defaults/template-two";
import AppointmentCtaTwoDark from "./AppointmentCtaTwoDark";
import AppointmentFaqTwoDark from "./AppointmentFaqTwoDark";
import AppointmentHeroTwoDark from "./AppointmentHeroTwoDark";
import AppointmentSchedulesTwoDark from "./AppointmentSchedulesTwoDark";
import AppointmentWhatsappTwoDark from "./AppointmentWhatsappTwoDark";

export default function AppointmentPageTwoDark({ slug, content }) {
  const appointment = content?.pages?.appointment ?? templateTwoDefaults.pages.appointment;

  return (
    <>
      <AppointmentHeroTwoDark content={appointment.hero} />
      <AppointmentSchedulesTwoDark
        content={appointment.schedules}
        telehealthImage={appointment.whatsapp?.telehealthImage}
      />
      <AppointmentWhatsappTwoDark content={appointment.whatsapp} />
      <AppointmentFaqTwoDark content={appointment.faq} />
      <AppointmentCtaTwoDark content={appointment.finalCta} slug={slug} />
    </>
  );
}
