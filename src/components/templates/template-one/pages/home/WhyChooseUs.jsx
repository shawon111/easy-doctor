import Reveal from "@/components/templates/ui/Reveal";

export default function WhyChooseUsOne({ content = {} }) {
  const items = content.items || [];

  return (
    <section className="py-section-padding bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <Reveal>
            {content.heading ? (
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md">
                {content.heading}
              </h2>
            ) : null}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((item) => (
                <div className="flex gap-4" key={item.title}>
                  <div className="text-primary">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">{item.title}</h4>
                    <p className="text-body-md text-on-surface-variant">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="delay-200">
            <div className="bg-surface-container-high rounded-[2.5rem] p-12 relative overflow-hidden h-full flex flex-col justify-center">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-6 relative z-10">
                Clinical Excellence Meets Personal Care
              </h3>
              {content.quote ? (
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 relative z-10 italic">
                  &ldquo;{content.quote}&rdquo;
                </p>
              ) : null}
              {content.quoteAuthor ? (
                <div className="flex items-center gap-4 relative z-10">
                  <img
                    className="h-12 grayscale"
                    alt=""
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcwDvF6ipEsG6rPGUBILKJXbJjzyOhIcdWSJu4QpL1J7CvTwFEk1ZPUjS803dWZf_ES7Sfl6Svye2Vr7_a4isSrTmfQwVCoq455xpIyZVpPzlUU36D7Q6r9CY1iPJGHBthUCwmMYaWh6ZB-ljDReIaKOOPsN4wRjWTHO-N8K_QP3Tz9K3xZygB7sH1guNSWnVIMUGAFEqyo2Q24LcJw3yjuMEIGkiLMO6OHyMZVUIIJsWl5HyWOAHi7w"
                  />
                  <p className="text-label-caps font-label-caps text-primary">{content.quoteAuthor}</p>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
