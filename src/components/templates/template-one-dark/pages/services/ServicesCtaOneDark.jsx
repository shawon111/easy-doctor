import Link from "next/link";

export default function ServicesCtaOneDark({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="px-6 md:px-10 pb-16 pt-16">
      <div className="max-w-[1440px] mx-auto bg-cobalt rounded-[3rem] p-16 text-center text-white relative overflow-hidden group">
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-display-lg uppercase italic">
            System <span className="text-cyber-mint">Optimization</span> Needed?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-body-lg">
            Connect with our triage unit for a preliminary system audit and protocol selection.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Link
              className="bg-cyber-mint text-on-secondary px-10 py-4 rounded-full font-label-md hover:scale-105 transition-transform"
              href={`${base}/appointment`}
            >
              INITIATE CONTACT
            </Link>
            <Link
              className="border border-white/30 text-white px-10 py-4 rounded-full font-label-md hover:bg-white/10 transition-colors"
              href={`${base}/appointment`}
            >
              VIEW PORTAL
            </Link>
          </div>
        </div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyber-mint/20 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/30 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
      </div>
    </section>
  );
}
