import Link from "next/link";
import SectionFadeTwoDark from "../../ui/SectionFadeTwoDark";

export default function AboutCtaTwoDark({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <SectionFadeTwoDark className="py-[120px] px-5 md:px-16 text-center relative overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8">
          Begin Your Path to Optimized Health
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
          Private consultations are currently available for new executive patients. Schedule your initial clinical
          assessment today.
        </p>
        <Link
          href={`${base}/appointment`}
          className="inline-block bg-primary text-on-primary px-10 py-5 rounded-sm font-label-caps text-label-caps tracking-widest hover:bg-tertiary hover:text-on-tertiary transition-all duration-300 shadow-xl"
        >
          REQUEST APPOINTMENT
        </Link>
      </div>
    </SectionFadeTwoDark>
  );
}
