import Link from "next/link";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <SearchX className="w-10 h-10 text-green-600" />
        </div>

        <h1 className="text-6xl font-bold text-gray-900">
          404
        </h1>

        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}