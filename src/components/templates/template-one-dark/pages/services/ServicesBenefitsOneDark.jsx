export default function ServicesBenefitsOneDark({ content = {} , isDemo = false}) {
  const items = content.items || [];

  return (
    <section className="py-16 px-6 md:px-10 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2d5bff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-8 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-white/10">
            <img
              alt=""
              className="w-full h-full object-cover filter contrast-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSQ4uIemD_xTtOwVnEu0nmn_APexm6QGm2BLP65hM7QcFVnbFVm0FoOOYWR9oRguBlyd9zFsbgb1grFcxr6e5D3hLv6g413aLUiAHgC9rF1UTKKMaD0-988mz7uNdfzMXFozyrqwz2-S9P7ZQjSO2x2xvvai7Rc3CAW8vy4K7g7kv9E4tau_P3KdMcYZEn_MOM_1GKx826eeLyuUjrRfKMyN06ZmItsLXLq0HGLxVW5QceCH4hpsJ78Q"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>
        <div className="space-y-10 lg:pl-12 order-1 lg:order-2">
          {content.heading ? (
            <h2 className="text-display-lg font-display-lg text-on-surface uppercase leading-none">
              {content.heading}
            </h2>
          ) : null}
          {content.subheading ? (
            <p className="text-body-lg text-on-surface-variant">{content.subheading}</p>
          ) : null}
          <ul className="space-y-8">
            {items.map((benefit) => (
              <li key={benefit.title} className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center group-hover:bg-cobalt transition-colors duration-300 flex-shrink-0">
                  <span className="material-symbols-outlined text-cyber-mint group-hover:text-white">{benefit.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface uppercase tracking-wider mb-2">{benefit.title}</h4>
                  <p className="text-on-surface-variant text-body-md">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
