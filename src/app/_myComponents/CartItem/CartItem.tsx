
"use client";

import React from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

import { useCartStore } from "@/store/cartStore";
import {
  deleteCartItem,
  getUserCart,
  updateCartItem,
} from "@/app/cart/cart.action";

import { GetCartProduct } from "@/interfaces/getCartResponse";

export default function CartItem({ item }: { item: GetCartProduct }) {
  const { price, count, product } = item;

  const { imageCover, title, category } = product;

  // Zustand
  const setCartCount = useCartStore((state) => state.setCartCount);

  // Update quantity
  async function handleUpdateCount(newCount: number) {
    const result = await updateCartItem(newCount, product._id);

    if (result?.status === "success") {
      // هات آخر بيانات للكارت
      const cart = await getUserCart();

      // حدث الرقم في الـ Navbar
      setCartCount(cart.numOfCartItems);
    }
  }

  // Delete product
  async function handleDelete() {
    const result = await Swal.fire({
      title: "Remove Product?",
      text: "This product will be removed from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#dc2626",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    const deleteResult = await deleteCartItem(product._id);

    if (deleteResult?.status === "success") {
      // هات آخر بيانات للكارت
      const cart = await getUserCart();

      // حدث الرقم في الـ Navbar
      setCartCount(cart.numOfCartItems);

      Swal.fire({
        title: "Removed!",
        text: "Product removed successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  }

  return (
    <div className="flex gap-5">
      {/* Image */}
      <Link
        href={`/products/${product._id}`}
        className="relative shrink-0 group"
      >
        <div className="relative w-28 h-28 rounded-2xl bg-gray-50 border border-gray-100 p-2 overflow-hidden">
          <Image
            src={imageCover}
            alt={title}
            fill
            className="object-contain group-hover:scale-105 transition-transform"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="mb-3">
          <Link
            href={`/products/${product._id}`}
            className="group/title"
          >
            <h3 className="font-semibold text-gray-900 group-hover/title:text-primary-600 transition-colors leading-relaxed text-base sm:text-lg">
              {title}
            </h3>
          </Link>

          <div className="flex items-center gap-2 mt-2">
            <span className="inline-block px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
              {category?.name}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-primary-600 font-bold text-lg">
            {price} EGP
          </span>
        </div>

        {/* Bottom */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4">

          {/* Quantity */}
          <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">

            <button 
              disabled={count === 1}
              onClick={() => handleUpdateCount(count - 1)}
              className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-black disabled:opacity-40 transition-all cursor-pointer"
            >
              <Minus size={12} />
            </button>

            <span className="w-12 text-center font-bold text-black">
              {count}
            </span>

            <button
              onClick={() => handleUpdateCount(count + 1)}
              className="h-8 w-8 rounded-lg bg-primary-600 shadow-sm flex items-center justify-center text-black hover:bg-primary-700 transition-all cursor-pointer"
            >
              <Plus size={12} />
            </button>
          </div>

          {/* Total + Delete */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-gray-400 mb-0.5">
                Total
              </p>

              <p className="text-xl font-bold text-black">
                {price * count}

                <span className="ml-1 text-sm font-medium text-gray-400">
                  EGP
                </span>
              </p>
            </div>

            <button
              onClick={handleDelete}
              title="Remove item"
              className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <Trash2 size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
