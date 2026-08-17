"use client";

import { PageHeader } from "./PageHeader";
import { WebsitePagesList } from "./WebsitePagesList";
import { GoogleSearchPreview } from "./GoogleSearchPreview";
import { MetaDataEditForm } from "./MetaDataEditForm";

export function GooglePresencePage() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col gap-4 p-4 pb-12 sm:gap-6 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
     
      <PageHeader />
      <div className="grid grid-cols-1 items-start gap-4 sm:gap-6 lg:grid-cols-12">
        <WebsitePagesList />
        <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-8">
          <GoogleSearchPreview />
          <MetaDataEditForm />
        </div>
      </div>
    </div>
  );
}
