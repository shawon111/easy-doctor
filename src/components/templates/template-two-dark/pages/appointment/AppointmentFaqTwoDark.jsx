const FAQ_ITEMS = [
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

export default function AppointmentFaqTwoDark() {
  return (
    <section className="py-[120px] px-5 md:px-16 bg-surface-container-lowest/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant">Essential information for your upcoming visit.</p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group glass-card rounded-xl border-white/5 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-headline-sm text-headline-sm text-on-surface text-lg">{item.question}</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
