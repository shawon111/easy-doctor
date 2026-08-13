import Link from "next/link";
import RevealTwo from "./RevealTwo";

export default function AboutCtaTwo({ content = {}, slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="py-[120px] px-[20px] md:px-[64px] text-center relative overflow-hidden bg-[#f7f9fb]">
      <RevealTwo className="relative z-10 max-w-2xl mx-auto">
        <h2 className="abtwo-display-lg mb-8 text-[#1a2026]">{content.heading}</h2>
        <p className="abtwo-body-lg text-[#45464d] mb-12">{content.body}</p>
        <Link
          className="inline-block bg-[#3f465c] text-white px-10 py-5 rounded-[8px] abtwo-label-caps tracking-widest hover:bg-[#6e5d16] transition-all duration-300 shadow-md"
          href={`${base}/appointment`}
        >
          {content.primaryCta}
        </Link>
      </RevealTwo>
    </section>
  );
}
