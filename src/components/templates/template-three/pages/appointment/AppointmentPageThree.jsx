import { templateThreeDefaults } from "@/content/defaults/template-three";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import AppointmentChambersThree from "./AppointmentChambersThree";
import AppointmentFaqThree from "./AppointmentFaqThree";
import AppointmentHeroThree from "./AppointmentHeroThree";
import AppointmentScheduleThree from "./AppointmentScheduleThree";
import AppointmentStepsThree from "./AppointmentStepsThree";
import AppointmentWhatsappThree from "./AppointmentWhatsappThree";

export default function AppointmentPageThree({ content, isDemo = false }) {
  const appointment = resolveTemplateContent(content?.pages?.appointment, templateThreeDefaults.pages.appointment, isDemo);

  return (
    <div className="pt-12 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <AppointmentHeroThree content={appointment.hero}  isDemo={isDemo}/>
      <AppointmentStepsThree content={appointment.steps}  isDemo={isDemo}/>
      <AppointmentScheduleThree content={appointment.schedule}  isDemo={isDemo}/>
      <AppointmentWhatsappThree content={appointment.whatsapp}  isDemo={isDemo}/>
      <AppointmentChambersThree content={appointment.chambers}  isDemo={isDemo}/>
      <AppointmentFaqThree content={appointment.faq}  isDemo={isDemo}/>
    </div>
  );
}
