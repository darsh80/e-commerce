
"use client";

import { useState } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

export default function ElectronicsFilter() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-5">

        {/* Filter Button */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Electronics Products
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Filter products to find what you need
            </p>
          </div>

          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            {showFilter ? <FaTimes /> : <FaFilter />}

            <span>
              {showFilter ? "Close Filter" : "Filter"}
            </span>
          </button>
        </div>

        {/* Filter Content */}
        {showFilter && (
          <div className="mt-5 pt-5 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>

                <select className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-green-500">
                  <option value="">All Categories</option>
                  <option value="phones">Phones</option>
                  <option value="computers">Computers</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </label>

                <select className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-green-500">
                  <option value="">All Prices</option>
                  <option value="0-500">0 - 500 EGP</option>
                  <option value="500-1000">500 - 1000 EGP</option>
                  <option value="1000-5000">1000 - 5000 EGP</option>
                  <option value="5000+">5000+ EGP</option>
                </select>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>

                <select className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-green-500">
                  <option value="">All Ratings</option>
                  <option value="4">4+ Stars</option>
                  <option value="3">3+ Stars</option>
                  <option value="2">2+ Stars</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>

                <select className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-green-500">
                  <option value="">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
