import { templateTwoDefaults } from "@/content/defaults/template-two";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import AppointmentCtaTwoDark from "./AppointmentCtaTwoDark";
import AppointmentFaqTwoDark from "./AppointmentFaqTwoDark";
import AppointmentHeroTwoDark from "./AppointmentHeroTwoDark";
import AppointmentSchedulesTwoDark from "./AppointmentSchedulesTwoDark";
import AppointmentWhatsappTwoDark from "./AppointmentWhatsappTwoDark";
import DoctorBookingPage from "@/components/appointment-booking/DoctorBookingPage";

export default function AppointmentPageTwoDark({ slug, content, isDemo = false }) {
  const appointment = resolveTemplateContent(content?.pages?.appointment, templateTwoDefaults.pages.appointment, isDemo);

  return (
    <>
      <AppointmentHeroTwoDark content={appointment.hero} isDemo={isDemo} />
      <AppointmentSchedulesTwoDark
        content={appointment.schedules}
        telehealthImage={appointment.whatsapp?.telehealthImage}
        telehealthImageAlt={appointment.whatsapp?.telehealthImageAlt}
        clinics={content?.clinics}
        isDemo={isDemo} />
      <DoctorBookingPage userId={content?.userId} />
      <AppointmentWhatsappTwoDark clinics={content?.clinics} content={appointment.whatsapp} isDemo={isDemo} />
      <AppointmentFaqTwoDark content={appointment.faq} isDemo={isDemo} />
      <AppointmentCtaTwoDark content={appointment.finalCta} slug={slug} isDemo={isDemo} />
    </>
  );
}
