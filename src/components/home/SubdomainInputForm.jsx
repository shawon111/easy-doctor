"use client";

import { useState } from "react";
import Link from "next/link";

export default function SubdomainInputForm() {
  const [subdomain, setSubdomain] = useState("dr-tariqul");

  const handleChange = (e) => {
    const val = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "");
    setSubdomain(val);
  };

  return (
    <div className="w-full max-w-xl bg-white p-2 rounded-xl border-2 border-slate-border shadow-elevated mb-6 flex flex-col sm:flex-row gap-2">
      <div className="flex-1 flex items-center px-3 gap-2">
        <span className="text-slate-400 font-mono text-sm">https://</span>
        <input
          className="w-full text-slate-900 font-semibold focus:outline-none placeholder:text-slate-400 text-sm font-mono bg-transparent"
          id="hero-subdomain-input"
          placeholder="dr-yourname"
          type="text"
          value={subdomain}
          onChange={handleChange}
        />
        <span className="text-secondary font-mono text-xs font-bold bg-secondary-soft px-2 py-1 rounded">
          .docxio.site
        </span>
      </div>
      <Link
        className="inline-flex items-center justify-center font-semibold text-sm px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-hover transition-colors whitespace-nowrap shadow-sm"
        href="/register"
      >
        Claim Free Subdomain
      </Link>
    </div>
  );
}
