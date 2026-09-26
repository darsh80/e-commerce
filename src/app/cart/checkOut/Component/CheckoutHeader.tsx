import Link from "next/link";
import { ArrowLeft, Receipt } from "lucide-react";

export default function CheckoutHeader() {
  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link
          href="/"
          className="hover:text-green-600 transition"
        >
          Home
        </Link>

        <span className="text-gray-300">/</span>

        <Link
          href="/cart"
          className="hover:text-green-600 transition"
        >
          Cart
        </Link>

        <span className="text-gray-300">/</span>

        <span className="text-gray-900 font-medium">
          Checkout
        </span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <span className="bg-gradient-to-br from-green-600 to-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-600/20">
              <Receipt className="w-6 h-6" />
            </span>

            Complete Your Order
          </h1>

          <p className="text-gray-500 mt-2">
            Review your items and complete your purchase
          </p>
        </div>

        <Link
          href="/cart"
          className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cart
        </Link>
      </div>
    </div>
  );
}