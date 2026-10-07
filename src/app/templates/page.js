import Link from "next/link";
import ClosingCta from "@/components/home/ClosingCta";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import TemplateShowcase from "@/components/home/TemplateShowcase";
import TopNoticeStrip from "@/components/home/TopNoticeStrip";

const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN || "docxio.com";
const siteUrl = `https://${baseDomain}`;
const pageUrl = `${siteUrl}/templates`;

const templates = [
  {
    name: "Template 01 — Personal Care & Longevity",
    url: "/preview/template-one",
  },
  {
    name: "Template 01 Dark — Executive Black Edition",
    url: "/preview/template-one-dark",
  },
  {
    name: "Template 02 — Precision Surgeon & Fellow",
    url: "/preview/template-two",
  },
  {
    name: "Template 02 Dark — Gold & Obsidian Prestige",
    url: "/preview/template-two-dark",
  },
  {
    name: "Template 03 — Modern Clinical Diagnostics",
    url: "/preview/template-three",
  },
  {
    name: "Template 03 Dark — Modern Deep Slate Medical",
    url: "/preview/template-three-dark",
  },
];

const questions = [
  {
    question: "What kinds of doctor website templates are available?",
    answer:
      "Docxio offers six medical website designs: three clinical templates, each available in a light and a dark edition. The styles suit personal practices, surgeons and specialists, and modern diagnostic clinics.",
  },
  {
    question: "Can I preview a doctor website template before choosing it?",
    answer:
      "Yes. Open any Live Preview from the template gallery to explore the example website before starting your own practice website.",
  },
  {
    question: "Are the medical website templates mobile-friendly?",
    answer:
      "The templates are designed to present practice information clearly across desktop and mobile screens, so patients can browse your profile and clinic details on the device they use.",
  },
  {
    question: "Do I need coding skills to create a website with a template?",
    answer:
      "No coding is needed. Choose a template and follow the website setup flow to add your professional and practice information.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Doctor Website Templates",
      description:
        "Explore six professional doctor website templates for physicians, surgeons, specialists, and clinics.",
      url: pageUrl,
      mainEntity: {
        "@type": "ItemList",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: templates.length,
        itemListElement: templates.map((template, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: template.name,
          url: `${siteUrl}${template.url}`,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Templates", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: questions.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export const metadata = {
  title: "Doctor Website Templates for Physicians & Clinics",
  description:
    "Explore six professional doctor website templates in light and dark styles. Preview medical website designs for physicians, surgeons, specialists, and clinics.",
  keywords: [
    "doctor website templates",
    "medical website templates",
    "physician website design",
    "doctor website builder",
    "clinic website design",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Doctor Website Templates for Physicians & Clinics",
    description:
      "Compare six professional medical website templates for doctors, specialists, and clinics. Explore live previews and choose a style for your practice.",
    siteName: "Docxio",
    images: [{ url: `${siteUrl}/docxio-logo.webp`, alt: "Docxio doctor website builder" }],
  },
  twitter: {
    card: "summary",
    title: "Doctor Website Templates for Physicians & Clinics",
    description:
      "Explore six professional doctor website designs in light and dark styles, with live previews for every template.",
    images: [`${siteUrl}/docxio-logo.webp`],
  },
  robots: { index: true, follow: true },
};

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-body antialiased selection:bg-secondary/15 selection:text-secondary">
      <TopNoticeStrip />
      <Header isTemplatesPage />
      <main>
        <section className="border-b border-slate-border/60 bg-gradient-to-b from-surface-subtle via-white to-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
              <Link className="hover:text-slate-900" href="/">Home</Link>
              <span aria-hidden="true" className="mx-2">/</span>
              <span aria-current="page" className="text-slate-800">Doctor website templates</span>
            </nav>
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Six designs · Light and dark editions
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-heading sm:text-5xl lg:text-6xl">
                Doctor Website Templates for Your Practice
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-muted">
                Find a professional medical website design that fits the way you
                practice. Explore six responsive templates for physicians,
                surgeons, medical specialists, and clinics—with live previews
                to help you compare each style before you choose.
              </p>
              <Link
                className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800"
                href="#templates"
              >
                Compare all six templates
                <span className="material-symbols-outlined ml-2 text-[18px]">arrow_downward</span>
              </Link>
            </div>
          </div>
        </section>

        <TemplateShowcase />

        <section className="border-b border-slate-border bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                A website that works for your practice
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-heading sm:text-4xl">
                Choose a medical website design patients can use
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-slate-muted">
              <p>
                A doctor website should make essential information easy to find:
                your professional profile, specialties, clinic locations, and
                appointment details. Docxio&apos;s doctor website templates give
                you a structured starting point, with layouts tailored to
                different medical practices.
              </p>
              <p>
                Compare light and dark medical website designs, open the live
                previews, and choose a visual style that feels right for your
                practice. Once you are ready, use the guided setup to create a
                doctor website without building pages from scratch.
              </p>
              <p>
                Whether you are a physician building a personal practice site,
                a surgeon presenting specialist services, or a clinic sharing
                diagnostic information, start with a template designed around
                clear professional and patient-facing content.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface-subtle py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-heading sm:text-4xl">
              Doctor website template FAQs
            </h2>
            <div className="mt-8 divide-y divide-slate-border border-y border-slate-border">
              {questions.map(({ question, answer }) => (
                <details key={question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                    {question}
                    <span className="material-symbols-outlined text-slate-500 transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-3 max-w-3xl leading-relaxed text-slate-muted">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </main>
      <ClosingCta />
      <Footer />
    </div>
  );
}
