import Link from "next/link";
import Reveal from "@/components/templates/ui/Reveal";

export default function AboutPreviewOne({ content = {}, slug , isDemo = false}) {
  const aboutHref = slug ? `/doctor/${slug}/about` : "#";
  const paragraphs = content.body ? content.body.split("\n\n") : [];

  return (
    <section className="py-section-padding bg-surface-container-lowest overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        <Reveal className="order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="pt-12">
              <img
                className="rounded-2xl soft-bloom w-full h-64 object-cover"
                alt={content.imageAlt || ""}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZm0_m40P1JS40jbijH63oQwT32n-U54apRIEaWxx_jC9GOzrKujhNnSCth51iO6OgwWp9mZuS9YD3jGEjWACTak_qiBOmHrr_-EbZ4jG7vEq0ERzWX7IdOZPjfO_DAaORn2tqzSp2Zkzod5UfW0UdwcagTnbq6YmGKUUHYRznHaRH99MIrXzmsY02dYox9vBoKTfvzcSXHKAKNa3khYxme5Nd_lVtLneBQ97A-1EQAovsKUHRRzH4DA"
              />
            </div>
            <div>
              <img
                className="rounded-2xl soft-bloom w-full h-80 object-cover"
                alt=""
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwbF8DBfY5iKBcJuS2gsog0qVe9-UID90sKW0LcvVD5Q8SsOdWbN4cYzg4v43dE272c0CQZwU40ZhO-TUesjG2pUg-VJfeEvAmSvRebrILkvwDnvZqShGA6MGt7oDiLSvTgbgheX089HOw-eZftVUVJiXH7dMyYVLrp0FsdkMWlnQVksKUWMgazzAdFKAWsNX0ZfoUiqwPWdQCtmmrP6nsTEmN8pom_FouTO3UCiQYRNEDq6i7vbispg"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 md:order-2 delay-200">
          {content.heading ? (
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md">
              {content.heading}
            </h2>
          ) : null}
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="font-body-lg text-body-lg text-on-surface-variant mb-6 last:mb-stack-lg"
            >
              {paragraph}
            </p>
          ))}
          {content.linkLabel ? (
            <Link className="inline-flex items-center text-primary font-button text-button group" href={aboutHref}>
              {content.linkLabel}
              <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-2">
                arrow_forward
              </span>
            </Link>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
