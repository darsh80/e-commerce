import Link from "next/link";
import { FaBoxOpen } from "react-icons/fa6";

export default function ShopHero() {
  return (
    <section className="bg-gradient-to-br from-green-600 via-green-500 to-green-400 text-white">
      <div className=" px-4 py-10 sm:py-14">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
          <Link
            href="/"
            className="hover:text-white transition-colors"
          >
            Home
          </Link>

          <span className="text-white/40">/</span>

          <span className="text-white font-medium">
            All Products
          </span>
        </nav>

        {/* Hero Content */}
        <div className="flex items-center gap-5">

          {/* Icon */}
          <div
            className="
              w-16 h-16
              rounded-2xl
              bg-white/20
              backdrop-blur-sm
              flex items-center justify-center
              shadow-xl
              ring-1 ring-white/30
              shrink-0
            "
          >
            <FaBoxOpen className="text-3xl" />
          </div>

          {/* Title */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              All Products
            </h1>

            <p className="text-white/80 mt-1">
              Explore our complete product collection
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}