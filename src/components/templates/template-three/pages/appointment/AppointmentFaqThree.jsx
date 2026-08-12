import AccordionThree from "../../ui/AccordionThree";

const FAQS = [
  {
    question: "How long does a standard consultation take?",
    answer:
      "A typical in-person consultation lasts between 20 to 30 minutes, allowing for a comprehensive evaluation of your symptoms and history. Specialist diagnostic sessions may take longer.",
  },
  {
    question: "Do you accept international insurance providers?",
    answer:
      "Yes, Dr. MedLink partners with several global health insurance networks. Please contact our administrative desk with your policy details before your visit for verification.",
  },
  {
    question: "Can I reschedule an appointment via WhatsApp?",
    answer:
      "Absolutely. Simply message our concierge line with your current appointment details and your preferred new time slot at least 12 hours in advance.",
  },
];

export default function AppointmentFaqThree() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="font-headline-lg text-headline-lg mb-12 text-center">Frequently Asked Questions</h2>
      <AccordionThree items={FAQS} />
    </section>
  );
}
