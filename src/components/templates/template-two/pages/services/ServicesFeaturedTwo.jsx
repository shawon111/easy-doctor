import Link from "next/link";

const FEATURED_IMAGE_FALLBACK =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAejtLRzK3bQa8whYcqiEkJObPaIDyqcXjcRn4X8JBxGYwYqh9wouWsYaKVXAMWpeTRTbtzvvJSwRKTTxMexesGEx5jDyNlX3quKr6GZ3xGJqcSeuhdr1LES0joedLZdSlv_J3gEIe3tmoqaPRE2DMT1YHXPUgBCWfhk0DvV-ZaYt10jf4D1s3XMhcw6B0vSwpCz9EkWB6Lqhp7Mgme8tYdzBEiRk6i13Ap16NUK3ME3sqWelrnZ8ULTw";

export default function ServicesFeaturedTwo({ content = {}, slug }) {
  const secondary = content.secondaryFeatured || {};
  const base = slug ? `/doctor/${slug}` : "#";
  const imageSrc = content.image || FEATURED_IMAGE_FALLBACK;

  return (
    <section className="py-[120px] px-[20px] md:px-[64px] max-w-[1200px] mx-auto">
      <div className="mb-16">
        <h2 className="svctwo-headline-md mb-2 text-[#1a1c1e]">Featured Procedures</h2>
        <p className="svctwo-body-md text-[#44474e]">
          Our flagship interventions representing the pinnacle of modern medicine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
        <div className="md:col-span-8 group relative overflow-hidden rounded-[8px] svctwo-glass-panel p-2 h-[500px]">
          <div
            className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-700 bg-cover bg-center opacity-90"
            role="img"
            aria-label={content.imageAlt || ""}
            style={{ backgroundImage: `url('${imageSrc}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fb]/90 via-[#f7f9fb]/20 to-transparent z-[1]" />
          <div className="relative z-10 h-full flex flex-col justify-end p-8">
            <span className="svctwo-label-caps text-[#2563eb] mb-2">{content.badge}</span>
            <h3 className="svctwo-headline-md mb-4 text-[#1a1c1e]">{content.heading}</h3>
            <p className="svctwo-body-md text-[#44474e] max-w-lg mb-6">{content.body}</p>
            <Link
              href={`${base}/appointment`}
              className="w-fit flex items-center gap-2 svctwo-label-caps text-[#2563eb] border border-[#2563eb]/30 px-6 py-2 rounded-[2px] hover:bg-[#2563eb]/10 transition-colors active:scale-95"
            >
              {content.cta}
              <span className="svctwo-material-symbols text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>

        <div className="md:col-span-4 group relative overflow-hidden rounded-[8px] svctwo-glass-panel p-2 h-[500px] flex flex-col">
          {secondary.image ? (
            <div className="h-1/2 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt={secondary.imageAlt || secondary.heading || ""}
                src={secondary.image}
              />
            </div>
          ) : null}
          <div className="p-8 flex-1 flex flex-col justify-center">
            <h3 className="svctwo-headline-sm mb-3 text-[#1a1c1e]">{secondary.heading}</h3>
            <p className="svctwo-body-md text-[#44474e] mb-4">{secondary.body}</p>
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
