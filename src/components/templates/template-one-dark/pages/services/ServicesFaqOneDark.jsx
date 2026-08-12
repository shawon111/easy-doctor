const FAQ_ITEMS = [
  {
    number: "01 //",
    question: "PRE-CONSULTATION PREP",
    answer:
      "Supply your medication history and previous genetic reports. Arrive 15 minutes prior for the digital bioprofile onboarding at our clinic hub.",
    defaultOpen: true,
  },
  {
    number: "02 //",
    question: "ON-SITE LAB CAPABILITY",
    answer:
      "Confirmed. Our facility features a Tier-1 diagnostic suite for real-time laboratory and high-res imaging synthesis.",
  },
  {
    number: "03 //",
    question: "GLOBAL INSURANCE NETWORK",
    answer:
      "We interface with premium international providers. Verify your coverage status with our administrative operations team before scheduling.",
  },
  {
    number: "04 //",
    question: "EVALUATION DURATION",
    answer: "Primary evaluations are scheduled for 60-minute blocks to ensure total biological auditing by Dr. Vance.",
  },
];

export default function ServicesFaqOneDark() {
  return (
    <section className="py-16 px-6 md:px-10 bg-surface-container-lowest">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-display-lg font-display-lg text-on-surface uppercase mb-4 italic">
            Protocol <span className="text-cobalt">FAQ</span>
          </h2>
          <p className="text-on-surface-variant font-label-md">TECHNICAL DOCUMENTATION &amp; OPERATIONAL GUIDELINES</p>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group bg-surface-container/30 border border-white/5 rounded-2xl overflow-hidden"
              defaultOpen={item.defaultOpen}
            >
              <summary className="flex justify-between items-center p-8 cursor-pointer list-none hover:bg-white/5 transition-colors">
                <span className="font-bold text-on-surface uppercase tracking-wider flex items-center gap-4">
                  <span className="text-cyber-mint font-label-md">{item.number}</span>
                  {item.question}
                </span>
                <span className="material-symbols-outlined group-open:rotate-45 transition-transform text-cyber-mint">
                  add
                </span>
              </summary>
              <div className="p-8 pt-0 text-on-surface-variant text-body-md leading-relaxed border-t border-white/5">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
