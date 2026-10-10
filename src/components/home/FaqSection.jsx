export default function FaqSection() {
  const faqs = [
    {
      q: "Do I need any technical or coding knowledge?",
      a: "None at all. Docxio was specifically built so physicians, consultants, and their clinic assistants can enter visiting schedules, degree titles, and chamber addresses without touching any code or dealing with technical hosting servers."
    },
    {
      q: "How long does it take for my website to go live?",
      a: "Many doctors can complete the initial setup in about 2 minutes. The time to review your details and finish publishing can vary depending on your profile and website content; check the dashboard for the current status."
    },
    {
      q: "Is a Docxio subdomain included?",
      a: "You can publish on a Docxio subdomain, such as dr-yourname.docxio.com, without separately registering that subdomain. Website access is subject to the trial or active plan. A custom domain must be registered separately."
    },
    {
      q: "Can I connect my own custom .com domain later?",
      a: "Yes. Add a custom domain through the dashboard and follow the DNS records shown there. You need to register and maintain the domain with a domain registrar; DNS changes can take time to propagate."
    },
    {
      q: "How do patients book appointments or contact my chamber?",
      a: "Depending on the booking preference you configure, your website can show WhatsApp contact, an appointment request form, or both. Keep the displayed clinic hours and contact details accurate."
    },
    {
      q: "Which payment methods are supported in Bangladesh?",
      a: "Available payment methods are provided by the payment checkout. Review the methods and total displayed there before confirming a payment."
    },
    {
      q: "Can I update my visiting hours and chamber details later?",
      a: "You can update your practice information from the dashboard. After saving changes, review the public website to confirm the updated details are displayed correctly."
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
