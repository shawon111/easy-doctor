import { Button } from "@/components/ui/button";
import { generateStructuredData } from "@/lib/seo/generateStructureddata";
import { serializeJsonLd } from "@/lib/seo/urls";
import { createDoctorMetadata, getDoctorSiteContext } from "@/lib/seo/doctor-metadata";
import { isWebsiteActive } from "@/lib/subscription";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return createDoctorMetadata(slug, "home");
}

const DoctorLayout = async ({ children, params }) => {
  const { slug } = await params;
  const context = await getDoctorSiteContext(slug);
  if (!context) notFound();

  // check if subscription expired
  const isActive = isWebsiteActive(context.user?.expiresAt);
  if (!isActive) {
    return <>
      <section className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-red-900">
              Your trial has expired
            </h3>
            <p className="mt-1 text-sm text-red-700">
              Your Docxio trial has ended. Upgrade your plan to continue
              using your website and dashboard features.
            </p>
          </div>

          <Button>
            Upgrade Plan
          </Button>
        </div>
      </section>
    </>
  }

  return <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd(
          generateStructuredData({
            user: context.user,
            baseUrl: context.canonicalUrl,
          })
        ),
      }}
    />
    {children}
  </>;
};

export default DoctorLayout;
