
  import GuestOrderSummary from "./GuestOrderSummary";
  import UserOrderSummary from "./UserOrderSummary";

interface OrderSummaryProps {
  totalCartPrice: number;
  numOfCartItems: number;
  isLoggedIn: boolean;
  cartId: string;
}

export default function CartOrderSummary(props: OrderSummaryProps) {
  return props.isLoggedIn ? (
    <UserOrderSummary {...props} />
  ) : (
    <GuestOrderSummary {...props} />
  );
}