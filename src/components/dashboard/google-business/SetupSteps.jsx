const steps = [
    {
        number: "01",
        title: "Open your profile",
        description:
            "Sign in to Google using the account that manages your business profile.",
    },
    {
        number: "02",
        title: "Add your website",
        description:
            "Open your Business Profile, choose Edit profile, and add your Docxio website in the Website field.",
    },
    {
        number: "03",
        title: "Save the changes",
        description:
            "Save your changes in Google. Google may review the update before it becomes visible publicly.",
    },
];

export default function SetupSteps() {
    return (
        <section>
            <div className="mb-5">
                <h2 className="text-base sm:text-lg font-bold text-white">
                    How to Connect Google Business Profile
                </h2>

                <p className="mt-1 text-xs sm:text-sm text-slate-400">
                    Follow these 3 simple steps to integrate your website URL with Google.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {steps.map((step) => (
                    <div
                        key={step.number}
                        className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-6 shadow-sm"
                    >
                        <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs sm:text-sm font-bold">
                            {step.number}
                        </div>

                        <h3 className="mt-4 text-sm sm:text-base font-bold text-white">
                            {step.title}
                        </h3>

                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}