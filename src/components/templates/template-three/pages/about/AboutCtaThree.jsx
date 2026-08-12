import Link from "next/link";

export default function AboutCtaThree({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto t3-about-cta rounded-3xl p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay noise-overlay pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-display-lg text-display-lg text-white mb-8">
            Ready to experience the future of care?
          </h2>
          <p className="text-white/90 text-body-lg max-w-2xl mx-auto mb-12">
            Dr. MedLink is currently accepting a limited number of new private patients for the upcoming quarter.
            Secure your diagnostic consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`${base}/appointment`}
              className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-xl"
            >
              Schedule Consultation
            </Link>
            <a
              href="#"
              className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
