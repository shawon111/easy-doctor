import { getMarketingBaseUrl } from "@/lib/seo/urls";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/dashboard/", "/bossdocx/", "/preview/"],
        },
        sitemap: new URL("/sitemap.xml", getMarketingBaseUrl()).toString(),
    };
}
