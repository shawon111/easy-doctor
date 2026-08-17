"use client";

export function GoogleSearchPreview({
  url = "docxio.com",
  breadcrumbs = "dr › ahmed-rahman",
  title = "Dr. Ahmed Rahman | Top Cardiologist in Khulna | Book Now",
  description = "Comprehensive cardiac care in Khulna. Dr. Ahmed Rahman specializes in advanced heart conditions, preventative cardiology, and patient-centered treatment plans. Schedule your consultation online today.",
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] sm:p-6">
      {/* Section header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Google Search Preview</h2>
        <span className="material-symbols-outlined text-muted-foreground" title="Desktop view">
          desktop_windows
        </span>
      </div>
      <div className="rounded-lg border border-border/50 bg-muted/20 p-4 sm:p-6">
        <div className="flex max-w-[600px] flex-col gap-1">
          {/* URL / breadcrumb row */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#4d5156] sm:text-sm">
            <span className="flex items-center gap-1 rounded-full bg-[#f1f3f4] px-2 py-0.5 text-xs">
              <span className="material-symbols-outlined text-[14px]">public</span>
              {url}
            </span>
            {breadcrumbs.split("›").map((seg, i, arr) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-[#4d5156]">›</span>}
                <span>{seg.trim()}</span>
              </span>
            ))}
          </div>
          <h3 className="cursor-pointer text-lg font-medium leading-6 text-[#1a0dab] hover:underline sm:truncate sm:text-xl sm:leading-[26px]">
            {title}
          </h3>
          <p className="text-xs leading-5 text-[#4d5156] sm:text-sm sm:leading-[22px]">{description}</p>
        </div>
      </div>
    </div>
  );
}
