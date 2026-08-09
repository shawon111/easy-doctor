import Reveal from "@/components/templates/ui/Reveal";


const LOCATIONS = [
  {
    name: "Northside Specialist Center",
    address: "122 Medical Parkway, North District",
    badge: "PRIMARY CLINIC",
    badgeClassName: "bg-secondary/10 text-secondary",
    hours: [
      { day: "Monday - Friday", time: "09:00 AM - 05:00 PM" },
      { day: "Saturday", time: "10:00 AM - 02:00 PM" },
      { day: "Sunday", time: "Closed", closed: true },
    ],
  },
  {
    name: "City Heart Medical Plaza",
    address: "Suite 405, Downtown Professional Center",
    badge: "EVENING CLINIC",
    badgeClassName: "bg-outline-variant/30 text-on-surface-variant",
    hours: [
      { day: "Monday & Wednesday", time: "06:00 PM - 09:00 PM" },
      { day: "Tuesday & Thursday", time: "By Request Only" },
      { day: "Fri - Sun", time: "Closed", closed: true },
    ],
  },
];

export default function AppointmentScheduleOne() {
  return (
    <Reveal
      as="section"
      id="schedule"
      className="py-section-padding px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-stack-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-background">
            Clinic Locations &amp; Hours
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Multiple locations across the city for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {LOCATIONS.map((location) => (
            <div
              key={location.name}
              className="bg-surface p-stack-lg rounded-3xl border border-outline-variant flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-stack-md">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary">
                    {location.name}
                  </h3>
                  <p className="text-on-surface-variant flex items-center gap-2 mt-1">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    {location.address}
                  </p>
                </div>
                <span className={`px-3 py-1 ${location.badgeClassName} text-label-caps rounded-lg`}>
                  {location.badge}
                </span>
              </div>

              <div className="space-y-4 flex-grow">
                {location.hours.map((row, i) => (
                  <div
                    key={row.day}
                    className={`flex justify-between items-center py-3 ${
                      i < location.hours.length - 1 ? "border-b border-outline-variant/50" : ""
                    }`}
                  >
                    <span className={`font-semibold ${row.closed ? "text-error" : ""}`}>
                      {row.day}
                    </span>
                    <span className={row.closed ? "text-error italic" : "text-on-surface-variant"}>
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>

              <button className="mt-stack-md w-full py-4 rounded-xl border border-primary text-primary font-button hover:bg-primary/5 transition-colors">
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
