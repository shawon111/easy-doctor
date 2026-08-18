import React from 'react';
import CreateWebsitePageHeader from './CreateWebsitePageHeader';
import TemplatesList from './TemplatesList';

const CreateWebsitePage = () => {
    return (
        <div className='mx-auto w-full max-w-[1440px] flex-1 p-4 pb-12 sm:p-6 sm:pb-16 md:p-8 md:pb-20'>
            <CreateWebsitePageHeader />
            <TemplatesList />
        </div>
    );
};

export default CreateWebsitePage;