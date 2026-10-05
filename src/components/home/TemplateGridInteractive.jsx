"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import templateOneImg from "@/assets/templates/template-one-home.png";
import templateTwoImg from "@/assets/templates/template-two-home.png";
import templateThreeImg from "@/assets/templates/template-three-home.png";
import templateOneDarkImg from "@/assets/templates/template-one-dark-home.png";
import templateTwoDarkImg from "@/assets/templates/template-two-dark-home.png";
import templateThreeDarkImg from "@/assets/templates/template-three-dark-home.png";

const templatesData = [
  {
    id: "01-light",
    mode: "light",
    number: "Template 01",
    tag: "Longevity Care",
    badgeColor: "bg-blue-600",
    badgeLabel: "Light Edition",
    imgAlt: "Template 01 Light - Expert Care with a Personal Touch",
    imgSrc: templateOneImg,
    docTitle: "Dr. John • Family Physician",
    title: "Personal Care & Longevity",
    desc: "Warm, patient-centric layout with prominent physician philosophy, bilingual tags, and appointment booking modules.",
    bottomLabel: "Subdomain Ready",
    isDark: false,
    previewLink: "/preview/template-one"
  },
  {
    id: "01-dark",
    mode: "dark",
    number: "Template 01",
    tag: "Obsidian Edition",
    badgeColor: "bg-blue-400",
    badgeLabel: "Executive Dark",
    imgAlt: "Template 01 Dark - Expert Care with a Personal Touch",
    imgSrc: templateOneDarkImg,
    docTitle: "Dr. John • Dark Theme",
    title: "Sleek Executive Black Edition",
    desc: "High-contrast midnight backdrop engineered for premium concierge doctors, private wellness clinics, and executive care.",
    bottomLabel: "Night-shift Friendly",
    isDark: true,
    previewLink: "/preview/template-one-dark"
  },
  {
    id: "02-light",
    mode: "light",
    number: "Template 02",
    tag: "Surgeon & Specialist",
    badgeColor: "bg-amber-500",
    badgeLabel: "Light Edition",
    imgAlt: "Template 02 Light - Surgeon & Precision Specialist",
    imgSrc: templateTwoImg,
    docTitle: "Dr. John • MD, PhD, FRCP",
    title: "Precision Surgeon & Fellow",
    desc: "Designed for senior professors, specialized surgeons, and distinguished hospital consultants with clinical procedure portfolios.",
    bottomLabel: "Pedigree Focus",
    isDark: false,
    previewLink: "/preview/template-two"
  },
  {
    id: "02-dark",
    mode: "dark",
    number: "Template 02",
    tag: "Prestige Dark",
    badgeColor: "bg-amber-400",
    badgeLabel: "Gold & Obsidian",
    imgAlt: "Template 02 Dark - Gold & Obsidian Prestige Edition",
    imgSrc: templateTwoDarkImg,
    docTitle: "Harley Street Style • Obsidian",
    title: "Gold & Obsidian Prestige",
    desc: "Unrivaled prestige styling combining warm gold typography accents with surgical dark room focus.",
    bottomLabel: "Surgical Protocols",
    isDark: true,
    previewLink: "/preview/template-two-dark"
  },
  {
    id: "03-light",
    mode: "light",
    number: "Template 03",
    tag: "Clinical & Diagnostic",
    badgeColor: "bg-emerald-600",
    badgeLabel: "Light Edition",
    imgAlt: "Template 03 Light - Precision Care for a Healthier Future",
    imgSrc: templateThreeImg,
    docTitle: "Dr. MedLink • Modern Clinical",
    title: "Modern Clinical Diagnostics",
    desc: "Designed for cardiology, neurology, and multichamber diagnostics with structured consultation stages and test lab breakdowns.",
    bottomLabel: "Chambers Map Ready",
    isDark: false,
    previewLink: "/preview/template-three"
  },
  {
    id: "03-dark",
    mode: "dark",
    number: "Template 03",
    tag: "Modern Clinical Dark",
    badgeColor: "bg-cyan-400",
    badgeLabel: "Deep Slate",
    imgAlt: "Template 03 Dark - Deep Slate Medical Edition",
    imgSrc: templateThreeDarkImg,
    docTitle: "Diagnostics • Deep Slate Edition",
    title: "Modern Deep Slate Medical",
    desc: "Futuristic clinical aesthetic with glowing cyan indicators, ideal for cutting-edge imaging, genomic, and interventional specialists.",
    bottomLabel: "Modern Cardiology",
    isDark: true,
    previewLink: "/preview/template-three-dark"
  }
];

export default function TemplateGridInteractive() {
  const [filter, setFilter] = useState("all");

  const filteredTemplates = templatesData.filter((item) => {
    if (filter === "all") return true;
    return item.mode === filter;
  });

  return (
    <>
      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <p className="text-[11px] uppercase font-bold tracking-[0.2em] text-secondary mb-3">6 Bespoke Clinical Architectures</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-heading tracking-tight">
            A Professional Website That <br className="hidden sm:inline" />
            <span className="font-serif font-normal italic text-slate-800">Feels Authentically Yours.</span>
          </h2>
          <p className="text-base text-slate-muted max-w-2xl mt-3">
            Every template is designed exclusively for physicians. Compare distinct light and dark editions for high-contrast visibility and executive clinic appeal.
          </p>
        </div>
        <div className="inline-flex p-1.5 bg-white rounded-xl border border-slate-border shadow-sm self-start md:self-auto">
          <button
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              filter === "all" ? "bg-primary text-white" : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => setFilter("all")}
          >
            All Templates (6)
          </button>
          <button
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              filter === "light" ? "bg-primary text-white" : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => setFilter("light")}
          >
            Light Mode (3)
          </button>
          <button
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              filter === "dark" ? "bg-primary text-white" : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => setFilter("dark")}
          >
            Dark Mode (3)
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTemplates.map((tpl) => (
          <div
            key={tpl.id}
            className={`template-card rounded-2xl border shadow-subtle hover:shadow-window transition-all overflow-hidden flex flex-col group ${
              tpl.isDark
                ? "bg-slate-900 text-white border-slate-800"
                : "bg-white border-slate-border"
            }`}
          >
            <div
              className={`px-5 py-3.5 border-b flex items-center justify-between ${
                tpl.isDark ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${tpl.badgeColor}`}></span>
                <span className={`text-xs font-extrabold uppercase tracking-wider ${tpl.isDark ? "text-white" : "text-slate-900"}`}>
                  {tpl.number}
                </span>
                <span className={`text-[11px] font-semibold ${tpl.isDark ? "text-slate-400" : "text-slate-500"}`}>
                  • {tpl.badgeLabel}
                </span>
              </div>
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                  tpl.isDark
                    ? "bg-slate-800 text-blue-300 border-slate-700"
                    : "bg-white text-slate-700 border-slate-200"
                }`}
              >
                {tpl.tag}
              </span>
            </div>

            <div className={`relative overflow-hidden h-80 border-b ${tpl.isDark ? "bg-slate-950 border-slate-800" : "bg-slate-100 border-slate-200"}`}>
              <Image
                alt={tpl.imgAlt}
                className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:-translate-y-16"
                src={tpl.imgSrc}
                width={800}
                height={600}
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end justify-between">
                <span className="text-[10px] font-mono font-bold text-white bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                  {tpl.docTitle}
                </span>
                <span className="text-[10px] text-white font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">pan_tool_alt</span> Hover to Preview
                </span>
              </div>
            </div>

            <div className={`p-6 flex-1 flex flex-col justify-between ${tpl.isDark ? "bg-slate-900" : "bg-white"}`}>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`text-lg font-bold ${tpl.isDark ? "text-white" : "text-slate-900"}`}>
                    {tpl.title}
                  </h4>
                </div>
                <p className={`text-xs leading-relaxed ${tpl.isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {tpl.desc}
                </p>
              </div>
              <div className={`mt-6 pt-4 border-t flex items-center justify-between ${tpl.isDark ? "border-slate-800" : "border-slate-100"}`}>
                <span className={`text-[11px] font-mono ${tpl.isDark ? "text-slate-400" : "text-slate-500"}`}>
                  {tpl.bottomLabel}
                </span>
                <Link
                  className={`inline-flex items-center text-xs font-bold ${
                    tpl.isDark ? "text-blue-400 hover:text-blue-300" : "text-secondary hover:text-secondary-hover"
                  }`}
                  href={tpl.previewLink}
                  target="_blank"
                >
                  Live Preview <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
