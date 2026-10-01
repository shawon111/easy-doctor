export const toDnsRecords = (config) => {
    const records = [];
    const recommendedIPv4 = config?.recommendedIPv4;
    const recommendedCNAME = config?.recommendedCNAME;

    if (Array.isArray(recommendedIPv4)) {
        const preferred = recommendedIPv4.filter((record) => record.rank === 1);

        for (const record of preferred) {
            for (const value of record.value || []) {
                records.push({
                    dnsType: "A",
                    name: "@",
                    value,
                    reason: "Recommended by Vercel. Use an A record or the CNAME option below.",
                });
            }
        }
    }

    if (Array.isArray(recommendedCNAME)) {
        const preferred = recommendedCNAME.filter((record) => record.rank === 1);

        for (const record of preferred) {
            records.push({
                dnsType: "CNAME",
                name: "@",
                value: record.value,
                reason: "Alternative recommendation. Use this instead of the A record option.",
            });
        }
    }

    // Retain compatibility with older Vercel responses that used `recommended`.
    if (!records.length && Array.isArray(config?.recommended)) {
        for (const record of config.recommended) {
            records.push({
                dnsType: record.type,
                name: record.domain ?? record.name ?? "@",
                value: record.value ?? "",
                reason: record.reason ?? "",
            });
        }
    }

    return records;
};

export const toVerificationRecords = (domain) =>
    (Array.isArray(domain?.verification) ? domain.verification : []).map((record) => ({
        recordType: record.type,
        name: record.domain ?? record.name,
        value: record.value,
    }));
