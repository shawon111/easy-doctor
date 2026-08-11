import RevealTwo from "./RevealTwo";

const LOCATIONS = [
  {
    tag: "PRIMARY CHAMBER",
    name: "Central Heights Medical",
    alt: "An ultra-modern, high-end medical lobby",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9PrktMatctpk7B9fA7GQbb7Yj-9yZ1luWjd5V1ZJ3VEq6xo0YI7ugWchnBb6XvGEgqB5ZsO5weNM9ZOQrnKb2VpQjT_vkBHLEBW6fTZIK9DupkYHefmOT2XnXgqg-INusxuk8zGj2QahaIyJuNR7DPiXhl4Dr_eFHYbsTqOu29tmiH5WhenizPHyHGFGJWhfWLcrSdU6D4ZKXbIWoLacqyMzx3wi1nFgtdbPrAzoyn25GAjIoksd6Vw",
    address: "420 Park Avenue, 18th Floor",
    addressLine2: "New York, NY 10022",
    hours: [
      { day: "Mon - Wed:", time: "09:00 - 16:00" },
      { day: "Friday:", time: "09:00 - 13:00" },
    ],
  },
  {
    tag: "PRIVATE CONSULTANCY",
    name: "The Meridian Clinic",
    alt: "The exterior of a private healthcare facility",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDE_xsDMW8FE9hhemKWqrQ4RC4ytnt_yemNkPcXRnBJ5FkaoWCdyCo-1corigV-ZYSdM7tTAS1DsAuhQ8YZoOb2gD-Hg1JCLrKEO4GN7nVv0Apf8nyuw1UccTfCIht60SmEaKCgvn_dHiyxKD2dHze4j4OLxU2aog0RdwvuDgIEfRIz5OEHrediu28fTVvb5hhec_Cj8q-oHFPIvJt6J45DY04N2wW383jegkuUFwVv-emlQFCLzC7n_A",
    address: "12 Greenwich Way",
    addressLine2: "Westchester County, NY",
    hours: [
      { day: "Thursday:", time: "10:00 - 18:00" },
      { day: "Saturday:", time: "By Appointment Only" },
    ],
  },
];

export default function AboutPracticesTwo() {
  return (
    <section className="py-[120px] bg-[#eceef0]">
      <RevealTwo className="px-[20px] md:px-[64px] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] items-start">
          <div className="md:col-span-4">
            <h2 className="abtwo-headline-md mb-6 text-[#1a2026]">
              Clinical Practices
            </h2>
            <p className="abtwo-body-md text-[#45464d] mb-8">
              Dr. Sterling practices at two premier locations, ensuring
              accessibility and the highest standards of clinical hygiene and
              privacy.
            </p>
            <a
              className="inline-flex items-center gap-2 text-[#6e5d16] abtwo-label-caps group"
              href="#"
            >
              VIEW FULL SCHEDULE
              <span className="abtwo-material-symbols group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.name}
                className="bg-white rounded-[8px] overflow-hidden border border-[#c6c6cd]/50 group shadow-sm"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    alt={loc.alt}
                    src={loc.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="abtwo-label-caps text-[#ffe088]">
                      {loc.tag}
                    </span>
                    <h4 className="abtwo-headline-sm text-white">{loc.name}</h4>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="abtwo-material-symbols text-[#6e5d16]">
                      location_on
                    </span>
                    <p className="abtwo-body-md text-[#45464d]">
                      {loc.address}
                      <br />
                      {loc.addressLine2}
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="abtwo-material-symbols text-[#6e5d16]">
                      schedule
                    </span>
                    <div className="abtwo-body-md text-[#45464d]">
                      {loc.hours.map((h) => (
                        <p key={h.day} className="flex justify-between w-full gap-8">
                          <span>{h.day}</span> <span>{h.time}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealTwo>
    </section>
  );
}
