"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const TITLE_MAX = 70;
const DESC_MAX = 160;

export function MetaDataEditForm({ data, pageKey, onSave, onDiscard, saving }) {
  const getFormValues = () => {
    const source = pageKey === "site" ? data : data?.pages?.[pageKey];
    return {
      title: source?.title || (pageKey === "site" ? data?.defaultTitle : ""),
      description:
        source?.description || (pageKey === "site" ? data?.defaultDescription : ""),
      keywords: (pageKey === "site" ? data?.keywords : source?.keywords || []).join(", "),
    };
  };

  const [form, setForm] = useState(getFormValues);

  const resetForm = () => {
    setForm(getFormValues());
    onDiscard?.();
  };

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const submit = (event) => {
    event.preventDefault();
    onSave({
      title: form.title,
      description: form.description,
      keywords: form.keywords.split(",").map((keyword) => keyword.trim()).filter(Boolean),
    });
  };

  const pageLabel = pageKey === "site"
    ? "Site"
    : { home: "Home", about: "About", services: "Services", appointment: "Book Appointment" }[pageKey];
  const slug = pageKey === "site" ? "All pages" : pageKey === "home" ? "/index" : `/${pageKey}`;

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] sm:p-6">
      <div className="mb-5 flex flex-col gap-3 border-b border-border pb-4 sm:mb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Edit {pageLabel} Meta Data</h2>
          <p className="mt-1 text-sm text-muted-foreground">Updates may take up to 48 hours to appear on Google.</p>
        </div>
        <span className="w-fit rounded-md bg-secondary px-3 py-1 font-mono text-xs text-foreground">{slug}</span>
      </div>

      <form className="flex flex-col gap-5 sm:gap-6" onSubmit={submit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="search-title" className="text-sm font-bold text-foreground">Meta Title</label>
          <div className="relative">
            <Input id="search-title" value={form.title} onChange={updateField("title")} maxLength={TITLE_MAX} className="pr-14" required />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground">{form.title.length}/{TITLE_MAX}</span>
          </div>
          <p className="text-xs text-muted-foreground">Aim for 50–60 characters to avoid truncation in search results.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="search-desc" className="text-sm font-bold text-foreground">Meta Description</label>
          <div className="relative">
            <Textarea id="search-desc" rows={3} value={form.description} onChange={updateField("description")} maxLength={DESC_MAX} className="resize-none pb-6" required />
            <span className="absolute bottom-3 right-3 bg-card/80 px-1 font-mono text-xs text-muted-foreground">{form.description.length}/{DESC_MAX}</span>
          </div>
          <p className="text-xs text-muted-foreground">A compelling description encourages patients to click. Keep it under 160 characters.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="keywords" className="text-sm font-bold text-foreground">Keywords</label>
          <Input id="keywords" value={form.keywords} onChange={updateField("keywords")} placeholder="cardiologist, heart care, Khulna" />
          <p className="text-xs text-muted-foreground">Separate keywords with commas.</p>
        </div>

        <div className="mt-2 flex flex-col-reverse gap-2 border-t border-border pt-5 sm:flex-row sm:justify-end sm:gap-3 sm:pt-6">
          <Button variant="ghost" type="button" onClick={resetForm} className="w-full text-primary hover:text-primary sm:w-auto">Discard Changes</Button>
          <Button type="submit" disabled={saving} className="flex w-full items-center gap-2 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 sm:w-auto">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            {saving ? "Saving..." : "Save & Publish"}
          </Button>
        </div>
      </form>
    </div>
  );
}
