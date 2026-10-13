import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TemplateListItem = ({ template, hideChoose }) => {
    const { title, description, badge, image } = template;
    return (
        <div className="group flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/80 overflow-hidden shadow-sm transition-all duration-300 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5">
            <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden border-b border-slate-800/80 bg-slate-900">
                <Image
                    alt={title + " Image"}
                    width={600}
                    height={400}
                    src={image}
                    className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3.5 left-3.5 rounded-full border border-indigo-500/30 bg-slate-950/90 px-3 py-1 text-xs font-bold text-indigo-300 backdrop-blur-sm shadow-sm">
                    {badge}
                </span>
            </div>
            <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">{title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">{description}</p>
                </div>
                {!hideChoose && (
                    <div className="mt-auto flex items-center gap-3">
                        <Link
                            href={`/preview/${template.identifier}`}
                            target="_blank"
                            className="inline-flex min-h-10 flex-1 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-center text-xs sm:text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
                        >
                            Preview
                        </Link>
                        <Link
                            href={`create/subdomain?template=${template.identifier}`}
                            className="inline-flex min-h-10 flex-1 items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-center text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-600/40"
                        >
                            Choose
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplateListItem;