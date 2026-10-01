import { connectDB } from "@/config/database";
import { requireUser } from "@/lib/requireUser";
import { toDnsRecords, toVerificationRecords } from "@/lib/domain-config";
import Website from "@/models/website.model";
import User from "@/models/user.model";
import SEO from "@/models/seo.model";
import { getDomain, getDomainConfig } from "@/services/website.service";
import { NextResponse } from "next/server";

// get domain status
export async function GET() {
    try {
        const user = await requireUser();

        await connectDB();

        const website = await Website.findOne({
            userId: user._id,
        }).select({
            _id: 1,
            subdomain: 1,
            domain: 1,
            domainVerified: 1,
            domainStatus: 1,
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

        if (!website.domain) {
            return NextResponse.json({
                success: true,
                data: {
                    connected: false,
                    status: "not_connected",
                }
            });
        }

        const [vercelDomain, config] = await Promise.all([
            getDomain(website.domain),
            getDomainConfig(website.domain),
        ]);

        const verified = vercelDomain.verified === true;
        const connected = verified && !config.misconfigured;
        const status = connected ? "connected" : "pending";
        const dnsRecords = toDnsRecords(config);
        const currentVerification = toVerificationRecords(vercelDomain);
        const verification = verified
            ? []
            : currentVerification.length
              ? currentVerification
              : website.vercelVerification || [];

        await Website.findByIdAndUpdate(
            website._id,
            {
                $set: {
                    domainStatus: status,
                    domainVerified: verified,
                    dnsRecords,
                    dnsConfigCheckedAt: new Date(),
                    vercelVerification: verification,
                },
            }
        );

        await Promise.all([
            User.findByIdAndUpdate(
                user._id,
                connected
                    ? { $set: { domain: website.domain } }
                    : { $unset: { domain: 1 } }
            ),
            SEO.findByIdAndUpdate(
                website.seo,
                connected
                    ? {
                          $set: {
                              domain: website.domain,
                              canonicalUrl: `https://${website.domain}`,
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
                connected,
                status,
                domain: website.domain,
                verified,
                config,
                dnsRecords,
                verification,
            }
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            {   success: false,
                message:
                    error.message ||
                    "Failed to check domain status",
            },
            {
                status: error.status || 500,
            }
        );
    }
}
