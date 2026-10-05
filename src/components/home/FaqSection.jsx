export default function FaqSection() {
  const faqs = [
    {
      q: "Do I need any technical or coding knowledge?",
      a: "None at all. Docxio was specifically built so physicians, consultants, and their clinic assistants can enter visiting schedules, degree titles, and chamber addresses without touching any code or dealing with technical hosting servers."
    },
    {
      q: "How long does it take for my website to go live?",
      a: "Most doctors publish their complete website in about 2 minutes. Once you pick a template and type in your name and chamber schedule, click Publish and your website is immediately live on your free docxio.site subdomain."
    },
    {
      q: "Is the docxio.site subdomain really 100% free?",
      a: "Yes! Every active account receives their chosen subdomain (such as dr-yourname.docxio.site) at zero extra cost. You do not need to purchase a domain name separately unless you want a custom .com address."
    },
    {
      q: "Can I connect my own custom .com domain later?",
      a: "Yes. You can start today on your free subdomain and connect your own domain (e.g. www.drtariqul.com) at any time through your dashboard with 1-click DNS propagation and free SSL."
    },
    {
      q: "How do patients book appointments or contact my chamber?",
      a: "Docxio provides direct WhatsApp serial booking buttons, phone call dialers for your assistant, and structured chamber hours for each hospital you visit. You can also accept intake inquiries directly into your portal."
    },
    {
      q: "Which payment methods are supported in Bangladesh?",
      a: "We support bKash, Nagad, Rocket, Upay, as well as local Bangladeshi Visa, Mastercard, and American Express credit/debit cards with instant activation."
    },
    {
      q: "Can I update my visiting hours or chamber fees later?",
      a: "Yes, log in to your dashboard anytime from your mobile phone or computer. Updates to your visiting hours, vacation off-days, and consultation fees take effect live on your website within 5 seconds."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white border-b border-slate-border" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-secondary bg-secondary-soft px-3 py-1 rounded-full border border-secondary/20">Clear Answers</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-heading tracking-tight mt-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-muted mt-2">
            Everything you need to know about setting up your medical practice website.
          </p>
        </div>
        {/* Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-surface-subtle rounded-xl border border-slate-border p-5 open:bg-white open:shadow-subtle transition-all"
            >
              <summary className="flex items-center justify-between text-base font-bold text-slate-900 cursor-pointer list-none">
                <span>{faq.q}</span>
                <span className="material-symbols-outlined text-slate-400 group-open:text-secondary group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
