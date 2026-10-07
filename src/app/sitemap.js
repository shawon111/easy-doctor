const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN || "docxio.site";
const siteUrl = `https://${baseDomain}`;

export default function sitemap() {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/templates`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
