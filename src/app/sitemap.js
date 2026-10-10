import { getMarketingBaseUrl } from "@/lib/seo/urls";

const publicPages = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/templates", changeFrequency: "monthly", priority: 0.9 },
  { path: "/appointment-guide", changeFrequency: "monthly", priority: 0.6 },
  { path: "/domain-connection-guide", changeFrequency: "monthly", priority: 0.6 },
  { path: "/website-creation-guide", changeFrequency: "monthly", priority: 0.7 },
  { path: "/security-architecture", changeFrequency: "yearly", priority: 0.3 },
  { path: "/subscription-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.2 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap() {
  const baseUrl = getMarketingBaseUrl();

  return publicPages.map((page) => ({
    url: new URL(page.path, baseUrl).toString(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
