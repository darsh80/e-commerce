
import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingCart,
} from "lucide-react";

import EmptyCart from "../_myComponents/EmptyCart/EmptyCart";
import { clearCart, getUserCart } from "./cart.action";
import { GetDecodedToken } from "@/lib/GetUserToken";

import CartWrapper from "../_myComponents/CartWrapper/CartWrapper";
import ClearCartBtn from "../_myComponents/ClearCart/ClearCartBtn";
import OrderSummary from "../_myComponents/OrderSummaryProps/OrderSummaryProps";

export default async function Cart() {
  const cartRes = await getUserCart();

  const {
    numOfCartItems,
    cartId,
    data: {totalCartPrice, products },
  } = cartRes;

  const accessToken = await GetDecodedToken();
  const isLoggedIn = !!accessToken;

  // Empty Cart
  if (numOfCartItems === 0) {
    return <EmptyCart />;
  }

  // Cart Page
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className=" px-4">

        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link
            href="/"
            className="transition hover:text-green-600"
          >
            Home
          </Link>

          <span className="text-gray-300">/</span>

          <span className="font-medium text-gray-900">
            Shopping Cart
          </span>
        </div>

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-3 text-3xl font-bold text-gray-900">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white">
                <ShoppingCart className="h-8 w-8" />
              </span>

              Shopping Cart
            </h1>

            <p className="mt-2 text-gray-500">
              You have{" "}
              <span className="font-semibold text-green-600">
                {numOfCartItems}{" "}
                {numOfCartItems === 1 ? "item" : "items"}
              </span>{" "}
              in your cart
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Cart Items */}
          <div className="space-y-4 lg:col-span-2">
            <CartWrapper products={products} />

            <div className="flex justify-end">
              <ClearCartBtn clearCart={clearCart} />
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <OrderSummary
              totalCartPrice={totalCartPrice}
              numOfCartItems={numOfCartItems}
              isLoggedIn={isLoggedIn}
              cartId={cartId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
