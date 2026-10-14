import { getMarketingBaseUrl } from "@/lib/seo/urls";
import { getDoctorsDirectory } from "@/services/doctors-directory.service";

const publicPages = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/templates", changeFrequency: "monthly", priority: 0.9 },
  { path: "/doctors", changeFrequency: "daily", priority: 0.8 },
  { path: "/appointment-guide", changeFrequency: "monthly", priority: 0.6 },
  { path: "/domain-connection-guide", changeFrequency: "monthly", priority: 0.6 },
  { path: "/website-creation-guide", changeFrequency: "monthly", priority: 0.7 },
  { path: "/security-architecture", changeFrequency: "yearly", priority: 0.3 },
  { path: "/subscription-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.2 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
];

export default async function sitemap() {
  const baseUrl = getMarketingBaseUrl();

  const staticEntries = publicPages.map((page) => ({
    url: new URL(page.path, baseUrl).toString(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  try {
    const doctors = await getDoctorsDirectory();
    const doctorEntries = doctors
      .filter((doctor) => Boolean(doctor.slug || doctor.subdomain))
      .map((doctor) => ({
        url: new URL(`/doctors/${doctor.slug || doctor.subdomain}`, baseUrl).toString(),
        lastModified: doctor.updatedAt ? new Date(doctor.updatedAt) : new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      }));

    return [...staticEntries, ...doctorEntries];
  } catch {
    return staticEntries;
  }
}
