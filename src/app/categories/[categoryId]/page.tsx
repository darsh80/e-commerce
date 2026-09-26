

import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaFolderOpen } from "react-icons/fa";
import {  getCategoryById, getCategorySubcategories } from "../categores.action";



export default async function CategoryDetailsPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;

const categoryResponse = await getCategoryById(categoryId);

const subcategoriesResponse =
  await getCategorySubcategories(categoryId);

const category = categoryResponse.data;

const subcategories = subcategoriesResponse.data;
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
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
              {category.name}
            </span>
          </nav>

          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-12 h-12 object-contain"
              />
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {category.name}
              </h1>

              <p className="text-white/80 mt-1">
                Choose a subcategory to browse products
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories */}
      <div className="container mx-auto px-4 py-10">
        {/* Back */}
        <Link
          href="/categories"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors mb-6"
        >
          <FaArrowLeft />

          <span>Back to Categories</span>
        </Link>

        {/* Title */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900">
            {subcategories.length} Subcategories in {category.name}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {subcategories.map(
            (subcategory: {
              _id: string;
              name: string;
            }) => (
              <Link
                key={subcategory._id}
                href={`/categories/${categoryId}/${subcategory._id}`}
                className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <FaFolderOpen className="text-2xl text-primary-600" />
                </div>

                <h3 className="font-bold text-gray-900 text-lg group-hover:text-primary-600 transition-colors mb-2">
                  {subcategory.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Browse Products</span>

                  <FaArrowRight className="text-xs" />
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}