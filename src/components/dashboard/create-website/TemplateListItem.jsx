import Image from 'next/image';
import React from 'react';

const TemplateListItem = ({ template }) => {
    const { title, description, badge, image } = template;
    return (
        <div className='rounded-xl bg-surface-white border border-outline-variant shadow-sm hover:shadow-md transition-shadow duration-300'>
            <div className='overflow-hidden h-75 md:h-80 lg:h-96 rounded-t-xl border-b border-outline-variantn relative'>
                <Image
                    alt={title + " " + "Image"}
                    width={600}
                    height={400}
                    src={image}
                    className='w-full object-cover object-top'
                />
                <span className="text-on-surface absolute top-4 left-4 px-4 py-[2px] bg-white rounded-xl border border-outline-variant">{badge}</span>
            </div>
            <div className='p-6'>
                <h3 className='font-medium text-on-background mb-1'>{title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">{description}</p>
                <div className="mt-auto flex items-center gap-3">
                    <button className="flex-1 bg-surface-container-low text-primary border border-outline-variant hover:bg-surface-container px-4 py-2.5 rounded-lg font-body-md text-body-md font-medium transition-colors cursor-pointer">Preview</button>
                    <button className="flex-1 bg-primary-container text-on-primary-container hover:bg-primary px-4 py-2.5 rounded-lg font-body-md text-body-md font-medium transition-colors shadow-sm cursor-pointer">Choose</button>
                </div>
            </div>
        </div>
    );
};

export default TemplateListItem;