export default function ServicesHeroOneDark() {
  return (
    <section className="relative py-16 px-6 md:px-10 hero-gradient overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 items-center gap-8 relative z-10">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyber-mint/10 border border-cyber-mint/20 text-cyber-mint font-label-md">
            <span className="w-2 h-2 rounded-full bg-cyber-mint animate-pulse" />
            HYPED PERFORMANCE HEALTHCARE
          </div>
          <h1 className="text-5xl md:text-display-lg font-display-lg text-on-surface leading-none uppercase italic">
            Advanced <br />
            <span className="text-cobalt">Precision</span> <br />
            Systems
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl">
            Merging deep biological analytics with high-performance aesthetics. We architect specialized care protocols
            for the elite human profile.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="bg-surface-container border border-white/5 px-6 py-3 rounded-full text-label-md text-on-surface flex items-center gap-3">
              <span className="material-symbols-outlined text-cyber-mint">bolt</span>
              CARDIOLOGY
            </span>
            <span className="bg-surface-container border border-white/5 px-6 py-3 rounded-full text-label-md text-on-surface flex items-center gap-3">
              <span className="material-symbols-outlined text-cyber-mint">biotech</span>
              GENETICS
            </span>
            <span className="bg-surface-container border border-white/5 px-6 py-3 rounded-full text-label-md text-on-surface flex items-center gap-3">
              <span className="material-symbols-outlined text-cyber-mint">psychology</span>
              NEURO
            </span>
          </div>
        </div>
        <div className="lg:col-span-5 relative group">
          <div className="w-full aspect-square rounded-[3rem] overflow-hidden border-2 border-white/10 cyber-border">
            <img
              alt="Modern professional doctor"
              className="w-full h-full object-cover filter contrast-125 grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsd5_3hOf7MEQeFgx-V50yO_JAuyHywjjxjip_x0sLfmhDH6FhJVgfn8DG4M4BbzJ5-V-sY0CcLvVyP4hKbhjOHQx6mqqKHkuucHFDsVkU1XMjNBQBUahIx5CKWaMW8frekMD2kLmwjIWlVj7ZgMX4TBJq0CoxdqOmxLvSRfKMgHY59eqq12ethhQj5zEhxdGfQhGD5EoSC9NC1sZva3Vqa0WcHQ8kHPbVkhOcpKTEpE9N7zFPjQryig"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cobalt/20 rounded-full blur-[80px]" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyber-mint/20 rounded-full blur-[80px]" />
        </div>
      </div>
    </section>
  );
}
