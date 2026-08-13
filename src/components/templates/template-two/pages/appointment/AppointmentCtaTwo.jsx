import Link from "next/link";

export default function AppointmentCtaTwo({ content = {}, slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="py-[120px] px-[20px] md:px-[64px] text-center bg-[#f7f9fb] relative overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="apttwo-serif-inherit text-[#0f172a] mb-8">{content.heading}</h2>
        <p className="apttwo-body-lg text-[#475569] mb-12 italic">{content.body}</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link
            href={`${base}/appointment`}
            className="bg-[#2563eb] text-white px-12 py-5 rounded-[8px] apttwo-label-caps apttwo-luxury-btn-shadow w-full md:w-auto"
          >
            {content.primaryCta}
          </Link>
          <span className="text-[#475569] apttwo-label-caps">OR</span>
          <Link
            href={`${base}/appointment#whatsapp`}
            className="border border-[#94a3b8] text-[#0f172a] px-12 py-5 rounded-[8px] apttwo-label-caps hover:bg-[#f2f4f6] transition-all w-full md:w-auto"
          >
            {content.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
