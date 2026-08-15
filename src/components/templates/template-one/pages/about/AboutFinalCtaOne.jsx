import Link from "next/link";
import Reveal from "@/components/templates/ui/Reveal";

export default function AboutFinalCtaOne({ content = {}, slug , isDemo = false}) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <Reveal
      as="section"
      className="py-section-padding px-margin-mobile md:px-margin-desktop text-center"
    >
      <div className="max-w-3xl mx-auto bg-primary p-stack-lg rounded-3xl shadow-[0px_10px_30px_rgba(30,41,59,0.04)] text-on-primary">
        {content.heading ? (
          <h2 className="font-headline-lg text-headline-lg mb-stack-sm">
            {content.heading}
          </h2>
        ) : null}
        {content.body ? (
          <p className="text-body-lg opacity-90 mb-stack-md">{content.body}</p>
        ) : null}
        {content.primaryCta ? (
          <Link
            className="inline-block bg-on-primary text-primary px-8 py-3 rounded-lg font-button text-button hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors"
            href={`${base}/appointment`}
          >
            {content.primaryCta}
          </Link>
        ) : null}
      </div>
    </Reveal>
  );
}
