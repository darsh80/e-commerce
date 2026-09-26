interface SummaryPricesProps {
  totalCartPrice: number;
  shipping: number | string;
  numOfCartItems: number;
}

export default function SummaryPrices({
  totalCartPrice,
  shipping,
  numOfCartItems,
}: SummaryPricesProps) {
  const shippingPrice =
    typeof shipping === "number" ? shipping : 0;

  const total =
    typeof shipping === "number"
      ? totalCartPrice + shippingPrice
      : totalCartPrice;

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-gray-600">
        <span>
          Subtotal ({numOfCartItems}{" "}
          {numOfCartItems === 1 ? "item" : "items"})
        </span>

        <span className="font-medium text-gray-900">
          {totalCartPrice.toLocaleString()} EGP
        </span>
      </div>

      <div className="flex justify-between text-gray-600">
        <span>Shipping</span>

        {typeof shipping === "string" ? (
          <span className="font-medium text-green-600">
            {shipping}
          </span>
        ) : shipping === 0 ? (
          <span className="font-medium text-green-600">
            FREE
          </span>
        ) : (
          <span className="font-medium text-gray-900">
            {shipping} EGP
          </span>
        )}
      </div>

      <div className="mt-3 border-t border-dashed border-gray-200 pt-3">
        <div className="flex items-baseline justify-between">
          <span className="font-semibold text-gray-900">
            Total
          </span>

          <div className="text-right">
            <span className="text-2xl font-bold text-gray-900">
              {total.toLocaleString()}
            </span>

            <span className="ml-1 text-sm text-gray-500">
              EGP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}