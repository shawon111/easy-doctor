import Link from "next/link";

export default function AboutCtaDarkThree({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto bg-gradient-to-br from-primary-container to-secondary-container rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <h2 className="font-display-lg text-display-lg text-on-primary-container mb-8">
            Ready to experience the future of care?
          </h2>
          <p className="text-on-primary-container/80 text-body-lg max-w-2xl mx-auto mb-12">
            Dr. MedLink is currently accepting a limited number of new private patients for the upcoming quarter.
            Secure your diagnostic consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`${base}/appointment`}
              className="bg-on-primary-container text-primary-container px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all"
            >
              Schedule Consultation
            </Link>
            <a
              href="#"
              className="border-2 border-on-primary-container/30 text-on-primary-container px-10 py-4 rounded-full font-bold text-lg hover:bg-on-primary-container/10 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
