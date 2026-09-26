"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-bold text-red-500">500</h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Something went wrong
        </h2>

        <p className="mt-3 text-zinc-400">
          An unexpected error occurred while loading this page.
        </p>

        <button
          onClick={reset}
          className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}