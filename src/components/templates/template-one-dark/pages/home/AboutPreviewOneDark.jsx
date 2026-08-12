import Link from "next/link";
import RevealOneDark from "../../ui/RevealOneDark";

export default function AboutPreviewOneDark({ slug }) {
  const aboutHref = slug ? `/doctor/${slug}/about` : "#";

  return (
    <section className="py-[120px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <RevealOneDark className="order-2 md:order-1">
          <div className="grid grid-cols-2 gap-6">
            <div className="pt-16">
              <div className="glass-card p-1 rounded-2xl">
                <img
                  className="rounded-xl w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  alt="Modern stethoscope on marble"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZm0_m40P1JS40jbijH63oQwT32n-U54apRIEaWxx_jC9GOzrKujhNnSCth51iO6OgwWp9mZuS9YD3jGEjWACTak_qiBOmHrr_-EbZ4jG7vEq0ERzWX7IdOZPjfO_DAaORn2tqzSp2Zkzod5UfW0UdwcagTnbq6YmGKUUHYRznHaRH99MIrXzmsY02dYox9vBoKTfvzcSXHKAKNa3khYxme5Nd_lVtLneBQ97A-1EQAovsKUHRRzH4DA"
                />
              </div>
            </div>
            <div>
              <div className="glass-card p-1 rounded-2xl">
                <img
                  className="rounded-xl w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  alt="High-end medical clinic lounge"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwbF8DBfY5iKBcJuS2gsog0qVe9-UID90sKW0LcvVD5Q8SsOdWbN4cYzg4v43dE272c0CQZwU40ZhO-TUesjG2pUg-VJfeEvAmSvRebrILkvwDnvZqShGA6MGt7oDiLSvTgbgheX089HOw-eZftVUVJiXH7dMyYVLrp0FsdkMWlnQVksKUWMgazzAdFKAWsNX0ZfoUiqwPWdQCtmmrP6nsTEmN8pom_FouTO3UCiQYRNEDq6i7vbispg"
                />
              </div>
            </div>
          </div>
        </RevealOneDark>

        <RevealOneDark className="order-1 md:order-2 delay-200">
          <h2 className="font-headline-lg text-5xl text-secondary mb-8 leading-tight tracking-tight">
            Redefining the <br />
            <span className="text-primary">Medical Experience</span>
          </h2>
          <p className="font-body-lg text-lg text-on-surface-variant mb-6 leading-relaxed">
            Dr. Julian Vance is a double board-certified specialist dedicated to a &quot;Whole Patient&quot; philosophy. By
            integrating advanced genomic insights with traditional preventative care, Julian ensures that every treatment
            plan is as unique as the individual.
          </p>
          <p className="font-body-lg text-lg text-on-surface-variant mb-10 leading-relaxed">
            Our practice is built on trust, discretion, and the relentless pursuit of medical innovation, providing a
            sanctuary for your health.
          </p>
          <Link
            className="inline-flex items-center text-primary-container font-bold tracking-widest uppercase text-sm group"
            href={aboutHref}
          >
            Read Full Biography
            <span className="material-symbols-outlined ml-3 transition-transform group-hover:translate-x-3">
              arrow_forward
            </span>
          </Link>
        </RevealOneDark>
      </div>
    </section>
  );
}
