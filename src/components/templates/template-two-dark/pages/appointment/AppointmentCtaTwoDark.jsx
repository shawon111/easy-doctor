import Link from "next/link";

export default function AppointmentCtaTwoDark({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="py-[120px] px-5 md:px-16 text-center bg-background relative overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-display-lg-mobile md:font-headline-md text-on-surface mb-8">Ready to Take the Next Step?</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 italic">
          Experience the gold standard of specialist care, tailored to your unique biological profile and lifestyle
          requirements.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link
            href={base ? `${base}/appointment` : "#"}
            className="bg-primary text-on-primary px-12 py-5 rounded font-label-caps text-label-caps luxury-button-shadow w-full md:w-auto"
          >
            Book Your Appointment
          </Link>
          <span className="text-on-surface-variant font-label-caps">OR</span>
          <button
            type="button"
            className="border border-outline text-on-surface px-12 py-5 rounded font-label-caps text-label-caps hover:bg-white/5 transition-all w-full md:w-auto"
          >
            Call Concierge
          </button>
        </div>
      </div>
    </section>
  );
}
