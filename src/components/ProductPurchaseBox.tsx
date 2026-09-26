"use client";

import { ShoppingCart } from "lucide-react";
import React, { useState } from "react";

type Props = {
  price: number;
  stock: number; 
};

export default function ProductPurchaseBox({ price, stock }: Props) {
  const [Quantity, setQuantity] = useState(1);

  const increase = () => {
    if (Quantity < stock) setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    if (Quantity > 1) setQuantity((prev) => prev - 1);
  };

  
const totalPrice = price * Quantity;
  return (
    <div className="mt-6">

      {/* Quantity */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quantity
        </label>

        <div className="flex items-center gap-4">

          <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">

            <button
              onClick={decrease}
              className="px-4 py-3 text-gray-600 hover:bg-gray-100 disabled:opacity-40"
              disabled={Quantity === 1}
            >
              -
            </button>

            <input
              value={Quantity}
              readOnly
              className="w-16 text-center border-0 text-lg font-medium"
            />

            <button
              onClick={increase}
              className="px-4 py-3 text-gray-600 hover:bg-gray-100 disabled:opacity-40"
              disabled={Quantity === stock}
            >
              +
            </button>

          </div>

          <span className="text-sm text-gray-500">
            {stock} available
          </span>

        </div>
      </div>

      {/* Total Price */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Price:</span>

          <span className="text-2xl font-bold text-green-600">
            {totalPrice.toFixed(2)} EGP
          </span>
        </div>
      </div>

      {/* Add to cart */}
<div className="flex gap-4 ">

  {/* Add to Cart */}
  <button
    disabled={stock === 0}
    className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl disabled:opacity-50 hover:cursor-pointer hover:bg-green-600 "
  >
    <ShoppingCart className="w-5 h-5" />
    Add to Cart
  </button>

  {/* Buy Now */}
  <button
    className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl hover:cursor-pointer"
  >
    ⚡ Buy Now
  </button>

</div>

    </div>
  );
}