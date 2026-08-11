export default function ServicesFeaturedTwo() {
  return (
    <section className="py-[120px] px-[20px] md:px-[64px] max-w-[1200px] mx-auto">
      <div className="mb-16">
        <h2 className="svctwo-headline-md mb-2 text-[#1a1c1e]">Featured Procedures</h2>
        <p className="svctwo-body-md text-[#44474e]">
          Our flagship interventions representing the pinnacle of modern medicine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
        {/* Large Featured Item */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-[8px] svctwo-glass-panel p-2 h-[500px]">
          <div
            className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-700 bg-cover bg-center opacity-90"
            role="img"
            aria-label="A hyper-realistic surgical robot arm performing a micro-procedure under cinematic cool blue clinical lighting. The background is a dark, sophisticated operating theater with soft bokeh highlights. The aesthetic is high-tech, precise, and luxury medical, emphasizing executive healthcare and futuristic technical mastery."
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAejtLRzK3bQa8whYcqiEkJObPaIDyqcXjcRn4X8JBxGYwYqh9wouWsYaKVXAMWpeTRTbtzvvJSwRKTTxMexesGEx5jDyNlX3quKr6GZ3xGJqcSeuhdr1LES0joedLZdSlv_J3gEIe3tmoqaPRE2DMT1YHXPUgBCWfhk0DvV-ZaYt10jf4D1s3XMhcw6B0vSwpCz9EkWB6Lqhp7Mgme8tYdzBEiRk6i13Ap16NUK3ME3sqWelrnZ8ULTw')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fb]/90 via-[#f7f9fb]/20 to-transparent z-[1]" />
          <div className="relative z-10 h-full flex flex-col justify-end p-8">
            <span className="svctwo-label-caps text-[#2563eb] mb-2">Pinnacle Technology</span>
            <h3 className="svctwo-headline-md mb-4 text-[#1a1c1e]">
              Precision Robotic Microsurgery
            </h3>
            <p className="svctwo-body-md text-[#44474e] max-w-lg mb-6">
              Utilizing state-of-the-art haptic feedback systems for
              sub-millimeter accuracy in complex neurological and cardiac
              interventions.
            </p>
            <button className="w-fit flex items-center gap-2 svctwo-label-caps text-[#2563eb] border border-[#2563eb]/30 px-6 py-2 rounded-[2px] hover:bg-[#2563eb]/10 transition-colors active:scale-95">
              View Methodology
              <span className="svctwo-material-symbols text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Side Featured Item */}
        <div className="md:col-span-4 group relative overflow-hidden rounded-[8px] svctwo-glass-panel p-2 h-[500px] flex flex-col">
          <div className="h-1/2 overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              alt="Close up of a high-end medical diagnostic display showing complex biometric data in glowing gold and blue interfaces. The screen is clean, sharp, and reflects a professional executive clinical environment. The lighting is soft and moody, emphasizing a sense of calm under pressure and technical accuracy."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABPsMRRcvFE3m0q-41aGeL5wwxttmmCsf28miCY4OBgq17WbomVzxasLVFOkli7_4kyk4U_QfTsMeDGyBNFNsh5mzdWxpCMghqcjuR3_xrTgJ5u8rzCZXiBOiq6tE0O0XxEjvxIqpluh7HDNQclINa9Lx1AfDUckaHivrugd5QONndl80RmnIGKMWn2_ElOYr8WskFNuVxCzQNJcXK9Kpzj4762-smUEg1JJ0M0yijYFEURaVCoR1HEQ"
            />
          </div>
          <div className="p-8 flex-1 flex flex-col justify-center">
            <h3 className="svctwo-headline-sm mb-3 text-[#1a1c1e]">Diagnostic Profiling</h3>
            <p className="svctwo-body-md text-[#44474e] mb-4">
              Comprehensive executive wellness mapping using advanced multi-spectral imaging.
            </p>
            <div className="mt-auto pt-4 border-t border-black/5">
              <span className="text-[#2563eb] svctwo-label-caps flex items-center gap-2">
                Learn More <span className="svctwo-material-symbols text-[16px]">add</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
