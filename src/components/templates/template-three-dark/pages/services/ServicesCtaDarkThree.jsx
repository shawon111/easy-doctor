import Link from "next/link";

export default function ServicesCtaDarkThree({ slug, content = {} }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 z-0" />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="glass-card rounded-xl p-12 text-center border border-primary/10 shadow-xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">{content.heading}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">{content.body}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`${base}/appointment`}
              className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-body-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              {content.primaryCta}
            </Link>
            <a
              href="#"
              className="border border-outline text-on-surface px-10 py-4 rounded-lg font-bold text-body-lg hover:bg-surface-container-high transition-all"
            >
              {content.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
