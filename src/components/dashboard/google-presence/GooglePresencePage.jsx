"use client";

import { PageHeader } from "./PageHeader";
import { WebsitePagesList } from "./WebsitePagesList";
import { GoogleSearchPreview } from "./GoogleSearchPreview";
import { MetaDataEditForm } from "./MetaDataEditForm";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const fetchSeo = async () => {
  const response = await fetch("/api/seo");
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.message || "Unable to load SEO settings.");
  return payload.data;
};

export function GooglePresencePage() {
  const [activeKey, setActiveKey] = useState("site");
  const queryClient = useQueryClient();
  const {
    data: seo,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["seo-settings"],
    queryFn: fetchSeo,
    onError: (queryError) => toast.error(queryError.message),
  });

  const saveMutation = useMutation({
    mutationFn: async ({ pageKey, values }) => {
      const response = await fetch("/api/seo", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scope: pageKey === "site" ? "site" : "page",
          page: pageKey === "site" ? undefined : pageKey,
          ...values,
        }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.message || "Unable to save SEO settings.");
      return payload.data;
    },
    onSuccess: (updatedSeo) => {
      queryClient.setQueryData(["seo-settings"], updatedSeo);
      toast.success("SEO settings saved.");
    },
    onError: (saveError) => toast.error(saveError.message),
  });

  const activeData = activeKey === "site" ? seo : seo?.pages?.[activeKey];
  const saveSeo = (values) => saveMutation.mutate({ pageKey: activeKey, values });

  if (isLoading) {
    return <div className="p-8 text-sm text-muted-foreground">Loading SEO settings...</div>;
  }

  if (isError) {
    return <div className="p-8 text-sm text-destructive">{error.message}</div>;
  }

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col gap-4 p-4 pb-12 sm:gap-6 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
      <PageHeader />
      <div className="grid grid-cols-1 items-start gap-4 sm:gap-6 lg:grid-cols-12">
        <WebsitePagesList activeKey={activeKey} onSelect={setActiveKey} />
        <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-8">
          <GoogleSearchPreview
            title={activeData?.title || activeData?.defaultTitle}
            description={activeData?.description || activeData?.defaultDescription}
          />
          <MetaDataEditForm
            key={activeKey}
            data={seo}
            pageKey={activeKey}
            onSave={saveSeo}
            saving={saveMutation.isPending}
          />
        </div>
      </div>
    </div>
  );
}
