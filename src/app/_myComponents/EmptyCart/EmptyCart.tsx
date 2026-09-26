
import React from "react";
import Link from "next/link";
import { ArrowRight, PackageOpen } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">

        <div className="relative mb-8">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gray-100">
            <PackageOpen
              className="h-16 w-16 text-gray-300"
              strokeWidth={1.5}
            /> 
          </div>
        </div>

        <h2 className="mb-3 text-2xl font-bold text-gray-900">
          Your cart is empty
        </h2>

        <p className="mb-8 leading-relaxed text-gray-500">
          Looks like you haven&apos;t added anything to your cart yet.
          <br />
          Start exploring our products!
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-green-700 active:scale-[0.98]"
        >
          Continue Shopping
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>
    </div>
  );
}
