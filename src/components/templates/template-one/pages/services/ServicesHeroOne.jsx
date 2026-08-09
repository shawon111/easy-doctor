const SPECIALTIES = ["Cardiology", "General Practice", "Diagnostics"];

export default function ServicesHeroOne() {
  return (
    <section className="relative py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 items-center gap-gutter relative z-10">
        <div className="space-y-stack-md">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-label-caps tracking-widest">
            CLINICAL EXCELLENCE
          </span>
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface leading-tight">
            Comprehensive Medical Care
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl">
            Merging cutting-edge medical precision with a compassionate, patient-first
            approach. We provide specialized care tailored to your unique biological
            profile and lifestyle needs.
          </p>
          <div className="flex flex-wrap gap-stack-sm">
            {SPECIALTIES.map((item) => (
              <span
                key={item}
                className="bg-[#F0FDFA] text-[#0F766E] px-4 py-2 rounded-full text-body-md flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="w-full aspect-[4/5] rounded-xl overflow-hidden shadow-[0px_10px_30px_rgba(30,41,59,0.04)]">
            <img
              className="w-full h-full object-cover"
              alt="A medical professional in a white coat with a stethoscope in a modern minimalist clinic"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsd5_3hOf7MEQeFgx-V50yO_JAuyHywjjxjip_x0sLfmhDH6FhJVgfn8DG4M4BbzJ5-V-sY0CcLvVyP4hKbhjOHQx6mqqKHkuucHFDsVkU1XMjNBQBUahIx5CKWaMW8frekMD2kLmwjIWlVj7ZgMX4TBJq0CoxdqOmxLvSRfKMgHY59eqq12ethhQj5zEhxdGfQhGD5EoSC9NC1sZva3Vqa0WcHQ8kHPbVkhOcpKTEpE9N7zFPjQryig"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
