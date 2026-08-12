import AccordionDarkThree from "../../ui/AccordionDarkThree";

const FAQS = [
  {
    question: "How do I access my diagnostic results?",
    answer:
      "All diagnostic results, lab reports, and imaging are uploaded instantly to your secure Patient Portal. You can access these anytime via our mobile app or web interface.",
  },
  {
    question: "Do you accept international health insurance?",
    answer:
      "Yes, we partner with major global insurance providers. Our administration team handles all direct billing processes for your convenience.",
  },
  {
    question: "What is the Dr. MedLink longevity protocol?",
    answer:
      "Our longevity protocol is a science-backed program that combines genetic testing, metabolic assessment, and personalized supplementation to slow biological aging.",
  },
];

export default function ServicesFaqDarkThree() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <AccordionDarkThree items={FAQS} variant="services" />
      </div>
    </section>
  );
}
