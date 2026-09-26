import CheckoutSection from "./CheckoutSection";
import PromoCodeButton from "./PromoCodeButton";
import ShippingCard from "./ShippingCard";
import SummaryFeatures from "./SummaryFeatures";
import SummaryHeader from "./SummaryHeader";
import SummaryPrices from "./SummaryPrices";

interface UserOrderSummaryProps {
  totalCartPrice: number;
  numOfCartItems: number;
  cartId: string;
}

export default function UserOrderSummary({
  totalCartPrice,
  numOfCartItems,
  cartId,
}: UserOrderSummaryProps) {
  const FREE_SHIPPING_LIMIT = 500;

  const shipping = totalCartPrice >= FREE_SHIPPING_LIMIT ? 0 : 50;

  const remaining = Math.max(FREE_SHIPPING_LIMIT - totalCartPrice, 0);

  const progress = Math.min(
    (totalCartPrice / FREE_SHIPPING_LIMIT) * 100,
    100
  );
// console.log("🔥 CART ID FROM USER SUMMARY:", cartId);
  return (
    <div className="sticky top-4 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <SummaryHeader
        title="Order Summary"
        numOfCartItems={numOfCartItems}
        isLoggedIn={true}
      />

      <div className="space-y-5 p-6">
        <ShippingCard
          shipping={shipping}
          remaining={remaining}
          progress={progress}
        />

        <SummaryPrices
          totalCartPrice={totalCartPrice}
          shipping={shipping}
          numOfCartItems={numOfCartItems}
        />

        <PromoCodeButton />

        <CheckoutSection isLoggedIn={true} cartId={cartId} />

        <SummaryFeatures isLoggedIn={true} />
      </div>
    </div>
  );
} 