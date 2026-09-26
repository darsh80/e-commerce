"use client";

import { Tag } from "lucide-react";

export default function PromoCodeButton() {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 py-3 text-gray-600 transition-all hover:border-green-400 hover:bg-green-50/50 hover:text-green-600"
    >
      <Tag size={18} />

      <span className="text-sm font-medium">
        Apply Promo Code
      </span>
    </button>
  );
}