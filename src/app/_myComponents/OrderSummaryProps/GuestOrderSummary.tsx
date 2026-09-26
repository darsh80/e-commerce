import CheckoutSection from "./CheckoutSection";
import SummaryFeatures from "./SummaryFeatures";
import SummaryHeader from "./SummaryHeader";
import SummaryPrices from "./SummaryPrices";

interface GuestOrderSummaryProps {
  totalCartPrice: number;
  numOfCartItems: number;
}

export default function GuestOrderSummary({
  totalCartPrice,
  numOfCartItems,
}: GuestOrderSummaryProps) {
  return (
    <div className="sticky top-4 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <SummaryHeader
        title="Order Summary"
        numOfCartItems={numOfCartItems}
        isLoggedIn={false}
      />

      <div className="space-y-4 p-5">
        <SummaryPrices
          totalCartPrice={totalCartPrice}
          shipping="Calculated at checkout"
          numOfCartItems={numOfCartItems}
        />

        <CheckoutSection isLoggedIn={false} />

        <SummaryFeatures isLoggedIn={false} />
      </div>
    </div>
  );
}