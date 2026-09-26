
import React from "react";
import Link from "next/link";
import { Box, ShoppingBag } from "lucide-react";

import { getAllOrders } from "../cart/cart.action";
import OrderCard from "./OrderCard";

export default async function allorders() {
  const ordersResponse = await getAllOrders();

  const orders = ordersResponse?.data || [];

  return ( 
    <div className=" bg-gradient-to-b from-gray-50 to-white py-8">
      <div className=" mx-auto px-4">

        {/* Header */}
        <div className="mb-8">

          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
            <Link
              href="/"
              className="transition hover:text-green-600"
            >
              Home
            </Link>

            <span className="text-gray-300">/</span>

            <span className="font-medium text-gray-900">
              My Orders
            </span>
          </nav>

          {/* Title + Continue Shopping */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div className="flex items-center gap-4">

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/25">
                <Box className="h-7 w-7 text-white" />
              </div>

              {/* Title */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  My Orders
                </h1>

                <p className="mt-0.5 text-sm text-gray-500">
                  Track and manage your{" "}
                  {orders.length}{" "}
                  {orders.length === 1 ? "order" : "orders"}
                </p>
              </div>
            </div>

            {/* Continue Shopping */}
            <Link
              href="/"
              className="flex self-start items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-green-600 transition-all hover:bg-green-50 hover:text-green-700 sm:self-auto"
            >
              <ShoppingBag className="h-4 w-4" />

              Continue Shopping
            </Link>
          </div>
        </div>

        {/* No Orders */}
        {orders.length === 0 ? (
          <div className="rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-sm">
            <Box className="mx-auto mb-4 h-12 w-12 text-gray-300" />

            <h2 className="text-xl font-bold text-gray-900">
              No Orders Yet
            </h2>

            <p className="mt-2 text-gray-500">
              You haven't placed any orders yet.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {orders.map((order: any) => (
              <OrderCard
                key={order._id}
                order={order}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
