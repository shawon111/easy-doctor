import { templateTwoDefaults } from "@/content/defaults/template-two";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import AppointmentCtaTwoDark from "./AppointmentCtaTwoDark";
import AppointmentFaqTwoDark from "./AppointmentFaqTwoDark";
import AppointmentHeroTwoDark from "./AppointmentHeroTwoDark";
import AppointmentSchedulesTwoDark from "./AppointmentSchedulesTwoDark";
import AppointmentWhatsappTwoDark from "./AppointmentWhatsappTwoDark";

export default function AppointmentPageTwoDark({ slug, content, isDemo = false }) {
  const appointment = resolveTemplateContent(content?.pages?.appointment, templateTwoDefaults.pages.appointment, isDemo);

  return (
    <>
      <AppointmentHeroTwoDark content={appointment.hero}  isDemo={isDemo}/>
      <AppointmentSchedulesTwoDark
        content={appointment.schedules}
        telehealthImage={appointment.whatsapp?.telehealthImage}
       isDemo={isDemo}/>
      <AppointmentWhatsappTwoDark content={appointment.whatsapp}  isDemo={isDemo}/>
      <AppointmentFaqTwoDark content={appointment.faq}  isDemo={isDemo}/>
      <AppointmentCtaTwoDark content={appointment.finalCta} slug={slug}  isDemo={isDemo}/>
    </>
  );
}
