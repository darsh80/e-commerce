"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import Link from "next/link";

export default function ClearCartBtn({
  clearCart,
}: {
  clearCart: () => Promise<void>;
}) {
  const router = useRouter(); 
  const [loading, setLoading] = useState(false);

  async function handleClear() {
    const result = await Swal.fire({
      title: "Clear Cart?",
      text: "All products will be removed from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, clear it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#dc2626",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    try {
      setLoading(true);

      await clearCart();

      router.refresh();

      Swal.fire({
        title: "Cart Cleared!",
        text: "Your cart has been emptied successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

    } finally {
      setLoading(false);
    }
  }

  return (
   <div className="mt-6 pt-6 border-t border-gray-200 flex w-full items-center justify-between">

    {/* Left */}
    <div>
      <Link
        href="/"
        className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-2 transition-colors"
      >
        <span>←</span>
        Continue Shopping
      </Link>
    </div>


    {/* Right */}
    <div>
      <button
        onClick={handleClear}
        disabled={loading}
        className="group flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50 cursor-pointer"
      >
        <Trash2
          size={14}
          className="group-hover:scale-110 transition-transform"
        />

        <span>
          {loading ? "Clearing..." : "Clear all items"}
        </span>
      </button>
    </div>

  </div>
  );
}