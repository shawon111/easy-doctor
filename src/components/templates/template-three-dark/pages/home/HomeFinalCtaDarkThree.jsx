import Link from "next/link";

export default function HomeFinalCtaDarkThree({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="mb-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto bg-primary-container rounded-[48px] p-16 text-center text-on-primary-container relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-display-lg text-display-lg mb-6">Ready for a New Standard of Care?</h2>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto mb-10 text-on-primary-container/80">
            Join over 10,000 patients who have trusted Dr. MedLink for their journey toward optimal health and
            longevity.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href={`${base}/appointment`}
              className="bg-on-primary-container text-primary-container px-12 py-5 rounded-2xl font-headline-md text-[20px] hover:scale-105 transition-transform"
            >
              Book Your Consultation
            </Link>
            <Link
              href={`${base}/services`}
              className="bg-primary-container/20 border border-on-primary-container/30 text-on-primary-container px-12 py-5 rounded-2xl font-headline-md text-[20px] hover:bg-primary-container/30 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
