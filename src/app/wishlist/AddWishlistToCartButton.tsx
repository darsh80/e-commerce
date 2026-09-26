"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

import { addToCart, getUserCart } from "@/app/cart/cart.action";
import { useCartStore } from "@/store/cartStore";

export default function AddWishlistToCartButton({
  productId,
}: {
  productId: string;
}) {
  const [loading, setLoading] = useState(false);

  const setCartCount = useCartStore((state) => state.setCartCount);

  async function handleAddToCart() {
    if (loading) return;

    setLoading(true);

    try {
      const data = await addToCart(productId, 1);

      if (data.status === "success") {
        const cartResponse = await getUserCart();

        setCartCount(cartResponse.numOfCartItems);

        toast.success("Product added to cart 🛒");
      } else {
        toast.error(data.msg || "Something went wrong");
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
      onClick={handleAddToCart}
      disabled={loading}
      className="flex-1 md:flex-none inline-flex items-center cursor-pointer justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
    >
      <ShoppingCart className="w-4 h-4" />

      <span className="md:hidden lg:inline">
        {loading ? "Adding..." : "Add to Cart"}
      </span>
    </button>
  );
}