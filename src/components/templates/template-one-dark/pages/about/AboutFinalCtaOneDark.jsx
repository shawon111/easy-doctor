import Link from "next/link";
import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

export default function AboutFinalCtaOneDark({ content = {}, slug, isDemo = false }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <SectionFadeOneDark className="py-32 px-6 md:px-10 text-center bg-surface-container-lowest" isDemo={isDemo}>
      <div className="max-w-4xl mx-auto glass-container p-16 rounded-[3rem] border-primary/20">
        {content.heading ? (
          <h2 className="font-headline-lg text-headline-lg mb-6 text-on-surface">{content.heading}</h2>
        ) : null}
        {content.body ? (
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">{content.body}</p>
        ) : null}
        {content.primaryCta ? (
          <Link
            className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-label-md text-label-md hover:scale-105 transition-transform shadow-lg shadow-primary/25"
            href={`${base}/appointment`}
          >
            {content.primaryCta}
          </Link>
        ) : null}
      </div>
    </SectionFadeOneDark>
  );
}
