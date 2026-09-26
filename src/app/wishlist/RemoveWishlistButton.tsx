"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { Trash2 } from "lucide-react";

import {
  removeFromWishlist,
  getWishlist,
} from "./wishlist.action";

import { useWishlistStore } from "@/store/wishlistStore";

export default function RemoveWishlistButton({
  productId,
}: {
  productId: string;
}) {
  const [loading, setLoading] = useState(false);

  const setWishlistCount = useWishlistStore(
    (state) => state.setWishlistCount
  );

  async function handleRemove() {
    if (loading) return;

    const result = await Swal.fire({
      title: "Remove Product?",
      text: "Are you sure you want to remove this product from your wishlist?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    setLoading(true);

    try {
      const data = await removeFromWishlist(productId);

      if (data.status === "success") {
        const wishlistResponse = await getWishlist();

        setWishlistCount(wishlistResponse?.data?.length ?? 0);

        await Swal.fire({
          title: "Removed!",
          text: "Product has been removed from your wishlist.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          title: "Error",
          text: data.message || "Something went wrong",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);

      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleRemove}
      disabled={loading}
      className="w-10 h-10 cursor-pointer rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all disabled:opacity-50"
      title="Remove"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}