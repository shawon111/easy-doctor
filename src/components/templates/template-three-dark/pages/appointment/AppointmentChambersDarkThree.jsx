const CHAMBER_CLASSES = ["", "lg:col-span-2", ""];

export default function AppointmentChambersDarkThree({ content = {} }) {
  const items = (content.items || []).map((chamber, index) => ({
    ...chamber,
    className: CHAMBER_CLASSES[index] || "",
  }));

  return (
    <section className="mb-24">
      <h2 className="font-headline-lg text-headline-lg mb-10 text-center">{content.heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((chamber) => (
          <div
            key={chamber.title}
            className={`relative h-64 md:h-80 rounded-2xl overflow-hidden group border border-outline-variant/30 ${chamber.className}`}
          >
            <img
              alt={chamber.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={chamber.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-label-sm text-label-sm text-primary-container mb-1 uppercase">{chamber.label}</p>
              <h4 className="font-headline-md text-[20px]">{chamber.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
