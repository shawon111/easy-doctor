'use client';

export default function Error({ error, reset }) {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-bold mb-4">An error occurred</h1>
            <p className="text-gray-600">Sorry, something went wrong while processing your request.</p>
            <button onClick={() => reset()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Try again
            </button>
        </div>
    );
}