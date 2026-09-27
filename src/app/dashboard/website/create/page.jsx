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
                user?.websiteCreated === true ? <div className="w-full rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-8 shadow-sm">
                    <p>You already have a website.</p>
                </div> : <CreateWebsitePage />
            }
        </>
    );
};

export default CreateWebsite;