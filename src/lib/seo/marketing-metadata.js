import { getMarketingBaseUrl } from "./urls";

export const MARKETING_OG_IMAGE = "/docxio-og.png";

export const createMarketingMetadata = ({
    title,
    description,
    path = "/",
    image = MARKETING_OG_IMAGE,
}) => {
    const baseUrl = getMarketingBaseUrl();
    const canonicalUrl = new URL(path, baseUrl).toString();
    const imageUrl = image ? new URL(image, baseUrl).toString() : undefined;

    return {
        title: { absolute: title },
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            type: "website",
            url: canonicalUrl,
            title,
            description,
            siteName: "Docxio",
            ...(imageUrl && {
                images: [{ url: imageUrl, alt: "Docxio doctor website builder" }],
            }),
        },
        twitter: {
            card: imageUrl ? "summary_large_image" : "summary",
            title,
            description,
            ...(imageUrl && { images: [imageUrl] }),
        },
    };
};
