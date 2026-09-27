import React from 'react';
import { Button } from '../ui/button';
import { LockKeyhole } from 'lucide-react';
import Link from 'next/link';

const UpgradeNotice = () => {
    return (
        <section className="mb-6 rounded-xl border bg-muted/40 p-6">
            <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
                <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <LockKeyhole className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                        <h2 className="font-semibold">
                            Your trial has expired
                        </h2>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Upgrade your plan to continue using this feature
                            and keep your website active.
                        </p>
                    </div>
                </div>

                <Link href="/dashboard/billing">
                    <Button>
                        Upgrade Plan
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default UpgradeNotice;