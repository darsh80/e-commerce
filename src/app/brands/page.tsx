
import React from "react";
import Link from "next/link";
import { Filter, Tags, X } from "lucide-react";
import { FaBoxOpen } from "react-icons/fa6";

import BrandCard from "./components/BrandCard";
import { getAllBrands, getBrandById } from "./brand.action";
import BrandsHero from "./components/BrandHero";
import { ProductCard } from "../_myComponents/PorductCard/PorductCard";
import { Product } from "@/interfaces/products.interface";

interface BrandsPageProps {
  searchParams: Promise<{
    brand?: string;
  }>;
} 

export default async function BrandsPage({
  searchParams,
}: BrandsPageProps) {
  const { brand } = await searchParams;

  // ALL BRANDS 


  if (!brand) {
    const brandsResponse = await getAllBrands();

    const brands = brandsResponse.data;

    return (
      <main className="min-h-screen bg-gray-50/50">

        <BrandsHero />

        <div className="px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {brands.map((brand) => (
              <BrandCard
                key={brand._id}
                brand={brand}
              />
            ))}
          </div>
        </div>

      </main>
    );
  }

  // SELECTED BRAND


  const brandResponse = await getBrandById(brand);

  const selectedBrand = brandResponse.data;


  // GET PRODUCTS FOR BRAND
  

  const productsResponse = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?brand=${brand}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );

  const productsData = await productsResponse.json();

  const products = productsData?.data || [];

  return (
    <main className="min-h-screen bg-gray-50/50">

      {/* Brand Hero */}
      <BrandsHero
        brandName={selectedBrand.name}
        brandImage={selectedBrand.image}
      />

      {/* Products */}
      <section className="px-4 py-8">

        {/* Active Filter + Products Count */}
        <div className="mb-6">

          {/* Active Filters */}
          <div className="mb-6 flex items-center gap-3 flex-wrap">

            <span className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="w-4 h-4" />
              Active Filters:
            </span>

            {/* Selected Brand */}
            <Link
              href="/brands"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium hover:bg-violet-200 transition-colors"
            >
              <Tags className="w-3 h-3" />

              {selectedBrand.name}

              <X className="w-3 h-3" />
            </Link>

            {/* Clear All */}
            <Link
              href="/brands"
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Clear all
            </Link>

          </div>

          {/* Products Count */}
          <p className="text-sm text-gray-500 mt-1">
            Showing {products.length} products
          </p>

        </div>

        {/* Products / Empty State */}
        {products.length === 0 ? (

          <div className="text-center py-20">

            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
              <FaBoxOpen className="text-3xl text-gray-400" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              No Products Found
            </h3>

            {/* Description */}
            <p className="text-gray-500 mb-6">
              No products match your current filters.
            </p>

            {/* Button */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            >
              View All Products
            </Link>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products.map((product: Product) => (
              <ProductCard
                key={product._id}
                Product={product}
              />
            ))}

          </div>

        )}

      </section>
    </main>
  );
}
