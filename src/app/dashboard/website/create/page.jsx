import CreateWebsitePage from '@/components/dashboard/create-website/CreateWebsitePage';
import UpgradeNotice from '@/components/dashboard/UpgradeNotice';
import { requireUser } from '@/lib/requireUser';
import { isWebsiteActive } from '@/lib/subscription';

export const metadata = { title: "Create Website" };

const CreateWebsite = async () => {
    // get the user info
    const user = await requireUser();
     const isActivePlan = isWebsiteActive(user?.expiresAt)
    if (!isActivePlan) {
        return <UpgradeNotice />
    }
    return (
        <>
            {
                user?.websiteCreated === true ? (
                    <div className="mx-auto w-full max-w-4xl space-y-6">
                        <div className="rounded-2xl border border-emerald-500/30 bg-slate-950/80 p-6 sm:p-8 shadow-sm">
                            <div className="flex items-center gap-3">
                                <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                                    ✓
                                </span>
                                <div>
                                    <h2 className="text-base font-bold text-white">You already have a published doctor website</h2>
                                    <p className="mt-0.5 text-xs text-slate-400">
                                        Your website is live and connected. You can view its status or edit pages anytime.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : <CreateWebsitePage />
            }
        </>
    );
};

export default CreateWebsite;