const normalizeHost = (value) => {
    const candidate = String(value || "").trim();

    if (!candidate) {
        return "";
    }

    try {
        return new URL(
            candidate.includes("://") ? candidate : `https://${candidate}`
        ).host.toLowerCase();
    } catch {
        return "";
    }
};

export const getMarketingBaseUrl = () => {
    const configuredHost = normalizeHost(
        process.env.NEXT_PUBLIC_BASE_DOMAIN || "www.docxio.com"
    );
    const host =
        configuredHost === "docxio.com" ? "www.docxio.com" : configuredHost;

    return new URL(`https://${host || "www.docxio.com"}`);
};

export const getDoctorCanonicalBaseUrl = (website) => {
    // If website has a connected/verified custom domain, use it as canonical
    if (
        website?.domain &&
        ["connected", "verified"].includes(website?.domainStatus)
    ) {
        try {
            const domain = String(website.domain).trim();
            const domainUrl = new URL(
                domain.includes("://") ? domain : `https://${domain}`
            );
            if (domainUrl.protocol === "https:" || domainUrl.protocol === "http:") {
                return new URL(`https://${domainUrl.host}`);
            }
        } catch {
            // fallback to platform subdomain if domain parsing fails
        }
    }

    const baseDomain = normalizeHost(
        process.env.NEXT_PUBLIC_BASE_DOMAIN || "docxio.com"
    ).replace(/^www\./, "");
    const subdomain = String(website?.subdomain || "")
        .trim()
        .toLowerCase();
    const isValidSubdomain = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(
        subdomain
    );
    const host =
        isValidSubdomain && baseDomain ? `${subdomain}.${baseDomain}` : "";

    return host ? new URL(`https://${host}`) : null;
};

export const resolvePublicImageUrl = (value, baseUrl) => {
    const image = String(value || "").trim();

    if (!image || /^(?:javascript|data|vbscript):/i.test(image)) {
        return undefined;
    }

    try {
        const url = new URL(image, baseUrl);
        return ["http:", "https:"].includes(url.protocol)
            ? url.toString()
            : undefined;
    } catch {
        return undefined;
    }
};

export const serializeJsonLd = (value) =>
    JSON.stringify(value)
        .replace(/</g, "\\u003c")
        .replace(/>/g, "\\u003e")
        .replace(/&/g, "\\u0026")
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029");
