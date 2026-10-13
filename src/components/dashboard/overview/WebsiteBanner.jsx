import { Button } from "@/components/ui/button";
import { requireUser } from "@/lib/requireUser";
import Link from "next/link";

export async function WebsiteBanner() {
  const user = await requireUser();
  const { websiteCreated } = user;
  return (
    <div className={websiteCreated ? "hidden" : ""}>
      <div className="flex w-full flex-col items-stretch gap-3 border-b border-indigo-500/20 bg-gradient-to-r from-indigo-950/80 via-slate-900 to-indigo-950/80 px-4 py-3.5 text-slate-200 sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-8">
        <div className="flex items-start gap-2.5 sm:items-center">
          <span className="material-symbols-outlined text-[20px] text-indigo-400">campaign</span>
          <span className="text-xs sm:text-sm font-medium text-slate-300">
            ✨ Your professional website isn&apos;t ready yet. Choose a template and launch your website in minutes.
          </span>
        </div>
        <Link
          href="/dashboard/website/create"
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm shadow-indigo-600/30 transition-all hover:bg-indigo-500 hover:shadow-indigo-600/50"
        >
          Create Website
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
