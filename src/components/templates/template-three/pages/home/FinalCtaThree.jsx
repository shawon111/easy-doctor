import Link from "next/link";

export default function FinalCtaThree({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="mb-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto bg-primary rounded-[48px] p-16 text-center text-on-primary relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-display-lg text-display-lg mb-6">Ready for a New Standard of Care?</h2>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto mb-10 text-on-primary/90">
            Join over 10,000 patients who have trusted Dr. MedLink for their journey toward optimal health and
            longevity.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href={`${base}/appointment`}
              className="bg-white text-primary px-12 py-5 rounded-2xl font-headline-md text-[20px] hover:scale-105 transition-transform shadow-lg"
            >
              Book Your Consultation
            </Link>
            <Link
              href={`${base}/services`}
              className="bg-primary/20 border border-white/30 text-white px-12 py-5 rounded-2xl font-headline-md text-[20px] hover:bg-white/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
