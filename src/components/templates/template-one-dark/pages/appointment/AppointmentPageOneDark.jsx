import { templateOneDefaults } from "@/content/defaults/template-one";
import AppointmentFaqOneDark from "./AppointmentFaqOneDark";
import AppointmentHeroOneDark from "./AppointmentHeroOneDark";
import AppointmentProcessOneDark from "./AppointmentProcessOneDark";
import AppointmentSchedulesOneDark from "./AppointmentSchedulesOneDark";
import AppointmentWhatsappOneDark from "./AppointmentWhatsappOneDark";

export default function AppointmentPageOneDark({ content }) {
  const appointment = content?.pages?.appointment ?? templateOneDefaults.pages.appointment;

  return (
    <>
      <AppointmentHeroOneDark content={appointment.hero} />
      <AppointmentProcessOneDark content={appointment.howItWorks} />
      <AppointmentSchedulesOneDark content={appointment.schedule} />
      <AppointmentWhatsappOneDark content={appointment.whatsappCta} />
      <AppointmentFaqOneDark content={appointment.faq} />
    </>
  );
}
