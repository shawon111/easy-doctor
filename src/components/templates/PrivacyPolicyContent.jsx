import Link from "next/link";
import { privacyPolicyDefaults } from "@/content/defaults/privacy-policy";
import { replaceTemplateVariables } from "@/lib/content/resolve-template-content";

export default function PrivacyPolicyContent({ name, homeHref = "/" }) {
  const content = replaceTemplateVariables(privacyPolicyDefaults, {
    name: name || "this practice",
  });

  return (
    <main className="min-h-screen bg-surface text-on-surface">
      <div className="mx-auto max-w-3xl px-margin-mobile md:px-margin-desktop py-24">
        <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
          {content.badge}
        </span>
        <h1 className="font-headline-lg text-headline-lg mt-4 mb-4">{content.heading}</h1>
        <p className="text-on-surface-variant mb-3">{content.intro}</p>
        <p className="font-label-sm text-label-sm text-on-surface-variant mb-12">
          {content.updatedLabel}: {content.updated}
        </p>

        <div className="space-y-10">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-headline-md text-headline-md mb-3">{section.title}</h2>
              <p className="text-on-surface-variant leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <Link href={homeHref} className="inline-flex items-center gap-2 mt-16 text-primary font-button">
          <span className="material-symbols-outlined">arrow_back</span>
          Back to home
        </Link>
      </div>
    </main>
  );
}