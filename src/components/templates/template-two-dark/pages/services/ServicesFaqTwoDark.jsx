import AccordionTwoDark from "../../ui/AccordionTwoDark";

const FAQ_ITEMS = [
  {
    question: "How do I request a specialist referral?",
    answer:
      "While we accept direct inquiries, most patients are referred via their primary executive health physician. We also offer internal screening appointments to determine eligibility for complex procedures.",
  },
  {
    question: "What is the typical recovery period?",
    answer:
      "Because we utilize minimally invasive robotic techniques, recovery times are often 60% faster than traditional methods. Most executive patients return to light professional duties within 72 hours.",
  },
  {
    question: "Do you offer international patient services?",
    answer:
      "Yes. We have a dedicated concierge team that manages travel logistics, private transport, and local luxury accommodations for our international clientele and their families.",
  },
];

export default function ServicesFaqTwoDark() {
  return (
    <section className="py-[120px] bg-surface-container-lowest">
      <div className="px-5 md:px-16 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md mb-4">Informed Care</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Frequently asked questions regarding our specialized procedures and patient journey.
          </p>
        </div>
        <AccordionTwoDark items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
