import Link from "next/link";
import Image from "next/image";
import { FaTags } from "react-icons/fa6";

interface BrandsHeroProps {
  brandName?: string;
  brandImage?: string;
}
export default function BrandsHero({ brandName, brandImage }: BrandsHeroProps) {
  return (
    <section
      className={
        brandName
          ? "bg-gradient-to-br from-green-600 via-green-500 to-green-400 text-white"
          : "bg-gradient-to-br from-violet-600 via-violet-500 to-violet-400 text-white"
      }
    >
      <div className="px-4 py-10 sm:py-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>

          <span className="text-white/40">/</span>

          <Link href="/brands" className="hover:text-white transition-colors">
            Brands
          </Link>

          {brandName && (
            <>
              <span className="text-white/40">/</span>

              <span className="text-white font-medium">{brandName}</span>
            </>
          )}
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
    overflow-hidden
  "
          >
            {brandImage ? (
              <Image
                src={brandImage}
                alt={brandName || "Brand"}
                width={60}
                height={60}
                className="w-full h-full object-contain p-2"
              />
            ) : (
              <FaTags className="text-3xl" />
            )}
          </div>

          {/* Title */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {brandName || "Top Brands"}
            </h1>

            <p className="text-white/80 mt-1">
              {brandName
                ? `Shop from ${brandName}`
                : "Shop from your favorite brands"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
