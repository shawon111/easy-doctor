import AccordionThree from "../../ui/AccordionThree";

export default function ServicesFaqThree({ content = {} }) {
  const items = content.items || [];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-12 text-center">{content.heading}</h2>
        <AccordionThree items={items} variant="services" />
      </div>
    </section>
  );
}
