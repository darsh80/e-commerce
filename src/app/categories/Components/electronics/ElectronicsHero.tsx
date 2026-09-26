
import Link from "next/link";
import { FaHome, FaMicrochip } from "react-icons/fa";

export default function ElectronicsHero() {
  return (
    <section className="bg-gradient-to-br from-green-600 via-green-500 to-green-400 text-white">
      <div className="container mx-auto px-4 py-10 sm:py-14">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
          <Link
            href="/"
            className="hover:text-white transition-colors"
          >
            Home
          </Link>

          <span className="text-white/40">/</span>

          <Link
            href="/categories"
            className="hover:text-white transition-colors"
          >
            Categories
          </Link>

          <span className="text-white/40">/</span>

          <span className="text-white font-medium">
            Electronics
          </span>
        </nav>

        {/* Hero Content */}
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
            <FaMicrochip className="text-3xl" />
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Electronics
            </h1>

            <p className="text-white/80 mt-1">
              Discover the latest electronics and smart devices
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
