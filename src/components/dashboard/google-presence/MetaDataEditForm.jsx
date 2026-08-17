"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const TITLE_MAX = 60;
const DESC_MAX = 160;

const DEFAULT_TITLE = "Dr. Ahmed Rahman | Top Cardiologist in Khulna | Book Now";
const DEFAULT_DESC =
  "Comprehensive cardiac care in Khulna. Dr. Ahmed Rahman specializes in advanced heart conditions, preventative cardiology, and patient-centered treatment plans. Schedule your consultation online today.";

export function MetaDataEditForm({ slug = "/index", pageLabel = "Home Page" }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] sm:p-6">
      {/* Card header */}
      <div className="mb-5 flex flex-col gap-3 border-b border-border pb-4 sm:mb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Edit {pageLabel} Meta Data
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Updates may take up to 48 hours to appear on Google.
          </p>
        </div>
        <span className="w-fit rounded-md bg-secondary px-3 py-1 font-mono text-xs text-foreground">
          {slug}
        </span>
      </div>

      <form className="flex flex-col gap-5 sm:gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="search-title" className="text-sm font-bold text-foreground">
            Search Title
          </label>
          <div className="relative">
            <Input
              id="search-title"
              type="text"
              defaultValue={DEFAULT_TITLE}
              className="pr-14"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground">
              {DEFAULT_TITLE.length}/{TITLE_MAX}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Aim for 50–60 characters to avoid truncation in search results.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="search-desc" className="text-sm font-bold text-foreground">
            Search Description
          </label>
          <div className="relative">
            <Textarea
              id="search-desc"
              rows={3}
              defaultValue={DEFAULT_DESC}
              className="resize-none pb-6"
            />
            <span className="absolute bottom-3 right-3 bg-card/80 px-1 font-mono text-xs text-muted-foreground">
              {DEFAULT_DESC.length}/{DESC_MAX}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            A compelling description encourages patients to click. Keep it under 160 characters.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-foreground">Social Sharing Image</label>
          <p className="text-xs text-muted-foreground">
            This image appears when your link is shared on Facebook, Twitter, or WhatsApp.
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className="group relative h-32 w-full shrink-0 overflow-hidden rounded-lg border border-border shadow-sm sm:h-24 sm:w-40">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKoZJh6bzFda_MhS9tMI6P55QOXfKMMEtzsuxzvlzXwS-8BcdBPqQ91I32OE1XC7CdSx2VeFETYkL8QIiyLLgdjxzkFFZfnNcljtU8jX245S_V8_EXmwsxVsaPT5amG1OL7tMVvb1-sfiQtJzRT0ofY1EUeFhmbaU8NPKQUmJiVxVNSdGiHkruhM3k5EN_1vVdy9QG0aiZUQbvVVY1JIPyO5GZUNxDHBRL1vV5rGUe_AVlQbKdbn7BSQ')",
                }}
              />
              <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="material-symbols-outlined text-white">delete</span>
              </div>
            </div>
            <div className="flex min-h-36 flex-1 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border p-4 text-center transition-colors hover:border-primary hover:bg-primary/5 sm:min-h-0 sm:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                <span className="material-symbols-outlined">cloud_upload</span>
              </div>
              <p className="text-sm font-medium text-foreground">Click to upload new image</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Recommended size: 1200 × 630px (JPG or PNG)
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col-reverse gap-2 border-t border-border pt-5 sm:flex-row sm:justify-end sm:gap-3 sm:pt-6">
          <Button variant="ghost" type="button" className="w-full text-primary hover:text-primary sm:w-auto">
            Discard Changes
          </Button>
          <Button type="button" className="flex w-full items-center gap-2 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 sm:w-auto">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            Save &amp; Publish
          </Button>
        </div>
      </form>
    </div>
  );
}
