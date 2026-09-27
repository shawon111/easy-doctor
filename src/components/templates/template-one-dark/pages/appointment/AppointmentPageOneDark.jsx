import { templateOneDefaults } from "@/content/defaults/template-one";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import AppointmentFaqOneDark from "./AppointmentFaqOneDark";
import AppointmentHeroOneDark from "./AppointmentHeroOneDark";
import AppointmentProcessOneDark from "./AppointmentProcessOneDark";
import AppointmentSchedulesOneDark from "./AppointmentSchedulesOneDark";
import AppointmentWhatsappOneDark from "./AppointmentWhatsappOneDark";
import DoctorBookingPage from "@/components/appointment-booking/DoctorBookingPage";

export default function AppointmentPageOneDark({ content, isDemo = false }) {
  const appointment = resolveTemplateContent(content?.pages?.appointment, templateOneDefaults.pages.appointment, isDemo);

  const { bookingPreference } = content;
  return (
    <>
      <AppointmentHeroOneDark content={appointment.hero} isDemo={isDemo} />
      <AppointmentProcessOneDark content={appointment.howItWorks} isDemo={isDemo} />
      <AppointmentSchedulesOneDark content={appointment.schedule} clinics={content?.clinics ?? []} isDemo={isDemo} />
      {
        (bookingPreference === "bookingForm" || bookingPreference === "both") && <DoctorBookingPage userId={content?.userId} />
      }

      {
        (bookingPreference === "whatsapp" || bookingPreference === "both") && <AppointmentWhatsappOneDark content={appointment.whatsappCta} clinics={content?.clinics ?? []} isDemo={isDemo} />
      }

      <AppointmentFaqOneDark content={appointment.faq} isDemo={isDemo} />
    </>
  );
}
