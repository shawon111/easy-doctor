// No "use client" needed here — the original used native <details>/
// <summary> for the accordion (not custom JS), and Tailwind's
// `group-open:` variant handles the icon rotation via the :open
// pseudo-class alone. This whole component stays a Server Component.

const FAQS = [
  {
    question: "Do you accept international medical insurance?",
    answer:
      "Yes, we work with major international insurance providers including Bupa Global, Allianz Care, and Cigna International. Our billing department handles direct settlement for most platinum-tier plans.",
  },
  {
    question: "What should I prepare for my first consultation?",
    answer:
      "Please bring copies of your recent lab results, imaging (MRI/CT scans) on a disc or digital link, and a list of all current medications. For new patients, a 15-minute early arrival is recommended for registration.",
  },
  {
    question: "Are emergency appointments available?",
    answer:
      'We reserve a limited number of "Emergency Slots" daily for acute cases. Please contact our WhatsApp hotline or office directly by 8:00 AM to secure an emergency evaluation.',
  },
];

export default function AppointmentFaqTwo() {
  return (
    <section className="py-[120px] px-[20px] md:px-[64px] bg-[#f2f4f6]/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="apttwo-headline-md text-[#0f172a]">Frequently Asked Questions</h2>
          <p className="text-[#475569]">Essential information for your upcoming visit.</p>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white rounded-[12px] border border-[#cbd5e1]/50 overflow-hidden shadow-sm"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-[#f2f4f6] transition-colors">
                <span className="apttwo-headline-sm text-[#0f172a] text-lg">
                  {faq.question}
                </span>
                <span className="apttwo-material-symbols transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-[#475569] leading-relaxed">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
