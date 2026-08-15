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
                <img
                  className="rounded-xl w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  alt={content.imageAlt || ""}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZm0_m40P1JS40jbijH63oQwT32n-U54apRIEaWxx_jC9GOzrKujhNnSCth51iO6OgwWp9mZuS9YD3jGEjWACTak_qiBOmHrr_-EbZ4jG7vEq0ERzWX7IdOZPjfO_DAaORn2tqzSp2Zkzod5UfW0UdwcagTnbq6YmGKUUHYRznHaRH99MIrXzmsY02dYox9vBoKTfvzcSXHKAKNa3khYxme5Nd_lVtLneBQ97A-1EQAovsKUHRRzH4DA"
                />
              </div>
            </div>
            <div>
              <div className="glass-card p-1 rounded-2xl">
                <img
                  className="rounded-xl w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  alt=""
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwbF8DBfY5iKBcJuS2gsog0qVe9-UID90sKW0LcvVD5Q8SsOdWbN4cYzg4v43dE272c0CQZwU40ZhO-TUesjG2pUg-VJfeEvAmSvRebrILkvwDnvZqShGA6MGt7oDiLSvTgbgheX089HOw-eZftVUVJiXH7dMyYVLrp0FsdkMWlnQVksKUWMgazzAdFKAWsNX0ZfoUiqwPWdQCtmmrP6nsTEmN8pom_FouTO3UCiQYRNEDq6i7vbispg"
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
