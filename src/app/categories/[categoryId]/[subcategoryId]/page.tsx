import Link from "next/link";
import type { ComponentProps } from "react";

import {
  FaFilter,
  FaFolderOpen,
  FaXmark,
  FaBoxOpen,
} from "react-icons/fa6";

import {
  getSubcategoryById,
  getSubcategoryProducts,
} from "../../categores.action";
import { ProductCard } from "@/app/_myComponents/PorductCard/PorductCard";

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{
    categoryId: string;
    subcategoryId: string;
  }>;
}) {
  const { categoryId, subcategoryId } = await params;

  // Get subcategory information
  const subcategoryResponse =
    await getSubcategoryById(subcategoryId);

  // Get subcategory products
  const productsResponse =
    await getSubcategoryProducts(subcategoryId);

  const subcategory = subcategoryResponse?.data;

  const products = productsResponse?.data ?? [];

  return (
    <div className="min-h-screen bg-gray-50/50">

      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 text-white">
        <div className=" px-4 py-10 sm:py-14">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">

            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>

            <span className="text-white/40">
              /
            </span>

            <Link
              href="/categories"
              className="hover:text-white transition-colors"
            >
              Categories
            </Link>

            <span className="text-white/40">
              /
            </span>

            <span className="text-white font-medium">
              {subcategory.name}
            </span>

          </nav>


          {/* Subcategory Header */}
          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">

              <FaFolderOpen className="text-3xl" />

            </div>

            <div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {subcategory.name}
              </h1>

              <p className="text-white/80 mt-1">
                Browse {subcategory.name} products
              </p>

            </div>

          </div>

        </div>
      </div>


      {/* Content */}
      <div className=" px-4 py-8">

        {/* Active Filters */}
        <div className="mb-6 flex items-center gap-3 flex-wrap">

          <span className="flex items-center gap-2 text-sm text-gray-600">

            <FaFilter />

            Active Filters:

          </span>


          <Link
            href={`/categories/${categoryId}`}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium hover:bg-emerald-200 transition-colors"
          >

            <FaFolderOpen />

            {subcategory.name}

            <FaXmark />

          </Link>


          <Link
            href="/shop"
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Clear all
          </Link>

        </div>


        {/* Products Count */}
        <div className="mb-6 text-sm text-gray-500">
          Showing {products.length} products
        </div>


        {/* Empty Products */}
        {products.length === 0 && (

          <div className="text-center py-20">

            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">

              <FaBoxOpen className="text-4xl text-gray-400" />

            </div>


            <h3 className="text-lg font-bold text-gray-900 mb-2">
              No Products Found
            </h3>


            <p className="text-gray-500 mb-6">
              No products match your current filters.
            </p>


            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Products
            </Link>

          </div>

        )}


        {/* Products */}
        {products.length > 0 && (

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-7 gap-x-5">

            {/* ProductCard هنا */}
            {products.map((product: ComponentProps<typeof ProductCard>["Product"]) => (
              <ProductCard key={product._id}
               Product={product} />
            ))}
          </div>

        )}

      </div>

    </div>
  );
}