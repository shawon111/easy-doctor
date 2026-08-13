export default function ServicesHeroOne({ content = {} }) {
  return (
    <section className="relative py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 items-center gap-gutter relative z-10">
        <div className="space-y-stack-md">
          {content.badge ? (
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-label-caps tracking-widest">
              {content.badge}
            </span>
          ) : null}
          {content.heading ? (
            <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface leading-tight">
              {content.heading}
            </h1>
          ) : null}
          {content.body ? (
            <p className="text-body-lg text-on-surface-variant max-w-xl">{content.body}</p>
          ) : null}
        </div>

        <div className="relative hidden md:block">
          <div className="w-full aspect-[4/5] rounded-xl overflow-hidden shadow-[0px_10px_30px_rgba(30,41,59,0.04)]">
            <img
              className="w-full h-full object-cover"
              alt=""
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsd5_3hOf7MEQeFgx-V50yO_JAuyHywjjxjip_x0sLfmhDH6FhJVgfn8DG4M4BbzJ5-V-sY0CcLvVyP4hKbhjOHQx6mqqKHkuucHFDsVkU1XMjNBQBUahIx5CKWaMW8frekMD2kLmwjIWlVj7ZgMX4TBJq0CoxdqOmxLvSRfKMgHY59eqq12ethhQj5zEhxdGfQhGD5EoSC9NC1sZva3Vqa0WcHQ8kHPbVkhOcpKTEpE9N7zFPjQryig"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
