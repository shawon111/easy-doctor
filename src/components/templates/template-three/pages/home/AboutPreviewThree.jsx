import Link from "next/link";

const IMAGE_CLASSES = ["aspect-[4/5]", "aspect-square", "aspect-square", "aspect-[4/5]"];

export default function AboutPreviewThree({ slug, content = {} , isDemo = false}) {
  const base = slug ? `/doctor/${slug}` : "#";
  const images = (content.images || []).map((img, index) => ({
    ...img,
    className: IMAGE_CLASSES[index] || "aspect-square",
  }));

  return (
    <section className="py-32 relative overflow-hidden bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            {images.slice(0, 2).map((img) => (
              <div
                key={img.src}
                className={`${img.className} rounded-3xl overflow-hidden border border-outline-variant/30 shadow-md`}
              >
                <img className="w-full h-full object-cover" alt={img.alt} src={img.src} />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {images.slice(2).map((img) => (
              <div
                key={img.src}
                className={`${img.className} rounded-3xl overflow-hidden border border-outline-variant/30 shadow-md`}
              >
                <img className="w-full h-full object-cover" alt={img.alt} src={img.src} />
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-8">
          <h2 className="font-display-lg text-headline-lg text-on-background">
            {content.heading} <span className="text-secondary">{content.headingHighlight}</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{content.body}</p>
          <ul className="space-y-4">
            {(content.checklist || []).map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl mt-1">check_circle</span>
                <span className="font-body-md text-on-surface">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href={`${base}/about`}
            className="font-headline-md text-primary flex items-center gap-2 hover:translate-x-2 transition-transform"
          >
            {content.linkLabel}
            <span className="material-symbols-outlined text-2xl">arrow_right_alt</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
