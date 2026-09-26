import Link from "next/link";
import { FaBoxOpen } from "react-icons/fa6";
import ShopHero from "./components/shopHero";
import { ProductCard } from "../_myComponents/PorductCard/PorductCard";
import { getAllproducts } from "@/services/product.service";



export default async function ShopPage() {
  const response = await getAllproducts();

  const products = response?.data || [];

  return (
    <main className="min-h-screen bg-gray-50/50">

      {/* Hero */}
      <ShopHero />

      {/* Products */}
      <section className=" px-4 py-10">

        {/* Products Header */}
        
        {/* Products Grid */}
        {products.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-6
            "
          >
            {products.map((product) => (
              <ProductCard
                key={product._id}
                Product={product}
              />
            ))}
          </div>
        ) : (
          <div className="min-h-[400px] flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-gray-200 shadow-sm">

            <div className="w-18 h-18 rounded-full bg-gray-100 flex items-center justify-center mb-5">
              <FaBoxOpen className="text-4xl text-gray-400" />
            </div>

            <h2 className="text-xl font-bold text-gray-700">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
              We couldn't find any products at the moment.
              Please try again later.
            </p>

            <Link
              href="/"
              className="
                mt-6
                px-6 py-3
                rounded-lg
                bg-green-600
                text-white
                font-medium
                hover:bg-green-700
                transition-colors
              "
            >
              Back To Home
            </Link>

          </div>
        )}

      </section>
    </main>
  );
}