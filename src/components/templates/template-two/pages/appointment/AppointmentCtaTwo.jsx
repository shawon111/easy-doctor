export default function AppointmentCtaTwo() {
  return (
    <section className="py-[120px] px-[20px] md:px-[64px] text-center bg-[#f7f9fb] relative overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* The source markup only sets font-family here (no size class),
            so the browser/Tailwind default size is inherited rather than
            a display/headline scale — kept exactly as-is. */}
        <h2 className="apttwo-serif-inherit text-[#0f172a] mb-8">
          Ready to Take the Next Step?
        </h2>
        <p className="apttwo-body-lg text-[#475569] mb-12 italic">
          Experience the gold standard of specialist care, tailored to your
          unique biological profile and lifestyle requirements.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="bg-[#2563eb] text-white px-12 py-5 rounded-[8px] apttwo-label-caps apttwo-luxury-btn-shadow w-full md:w-auto">
            Book Your Appointment
          </button>
          <span className="text-[#475569] apttwo-label-caps">OR</span>
          <button className="border border-[#94a3b8] text-[#0f172a] px-12 py-5 rounded-[8px] apttwo-label-caps hover:bg-[#f2f4f6] transition-all w-full md:w-auto">
            Call Concierge
          </button>
        </div>
      </div>
    </section>
  );
}
