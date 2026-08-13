import { templateTwoDefaults } from "@/content/defaults/template-two";
import AppointmentHeroTwo from "./AppointmentHeroTwo";
import AppointmentSchedulesTwo from "./AppointmentSchedulesTwo";
import AppointmentWhatsappTwo from "./AppointmentWhatsappTwo";
import AppointmentFaqTwo from "./AppointmentFaqTwo";
import AppointmentCtaTwo from "./AppointmentCtaTwo";

const AppointmentPageTwo = ({ slug, content }) => {
  const appointment = content?.pages?.appointment ?? templateTwoDefaults.pages.appointment;

  return (
    <div className="max-w-container-max mx-auto overflow-hidden">
      <AppointmentHeroTwo content={appointment.hero} />
      <AppointmentSchedulesTwo
        content={appointment.schedules}
        telehealthImage={appointment.whatsapp?.telehealthImage}
      />
      <AppointmentWhatsappTwo content={appointment.whatsapp} />
      <AppointmentFaqTwo content={appointment.faq} />
      <AppointmentCtaTwo content={appointment.finalCta} slug={slug} />
    </div>
  );
};

export default AppointmentPageTwo;
