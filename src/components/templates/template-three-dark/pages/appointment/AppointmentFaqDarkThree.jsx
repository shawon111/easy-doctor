import AccordionThree from "../../../template-three/ui/AccordionThree";

export default function AppointmentFaqDarkThree({ content = {} }) {
  const items = content.items || [];

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="font-headline-lg text-headline-lg mb-12 text-center">{content.heading}</h2>
      <AccordionThree items={items} />
    </section>
  );
}
