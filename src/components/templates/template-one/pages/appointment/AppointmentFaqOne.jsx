import Reveal from "@/components/templates/ui/Reveal";


const FAQS = [
  {
    question: "What documents should I bring?",
    answer:
      "Please bring a valid ID, your current insurance card, and any recent medical records or imaging (X-rays, MRIs) related to your visit. A list of current medications is also highly recommended.",
  },
  {
    question: "Do you accept my insurance?",
    answer:
      "We work with most major insurance providers. Please message us on WhatsApp with a photo of your insurance card so our billing team can verify your coverage before your appointment.",
  },
  {
    question: "Can I cancel or reschedule?",
    answer:
      "Yes, we request at least 24 hours notice for cancellations or rescheduling. This allows us to offer the time slot to another patient in need. You can manage this easily via WhatsApp.",
  },
  {
    question: "Is tele-health available?",
    answer:
      'For follow-up consultations and prescription refills, we offer secure video conferencing. Mention "Tele-health" when booking via WhatsApp for more details.',
  },
];

// Native <details>/<summary>, same as the Services page FAQ - no JS/state
// needed. None of the items are open by default in the original markup
// (unlike the Services page's first item).
export default function AppointmentFaqOne() {
  return (
    <Reveal as="section" className="py-section-padding px-margin-mobile md:px-margin-desktop">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-stack-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-background">
            Frequently Asked Questions
          </h2>
          <p className="text-body-md text-on-surface-variant mt-2">
            Everything you need to know before your visit.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/50"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-surface-container transition-colors list-none">
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
