import {
  Box,
  Package,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";

interface Product {
  count: number;
  product: {
    _id?: string;
    id?: string;
    name?: string;
    title?: string;
    price: number;
    quantity?: number;
    imageCover?: string;
    [key: string]: unknown;
  };
}

interface OrderSummaryProps {
  products: Product[];
  totalCartPrice: number;
  
}

export default function CheckoutOrderSummary({
  products,
  totalCartPrice,
}: OrderSummaryProps) {
  const shipping = 50;
  const total = totalCartPrice + shipping;

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Order Summary
          </h2>

          <p className="text-green-100 text-sm mt-1">
            {products.length}{" "}
            {products.length === 1 ? "item" : "items"}
          </p>
        </div>

        <div className="p-5">
          {/* Products */}
          <div className="space-y-3 max-h-56 overflow-y-auto mb-5 pr-1">
            {products.map((item) => (
              <div
                key={item.product._id}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
                  <img
                    alt={item.product.title}
                    className="w-full h-full object-contain"
                    src={item.product.imageCover}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {item.product.title}
                  </p>

                  <p className="text-xs text-gray-500 mt-0.5">
                    {item.count} × {item.product.price} EGP
                  </p>
                </div>

                <p className="text-sm font-bold text-gray-900 shrink-0">
                  {item.count * item.product.price} EGP
                </p>
              </div>
            ))}
          </div>

          <hr className="border-gray-100 my-4" />

          {/* Prices */}
          <div className="space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>

              <span className="font-medium">
                {totalCartPrice} EGP
              </span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-gray-400" />
                Shipping
              </span>

              <span className="font-medium">
                {shipping} EGP
              </span>
            </div>

            <hr className="border-gray-100" />

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">
                Total
              </span>

              <div className="text-right">
                <span className="text-2xl font-bold text-green-600">
                  {total}
                </span>

                <span className="text-sm text-gray-500 ml-1">
                  EGP
                </span>
              </div>
            </div>
          </div>

          {/* Submit */}
      <button
  type="submit"
  className="w-full mt-6 bg-gradient-to-r cursor-pointer from-green-600 to-green-700 text-white py-4 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 active:scale-[0.98]"
>
  <Box className="w-5 h-5" />
  Place Order
</button>

          {/* Features */}
          <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Secure</span>
            </div>

            <div className="w-px h-4 bg-gray-200" />

            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Truck className="w-4 h-4 text-blue-500" />
              <span>Fast Delivery</span>
            </div>

            <div className="w-px h-4 bg-gray-200" />

            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Package className="w-4 h-4 text-orange-500" />
              <span>Easy Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}