import { ShoppingBag } from "lucide-react";

interface SummaryHeaderProps {
  title: string;
  numOfCartItems: number;
  isLoggedIn: boolean;
}

export default function SummaryHeader({
  title,
  numOfCartItems,
  isLoggedIn,
}: SummaryHeaderProps) {
  if (!isLoggedIn) {
    return (
      <div className="bg-gray-900 p-5">
        <h2 className="text-lg font-bold text-white">
          {title}
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
      <h2 className="flex items-center gap-2 text-lg font-bold text-white">
        <ShoppingBag size={20} />
        {title}
      </h2>

      <p className="mt-1 text-sm text-green-100">
        {numOfCartItems} {numOfCartItems === 1 ? "item" : "items"} in your cart
      </p>
    </div>
  );
}