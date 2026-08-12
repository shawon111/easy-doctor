import Link from "next/link";
import RevealOneDark from "../../ui/RevealOneDark";

export default function FinalCTAOneDark({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="px-10 max-w-[1440px] mx-auto mb-[120px]">
      <RevealOneDark className="relative rounded-[4rem] p-20 text-center overflow-hidden group">
        <div className="absolute inset-0 bg-primary-container" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container via-primary-container to-secondary-fixed/50 opacity-50" />
        <div className="blob-bg top-[-100px] left-[-100px] opacity-40 !animate-none" aria-hidden="true" />
        <div className="relative z-10">
          <h2 className="font-display-lg text-6xl md:text-7xl text-on-primary-container mb-10 leading-[0.9] tracking-tighter">
            Take the First Step to <br />
            <span className="text-white">Optimal Vitality</span>
          </h2>
          <p className="text-xl text-on-primary-container/80 mb-14 max-w-2xl mx-auto font-medium">
            Whether you need a specialized consultation or a complete health overhaul, our doors are open for your
            journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              className="bg-white text-primary-container px-12 py-6 rounded-full font-bold tracking-widest uppercase shadow-2xl hover:scale-105 transition-transform duration-300"
              href={`${base}/appointment`}
            >
              Request a Consultation
            </Link>
            <Link
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-6 rounded-full font-bold tracking-widest uppercase hover:bg-white/20 transition-all"
              href={`${base}/appointment`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </RevealOneDark>
    </section>
  );
}
