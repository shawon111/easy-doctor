// app/api/domain/verify/route.js

import { connectDB } from "@/config/database";
import { requireUser } from "@/lib/requireUser";
import SEO from "@/models/seo.model";
import User from "@/models/user.model";
import Website from "@/models/website.model";
import { toDnsRecords, toVerificationRecords } from "@/lib/domain-config";
import {
    getDomain,
    getDomainConfig,
    verifyDomain,
} from "@/services/website.service";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const user = await requireUser();

        await connectDB();

        const website = await Website.findOne({
            userId: user._id,
        }).select({
            _id: 1,
            domain: 1,
            domainStatus: 1,
            domainVerified: 1,
            subdomain: 1,
            seo: 1,
            vercelVerification: 1,
        }).lean();

        if (!website?.domain) {
            return NextResponse.json(
                {
                    success:false,
                    message: "No custom domain found",
                },
                { status: 404 }
            );
        }

        const result = await verifyDomain(website.domain);
        const [vercelDomain, config] = await Promise.all([
            getDomain(website.domain),
            getDomainConfig(website.domain),
        ]);
        const isVerified = result.verified === true || vercelDomain.verified === true;
        const isConnected = isVerified && !config.misconfigured;
        const currentVerification = toVerificationRecords(vercelDomain);
        const resultVerification = toVerificationRecords(result);
        const verification = isVerified
            ? []
            : currentVerification.length
              ? currentVerification
              : resultVerification.length
                ? resultVerification
                : website.vercelVerification || [];
        const dnsRecords = toDnsRecords(config);

        await Website.findByIdAndUpdate(website._id, {
            $set: {
                domainVerified: isVerified,
                domainStatus: isConnected ? "connected" : "pending",
                vercelVerification: verification,
                dnsRecords,
                dnsConfigCheckedAt: new Date(),
            },
        });

        await Promise.all([
            User.findByIdAndUpdate(
                user._id,
                isConnected
                    ? { $set: { domain: website.domain } }
                    : { $unset: { domain: 1 } }
            ),
            SEO.findByIdAndUpdate(
                website.seo,
                isConnected
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
                ...result,
                verified: isVerified,
                connected: isConnected,
                config,
                verification,
                dnsRecords,
            },
        });
    } catch (error) {
        return NextResponse.json(
            {   
                success: false,
                message:
                    error.message ||
                    "Failed to verify domain",
            },
            {
                status: error.status || 500,
            }
        );
    }
}