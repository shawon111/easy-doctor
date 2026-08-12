import AppointmentChambersThree from "./AppointmentChambersThree";
import AppointmentFaqThree from "./AppointmentFaqThree";
import AppointmentHeroThree from "./AppointmentHeroThree";
import AppointmentScheduleThree from "./AppointmentScheduleThree";
import AppointmentStepsThree from "./AppointmentStepsThree";
import AppointmentWhatsappThree from "./AppointmentWhatsappThree";

export default function AppointmentPageThree() {
  return (
    <div className="pt-12 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <AppointmentHeroThree />
      <AppointmentStepsThree />
      <AppointmentScheduleThree />
      <AppointmentWhatsappThree />
      <AppointmentChambersThree />
      <AppointmentFaqThree />
    </div>
  );
}
