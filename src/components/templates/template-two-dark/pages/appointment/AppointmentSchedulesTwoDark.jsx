const CHAMBERS = [
  {
    icon: "apartment",
    name: "Royal Medical Plaza",
    location: "Suite 405, Executive Wing, London",
    hours: [
      { day: "Monday", time: "10:00 AM - 02:00 PM" },
      { day: "Wednesday", time: "04:00 PM - 08:00 PM" },
      { day: "Saturday", time: "09:00 AM - 12:00 PM" },
    ],
    variant: "glass",
  },
  {
    icon: "health_and_safety",
    name: "Harley Street Specialist",
    location: "Private Suite B, Ground Floor",
    hours: [
      { day: "Tuesday", time: "02:00 PM - 06:00 PM" },
      { day: "Thursday", time: "10:00 AM - 04:00 PM" },
      { day: "Friday", time: "Emergency Only" },
    ],
    variant: "glass",
  },
  {
    icon: "video_camera_front",
    name: "Telehealth Consult",
    location: "Available Worldwide • Ultra-Secure",
    description:
      "Schedule a high-definition video consultation from the comfort of your private residence or executive office.",
    slots: "2 Slots Today",
    variant: "featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjv5vpIPEslsLsiijC_4TQRAP9zvIE_Qhtga5G_exO0v9fd_KcH7cYb42b3PCHC64FvBpvoHxrijc88lBc_NNjIfKv-cZmBvMDrWjmyiWBUoTJdWCbf5Mg5lhs8-I0NmrQB6BYe6A4aWTWuo0BCD48ykkbM_S7M_i6X5oGbRTgAlZsmVchnxOe1Dmz1MvYKa2sLCojRHn4ostjGguTi1HkCBDRb3ATpAlSNtO_MM-5jMm9mWbyGoUt2w",
  },
];

export default function AppointmentSchedulesTwoDark() {
  return (
    <section className="py-[120px] px-5 md:px-16" id="schedules">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-2">
          <h2 className="font-headline-md text-headline-md text-on-surface">Chambers &amp; Schedules</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Choose your preferred location for a face-to-face evaluation.
          </p>
        </div>
        <div className="hidden md:block h-px flex-grow mx-8 bg-outline-variant/30" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CHAMBERS.map((chamber) =>
          chamber.variant === "featured" ? (
            <div
              key={chamber.name}
              className="relative overflow-hidden group p-8 rounded-xl flex flex-col h-full bg-primary-container border border-outline-variant/30"
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <div
                  className="bg-cover bg-center w-full h-full"
                  style={{ backgroundImage: `url('${chamber.image}')` }}
                />
              </div>
              <div className="relative z-10 mb-6">
                <span className="material-symbols-outlined text-tertiary text-4xl mb-4">{chamber.icon}</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{chamber.name}</h3>
                <p className="text-on-surface-variant text-sm mt-2">{chamber.location}</p>
              </div>
              <div className="relative z-10 space-y-4 flex-grow">
                <p className="text-on-surface-variant italic">{chamber.description}</p>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="font-label-caps text-on-surface/60">Slots Available</span>
                  <span className="text-tertiary font-bold">{chamber.slots}</span>
                </div>
              </div>
              <button
                type="button"
                className="relative z-10 mt-8 w-full bg-tertiary text-on-tertiary py-3 font-label-caps text-label-caps hover:bg-tertiary/90 transition-all"
              >
                Book Online Session
              </button>
            </div>
          ) : (
            <div
              key={chamber.name}
              className="glass-card p-8 rounded-xl flex flex-col h-full border-white/10 hover:border-tertiary/40 transition-colors duration-500"
            >
              <div className="mb-6">
                <span className="material-symbols-outlined text-tertiary text-4xl mb-4">{chamber.icon}</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{chamber.name}</h3>
                <p className="text-on-surface-variant text-sm mt-2">{chamber.location}</p>
              </div>
              <div className="space-y-4 flex-grow">
                {chamber.hours.map((row, i) => (
                  <div
                    key={row.day}
                    className={`flex justify-between items-center py-2 ${i < chamber.hours.length - 1 ? "border-b border-white/5" : ""}`}
                  >
                    <span className="font-label-caps text-on-surface/60">{row.day}</span>
                    <span className="text-on-surface font-semibold italic">{row.time}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="mt-8 w-full border border-primary text-primary hover:bg-primary hover:text-on-primary py-3 font-label-caps text-label-caps transition-all"
              >
                Select This Clinic
              </button>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
