import { templateThreeDefaults } from "@/content/defaults/template-three";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import AppointmentChambersDarkThree from "./AppointmentChambersDarkThree";
import AppointmentFaqDarkThree from "./AppointmentFaqDarkThree";
import AppointmentHeroDarkThree from "./AppointmentHeroDarkThree";
import AppointmentScheduleDarkThree from "./AppointmentScheduleDarkThree";
import AppointmentStepsDarkThree from "./AppointmentStepsDarkThree";
import AppointmentWhatsappDarkThree from "./AppointmentWhatsappDarkThree";

export default function AppointmentPageDarkThree({ content, isDemo = false }) {
  const appointment = resolveTemplateContent(content?.pages?.appointment, templateThreeDefaults.pages.appointment, isDemo);

  return (
    <div className="pt-12 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <AppointmentHeroDarkThree content={appointment.hero}  isDemo={isDemo}/>
      <AppointmentStepsDarkThree content={appointment.steps}  isDemo={isDemo}/>
      <AppointmentScheduleDarkThree content={appointment.schedule}  isDemo={isDemo}/>
      <AppointmentWhatsappDarkThree content={appointment.whatsapp}  isDemo={isDemo}/>
      <AppointmentChambersDarkThree content={appointment.chambers}  isDemo={isDemo}/>
      <AppointmentFaqDarkThree content={appointment.faq}  isDemo={isDemo}/>
    </div>
  );
}
