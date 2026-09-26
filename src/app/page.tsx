import { getAllproducts } from "@/services/product.service";
import React from "react";
import { ProductCard } from "./_myComponents/PorductCard/PorductCard";
import { Product } from "@/interfaces/products.interface";
import FeaturesSection from "@/components/FeaturesSection";
import HomeSlider from "@/components/HomeSlider";
import DealsHome from "@/components/DealsHome";
import CategoriesSection from "./_myComponents/CategoriesSection";
export default async function page() {
  const allproductsResponse = await getAllproducts();
          
  return (
    <div className="mb-10">
      <div className="mb-10">
        <HomeSlider />
        <FeaturesSection />
        <CategoriesSection />
        <DealsHome />
      </div>
      <div className=" mb-10 px-2 md:px-10 lg:px-10">
        <div className="flex items-center gap-3 my-8">
          <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>

          <h2 className="text-3xl font-bold text-gray-800">
            Featured <span className="text-emerald-600">Products</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-7 gap-x-5">
          {allproductsResponse.data.map((product: Product) => (
            <ProductCard key={product._id} Product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
