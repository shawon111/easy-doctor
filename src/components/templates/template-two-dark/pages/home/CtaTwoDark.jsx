import Link from "next/link";

export default function CtaTwoDark({ slug, content = {} }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="mb-[120px] px-5 md:px-16">
      <div className="max-w-[1200px] mx-auto glass-card bg-primary-container p-12 md:p-24 rounded-xl text-center relative overflow-hidden group">
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="font-display-lg text-display-lg text-on-surface">{content.heading}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{content.body}</p>
          <Link
            href={`${base}/appointment`}
            className="inline-flex items-center gap-4 px-12 py-5 bg-tertiary text-on-tertiary font-label-caps text-label-caps rounded-lg luxury-button-hover shadow-xl shadow-tertiary/10 transition-all mx-auto"
          >
            {content.primaryCta}
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
