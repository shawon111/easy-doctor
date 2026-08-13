import Link from "next/link";

export default function ServicesCtaBannerOne({ content = {}, slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="px-margin-mobile md:px-margin-desktop pb-section-padding">
      <div className="max-w-[1200px] mx-auto bg-primary rounded-2xl p-12 text-center text-on-primary relative overflow-hidden shadow-[0px_10px_30px_rgba(30,41,59,0.04)]">
        <div className="relative z-10 space-y-stack-md">
          {content.heading ? (
            <h2 className="text-headline-lg font-headline-lg">{content.heading}</h2>
          ) : null}
          {content.body ? (
            <p className="text-on-primary/80 max-w-xl mx-auto text-body-lg">{content.body}</p>
          ) : null}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href={`${base}/appointment`}
              className="bg-surface text-primary px-8 py-4 rounded-lg font-button hover:bg-surface-variant transition-colors text-center"
            >
              {content.primaryCta}
            </Link>
            <Link
              href={`${base}/appointment`}
              className="border border-on-primary/30 text-on-primary px-8 py-4 rounded-lg font-button hover:bg-on-primary/10 transition-colors text-center"
            >
              {content.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
      </div>
    </section>
  );
}
