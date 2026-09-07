import Image from "next/image";
import Link from "next/link";
import RevealOneDark from "../../ui/RevealOneDark";

export default function AboutPreviewOneDark({ content = {}, slug, isDemo = false }) {
  const aboutHref = slug ? `/doctor/${slug}/about` : "#";
  const paragraphs = content.body ? content.body.split("\n\n") : [];

  return (
    <section className="py-[120px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <RevealOneDark className="order-2 md:order-1" isDemo={isDemo}>
          <div className="grid grid-cols-2 gap-6">
            <div className="pt-16">
              <div className="glass-card p-1 rounded-2xl">
                <Image width={1200} height={800}
                  className="rounded-xl w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  alt={content.imageAlt  || "Medical practice image"}
                  src={content.imageUrl}
                />
              </div>
            </div>
            <div>
              <div className="glass-card p-1 rounded-2xl">
                <Image width={1200} height={800}
                  className="rounded-xl w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  alt={content.imageAltSecondary  || "Medical practice image"}
                  src={content.imageUrlSecondary}
                />
              </div>
            </div>
          </div>
        </RevealOneDark>

        <RevealOneDark className="order-1 md:order-2 delay-200" isDemo={isDemo}>
          {content.heading ? (
            <h2 className="font-headline-lg text-5xl text-secondary mb-8 leading-tight tracking-tight">
              {content.heading}
            </h2>
          ) : null}
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="font-body-lg text-lg text-on-surface-variant mb-6 leading-relaxed last:mb-10"
            >
              {paragraph}
            </p>
          ))}
          {content.linkLabel ? (
            <Link
              className="inline-flex items-center text-primary-container font-bold tracking-widest uppercase text-sm group"
              href={aboutHref}
            >
              {content.linkLabel}
              <span className="material-symbols-outlined ml-3 transition-transform group-hover:translate-x-3">
                arrow_forward
              </span>
            </Link>
          ) : null}
        </RevealOneDark>
      </div>
    </section>
  );
}
