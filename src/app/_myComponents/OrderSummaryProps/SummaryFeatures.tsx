import { Check, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";

interface SummaryFeaturesProps {
  isLoggedIn: boolean;
}

export default function SummaryFeatures({
  isLoggedIn,
}: SummaryFeaturesProps) {
  if (!isLoggedIn) {
    return (
      <div className="space-y-2 border-t border-gray-100 pt-4">
        <p className="flex items-center gap-2 text-xs text-gray-500">
          <Check size={14} className="text-green-600" />
          Your cart items will be saved
        </p>

        <p className="flex items-center gap-2 text-xs text-gray-500">
          <Check size={14} className="text-green-600" />
          Track your orders easily
        </p>

        <p className="flex items-center gap-2 text-xs text-gray-500">
          <Check size={14} className="text-green-600" />
          Access exclusive member deals
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-center gap-4 py-2">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <ShieldCheck size={16} className="text-green-500" />
          <span>Secure Payment</span>
        </div>

        <div className="h-4 w-px bg-gray-200" />

        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <Truck size={16} className="text-blue-500" />
          <span>Fast Delivery</span>
        </div>
      </div>

      <Link
        href="/"
        className="block py-2 text-center text-sm font-medium text-green-600 transition-colors hover:text-green-700"
      >
        ← Continue Shopping
      </Link>
    </>
  );
}