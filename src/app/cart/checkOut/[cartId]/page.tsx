"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import {
  cashOrder,
  VisaOrder,
  getUserCart,
} from "../../cart.action";
import CheckoutHeader from "../Component/CheckoutHeader";
import ShippingForm from "../Component/ShippingForm";
import PaymentMethod from "../Component/PaymentMethod";
import { House } from "lucide-react";
import CheckoutOrderSummary from "../Component/OrderSummary";

type CheckoutFormValues = {
  shippingAddress: {
    details: string;
    phone: string; 
    city: string;
  };
};

type Product = {
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
};

type Cart = {
  products: Product[];
  totalCartPrice: number;
};

export default function Page() {
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "visa">();
  const [cart, setCart] = useState<Cart | null>(null);

  const { cartId } = useParams() as {
    cartId: string;
  };
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    defaultValues: {
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
  });

  useEffect(() => {
    async function getCart() {
      const response = await getUserCart();
      setCart(response?.data as unknown as Cart);
    }

    getCart();
  }, []);

  async function handleCheckOut(values: CheckoutFormValues) {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    if (paymentMethod === "cash") {
      await cashOrder(cartId, values);
    }

    if (paymentMethod === "visa") {
      const redirectUrl = await VisaOrder(
        cartId,
        values
      );

      if (redirectUrl) {
        router.push(redirectUrl);
      }
    }
  }

  if (!cart) {
    return (
      <div className="px-4 py-10">
        <div className="animate-pulse space-y-5">
          <div className="h-8 bg-gray-200 rounded w-1/3" />
          <div className="h-40 bg-gray-200 rounded-xl" />
          <div className="h-40 bg-gray-200 rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div className=" px-4 py-8">
      <CheckoutHeader />

      <form
        onSubmit={handleSubmit(handleCheckOut)}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Left */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="border-b border-gray-100 bg-green-500 px-6 py-4">
              <h2 className="text-xl font-bold  text-white flex items-center gap-2">
                <House className="w-5 h-5" />
                Shipping Address
              </h2>

              <p className="text-sm text-white mt-1">
                Where should we deliver your order?
              </p>
            </div>

            <ShippingForm register={register} errors={errors} />
          </div>

          {/* Payment */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="border-b border-gray-100 px-6 py-4">
              <h2 className="text-xl font-bold text-gray-900">
                Payment Method
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Choose how you want to pay
              </p>
            </div>

            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          </div>
        </div>

        {/* Right */}
        <CheckoutOrderSummary
          products={cart.products}
          totalCartPrice={cart.totalCartPrice}
        />
      </form>
    </div>
  );
}
