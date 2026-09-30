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
                <h2 className="text-xl font-bold text-slate-900">
                    How to add your website
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    It only takes a few steps.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {steps.map((step) => (
                    <div
                        key={step.number}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                            {step.number}
                        </div>

                        <h3 className="mt-5 font-semibold text-slate-900">
                            {step.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
}