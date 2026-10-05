"use client";

import { useState } from "react";
import Link from "next/link";

export default function SubdomainBannerForm() {
  const [subdomain, setSubdomain] = useState("dr-tariqul");

  return (
    <div className="w-full lg:w-auto flex-1 max-w-lg">
      <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-slate-800/80 p-2 rounded-xl border border-slate-700">
        <div className="flex-1 flex items-center px-3 text-white font-mono text-sm">
          <span className="text-slate-400">https://</span>
          <input
            className="bg-transparent border-0 focus:outline-none text-white font-bold w-full px-1"
            id="live-name-input"
            type="text"
            value={subdomain}
            onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
          />
          <span className="text-blue-400 font-bold whitespace-nowrap">.docxio.site</span>
        </div>
        <Link
          className="px-5 py-3 bg-secondary text-white font-semibold text-sm rounded-lg hover:bg-secondary-hover transition-colors text-center whitespace-nowrap shadow-md"
          href="#pricing"
        >
          Check Availability
        </Link>
      </div>
      <p className="text-[11px] text-slate-400 mt-2 text-center lg:text-left flex items-center gap-1">
        <span className="material-symbols-outlined text-emerald-400 text-[14px]">check_circle</span>
        Free forever • 256-Bit SSL certificate included • No credit card to test
      </p>
    </div>
  );
}
