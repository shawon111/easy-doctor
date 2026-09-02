import CreateWebsitePage from '@/components/dashboard/create-website/CreateWebsitePage';
import { requireUser } from '@/lib/requireUser';

const CreateWebsite = async () => {
    // get the user info
    const user = await requireUser();
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