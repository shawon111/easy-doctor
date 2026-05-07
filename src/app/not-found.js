'use client';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
            <p className="text-gray-600">Sorry, the page you are looking for does not exist.</p>
        </div>
    );
}