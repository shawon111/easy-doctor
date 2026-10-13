import React from 'react';
import { Button } from '../ui/button';
import { LockKeyhole } from 'lucide-react';
import Link from 'next/link';

const UpgradeNotice = () => {
    return (
        <div className="mx-auto w-full max-w-4xl p-4 sm:p-6 md:p-8">
            <section className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-sm sm:p-8">
                <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
                    <div className="flex items-start gap-4">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-sm">
                            <LockKeyhole className="size-5" />
                        </div>

                        <div className="max-w-xl">
                            <div className="flex items-center gap-2 justify-center sm:justify-start text-xs font-bold uppercase tracking-wider text-amber-400">
                                Feature Locked
                            </div>
                            <h2 className="mt-1 text-lg font-extrabold tracking-tight text-white sm:text-xl">
                                Your trial period has expired
                            </h2>

                            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-400">
                                Upgrade your plan to unlock patient appointments, keep your website active, and access priority support.
                            </p>
                        </div>
                    </div>

                    <Button asChild className="shrink-0 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20">
                        <Link href="/dashboard/billing">
                            Upgrade plan now →
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default UpgradeNotice;