import Link from "next/link";

export default function AboutCtaDarkThree({ slug, content = {} , isDemo = false}) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto t3-about-cta rounded-3xl p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay noise-overlay pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-display-lg text-display-lg text-white mb-8">{content.heading}</h2>
          <p className="text-white/90 text-body-lg max-w-2xl mx-auto mb-12">{content.body}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`${base}/appointment`}
              className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-xl"
            >
              {content.primaryCta}
            </Link>
            <a
              href="#"
              className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              {content.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
