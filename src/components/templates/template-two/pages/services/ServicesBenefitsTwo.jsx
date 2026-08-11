const PILLARS = [
  {
    icon: "precision_manufacturing",
    title: "Technical Superiority",
    description:
      "Access to proprietary diagnostic tools and surgical platforms not available in general hospitals.",
  },
  {
    icon: "lock",
    title: "Unparalleled Privacy",
    description:
      "Private entrances, secure data handling, and a strictly controlled environment for high-profile patients.",
  },
  {
    icon: "verified_user",
    title: "Global Network",
    description:
      "Direct coordination with the world's leading research institutes for unique medical cases.",
  },
];

export default function ServicesBenefitsTwo() {
  return (
    <section className="py-[120px] px-[20px] md:px-[64px] max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#2563eb]/5 rounded-full blur-3xl" />
          <img
            className="relative z-10 w-full aspect-square object-cover rounded-[8px] border border-black/5"
            alt="A portrait of a distinguished male specialist doctor in a perfectly tailored charcoal medical coat, looking thoughtfully into the distance. The lighting is high-contrast, professional, and dramatic with a shallow depth of field, revealing a clean, modern medical laboratory in the background. The mood is authoritative and reassuring."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMnzyNVVzbtBCUayb8cPumdCi_8F0iPFr0wIttqUVZPsBSfXyB-y9RONuOLfCJCWohjlONLcOBNp3KTGS0UFwfWwOneaCxCLyFsuaW2j22MslZRdTygeeJE-5SsN7JiXYzrWnwwZTqiHjVl5Lucao9spI3sZQUFvCHNTd9yN7LwIJ8LSX_P_n2MZxRBQ5OPxaMEpZYiivcK3Eohf6c7k4zU3gZqhaeousdesI6Rx_OD3wmx5iFWXs3xg"
          />
          <div className="absolute bottom-6 right-6 z-20 bg-white shadow-xl px-6 py-4 rounded-[4px] border border-black/5">
            <p className="svctwo-headline-sm text-[#2563eb]">25+ Years</p>
            <p className="svctwo-label-caps text-[#44474e]">Clinical Mastery</p>
          </div>
        </div>

        <div className="space-y-12 lg:pl-16">
          <div>
            <h2 className="svctwo-headline-md mb-6 text-[#1a1c1e]">
              The Standard of Executive Care
            </h2>
            <p className="svctwo-body-lg text-[#44474e]">
              We understand that our patients value discretion, time, and
              absolute technical certainty. Our practice is built on three
              pillars of excellence.
            </p>
          </div>

          <div className="space-y-8">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 border border-[#2563eb]/20 rounded-[12px] flex items-center justify-center text-[#2563eb] bg-[#2563eb]/5">
                  <span className="svctwo-material-symbols text-sm">{pillar.icon}</span>
                </div>
                <div>
                  <h4 className="svctwo-headline-20 mb-2 text-[#1a1c1e]">{pillar.title}</h4>
                  <p className="svctwo-body-md text-[#44474e]">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
