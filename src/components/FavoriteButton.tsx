"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import {
  addToWishlist,
  getWishlist,
} from "@/app/wishlist/wishlist.action";
import { toast } from "sonner";

import { useWishlistStore } from "@/store/wishlistStore";

export default function FavoriteButton({
  productId,
}: {
  productId: string;
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  const setWishlistCount = useWishlistStore(
    (state) => state.setWishlistCount
  );

  useEffect(() => {
    async function checkWishlist() {
      try {
        const wishlistResponse = await getWishlist();

        const isProductInWishlist = wishlistResponse.data.some(
          (product: { _id: string }) => product._id === productId
        );

        setIsFavorite(isProductInWishlist);
      } catch (error) {
        console.log(error);
      }
    }

    checkWishlist();
  }, [productId]);

  async function handleFavorite() {
    if (loading) return;

    setLoading(true);

    try {
      const data = await addToWishlist(productId);

      if (data.status === "success") {
        const wishlistResponse = await getWishlist();

        setWishlistCount(wishlistResponse.data.length);

        setIsFavorite(true);

        toast.success("Product added to wishlist ❤️");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleFavorite}
      disabled={loading}
      className= "cursor-pointer bg-white/70 backdrop-blur-sm p-2 rounded-full shadow-sm"
    >
      <Heart
        size={18}
        className={
          isFavorite
            ? "text-red-500 fill-red-500"
            : "text-gray-700 hover:text-red-500"
        }
      />
    </button>
  );
}