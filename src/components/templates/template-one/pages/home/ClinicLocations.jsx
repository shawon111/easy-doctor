import Reveal from "@/components/templates/ui/Reveal";


const CLINICS = [
  {
    name: "Upper East Side Clinic",
    address: "125 East 72nd Street, New York, NY 10021",
    hours: "MON-FRI: 8AM-6PM",
    mapAlt: "Map view of the Upper East Side, New York City, near Central Park",
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAI-SdvQgT6ooXiwhtdYE0FflqijxOwO7SH7bDg4n4DUv2G2AwZ0tAQalGBjGABUG1fhaH2RmBmwPKq4J-xGRg1mEbq96iLF0ba686Ozo4yGY92YJrpYiIGrhrROFTOj9CvvQo9i5IvuT-81CC3Jm9sEEcGXE-E1WoupE27E8AjXMm07jt7bh5e4KDL0haCCTBrssM_9IP7UUrHFdeEW_bW5E2f4WtkkA-FjraLeFYYZslVVLJH65vOQQ",
    delay: "",
  },
  {
    name: "Marylebone Practice",
    address: "10 Harley Street, London W1G 9PF, UK",
    hours: "TUE-SAT: 9AM-7PM",
    mapAlt: "Map view of Marylebone, London, near Harley Street",
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmHkteCkevwmGF5l3RdD6FtBOisn2Djxe5QwkoMx3oyTwWXYMhIPk1e20TVVdlWzPpvx-6XoOxkKCGiAQZ2jkkpusnlN2A4bREfYAJ_fs18WWiJ4RPjY0Fm_WQ_c1KKer9NYsJahcjNul-0RGGOdOhCmbwBo4mlWCZAVO0ymZeitYeFqXgFKwWQGYClOqOypqfNkKB66NX9_MwdMxzi4P28tCXHBMpkn5oWc72j1I-WHWaOTW8e5rXKQ",
    delay: "delay-100",
  },
];

export default function ClinicLocationsOne() {
  return (
    <section className="py-section-padding bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <Reveal className="text-center mb-stack-lg" as="div">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Our Clinics</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {CLINICS.map((clinic) => (
            <Reveal
              key={clinic.name}
              className={`bg-white rounded-[2rem] overflow-hidden soft-bloom border border-outline-variant/30 ${clinic.delay}`}
            >
              <div className="h-64 bg-surface-container-high relative">
                <div className="absolute inset-0 grayscale opacity-60">
                  <img className="w-full h-full object-cover" alt={clinic.mapAlt} src={clinic.mapImage} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                  {clinic.name}
                </h3>
                <p className="text-body-md text-on-surface-variant mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  {clinic.address}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-label-caps font-label-caps text-on-surface-variant">
                    {clinic.hours}
                  </span>
                  <button type="button" className="text-primary font-button text-button hover:underline">
                    Get Directions
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
