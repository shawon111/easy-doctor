import React from "react";
import Image from "next/image";

const HERO_IMAGE =
  "https://ui-avatars.com/api/?name=Ahmed+Rahman&size=512&background=0050cb&color=ffffff&bold=true";

const HeroPreview = () => (
  <div className="relative w-full min-h-[400px] flex items-center overflow-hidden pt-16 px-12 pb-24">
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary-container/30 to-card" />
    <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 -translate-y-12 translate-x-12 rounded-bl-[120px] bg-accent-light-blue/20" />

    <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-12 md:flex-row">
      <div className="flex flex-1 flex-col gap-4">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary-container/50 px-3 py-1 text-primary">
          <span className="material-symbols-outlined text-[14px]">verified</span>
          <span className="text-xs font-semibold">Accepting New Patients</span>
        </div>
        <h1 className="text-[42px] leading-[48px] font-bold tracking-tight text-foreground">
          Dr. Ahmed Rahman
        </h1>
        <h2 className="text-lg font-semibold text-primary">Senior Cardiologist</h2>
        <p className="mt-2 max-w-md text-base text-muted-foreground">
          Specializing in Interventional Cardiology and Heart Failure with over 15 years of
          clinical excellence.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <button className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-sm">
            Book Appointment
          </button>
          <button className="rounded-lg border border-border px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-muted">
            Contact Clinic
          </button>
        </div>
      </div>
      <div className="relative h-64 w-64 shrink-0 md:h-80 md:w-80">
        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-full bg-primary/10" />
        <Image
          src={HERO_IMAGE}
          alt="Dr. Ahmed Rahman Hero Image"
          width={320}
          height={320}
          className="relative z-10 h-full w-full rounded-full border-4 border-card object-cover shadow-lg"
        />
      </div>
    </div>
  </div>
);

const StatItem = ({ value, label, children }) => (
  <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
    <span className="text-lg font-bold text-primary">{value}</span>
    <span className="mt-1 text-xs font-medium text-muted-foreground">{label}</span>
    {children}
  </div>
);

const RatingStars = () => (
  <div className="mt-1 flex text-sm text-amber-500">
    {["star", "star", "star", "star", "star_half"].map((icon) => (
      <span
        key={icon}
        className="material-symbols-outlined text-[16px]"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {icon}
      </span>
    ))}
  </div>
);

const StatsBar = () => (
  <div className="relative z-20 mx-auto mt-12 w-full max-w-4xl px-12">
    <div className="flex items-center justify-between rounded-xl border border-border/30 bg-card p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <StatItem value="15+" label="Years Experience" />
      <div className="h-full w-px bg-border/50" />
      <StatItem value="5k+" label="Patients Treated" />
      <div className="h-full w-px bg-border/50" />
      <StatItem value="4.9">
        <RatingStars />
      </StatItem>
    </div>
  </div>
);

const BrowserPreview = () => {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <HeroPreview />
      <StatsBar />
      <div className="h-64" />
    </div>
  );
};

export default BrowserPreview;