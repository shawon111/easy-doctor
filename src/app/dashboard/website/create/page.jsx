import CreateWebsitePage from '@/components/dashboard/create-website/CreateWebsitePage';
import UpgradeNotice from '@/components/dashboard/UpgradeNotice';
import { requireUser } from '@/lib/requireUser';

// check website activeness
const isWebsiteActive = (expireDate) => {
    return expireDate && new Date(expireDate) > new Date()
}

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
                user?.websiteCreated === true ? <div className="mx-auto w-full max-w-360 p-4 pb-12 sm:p-6 md:p-8">
                    <div className="rounded-2xl border border-emerald-200 bg-white p-6 text-sm font-medium text-emerald-800 shadow-subtle sm:p-8">
                        You already have a website.
                    </div>
                </div> : <CreateWebsitePage />
            }
        </>
    );
};

export default CreateWebsite;