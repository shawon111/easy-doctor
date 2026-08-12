import Link from "next/link";
import SectionFadeTwoDark from "../../ui/SectionFadeTwoDark";

const LOCATIONS = [
  {
    badge: "PRIMARY CHAMBER",
    name: "Central Heights Medical",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9PrktMatctpk7B9fA7GQbb7Yj-9yZ1luWjd5V1ZJ3VEq6xo0YI7ugWchnBb6XvGEgqB5ZsO5weNM9ZOQrnKb2VpQjT_vkBHLEBW6fTZIK9DupkYHefmOT2XnXgqg-INusxuk8zGj2QahaIyJuNR7DPiXhl4Dr_eFHYbsTqOu29tmiH5WhenizPHyHGFGJWhfWLcrSdU6D4ZKXbIWoLacqyMzx3wi1nFgtdbPrAzoyn25GAjIoksd6Vw",
    address: "420 Park Avenue, 18th Floor\nNew York, NY 10022",
    hours: [
      { day: "Mon - Wed:", time: "09:00 - 16:00" },
      { day: "Friday:", time: "09:00 - 13:00" },
    ],
  },
  {
    badge: "PRIVATE CONSULTANCY",
    name: "The Meridian Clinic",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDE_xsDMW8FE9hhemKWqrQ4RC4ytnt_yemNkPcXRnBJ5FkaoWCdyCo-1corigV-ZYSdM7tTAS1DsAuhQ8YZoOb2gD-Hg1JCLrKEO4GN7nVv0Apf8nyuw1UccTfCIht60SmEaKCgvn_dHiyxKD2dHze4j4OLxU2aog0RdwvuDgIEfRIz5OEHrediu28fTVvb5hhec_Cj8q-oHFPIvJt6J45DY04N2wW383jegkuUFwVv-emlQFCLzC7n_A",
    address: "12 Greenwich Way\nWestchester County, NY",
    hours: [
      { day: "Thursday:", time: "10:00 - 18:00" },
      { day: "Saturday:", time: "By Appointment Only" },
    ],
  },
];

export default function AboutPracticesTwoDark({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <SectionFadeTwoDark className="py-[120px] bg-surface-container-highest/20">
      <div className="px-5 md:px-16 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-4">
            <h2 className="font-headline-md text-headline-md mb-6">Clinical Practices</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Dr. Sterling practices at two premier locations, ensuring accessibility and the highest standards of
              clinical hygiene and privacy.
            </p>
            <Link
              className="inline-flex items-center gap-2 text-tertiary font-label-caps text-label-caps group"
              href={`${base}/appointment`}
            >
              VIEW FULL SCHEDULE
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCATIONS.map((location) => (
              <div
                key={location.name}
                className="bg-surface-container rounded-lg overflow-hidden border border-outline-variant/30 group"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    alt={location.name}
                    src={location.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="font-label-caps text-label-caps text-tertiary">{location.badge}</span>
                    <h4 className="font-headline-sm text-headline-sm text-white">{location.name}</h4>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-tertiary">location_on</span>
                    <p className="font-body-md text-body-md text-on-surface-variant whitespace-pre-line">{location.address}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-tertiary">schedule</span>
                    <div className="font-body-md text-body-md text-on-surface-variant">
                      {location.hours.map((row) => (
                        <p key={row.day} className="flex justify-between w-full gap-8">
                          <span>{row.day}</span> <span>{row.time}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionFadeTwoDark>
  );
}
