import ParallaxImageThree from "../../ui/ParallaxImageThree";

const DEFAULT_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCwpZmJK4q5FM8vcTZB_TAivyNi8GAzDB3Hw8AV2tSk_zt3UN2PZjlv5qexJd2tGgFeZHhhoXJpkk6zt44YAULkXLZCWQaF-HktGQcvHTByHX5DJS38yj4DNlp03chBQeMx6cAeUYOVqpysLgOSJ_Zl-F49HvdtWWsrBIRtp9H39DJLjLuFE7mepNfzjdyWFdhEAGJPKQiBs0PggdHnALQzvB9rZ-p13vtCyxTymCU1sUzd57AEaL2CwQ";

export default function AboutHeroThree({ content = {} }) {
  const heroImage = content.image || DEFAULT_HERO_IMAGE;

  return (
    <section className="relative py-24 overflow-hidden hero-gradient">
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest bg-secondary-container px-3 py-1 rounded-full">
              {content.badge}
            </span>
            <h1 className="mt-4 font-display-lg text-display-lg text-on-surface">{content.heading}</h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">{content.body}</p>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-primary font-headline-lg">{content.experienceStat}</span>
              <span className="text-on-surface-variant text-sm">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-outline-variant" />
            <div className="flex flex-col">
              <span className="text-secondary font-headline-lg">15k+</span>
              <span className="text-on-surface-variant text-sm">Lives Touched</span>
            </div>
            <div className="w-px h-12 bg-outline-variant" />
            <div className="flex flex-col">
              <span className="text-tertiary font-headline-lg">12</span>
              <span className="text-on-surface-variant text-sm">Innovations</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
          <ParallaxImageThree src={heroImage} alt={content.imageAlt} />
        </div>
      </div>
    </section>
  );
}
