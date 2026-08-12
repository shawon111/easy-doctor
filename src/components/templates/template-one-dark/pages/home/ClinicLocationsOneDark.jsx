import RevealOneDark from "../../ui/RevealOneDark";

const CLINICS = [
  {
    name: "Upper East Side Clinic",
    address: "125 East 72nd Street, New York",
    hours: "MON-FRI: 8AM-6PM",
    imageAlt: "Upper East Side Map",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAI-SdvQgT6ooXiwhtdYE0FflqijxOwO7SH7bDg4n4DUv2G2AwZ0tAQalGBjGABUG1fhaH2RmBmwPKq4J-xGRg1mEbq96iLF0ba686Ozo4yGY92YJrpYiIGrhrROFTOj9CvvQo9i5IvuT-81CC3Jm9sEEcGXE-E1WoupE27E8AjXMm07jt7bh5e4KDL0haCCTBrssM_9IP7UUrHFdeEW_bW5E2f4WtkkA-FjraLeFYYZslVVLJH65vOQQ",
    delay: "",
  },
  {
    name: "Marylebone Practice",
    address: "10 Harley Street, London",
    hours: "TUE-SAT: 9AM-7PM",
    imageAlt: "Marylebone Map",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmHkteCkevwmGF5l3RdD6FtBOisn2Djxe5QwkoMx3oyTwWXYMhIPk1e20TVVdlWzPpvx-6XoOxkKCGiAQZ2jkkpusnlN2A4bREfYAJ_fs18WWiJ4RPjY0Fm_WQ_c1KKer9NYsJahcjNul-0RGGOdOhCmbwBo4mlWCZAVO0ymZeitYeFqXgFKwWQGYClOqOypqfNkKB66NX9_MwdMxzi4P28tCXHBMpkn5oWc72j1I-WHWaOTW8e5rXKQ",
    delay: "delay-100",
  },
];

export default function ClinicLocationsOneDark() {
  return (
    <section className="py-[120px]">
      <div className="max-w-[1440px] mx-auto px-10">
        <RevealOneDark className="text-center mb-20">
          <h2 className="font-headline-lg text-5xl text-secondary tracking-tight">Global Locations</h2>
        </RevealOneDark>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {CLINICS.map((clinic) => (
            <RevealOneDark
              key={clinic.name}
              className={`glass-card rounded-[2.5rem] overflow-hidden border border-white/10 group ${clinic.delay}`}
            >
              <div className="h-80 relative overflow-hidden">
                <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <img
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    alt={clinic.imageAlt}
                    src={clinic.imageSrc}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent" />
              </div>
              <div className="p-12">
                <h3 className="font-headline-md text-3xl text-secondary mb-4">{clinic.name}</h3>
                <p className="text-lg text-on-surface-variant mb-10 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  {clinic.address}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold tracking-widest text-on-surface-variant/60 uppercase">
                    {clinic.hours}
                  </span>
                  <button
                    type="button"
                    className="text-primary font-bold tracking-widest uppercase text-xs hover:text-secondary-fixed transition-colors"
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            </RevealOneDark>
          ))}
        </div>
      </div>
    </section>
  );
}
