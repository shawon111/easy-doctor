import { connectDB } from "@/config/database";
import { requireUser } from "@/lib/requireUser";
import User from "@/models/user.model";
import Website from "@/models/website.model";
import SEO from "@/models/seo.model";
import { toDnsRecords, toVerificationRecords } from "@/lib/domain-config";
import {
    addDomain,
    getDomainConfig,
    getDomain,
    removeDomain,
} from "@/services/website.service";
import { NextResponse } from "next/server";

const formatDomain = (website) => ({
    name: website.domain,
    status:
        website.domainStatus === "verified"
            ? website.domainVerified
                ? "connected"
                : "pending"
            : website.domainStatus,
    verified: website.domainVerified === true,
    verification: (website.vercelVerification || []).map((record) => ({
        type: record.recordType,
        name: record.name,
        value: record.value,
    })),
    dnsRecords: (website.dnsRecords || []).map((record) => ({
        type: record.dnsType,
        name: record.name,
        value: record.value,
        reason: record.reason,
    })),
});

// get domain info from website
export async function GET() {
    try {
        const user = await requireUser();

        await connectDB();

        let website = await Website.findOne({
            userId: user._id,
        })
            .select({
                _id: 1,
                subdomain: 1,
                domain: 1,
                domainStatus: 1,
                domainVerified: 1,
                dnsRecords: 1,
                dnsConfigCheckedAt: 1,
                vercelVerification: 1
            })
            .lean();

        if (!website) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Website not found",
                },
                {
                    status: 404,
                }
            );
        }

        let liveDomain;

        if (website.domain) {
            const [vercelDomain, config] = await Promise.all([
                getDomain(website.domain),
                getDomainConfig(website.domain),
            ]);
            const verified = vercelDomain.verified === true;
            const currentVerification = toVerificationRecords(vercelDomain);
            const verification = verified
                ? []
                : currentVerification.length
                  ? currentVerification
                  : website.vercelVerification || [];
            const dnsRecords = toDnsRecords(config);
            const connected = verified && !config.misconfigured;
            liveDomain = {
                name: website.domain,
                status: connected ? "connected" : "pending",
                verified,
                verification: verification.map((record) => ({
                    type: record.recordType,
                    name: record.name,
                    value: record.value,
                })),
                dnsRecords: dnsRecords.map((record) => ({
                    type: record.dnsType,
                    name: record.name,
                    value: record.value,
                    reason: record.reason,
                })),
            };

            const updatedWebsite = await Website.findByIdAndUpdate(
                website._id,
                {
                    $set: {
                        domainVerified: verified,
                        domainStatus: connected ? "connected" : "pending",
                        dnsRecords,
                        vercelVerification: verification,
                        dnsConfigCheckedAt: new Date(),
                    },
                },
                { new: true }
            )
                .select({
                    subdomain: 1,
                    subdomain: 1,
                    domain: 1,
                    domainStatus: 1,
                    domainVerified: 1,
                    dnsRecords: 1,
                    dnsConfigCheckedAt: 1,
                    vercelVerification: 1,
                })
                .lean();
            website = updatedWebsite;
        }

        return NextResponse.json({
            success: true,
            data: {
                subdomain: website.subdomain,
                customDomain: website.domain || null,
                customDomainStatus: website.domainStatus || null,
                dnsRecords: website.dnsRecords,
                vercelVerification: website.vercelVerification,
                domain: website.domain ? liveDomain || formatDomain(website) : null,
            }
        }, {
            headers: {
                "Cache-Control": "no-store, max-age=0",
            },
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Failed to get domain information",
            },
            {
                status: 500,
            }
        );
    }
}

// add domain to the vercel
export async function POST(request) {
    try {
        const user = await requireUser();

        const body = await request.json();

        const domain = body.domain?.trim().toLowerCase();

        if (!domain) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Domain is required",
                },
                {
                    status: 400,
                }
            );
        }

        await connectDB();

        const website = await Website.findOne({
            userId: user._id,
        }).select({
            _id: 1,
            domain: 1,
            domainStatus: 1,
            domainVerified: 1,
            dnsRecords: 1,
            vercelVerification: 1,
            seo: 1,
        }).lean();

        if (!website) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Website not found",
                },
                {
                    status: 404,
                }
            );
        }

        if (website.domain) {
            if (website.domain === domain) {
                return NextResponse.json({
                    success: true,
                    data: {
                        domain: formatDomain(website),
                    },
                });
            }

            return NextResponse.json(
                {
                    success: false,
                    message: "Disconnect the current domain before adding another one",
                },
                {
                    status: 400,
                }
            );
        }

        // Add the domain to Vercel and persist the ownership records immediately
        // so they remain available if loading the DNS configuration fails.
        const vercelDomain = await addDomain(domain);
        const verification = toVerificationRecords(vercelDomain);
        const isVerified = vercelDomain.verified === true;

        await Website.findByIdAndUpdate(website._id, {
            $set: {
                domain,
                domainStatus: "pending",
                domainVerified: isVerified,
                vercelVerification: isVerified ? [] : verification,
                dnsRecords: [],
            },
        });
        const config = await getDomainConfig(domain);
        const dnsRecords = toDnsRecords(config);
        const isConnected = isVerified && !config.misconfigured;
        const updatedWebsite = await Website.findByIdAndUpdate(
            website._id,
            {
                $set: {
                    domainStatus: isConnected ? "connected" : "pending",
                    dnsRecords,
                    dnsConfigCheckedAt: new Date(),
                },
            },
            { new: true }
        ).lean();

        await Promise.all([
            User.findByIdAndUpdate(
                user._id,
                isConnected
                    ? { $set: { domain } }
                    : { $unset: { domain: 1 } }
            ),
            SEO.findByIdAndUpdate(
                website.seo,
                isConnected
                    ? {
                          $set: {
                              domain,
                              canonicalUrl: `https://${domain}`,
                          },
                      }
                    : {
                          $unset: { domain: 1 },
                          $set: {
                              canonicalUrl: `https://${website.subdomain}.${process.env.NEXT_PUBLIC_BASE_DOMAIN}`,
                          },
                      }
            ),
        ]);

        return NextResponse.json({
            success: true,
            data: {
                domain: formatDomain(updatedWebsite),
                config,
            }
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message:
                    error.message || "Failed to add domain",
            },
            {
                status: error.status || 500,
            }
        );
    }
}

export async function DELETE() {
    try {
        const user = await requireUser();
        await connectDB();

        const website = await Website.findOne({ userId: user._id })
            .select({ _id: 1, domain: 1, subdomain: 1, seo: 1 })
            .lean();

        if (!website) {
            return NextResponse.json(
                { success: false, message: "Website not found" },
                { status: 404 }
            );
        }

        if (!website.domain) {
            return NextResponse.json({
                success: true,
                message: "No custom domain is connected",
            });
        }

        await removeDomain(website.domain);
        await Website.findByIdAndUpdate(website._id, {
            $unset: {
                domain: 1,
                domainStatus: 1,
                dnsConfigCheckedAt: 1,
            },
            $set: {
                domainVerified: false,
                dnsRecords: [],
                vercelVerification: [],
            },
        });
        await Promise.all([
            User.findByIdAndUpdate(user._id, { $unset: { domain: 1 } }),
            SEO.findByIdAndUpdate(website.seo, {
                $unset: { domain: 1 },
                $set: {
                    canonicalUrl: `https://${website.subdomain}.${process.env.NEXT_PUBLIC_BASE_DOMAIN}`,
                },
            }),
        ]);

        return NextResponse.json({
            success: true,
            message: "Custom domain disconnected",
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to disconnect domain",
            },
            { status: error.status || 500 }
        );
    }
}