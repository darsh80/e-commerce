import Link from "next/link";
import { Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CheckoutSectionProps {
  isLoggedIn: boolean;
  cartId?: string;
}

export default function CheckoutSection({
  isLoggedIn, cartId
}: CheckoutSectionProps) {
    // console.log("🔥 CART ID FROM CHECKOUT:", cartId);

  if (isLoggedIn) {
    return (
      <Link
        href={`/cart/checkOut/${cartId}`}
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 font-semibold text-white shadow-lg shadow-green-600/20 transition-all hover:from-green-700 hover:to-green-800 active:scale-[0.98]"
      >
        <Lock size={18} />

        <Button className="bg-inherit text-inherit hover:bg-inherit hover:cursor-pointer">Secure Checkout</Button>
      </Link>
    );
  }
  return (
    <div className="space-y-3">
      <Link
        href="/login?redirect=/cart"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-semibold text-white transition-all hover:bg-green-700"
      >
        <User size={18} />

        <span>Login to Checkout</span>
      </Link>

      <p className="text-center text-xs text-gray-400">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup?redirect=/cart"
          className="text-green-600 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}