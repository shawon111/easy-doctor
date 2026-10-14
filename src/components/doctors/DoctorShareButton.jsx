"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";

export default function DoctorShareButton({ doctorName }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = `Dr. ${doctorName} - Practice Profile`;
    const text = `Check out Dr. ${doctorName}'s practice profile, qualifications, and chamber hours on Docxio.`;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        // User dismissed share dialog or share failed, fallback to copy
      }
    }

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // clipboard copy failed
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-100"
      aria-label={`Share Dr. ${doctorName}'s profile`}
    >
      {copied ? (
        <>
          <Check className="size-4 text-emerald-600" aria-hidden="true" />
          <span className="text-emerald-700">Link Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="size-4 text-slate-500" aria-hidden="true" />
          <span>Share Profile</span>
        </>
      )}
    </button>
  );
}
