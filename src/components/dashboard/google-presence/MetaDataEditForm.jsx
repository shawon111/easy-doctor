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
      ogImage: pageKey === "site" ? data?.social?.ogImage || "" : source?.ogImage || "",
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
      ogImage: form.ogImage.trim(),
    });
  };

  const pageLabel = pageKey === "site"
    ? "Site"
    : { home: "Home", about: "About", services: "Services", appointment: "Book Appointment" }[pageKey];
  const slug = pageKey === "site" ? "All pages" : pageKey === "home" ? "/index" : `/${pageKey}`;

  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-6 shadow-sm">
      <div className="mb-6 flex flex-col gap-3 border-b border-slate-800/80 pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white">Edit {pageLabel} Metadata</h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">Updates may take up to 48 hours to be indexed by search engines.</p>
        </div>
        <span className="w-fit rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-mono text-xs font-semibold text-indigo-300">{slug}</span>
      </div>

      <form className="flex flex-col gap-5 sm:gap-6" onSubmit={submit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="search-title" className="text-xs font-bold uppercase tracking-wider text-slate-300">Meta Title</label>
          <div className="relative">
            <Input
              id="search-title"
              value={form.title}
              onChange={updateField("title")}
              maxLength={TITLE_MAX}
              className="pr-16 rounded-xl border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
              required
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-slate-400">{form.title.length}/{TITLE_MAX}</span>
          </div>
          <p className="text-xs text-slate-400">Recommended length: 50–60 characters. Clearly state your name and clinical specialty.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="search-desc" className="text-xs font-bold uppercase tracking-wider text-slate-300">Meta Description</label>
          <div className="relative">
            <Textarea
              id="search-desc"
              rows={3}
              value={form.description}
              onChange={updateField("description")}
              maxLength={DESC_MAX}
              className="resize-none pb-6 rounded-xl border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
              required
            />
            <span className="absolute bottom-2.5 right-3 font-mono text-xs text-slate-400">{form.description.length}/{DESC_MAX}</span>
          </div>
          <p className="text-xs text-slate-400">Accurately summarize your clinical services to help patients make an appointment.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="keywords" className="text-xs font-bold uppercase tracking-wider text-slate-300">Keywords (Optional)</label>
          <Input
            id="keywords"
            value={form.keywords}
            onChange={updateField("keywords")}
            placeholder="e.g. cardiologist, heart specialist, dhaka"
            className="rounded-xl border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
          />
          <p className="text-xs text-slate-400">Comma-separated internal guidance keywords for search engine context.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="og-image" className="text-xs font-bold uppercase tracking-wider text-slate-300">Open Graph Share Image URL</label>
          <Input
            id="og-image"
            type="url"
            value={form.ogImage}
            onChange={updateField("ogImage")}
            placeholder="https://example.com/clinic-profile.jpg"
            className="rounded-xl border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
          />
          <p className="text-xs text-slate-400">Preview image displayed when your website is shared on social networks.</p>
        </div>

        <div className="mt-2 flex flex-col-reverse gap-2.5 border-t border-slate-800/80 pt-5 sm:flex-row sm:justify-end sm:pt-6">
          <Button
            variant="outline"
            type="button"
            onClick={resetForm}
            className="w-full rounded-xl border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white text-xs font-semibold sm:w-auto"
          >
            Discard Changes
          </Button>
          <Button
            type="submit"
            disabled={saving}
            className="flex w-full items-center gap-2 rounded-xl bg-indigo-600 px-5 text-xs font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-500 disabled:opacity-50 sm:w-auto"
          >
            <span className="material-symbols-outlined text-[16px]">check_circle</span>
            {saving ? "Saving..." : "Save SEO Metadata"}
          </Button>
        </div>
      </form>
    </div>
  );
}
