const CHAMBERS = [
  {
    icon: "apartment",
    name: "Royal Medical Plaza",
    address: "Suite 405, Executive Wing, London",
    hours: [
      { day: "Monday", time: "10:00 AM - 02:00 PM" },
      { day: "Wednesday", time: "04:00 PM - 08:00 PM" },
      { day: "Saturday", time: "09:00 AM - 12:00 PM" },
    ],
  },
  {
    icon: "health_and_safety",
    name: "Harley Street Specialist",
    address: "Private Suite B, Ground Floor",
    hours: [
      { day: "Tuesday", time: "02:00 PM - 06:00 PM" },
      { day: "Thursday", time: "10:00 AM - 04:00 PM" },
      { day: "Friday", time: "Emergency Only", emphasis: true },
    ],
  },
];

export default function AppointmentSchedulesTwo() {
  return (
    <section className="py-[120px] px-[20px] md:px-[64px]" id="schedules">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-2">
          <h2 className="apttwo-headline-md text-[#0f172a]">Chambers &amp; Schedules</h2>
          <p className="apttwo-body-md text-[#475569]">
            Choose your preferred location for a face-to-face evaluation.
          </p>
        </div>
        <div className="hidden md:block h-[1px] flex-grow mx-8 bg-[#cbd5e1]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {CHAMBERS.map((chamber) => (
          <div
            key={chamber.name}
            className="apttwo-glass-card p-8 rounded-[12px] flex flex-col h-full hover:border-[#2563eb]/40 transition-colors duration-500"
          >
            <div className="mb-6">
              <span className="apttwo-material-symbols text-[#2563eb] text-4xl mb-4">
                {chamber.icon}
              </span>
              <h3 className="apttwo-headline-sm text-[#0f172a]">{chamber.name}</h3>
              <p className="text-[#475569] text-sm mt-2">{chamber.address}</p>
            </div>
            <div className="space-y-4 flex-grow">
              {chamber.hours.map((h, i) => (
                <div
                  key={h.day}
                  className={
                    i < chamber.hours.length - 1
                      ? "flex justify-between items-center py-2 border-b border-[#cbd5e1]/30"
                      : "flex justify-between items-center py-2"
                  }
                >
                  <span className="apttwo-label-caps text-[#475569]">{h.day}</span>
                  <span
                    className={
                      h.emphasis
                        ? "text-[#d97706] font-semibold italic"
                        : "text-[#0f172a] font-semibold italic"
                    }
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white py-3 rounded-[8px] apttwo-label-caps transition-all">
              Select This Clinic
            </button>
          </div>
        ))}

        {/* Telehealth card */}
        <div className="relative overflow-hidden group p-8 rounded-[12px] flex flex-col h-full bg-[#dbeafe] border border-[#2563eb]/20">
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
            <div
              className="bg-cover bg-center w-full h-full"
              role="img"
              aria-label="Close-up artistic blueprint of a modern medical facility with gold architectural lines over a deep navy background, conveying precision and luxury."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjv5vpIPEslsLsiijC_4TQRAP9zvIE_Qhtga5G_exO0v9fd_KcH7cYb42b3PCHC64FvBpvoHxrijc88lBc_NNjIfKv-cZmBvMDrWjmyiWBUoTJdWCbf5Mg5lhs8-I0NmrQB6BYe6A4aWTWuo0BCD48ykkbM_S7M_i6X5oGbRTgAlZsmVchnxOe1Dmz1MvYKa2sLCojRHn4ostjGguTi1HkCBDRb3ATpAlSNtO_MM-5jMm9mWbyGoUt2w')",
              }}
            />
          </div>
          <div className="relative z-10 mb-6">
            <span className="apttwo-material-symbols text-[#2563eb] text-4xl mb-4">
              video_camera_front
            </span>
            <h3 className="apttwo-headline-sm text-[#1e40af]">Telehealth Consult</h3>
            <p className="text-[#1e40af]/70 text-sm mt-2">
              Available Worldwide • Ultra-Secure
            </p>
          </div>
          <div className="relative z-10 space-y-4 flex-grow">
            <p className="text-[#1e40af]/80 italic">
              Schedule a high-definition video consultation from the comfort
              of your private residence or executive office.
            </p>
            <div className="flex justify-between items-center py-2 border-b border-[#1e40af]/10">
              <span className="apttwo-label-caps text-[#1e40af]/60">Slots Available</span>
              <span className="text-[#d97706] font-bold">2 Slots Today</span>
            </div>
          </div>
          <button className="relative z-10 mt-8 w-full bg-[#2563eb] text-white py-3 rounded-[8px] apttwo-label-caps hover:bg-[#2563eb]/90 transition-all">
            Book Online Session
          </button>
        </div>
      </div>
    </section>
  );
}
