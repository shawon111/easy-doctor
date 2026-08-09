const BENEFITS = [
  {
    icon: "verified_user",
    title: "Prevention First",
    description: "Early detection protocols that identify potential risks before they become clinical issues.",
  },
  {
    icon: "strikethrough_s",
    title: "Biological Personalization",
    description: "Treatments tailored to your specific genetic and lifestyle markers for superior efficacy.",
  },
  {
    icon: "psychology",
    title: "Holistic Continuity",
    description: "Unified records and coordinated care ensure every specialist is aligned on your health journey.",
  },
];

export default function ServicesBenefitsOne() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-gutter items-center">
        <div className="relative rounded-xl overflow-hidden aspect-square shadow-[0px_10px_30px_rgba(30,41,59,0.04)]">
          <img
            className="w-full h-full object-cover"
            alt="A serene high-end medical clinic interior with soft lighting, greenery, and minimalist furniture"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSQ4uIemD_xTtOwVnEu0nmn_APexm6QGm2BLP65hM7QcFVnbFVm0FoOOYWR9oRguBlyd9zFsbgb1grFcxr6e5D3hLv6g413aLUiAHgC9rF1UTKKMaD0-988mz7uNdfzMXFozyrqwz2-S9P7ZQjSO2x2xvvai7Rc3CAW8vy4K7g7kv9E4tau_P3KdMcYZEn_MOM_1GKx826eeLyuUjrRfKMyN06ZmItsLXLq0HGLxVW5QceCH4hpsJ78Q"
          />
        </div>

        <div className="space-y-stack-lg lg:pl-12">
          <h2 className="text-headline-lg font-headline-lg text-on-surface">
            The Value of Precision Care
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Our services are not just about treating symptoms; they are about
            architecting a blueprint for your long-term wellness.
          </p>
          <ul className="space-y-6">
            {BENEFITS.map((benefit) => (
              <li className="flex items-start gap-4" key={benefit.title}>
                <span className="material-symbols-outlined text-secondary bg-secondary-container p-2 rounded-lg">
                  {benefit.icon}
                </span>
                <div>
                  <h4 className="font-bold text-on-surface">{benefit.title}</h4>
                  <p className="text-on-surface-variant">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
