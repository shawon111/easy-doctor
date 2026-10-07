"use client";

import { useQuery } from "@tanstack/react-query";
import DomainHelp from "./DomainHelp";
import DnsInstructions from "./DnsInstructions";
import DomainStatus from "./DomainStatus";
import DomainForm from "./DomainForm";
import CurrentWebsiteCard from "./CurrentWebsiteCard";
import DomainHeader from "./DomainHeader";
import DomainVerification from "./DomainVerification";

const getDomain = async () => {
    const response = await fetch("/api/domain", {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to load domain information");
    }
    const data = await response.json()
    return data?.data;
};

export default function CustomDomain() {
    const {
        data,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["domain"],
        queryFn: getDomain,
        staleTime: 0,
        refetchOnMount: "always",
        refetchOnReconnect: "always",
    });

    if (isLoading) {
        return (
            <div className="mx-auto w-full max-w-360 p-4 pb-12 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
                <div className="space-y-6">
                    <div className="h-8 w-48 animate-pulse rounded-md bg-muted" />
                    <div className="h-32 animate-pulse rounded-xl bg-muted" />
                    <div className="h-64 animate-pulse rounded-xl bg-muted" />
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="mx-auto w-full max-w-360 p-4 pb-12 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
                <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
                    <h2 className="font-semibold text-destructive">
                        Something went wrong
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        {error.message}
                    </p>
                </div>
            </div>
        );
    }

    const domain = data?.domain;
    const baseDomain= process.env.NEXT_PUBLIC_BASE_DOMAIN

    return (
        <div className="mx-auto w-full max-w-360 p-4 pb-12 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
            <div className="space-y-6">
                <DomainHeader />

                <CurrentWebsiteCard
                    subdomain={data?.subdomain}
                    baseDomain={baseDomain}
                    websiteUrl={data?.websiteUrl}
                    customDomainStatus={data?.customDomainStatus}
                />

                <DomainForm domain={domain?.name} />

                {domain && (
                    <>
                        <DomainStatus domain={domain} />

                        {!domain.verified && (
                            <DomainVerification
                                verification={domain.verification}
                            />
                        )}

                        <DnsInstructions dnsRecords={domain.dnsRecords} />
                    </>
                )}

                <DomainHelp />
            </div>
        </div>
    );
}