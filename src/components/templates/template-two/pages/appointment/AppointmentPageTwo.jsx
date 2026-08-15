import { templateTwoDefaults } from "@/content/defaults/template-two";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import AppointmentHeroTwo from "./AppointmentHeroTwo";
import AppointmentSchedulesTwo from "./AppointmentSchedulesTwo";
import AppointmentWhatsappTwo from "./AppointmentWhatsappTwo";
import AppointmentFaqTwo from "./AppointmentFaqTwo";
import AppointmentCtaTwo from "./AppointmentCtaTwo";

const AppointmentPageTwo = ({ slug, content, isDemo = false }) => {
  const appointment = resolveTemplateContent(content?.pages?.appointment, templateTwoDefaults.pages.appointment, isDemo);

  return (
    <div className="max-w-container-max mx-auto overflow-hidden">
      <AppointmentHeroTwo content={appointment.hero}  isDemo={isDemo}/>
      <AppointmentSchedulesTwo
        content={appointment.schedules}
        telehealthImage={appointment.whatsapp?.telehealthImage}
       isDemo={isDemo}/>
      <AppointmentWhatsappTwo content={appointment.whatsapp}  isDemo={isDemo}/>
      <AppointmentFaqTwo content={appointment.faq}  isDemo={isDemo}/>
      <AppointmentCtaTwo content={appointment.finalCta} slug={slug}  isDemo={isDemo}/>
    </div>
  );
};

export default AppointmentPageTwo;
