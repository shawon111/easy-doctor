import { templateOneDefaults } from "@/content/defaults/template-one";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import AppointmentFaqOneDark from "./AppointmentFaqOneDark";
import AppointmentHeroOneDark from "./AppointmentHeroOneDark";
import AppointmentProcessOneDark from "./AppointmentProcessOneDark";
import AppointmentSchedulesOneDark from "./AppointmentSchedulesOneDark";
import AppointmentWhatsappOneDark from "./AppointmentWhatsappOneDark";

export default function AppointmentPageOneDark({ content, isDemo = false }) {
  const appointment = resolveTemplateContent(content?.pages?.appointment, templateOneDefaults.pages.appointment, isDemo);

  return (
    <>
      <AppointmentHeroOneDark content={appointment.hero}  isDemo={isDemo}/>
      <AppointmentProcessOneDark content={appointment.howItWorks}  isDemo={isDemo}/>
      <AppointmentSchedulesOneDark content={appointment.schedule}  isDemo={isDemo}/>
      <AppointmentWhatsappOneDark content={appointment.whatsappCta}  isDemo={isDemo}/>
      <AppointmentFaqOneDark content={appointment.faq}  isDemo={isDemo}/>
    </>
  );
}
