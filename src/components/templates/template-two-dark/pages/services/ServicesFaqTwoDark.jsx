import AccordionTwoDark from "../../ui/AccordionTwoDark";

export default function ServicesFaqTwoDark({ content = {} , isDemo = false}) {
  const items = content.items || [];

  return (
    <section className="py-[120px] bg-surface-container-lowest">
      <div className="px-5 md:px-16 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md mb-4">{content.heading}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Frequently asked questions regarding our specialized procedures and patient journey.
          </p>
        </div>
        <AccordionTwoDark items={items} />
      </div>
    </section>
  );
}
