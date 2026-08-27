"use client";

import { cn } from "@/lib/utils";
import BrowserPreview from "./BrowserPreview";

const DEVICE_OPTIONS = [
  { key: "desktop", label: "Desktop View", icon: "computer" },
  { key: "tablet", label: "Tablet View", icon: "tablet_mac" },
  { key: "mobile", label: "Mobile View", icon: "smartphone" },
];

const LivePreviewPane = () => {
  return (
    <section className="relative hidden flex-1 flex-col items-center justify-center overflow-hidden bg-muted p-8 lg:flex">
      {/* Subtle grid background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#001849 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Browser frame */}
      <div className="relative z-10 flex h-full max-h-[800px] w-full max-w-[1024px] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-[1.01]">
        <div className="flex h-10 shrink-0 items-center gap-4 border-b border-border bg-muted px-4">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-border/60" />
            <div className="h-3 w-3 rounded-full bg-border/60" />
            <div className="h-3 w-3 rounded-full bg-border/60" />
          </div>
          <div className="flex flex-1 justify-center">
            <div className="flex w-1/2 items-center justify-center gap-2 rounded-md border border-border/50 bg-card px-4 py-1 shadow-sm">
              <span className="material-symbols-outlined text-[12px]">lock</span>
              <span className="font-mono text-[10px] text-muted-foreground">
                drahmedrahman.docxio.com
              </span>
            </div>
          </div>
          <div className="w-12" />
        </div>

        <div className="relative flex-1 overflow-y-auto">
          <BrowserPreview />
          {/* Overlay to indicate it's a non-interactive preview */}
          <div className="pointer-events-none absolute inset-0 border-[3px] border-transparent transition-all duration-300" />
        </div>
      </div>

      {/* Floating device toggle */}
      <div className="absolute bottom-8 z-20 flex gap-1 rounded-full border border-border bg-card p-1 shadow-md">
        {DEVICE_OPTIONS.map((device) => (
          <button
            key={device.key}
            title={device.label}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
              device.key === "desktop"
                ? "bg-secondary-container text-primary"
                : "text-muted-foreground hover:bg-muted"
            )}
          >
            <span className="material-symbols-outlined">{device.icon}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default LivePreviewPane;