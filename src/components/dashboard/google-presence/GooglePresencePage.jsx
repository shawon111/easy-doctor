"use client";

import { PageHeader } from "./PageHeader";
import { WebsitePagesList } from "./WebsitePagesList";
import { GoogleSearchPreview } from "./GoogleSearchPreview";
import { MetaDataEditForm } from "./MetaDataEditForm";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export function GooglePresencePage() {
  const [seo, setSeo] = useState(null);
  const [activeKey, setActiveKey] = useState("site");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadSeo = async () => {
      const response = await fetch("/api/seo");
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.message || "Unable to load SEO settings.");
      setSeo(payload.data);
    };

    loadSeo()
      .catch((error) => {
        setLoadError(error.message);
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const activeData = activeKey === "site" ? seo : seo?.pages?.[activeKey];

  const saveSeo = async (values) => {
    setSaving(true);
    try {
      const response = await fetch("/api/seo", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scope: activeKey === "site" ? "site" : "page",
          page: activeKey === "site" ? undefined : activeKey,
          ...values,
        }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.message || "Unable to save SEO settings.");
      setSeo(payload.data);
      toast.success("SEO settings saved.");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-sm text-muted-foreground">Loading SEO settings...</div>;
  }

  if (loadError) {
    return <div className="p-8 text-sm text-destructive">{loadError}</div>;
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
            saving={saving}
          />
        </div>
      </div>
    </div>
  );
}
