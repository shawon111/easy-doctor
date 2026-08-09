const FAQS = [
  {
    question: "How do I prepare for my first consultation?",
    answer:
      "Please bring a list of current medications and any recent medical records. We recommend arriving 15 minutes early to complete our digital onboarding process on the patient portal.",
    openByDefault: true,
  },
  {
    question: "Are diagnostic tests performed on-site?",
    answer:
      "Yes, our clinic features a state-of-the-art laboratory and imaging suite, allowing us to perform most diagnostics in-house for your convenience and speed.",
    openByDefault: false,
  },
  {
    question: "Do you accept international insurance?",
    answer:
      "We work with a broad network of premium international providers. Please contact our administrative team prior to your visit to verify your specific coverage.",
    openByDefault: false,
  },
  {
    question: "How long does a typical evaluation take?",
    answer:
      "Initial consultations typically last 45-60 minutes to ensure Dr. Vance has sufficient time to understand your history and concerns thoroughly.",
    openByDefault: false,
  },
];


export default function ServicesFaqOne() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">Patient FAQ</h2>
          <p className="text-on-surface-variant">
            Common inquiries regarding our procedures and patient care.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden"
              open={faq.openByDefault || undefined}
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-bold text-on-surface">{faq.question}</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant border-t border-outline-variant/10">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
