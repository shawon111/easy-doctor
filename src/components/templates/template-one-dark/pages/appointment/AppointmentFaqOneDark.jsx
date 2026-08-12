import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

const FAQ_ITEMS = [
  {
    question: "01_Documentation Requirement?",
    answer:
      "Provide valid ID, primary insurance credentials, and relevant diagnostic imaging. Digital transmission of these assets via the secure chat channel is preferred for pre-authorization.",
  },
  {
    question: "02_Insurance Compatibility?",
    answer:
      "Our billing matrix integrates with major tier-1 providers. Submit a high-resolution scan of your card via the WhatsApp interface for immediate verification.",
  },
  {
    question: "03_Cancellation Protocol?",
    answer:
      "24-hour notice is mandated for slot redistribution. Failure to provide notice may result in account flags. Management can be handled entirely via the chat terminal.",
  },
];

export default function AppointmentFaqOneDark() {
  return (
    <SectionFadeOneDark id="faq" className="py-[120px] px-5 md:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-background uppercase italic">
            Common <span className="text-cobalt">Queries</span>
          </h2>
          <p className="font-label-md text-on-surface-variant mt-2 tracking-widest">DATA_RETRIEVAL SYSTEM</p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group bg-surface-container-low rounded-lg overflow-hidden border border-outline-variant/20 hover:border-cobalt/40 transition-colors"
            >
              <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
                <span className="font-bold text-lg uppercase tracking-tight text-on-surface">{item.question}</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-cobalt">
                  expand_more
                </span>
              </summary>
              <div className="p-8 pt-0 text-on-surface-variant font-body-md border-l-2 border-cobalt mx-8 mb-8">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </SectionFadeOneDark>
  );
}
