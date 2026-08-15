import Link from "next/link";
import Reveal from "@/components/templates/ui/Reveal";

export default function FinalCTAOne({ content = {}, slug , isDemo = false}) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="px-margin-desktop max-w-container-max mx-auto mb-section-padding">
      <Reveal className="bg-primary-container rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="relative z-10">
          {content.heading ? (
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary-container mb-stack-md">
              {content.heading}
            </h2>
          ) : null}
          {content.body ? (
            <p className="text-body-lg text-on-primary-container/80 mb-stack-lg max-w-2xl mx-auto">
              {content.body}
            </p>
          ) : null}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`${base}/appointment`}
              className="bg-white text-primary px-10 py-5 rounded-2xl font-button text-button hover:scale-105 transition-transform shadow-xl text-center"
            >
              {content.primaryCta}
            </Link>
            <Link
              href={`${base}/appointment`}
              className="bg-primary/20 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-button text-button hover:bg-primary/30 transition-all text-center"
            >
              {content.secondaryCta}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
