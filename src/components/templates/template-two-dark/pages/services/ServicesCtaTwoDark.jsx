import Link from "next/link";

export default function ServicesCtaTwoDark({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="py-[120px] px-5 md:px-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 glass-panel p-12 md:p-20 rounded-2xl text-center border border-tertiary/20">
        <h2 className="font-display-lg text-display-lg mb-6">Experience Medical Precision</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          Your health is your greatest asset. Secure an appointment with a world-recognized leader in specialized
          clinical medicine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`${base}/appointment`}
            className="bg-primary text-on-primary font-label-caps text-label-caps px-10 py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
          >
            Book a Consultation <span className="material-symbols-outlined">calendar_today</span>
          </Link>
          <Link
            href={`${base}/appointment#whatsapp`}
            className="border border-tertiary text-tertiary font-label-caps text-label-caps px-10 py-4 rounded-lg hover:bg-tertiary/10 transition-all"
          >
            Contact Concierge
          </Link>
        </div>
      </div>
    </section>
  );
}
