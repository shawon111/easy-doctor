import { templateThreeDefaults } from "@/content/defaults/template-three";
import AppointmentChambersDarkThree from "./AppointmentChambersDarkThree";
import AppointmentFaqDarkThree from "./AppointmentFaqDarkThree";
import AppointmentHeroDarkThree from "./AppointmentHeroDarkThree";
import AppointmentScheduleDarkThree from "./AppointmentScheduleDarkThree";
import AppointmentStepsDarkThree from "./AppointmentStepsDarkThree";
import AppointmentWhatsappDarkThree from "./AppointmentWhatsappDarkThree";

export default function AppointmentPageDarkThree({ content }) {
  const appointment = content?.pages?.appointment ?? templateThreeDefaults.pages.appointment;

  return (
    <div className="pt-12 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <AppointmentHeroDarkThree content={appointment.hero} />
      <AppointmentStepsDarkThree content={appointment.steps} />
      <AppointmentScheduleDarkThree content={appointment.schedule} />
      <AppointmentWhatsappDarkThree content={appointment.whatsapp} />
      <AppointmentChambersDarkThree content={appointment.chambers} />
      <AppointmentFaqDarkThree content={appointment.faq} />
    </div>
  );
}
