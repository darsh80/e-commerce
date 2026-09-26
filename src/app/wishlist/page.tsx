import React from "react";
import Link from "next/link";
import {
  Heart,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";

import { getWishlist } from "./wishlist.action";
import { Product } from "@/interfaces/products.interface";
import RemoveWishlistButton from "./RemoveWishlistButton";
import AddWishlistToCartButton from "./AddWishlistToCartButton";

export default async function WishlistPage() {
  const wishlistResponse = await getWishlist();

  const wishlist = wishlistResponse?.data || [];

  
  // Empty Wishlist
  
  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-sm mx-auto text-center">
          <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-gray-400" />
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Your wishlist is empty
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Browse products and save your favorites here. Sign in to sync
            your wishlist across devices.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            >
              Browse Products

              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  
  // Wishlist With Products
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Link
          href="/"
          className="hover:text-green-600 transition-colors"
        >
          Home
        </Link>

        <span>/</span>

        <span className="text-gray-900 font-medium">
          Wishlist
        </span>
      </nav>

      {/* Wishlist Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
            <Heart className="w-6 h-6 text-red-500 fill-red-500" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              My Wishlist
            </h1>

            <p className="text-gray-500 text-sm">
              {wishlist.length}{" "}
              {wishlist.length === 1 ? "item" : "items"} saved
            </p>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
          <div className="col-span-6">
            Product
          </div>

          <div className="col-span-2 text-center">
            Price
          </div>

          <div className="col-span-2 text-center">
            Status
          </div>

          <div className="col-span-2 text-center">
            Actions
          </div>
        </div>

        {/* Products */}
        <div className="divide-y divide-gray-100">
          {wishlist.map((product: Product) => (
            <div
              key={product._id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors"
            >
              {/* Product */}
              <div className="md:col-span-6 flex items-center gap-4">
                <Link
                  href={`/${product._id}`}
                  className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0"
                >
                  <img
                    src={product.imageCover}
                    alt={product.title}
                    className="w-full h-full object-contain p-2"
                  />
                </Link>

                <div className="min-w-0">
                  <Link
                    href={`/${product._id}`}
                    className="font-medium text-gray-900 hover:text-green-600 transition-colors line-clamp-2"
                  >
                    {product.title}
                  </Link>

                  <p className="text-sm text-gray-400 mt-1">
                    {product.category?.name}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="md:col-span-2 flex md:justify-center items-center gap-2">
                <span className="md:hidden text-sm text-gray-500">
                  Price:
                </span>

                <div className="text-right md:text-center">
                  <div className="font-semibold text-gray-900">
                    {product.price} EGP
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="md:col-span-2 flex md:justify-center">
                <span className="md:hidden text-sm text-gray-500 mr-2">
                  Status:
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  In Stock
                </span>
              </div>

              {/* Actions */}
              <div className="md:col-span-2 flex items-center gap-2 md:justify-center">
                <AddWishlistToCartButton productId={product._id} />

                <RemoveWishlistButton productId={product._id} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Shopping */}
      <div className="mt-8 flex items-center justify-between">
        <Link
          href="/products"
          className="text-gray-500 hover:text-green-600 text-sm font-medium transition-colors"
        >
          ← Continue Shopping
        </Link>
      </div>
    </div>
  );
}