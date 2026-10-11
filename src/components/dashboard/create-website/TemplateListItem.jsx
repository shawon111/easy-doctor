import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TemplateListItem = ({ template, hideChoose }) => {
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
                {!hideChoose && (
                    <div className="mt-auto flex items-center gap-3">
                        <Link href={`/preview/${template.identifier}`} target="_blank" className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-900">Preview</Link>
                        <Link href={`create/subdomain?template=${template.identifier}`} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-[#17345d] bg-[#17345d] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:border-[#234b7e] hover:bg-[#234b7e]">Choose</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplateListItem;