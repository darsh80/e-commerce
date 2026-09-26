"use client";

import {
  Check,
  CreditCard,
  LockKeyhole,
  ShieldCheck,
  Wallet,
} from "lucide-react";

interface PaymentMethodProps {
  paymentMethod: "cash" | "visa" | undefined;
  setPaymentMethod: (
    method: "cash" | "visa"
  ) => void;
}

export default function PaymentMethod({
  paymentMethod,
  setPaymentMethod,
}: PaymentMethodProps) {
  return (
    <div className="p-6 space-y-4">
      {/* Cash */}
      <button
        type="button"
        onClick={() => setPaymentMethod("cash")}
        className={`w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group text-left ${
          paymentMethod === "cash"
            ? "border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 shadow-sm"
            : "border-gray-200 hover:border-green-200 hover:bg-gray-50"
        }`}
      >
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
            paymentMethod === "cash"
              ? "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30"
              : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
          }`}
        >
          <Wallet className="w-6 h-6" />
        </div>

        <div className="flex-1">
          <h3
            className={`font-bold ${
              paymentMethod === "cash"
                ? "text-green-700"
                : "text-gray-900"
            }`}
          >
            Cash on Delivery
          </h3>

          <p className="text-sm text-gray-500 mt-0.5">
            Pay when your order arrives at your doorstep
          </p>
        </div>

        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
            paymentMethod === "cash"
              ? "bg-green-600 text-white"
              : "border-2 border-gray-200"
          }`}
        >
          {paymentMethod === "cash" && (
            <Check className="w-4 h-4" />
          )}
        </div>
      </button>

      {/* Visa */}
      <button
        type="button"
        onClick={() => setPaymentMethod("visa")}
        className={`w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group text-left ${
          paymentMethod === "visa"
            ? "border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 shadow-sm"
            : "border-gray-200 hover:border-green-200 hover:bg-gray-50"
        }`}
      >
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
            paymentMethod === "visa"
              ? "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30"
              : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
          }`}
        >
          <CreditCard className="w-6 h-6" />
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-gray-900">
            Pay Online
          </h3>

          <p className="text-sm text-gray-500 mt-0.5">
            Secure payment with Credit/Debit Card via Stripe
          </p>

          <div className="flex items-center gap-2 mt-2">
            <img
              alt="Visa"
              className="h-5"
              src="https://img.icons8.com/color/48/visa.png"
            />

            <img
              alt="Mastercard"
              className="h-5"
              src="https://img.icons8.com/color/48/mastercard.png"
            />

            <img
              alt="Amex"
              className="h-5"
              src="https://img.icons8.com/color/48/amex.png"
            />
          </div>
        </div>

        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
            paymentMethod === "visa"
              ? "bg-green-600 text-white"
              : "border-2 border-gray-200"
          }`}
        >
          {paymentMethod === "visa" && (
            <Check className="w-4 h-4" />
          )}
        </div>
      </button>

      {/* Security */}
      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 mt-4">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5 text-green-600" />
        </div>

        <div>
          <p className="text-sm font-medium text-green-800">
            Secure & Encrypted
          </p>

          <p className="text-xs text-green-600 mt-0.5">
            Your payment info is protected with 256-bit SSL encryption
          </p>
        </div>
      </div>
    </div>
  );
}