import Link from "next/link";

export default function ServicesCtaDarkThree({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-container/10 z-0" />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="glass-card rounded-2xl p-12 text-center border-primary/20">
          <h2 className="font-display-lg text-headline-lg text-on-surface mb-6">
            Ready to prioritize your performance?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Join the elite clinical ecosystem of Dr. MedLink today. Schedule your initial comprehensive assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`${base}/appointment`}
              className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-body-lg hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Book Your First Visit
            </Link>
            <a
              href="#"
              className="border border-outline text-on-surface px-10 py-4 rounded-full font-bold text-body-lg hover:bg-white/5 transition-all"
            >
              Contact Concierge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
