import { Truck } from "lucide-react";

interface ShippingCardProps {
  shipping: number;
  remaining: number;
  progress: number;
}

export default function ShippingCard({
  shipping,
  remaining,
  progress,
}: ShippingCardProps) {
  if (shipping === 0) {
    return (
      <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
            <Truck size={20} className="text-green-600" />
          </div>

          <div>
            <p className="font-semibold text-green-700">
              Free Shipping!
            </p>

            <p className="text-sm text-green-600">
              You qualify for free delivery
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 p-4">
      <div className="mb-2 flex items-center gap-2">
        <Truck size={18} className="text-orange-500" />

        <span className="text-sm font-medium text-gray-700">
          Add {remaining} EGP for free shipping
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-orange-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-400 to-amber-400 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}