const CONTACT_INFO = [
  {
    icon: "location_on",
    title: "Main Clinical Center",
    detail: "101 Medical Innovation Dr, Science Park, Suite 500",
  },
  {
    icon: "call",
    title: "Direct Inquiries",
    detail: "+1 (555) MED-LINK (633-5465)",
  },
  {
    icon: "schedule",
    title: "Operational Hours",
    detail: (
      <>
        Mon-Fri: 8:00 AM - 7:00 PM
        <br />
        Sat: 9:00 AM - 2:00 PM
      </>
    ),
  },
];

export default function HomeMapLocationDarkThree() {
  return (
    <section className="py-32">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="font-display-lg text-headline-lg">Find Our Clinic</h2>
          <div className="space-y-6">
            {CONTACT_INFO.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="material-symbols-outlined text-primary">{item.icon}</span>
                <div>
                  <div className="font-headline-md text-[18px]">{item.title}</div>
                  <div className="text-on-surface-variant">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="bg-surface-container-high text-on-surface px-8 py-3 rounded-lg border border-outline-variant hover:bg-surface-container-highest transition-colors"
          >
            Get Driving Directions
          </button>
        </div>

        <div className="rounded-[32px] overflow-hidden border border-outline-variant h-[400px] shadow-lg">
          <img
            className="w-full h-full object-cover"
            alt="A stylized, dark-themed satellite map of a modern medical district in a metropolitan city."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAemNkH-1Vu0ccU2ZDI4fYpVK2ftWcKMvD86H106aFU9ribvKJFoinIIgh2BYWbWz0h461E7OJMCkdjPM8IysBgfI3FjJxED3ja4RKTjKwEKX5MpE-MXm9UfvXs1bslA1Fh75T9Vr5WDCj4D2bsKTBxnss1VvIhho8gcq52dY7hk7eU39Ch2gO9xLvQzTrJElz-iSvKZ9fUgM9T5yjftHpnRn3kl5CEQs5grSIohBIyLk6lz9MCwLGtFg"
          />
        </div>
      </div>
    </section>
  );
}
