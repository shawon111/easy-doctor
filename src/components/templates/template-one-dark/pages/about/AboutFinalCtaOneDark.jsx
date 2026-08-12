import Link from "next/link";
import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

export default function AboutFinalCtaOneDark({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <SectionFadeOneDark className="py-32 px-6 md:px-10 text-center bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto glass-container p-16 rounded-[3rem] border-primary/20">
        <h2 className="font-headline-lg text-headline-lg mb-6 text-on-surface">Ready to Experience Better Care?</h2>
        <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
          Join the thousands of patients who have entrusted their health to Dr. Julian Vance&apos;s clinical expertise
          and human-centric approach.
        </p>
        <Link
          className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-label-md text-label-md hover:scale-105 transition-transform shadow-lg shadow-primary/25"
          href={`${base}/appointment`}
        >
          Schedule Your Consultation
        </Link>
      </div>
    </SectionFadeOneDark>
  );
}
