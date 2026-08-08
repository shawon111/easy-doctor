import Reveal from "@/components/templates/ui/Reveal";

export default function AboutPreviewOne() {
  return (
    <section className="py-section-padding bg-surface-container-lowest overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        <Reveal className="order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="pt-12">
              <img
                className="rounded-2xl soft-bloom w-full h-64 object-cover"
                alt="A stethoscope resting on a marble surface next to a digital tablet in a clean consulting room"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZm0_m40P1JS40jbijH63oQwT32n-U54apRIEaWxx_jC9GOzrKujhNnSCth51iO6OgwWp9mZuS9YD3jGEjWACTak_qiBOmHrr_-EbZ4jG7vEq0ERzWX7IdOZPjfO_DAaORn2tqzSp2Zkzod5UfW0UdwcagTnbq6YmGKUUHYRznHaRH99MIrXzmsY02dYox9vBoKTfvzcSXHKAKNa3khYxme5Nd_lVtLneBQ97A-1EQAovsKUHRRzH4DA"
              />
            </div>
            <div>
              <img
                className="rounded-2xl soft-bloom w-full h-80 object-cover"
                alt="A modern high-end clinic waiting area with ergonomic chairs, oak paneling and plants"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwbF8DBfY5iKBcJuS2gsog0qVe9-UID90sKW0LcvVD5Q8SsOdWbN4cYzg4v43dE272c0CQZwU40ZhO-TUesjG2pUg-VJfeEvAmSvRebrILkvwDnvZqShGA6MGt7oDiLSvTgbgheX089HOw-eZftVUVJiXH7dMyYVLrp0FsdkMWlnQVksKUWMgazzAdFKAWsNX0ZfoUiqwPWdQCtmmrP6nsTEmN8pom_FouTO3UCiQYRNEDq6i7vbispg"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 md:order-2 delay-200">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md">
            Redefining the Medical Experience
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Dr. Julian Vance is a double board-certified specialist dedicated to a
            &ldquo;Whole Patient&rdquo; philosophy. By integrating advanced genomic insights
            with traditional preventative care, Julian ensures that every treatment plan is
            as unique as the individual.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
            Our practice is built on trust, discretion, and the relentless pursuit of
            medical innovation, providing a sanctuary for your health.
          </p>
          <a className="inline-flex items-center text-primary font-button text-button group" href="#">
            Read Full Biography
            <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-2">
              arrow_forward
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
