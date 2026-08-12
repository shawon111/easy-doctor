import Link from "next/link";

export default function ServicesFeaturedTwoDark({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="py-[120px] px-5 md:px-16 max-w-[1200px] mx-auto">
      <div className="mb-16">
        <h2 className="font-headline-md text-headline-md mb-2">Featured Procedures</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Our flagship interventions representing the pinnacle of modern medicine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 group relative overflow-hidden rounded-xl glass-panel p-2 h-[500px]">
          <div
            className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-700 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAejtLRzK3bQa8whYcqiEkJObPaIDyqcXjcRn4X8JBxGYwYqh9wouWsYaKVXAMWpeTRTbtzvvJSwRKTTxMexesGEx5jDyNlX3quKr6GZ3xGJqcSeuhdr1LES0joedLZdSlv_J3gEIe3tmoqaPRE2DMT1YHXPUgBCWfhk0DvV-ZaYt10jf4D1s3XMhcw6B0vSwpCz9EkWB6Lqhp7Mgme8tYdzBEiRk6i13Ap16NUK3ME3sqWelrnZ8ULTw')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-[1]" />
          <div className="relative z-10 h-full flex flex-col justify-end p-8">
            <span className="font-label-caps text-label-caps text-tertiary mb-2">Pinnacle Technology</span>
            <h3 className="font-headline-md text-headline-md mb-4">Precision Robotic Microsurgery</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mb-6">
              Utilizing state-of-the-art haptic feedback systems for sub-millimeter accuracy in complex neurological
              and cardiac interventions.
            </p>
            <Link
              href={`${base}/appointment`}
              className="w-fit flex items-center gap-2 font-label-caps text-label-caps text-tertiary border border-tertiary/30 px-6 py-2 rounded hover:bg-tertiary/10 transition-colors"
            >
              View Methodology <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>

        <div className="md:col-span-4 group relative overflow-hidden rounded-xl glass-panel p-2 h-[500px] flex flex-col">
          <div className="h-1/2 overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              alt="Close up of a high-end medical diagnostic display showing complex biometric data."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABPsMRRcvFE3m0q-41aGeL5wwxttmmCsf28miCY4OBgq17WbomVzxasLVFOkli7_4kyk4U_QfTsMeDGyBNFNsh5mzdWxpCMghqcjuR3_xrTgJ5u8rzCZXiBOiq6tE0O0XxEjvxIqpluh7HDNQclINa9Lx1AfDUckaHivrugd5QONndl80RmnIGKMWn2_ElOYr8WskFNuVxCzQNJcXK9Kpzj4762-smUEg1JJ0M0yijYFEURaVCoR1HEQ"
            />
          </div>
          <div className="p-8 flex-1 flex flex-col justify-center">
            <h3 className="font-headline-sm text-headline-sm mb-3">Diagnostic Profiling</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Comprehensive executive wellness mapping using advanced multi-spectral imaging.
            </p>
            <div className="mt-auto pt-4 border-t border-white/10">
              <span className="text-tertiary font-label-caps text-label-caps flex items-center gap-2">
                Learn More <span className="material-symbols-outlined text-[16px]">add</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
