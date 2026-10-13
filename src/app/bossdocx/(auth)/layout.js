export const metadata = {
    title: "BossDocx Access Portal",
    robots: { index: false, follow: false },
};

export default function BossdocxAuthLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 antialiased">
            {children}
        </div>
    );
}
