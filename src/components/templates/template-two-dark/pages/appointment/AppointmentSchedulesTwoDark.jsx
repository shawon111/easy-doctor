const TELEHEALTH_IMAGE_FALLBACK =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCjv5vpIPEslsLsiijC_4TQRAP9zvIE_Qhtga5G_exO0v9fd_KcH7cYb42b3PCHC64FvBpvoHxrijc88lBc_NNjIfKv-cZmBvMDrWjmyiWBUoTJdWCbf5Mg5lhs8-I0NmrQB6BYe6A4aWTWuo0BCD48ykkbM_S7M_i6X5oGbRTgAlZsmVchnxOe1Dmz1MvYKa2sLCojRHn4ostjGguTi1HkCBDRb3ATpAlSNtO_MM-5jMm9mWbyGoUt2w";

function groupScheduleByLocation(items = []) {
  const groups = new Map();

  for (const item of items) {
    const key = item.location || "Clinic";
    if (!groups.has(key)) {
      groups.set(key, { name: key, hours: [] });
    }
    groups.get(key).hours.push({
      day: item.day,
      time: item.hours,
    });
  }

  return Array.from(groups.values());
}

export default function AppointmentSchedulesTwoDark({ content = {}, telehealthImage , isDemo = false}) {
  const chambers = groupScheduleByLocation(content.items);
  const telehealthSrc = telehealthImage || TELEHEALTH_IMAGE_FALLBACK;

  return (
    <section className="py-[120px] px-5 md:px-16" id="schedules">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-2">
          <h2 className="font-headline-md text-headline-md text-on-surface">{content.heading}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">{content.subheading}</p>
        </div>
        <div className="hidden md:block h-px flex-grow mx-8 bg-outline-variant/30" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chambers.map((chamber) => (
          <div
            key={chamber.name}
            className="glass-card p-8 rounded-xl flex flex-col h-full border-white/10 hover:border-tertiary/40 transition-colors duration-500"
          >
            <div className="mb-6">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-4">apartment</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">{chamber.name}</h3>
            </div>
            <div className="space-y-4 flex-grow">
              {chamber.hours.map((row, i) => (
                <div
                  key={`${row.day}-${row.time}`}
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
        ))}

        <div className="relative overflow-hidden group p-8 rounded-xl flex flex-col h-full bg-primary-container border border-outline-variant/30">
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
            <div
              className="bg-cover bg-center w-full h-full"
              style={{ backgroundImage: `url('${telehealthSrc}')` }}
            />
          </div>
          <div className="relative z-10 mb-6">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-4">video_camera_front</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Telehealth Consult</h3>
            <p className="text-on-surface-variant text-sm mt-2">Available Worldwide • Ultra-Secure</p>
          </div>
          <div className="relative z-10 space-y-4 flex-grow">
            <p className="text-on-surface-variant italic">
              Schedule a high-definition video consultation from the comfort of your private residence or executive
              office.
            </p>
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="font-label-caps text-on-surface/60">Slots Available</span>
              <span className="text-tertiary font-bold">2 Slots Today</span>
            </div>
          </div>
          <button
            type="button"
            className="relative z-10 mt-8 w-full bg-tertiary text-on-tertiary py-3 font-label-caps text-label-caps hover:bg-tertiary/90 transition-all"
          >
            Book Online Session
          </button>
        </div>
      </div>
    </section>
  );
}
