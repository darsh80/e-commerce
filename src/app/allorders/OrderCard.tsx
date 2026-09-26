"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CalendarDays,
  Box,
  MapPin,
  CreditCard,
  Banknote,
  Hash,
  Truck,
  ChevronDown,
  Package, 
} from "lucide-react";

export default function OrderCard({ order }: { order: any }) {
  const [showDetails, setShowDetails] = useState(false);

  const firstProduct = order.cartItems?.[0]?.product;

  const totalItems =
    order.cartItems?.reduce(
      (total: number, item: { count: number }) => total + item.count,
      0
    ) || 0;

  const orderDate = order.createdAt
    ? new Date(order.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "N/A";

  const isDelivered = order.isDelivered;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-gray-200 hover:shadow-md">
      {/* Main Card */}
      <div className="p-5 sm:p-6">
        <div className="flex gap-5">
          {/* Product Image */}
          <div className="relative shrink-0">
            <div className="h-24 w-24 overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-2.5 sm:h-28 sm:w-28">
              {firstProduct?.imageCover ? (
                <Image
                  src={firstProduct.imageCover}
                  alt={firstProduct.title || "Product"}
                  width={112}
                  height={112}
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <Package className="h-8 w-8 text-gray-300" />
                </div>
              )}
            </div>

            {/* Number of extra products */}
            {order.cartItems?.length > 1 && (
              <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white shadow-lg">
                +{order.cartItems.length - 1}
              </div>
            )}
          </div>

          {/* Order Information */}
          <div className="min-w-0 flex-1">
            {/* Header */}
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                {/* Status */}
                <div
                  className={`mb-2 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 ${
                    isDelivered ? "bg-green-100" : "bg-blue-100"
                  }`}
                >
                  <Truck
                    className={`h-3 w-3 ${
                      isDelivered ? "text-green-600" : "text-blue-600"
                    }`}
                  />

                  <span
                    className={`text-xs font-semibold ${
                      isDelivered ? "text-green-600" : "text-blue-600"
                    }`}
                  >
                    {isDelivered ? "Delivered" : "On the way"}
                  </span>
                </div>

                {/* Order ID */}
                <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                  <Hash className="h-4 w-4 text-gray-400" />

                  {order.id || order._id}
                </h3>
              </div>

              {/* Payment Icon */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  order.paymentMethodType === "cash"
                    ? "bg-green-100"
                    : "bg-purple-100"
                }`}
              >
                {order.paymentMethodType === "cash" ? (
                  <Banknote className="h-5 w-5 text-green-600" />
                ) : (
                  <CreditCard className="h-5 w-5 text-purple-600" />
                )}
              </div>
            </div>

            {/* Order Meta */}
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              {/* Date */}
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-gray-400" />

                {orderDate}
              </span>

              <span className="h-1 w-1 rounded-full bg-gray-300" />

              {/* Items */}
              <span className="flex items-center gap-1.5">
                <Box className="h-3.5 w-3.5 text-gray-400" />

                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>

              <span className="h-1 w-1 rounded-full bg-gray-300" />

              {/* City */}
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-gray-400" />

                {order.shippingAddress?.city || "N/A"}
              </span>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between gap-4">
              {/* Price */}
              <div>
                <span className="text-2xl font-bold text-gray-900">
                  {order.totalOrderPrice}
                </span>

                <span className="ml-1 text-sm font-medium text-gray-400">
                  EGP
                </span>
              </div>

              {/* Details Button */}
              <button
                type="button"
                onClick={() => setShowDetails((prev) => !prev)}
                className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2.5 cursor-pointer text-sm font-semibold text-gray-700 transition-all hover:bg-gray-200"
              >
                Details

                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${
                    showDetails ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* Expanded Order Details */}
        {/* ================================= */}

        {showDetails && (
          <div className="mt-6 border-t border-gray-100 pt-6">
            {/* Order Details Header */}
            <div className="mb-5 flex items-center gap-2">
              <Package className="h-5 w-5 text-gray-500" />

              <h4 className="text-lg font-bold text-gray-900">
                Order Details
              </h4>
            </div>

            {/* Products */}
            <div className="space-y-3">
              {order.cartItems?.map((item: { _id: string; count: number; product?: { imageCover?: string; title?: string } }) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-3"
                >
                  {/* Product Image */}
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white p-2">
                    {item.product?.imageCover && (
                      <Image
                        src={item.product.imageCover}
                        alt={item.product.title || "Product"}
                        width={64}
                        height={64}
                        className="h-full w-full object-contain"
                      />
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="min-w-0 flex-1">
                    <h5 className="truncate font-semibold text-gray-900">
                      {item.product?.title || "Product"}
                    </h5>

                    <p className="mt-1 text-sm text-gray-500">
                      Quantity: {item.count}
                    </p>
                  </div>

                  {/* Product Price */}
                  <div className="text-right">
                    <p className="font-bold text-gray-900">
                      {item.product?.price || "N/A"} EGP
                    </p>

                    <p className="text-xs text-gray-400">
                      {item.count} × {item.product?.price || "N/A"} EGP
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Extra Order Information */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {/* Order ID */}
              

              {/* Payment */}
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium text-gray-400">
                  Payment Method
                </p>

                <p className="mt-1 text-sm font-semibold capitalize text-gray-900">
                  {order.paymentMethodType || "N/A"}
                </p>
              </div>

              {/* City */}
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium text-gray-400">
                  City
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {order.shippingAddress?.city || "N/A"}
                </p>
              </div>

              {/* Phone */}
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium text-gray-400">
                  Phone
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {order.shippingAddress?.phone || "N/A"}
                </p>
              </div>

              {/* Details */}
              <div className="rounded-xl bg-gray-50 p-4 sm:col-span-2">
                <p className="text-xs font-medium text-gray-400">
                  Shipping Address
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {order.shippingAddress?.details || "N/A"}
                </p>
              </div>
            </div>

            {/* Total */}
            <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-900 px-4 py-4 text-white">
              <span className="font-semibold">
                Total Order Price
              </span>

              <span className="text-xl font-bold">
                {order.totalOrderPrice} EGP
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}