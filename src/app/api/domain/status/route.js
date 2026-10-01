import { connectDB } from "@/config/database";
import { requireUser } from "@/lib/requireUser";
import { withTransaction } from "@/lib/withTransaction";
import { toDnsRecords, toVerificationRecords } from "@/lib/domain-config";
import Website from "@/models/website.model";
import {
    getDomain,
    getDomainConfig,
    persistCustomDomainState,
} from "@/services/website.service";
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

        await withTransaction((session) =>
            persistCustomDomainState(
                {
                    userId: user._id,
                    websiteId: website._id,
                    seoId: website.seo,
                    domain: website.domain,
                    subdomain: website.subdomain,
                    verified,
                    connected,
                    dnsRecords,
                    verification,
                },
                session
            )
        );

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
