"use client";

import { useState } from "react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { Button } from "../ui/button";

export default function SubdomainBannerForm() {
  const [subdomain, setSubdomain] = useState("dr-tariqul");

  const availabilityMutation = useMutation({
    mutationFn: async (name) => {
      const response = await fetch(
        `/api/info/subdomain/search?subdomain=${encodeURIComponent(name)}`
      );

      if (!response.ok) {
        throw new Error("Unable to check subdomain availability");
      }

      const result = await response.json();
      if (!result.success || typeof result.data !== "boolean") {
        throw new Error("Invalid subdomain availability response");
      }

      return result.data;
    },
    mutationKey: ["subdomain-availability", subdomain],
  });

  const availabilityStatus =
    subdomain.length < 2
      ? "idle"
      : availabilityMutation.isPending
        ? "checking"
        : availabilityMutation.isError
          ? "error"
          : availabilityMutation.data === undefined
            ? "idle"
            : availabilityMutation.data
            ? "available"
            : "unavailable";

  const availabilityMessage = {
    checking: "Checking subdomain availability...",
    available: "This subdomain is available.",
    unavailable: "This subdomain is already taken. Try another.",
    error: "Unable to check availability right now. Please try again.",
  }[availabilityStatus];

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
            onChange={(e) => {
              setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""));
              availabilityMutation.reset();
            }}
          />
          <span className="text-blue-400 font-bold whitespace-nowrap">.docxio.com</span>
        </div>
        <Button
          className="px-5 py-3 bg-secondary text-white font-semibold text-sm rounded-lg hover:bg-secondary-hover transition-colors text-center whitespace-nowrap shadow-md"
          onClick={() => {
            if (subdomain.length >= 2) {
              availabilityMutation.mutate(subdomain);
            }
          }}
        >
          Check Availability
        </Button>
      </div>
      {availabilityMessage && (
        <p
          aria-live="polite"
          className={`mt-2 text-sm text-center lg:text-left ${
            availabilityStatus === "available"
              ? "text-emerald-400"
              : availabilityStatus === "checking"
                ? "text-slate-300"
                : "text-red-400"
          }`}
        >
          {availabilityMessage}
        </p>
      )}
      <p className="text-[11px] text-slate-400 mt-2 text-center lg:text-left flex items-center gap-1">
        <span className="material-symbols-outlined text-emerald-400 text-[14px]">check_circle</span>
        Docxio subdomain included with website access • No credit card to register
      </p>
    </div>
  );
}
