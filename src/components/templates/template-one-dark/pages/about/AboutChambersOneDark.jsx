import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

export default function AboutChambersOneDark() {
  return (
    <SectionFadeOneDark className="py-32 px-6 md:px-10 mesh-gradient">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Where Excellence Resides</h2>
            <p className="text-body-lg text-on-surface-variant">
              Dr. Vance currently chairs the Precision Medicine Department at the Vance Clinical Institute, a
              state-of-the-art facility designed for patient comfort and surgical precision.
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-5 p-6 rounded-3xl glass-container">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <p className="font-bold text-lg text-on-surface">The Vance Clinical Institute</p>
                  <p className="text-on-surface-variant">
                    450 Medical Plaza, Suite 200
                    <br />
                    Metropolis Health District
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-6 rounded-3xl glass-container">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary-fixed">schedule</span>
                </div>
                <div>
                  <p className="font-bold text-lg text-on-surface">Consultation Hours</p>
                  <p className="text-on-surface-variant">
                    Mon – Fri: 8:00 AM – 5:00 PM
                    <br />
                    Sat: 9:00 AM – 1:00 PM (By Appointment)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/3] relative">
            <div
              aria-hidden="true"
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-JtnM4GUEG_-hpHQzxNdg0t6MYMX9xOVPcjXlGk39XKd3ZiBzGNv-o0Ez49Njbvw70u0id3e6ahXScC4jP-sQKpisIgyCKzJl1JUZf7IKICj8-R03YNDouEmJH6rk_9S2uT1d79n-TI3gmHtrb2lB3DiksPqFH1r02CfYCn6MhKwk5C3-0jGvejEHswgRKYW3xkjZXVoraYta5CyJW42kEHTfuOmehB21KclP62yNiHQi3uirxO87-Q')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>
      </div>
    </SectionFadeOneDark>
  );
}
