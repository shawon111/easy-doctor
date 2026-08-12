const ADVANTAGES = [
  {
    number: "01",
    title: "Modern Diagnostic Lab",
    description:
      "In-house laboratory equipped with the latest molecular diagnostic technology for rapid, accurate results.",
  },
  {
    number: "02",
    title: "Expert-Led Multidisciplinary Team",
    description:
      "Access a network of top-tier specialists collaborating in real-time on your comprehensive treatment plan.",
  },
  {
    number: "03",
    title: "Patient-First Digital Portal",
    description:
      "Manage your health on the go with our encrypted portal—access results, schedule visits, and message your team.",
  },
];

export default function HomeWhyTrustDarkThree() {
  return (
    <section className="py-32">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="font-display-lg text-headline-lg mb-12">The MedLink Advantage</h2>
          <div className="space-y-12">
            {ADVANTAGES.map((item) => (
              <div key={item.number} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                  {item.number}
                </div>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container h-full rounded-[40px] relative overflow-hidden flex items-center justify-center border border-outline-variant/30 min-h-[400px]" />
      </div>
    </section>
  );
}
