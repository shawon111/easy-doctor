"use client";

export function GreetingHeader({ name = "Dr. Ahmed", subtitle = "Here is what's happening with your practice today." }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-1">
        Good Morning, {name}
      </h2>
      <p className="text-base text-muted-foreground">{subtitle}</p>
    </div>
  );
}
