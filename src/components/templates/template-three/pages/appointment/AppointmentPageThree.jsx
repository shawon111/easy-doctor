import { templateThreeDefaults } from "@/content/defaults/template-three";
import AppointmentChambersThree from "./AppointmentChambersThree";
import AppointmentFaqThree from "./AppointmentFaqThree";
import AppointmentHeroThree from "./AppointmentHeroThree";
import AppointmentScheduleThree from "./AppointmentScheduleThree";
import AppointmentStepsThree from "./AppointmentStepsThree";
import AppointmentWhatsappThree from "./AppointmentWhatsappThree";

export default function AppointmentPageThree({ content }) {
  const appointment = content?.pages?.appointment ?? templateThreeDefaults.pages.appointment;

  return (
    <div className="pt-12 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <AppointmentHeroThree content={appointment.hero} />
      <AppointmentStepsThree content={appointment.steps} />
      <AppointmentScheduleThree content={appointment.schedule} />
      <AppointmentWhatsappThree content={appointment.whatsapp} />
      <AppointmentChambersThree content={appointment.chambers} />
      <AppointmentFaqThree content={appointment.faq} />
    </div>
  );
}
