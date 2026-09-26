"use client";

import { addToCart, getUserCart } from "@/app/cart/cart.action";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCartStore } from "@/store/cartStore";

export default function AddProductToCartBtn({
  productId,
}: {
  productId: string;
}) {
  const setCartCount = useCartStore((state) => state.setCartCount);

  const [added, setAdded] = useState(false);

  async function handleAddToCart() {
    const result = await addToCart(productId, true);

    if (!result) {
      toast.error("Failed to add product to cart");
      return;
    }

    const cart = await getUserCart();

    setCartCount(cart.numOfCartItems);

    setAdded(true);

    toast.success("Product added to cart successfully");

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  }

  return (
    <Button
      onClick={handleAddToCart}
      className="h-10 w-10 rounded-full cursor-pointer bg-green-600 text-white hover:bg-green-700"
      aria-label={added ? "Added to cart" : "Add to cart"}
    >
      <span
        key={added ? "check" : "plus"}
        className="animate-[iconPop_0.35s_ease-out]"
      >
        {" "}
        {added ? (
          <Check className="h-5 w-5 text-white" />
        ) : (
          <Plus className="h-5 w-5 text-white" />
        )}{" "}
      </span>{" "}
    </Button>
  );
}
