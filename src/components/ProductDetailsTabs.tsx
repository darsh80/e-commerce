"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

import {
  Truck,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  Box,
  Star,
} from "lucide-react";

import { Product } from "@/interfaces/products.interface";
import { ProductTabTrigger } from "./ProductTabTrigger";


type Review = {
  _id: string;
  user: {
    name: string;
  };
  rating: number;
  review: string;
};

type Props = {
  product: Product | null;
};

export default function ProductDetailsTabs({ product }: Props) {
  const reviews = (product as Product & { reviews?: Review[] })?.reviews ?? [];

  return (
    <div className="mt-10">

      <Tabs defaultValue="details" className="w-full">

        {/* ================= TABS HEADER ================= */}
 <TabsList className="flex w-fit bg-white gap-4 p-4 rounded-xl ">

  <TabsTrigger
    value="details"
    className="px-6 py-4 text-sm font-medium rounded-lg transition-all
    text-gray-600 hover:bg-green-50 hover:text-green-500
    data-[state=active]:bg-green-600
    data-[state=active]:text-white
    data-[state=active]:shadow-sm"
  >
    Product Details
  </TabsTrigger>

  <TabsTrigger
    value="reviews"
    className="px-5 py-4 text-sm font-medium rounded-lg transition-all
    text-gray-600 hover:bg-green-50 hover:text-green-600
    data-[state=active]:bg-green-600
    data-[state=active]:text-white
    data-[state=active]:shadow-sm"
  >
    Reviews ({product?.ratingsQuantity})
  </TabsTrigger>

  <TabsTrigger
    value="shipping"
    className="px-5 py-4 text-sm font-medium rounded-lg transition-all
    text-gray-600 hover:bg-green-50 hover:text-green-600
    data-[state=active]:bg-green-600
    data-[state=active]:text-white
    data-[state=active]:shadow-sm"
  >
    Shipping & Returns
  </TabsTrigger>

</TabsList>
        {/* ================= DETAILS TAB ================= */}
        <TabsContent value="details" className="mt-6">

          <div className="space-y-6">

            <div>
              <h3 className="text-lg font-semibold mb-2">
                About this Product
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {product?.description}
              </p>
            </div>

            {/* INFO GRID */}
            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">
                  Product Information
                </h4>

                <ul className="space-y-2 text-sm">

                  <li className="flex justify-between">
                    <span>Category</span>
                    <span>{product?.category?.name}</span>
                  </li>

             <li className="flex justify-between">
  <span>Subcategory</span>

  <span className="flex gap-2 flex-wrap justify-end">
    {product?.subcategory?.map((sub) => (
      <span key={sub._id} className="text-gray-700">
        {sub.name}
      </span>
    ))}
  </span>
</li>

                  <li className="flex justify-between">
                    <span>Brand</span>
                    <span>{product?.brand?.name}</span>
                  </li>

                  <li className="flex justify-between">
                    <span>Sold</span>
                    <span>{product?.sold ?? 0}</span>
                  </li>

                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">

                <h4 className="font-semibold mb-3">
                  Key Features
                </h4>

                <div className="space-y-2 text-sm text-gray-600">

                  <p>✔ Premium Quality Product</p>
                  <p>✔ 100% Authentic Guarantee</p>
                  <p>✔ Fast & Secure Packaging</p>
                  <p>✔ Quality Tested</p>

                </div>

              </div>

            </div>

          </div>

        </TabsContent>

        {/* ================= REVIEWS TAB ================= */}
        <TabsContent value="reviews" className="mt-6">

          <div className="space-y-4">

            {reviews.length ? (
              reviews.map((r) => (
                <div
                  key={r._id}
                  className="border p-3 rounded-lg"
                >
                  <p className="font-medium">{r.user.name}</p>
                  <p className="text-yellow-500">
                    {"⭐".repeat(r.rating)}
                  </p>
                  <p className="text-gray-600">
                    {r.review}
                  </p>
                </div>
              ))
            ) : (
              <p>No reviews yet</p>
            )}

          </div>

        </TabsContent>

 {/* ================= SHIPPING TAB ================= */}
<TabsContent value="shipping" className="mt-4">
  <div className="space-y-4">

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* SHIPPING */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">

        <div className="flex items-center gap-2 mb-3">
          <div className="h-10 w-10 bg-green-600 text-white rounded-full flex items-center justify-center">
            <Truck size={18} />
          </div>

          <h4 className="font-semibold text-sm text-gray-900">
            Shipping Information
          </h4>
        </div>

        <ul className="space-y-2 text-xs text-green-700">

          <li className="flex items-start gap-2">
            <CheckCircle2 size={14} className="text-green-600 mt-0.5" />
            Free shipping on orders over threshold
          </li>

          <li className="flex items-start gap-2">
            <CheckCircle2 size={14} className="text-green-600 mt-0.5" />
            Delivery within 3–5 business days
          </li>

          <li className="flex items-start gap-2">
            <CheckCircle2 size={14} className="text-green-600 mt-0.5" />
            Express delivery available
          </li>

        </ul>
      </div>

      {/* RETURNS */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">

        <div className="flex items-center gap-2 mb-3">
          <div className="h-10 w-10 bg-green-600 text-white rounded-full flex items-center justify-center">
            <RotateCcw size={18} />
          </div>

          <h4 className="font-semibold text-sm text-gray-900">
            Returns & Refunds
          </h4>
        </div>

        <ul className="space-y-2 text-xs text-green-700">

          <li className="flex items-start gap-2">
            <CheckCircle2 size={14} className="text-green-600 mt-0.5" />
            30-day hassle-free returns
          </li>

          <li className="flex items-start gap-2">
            <CheckCircle2 size={14} className="text-green-600 mt-0.5" />
            Full refund or exchange available
          </li>

          <li className="flex items-start gap-2">
            <CheckCircle2 size={14} className="text-green-600 mt-0.5" />
            Easy return process
          </li>

        </ul>
      </div>
    </div>

    {/* BUYER PROTECTION */}
    <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">

      <div className="h-10 w-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center shrink-0">
        <ShieldCheck size={18} />
      </div>

      <div>
        <h4 className="font-semibold text-sm text-gray-900">
          Buyer Protection
        </h4>

        <p className="text-xs text-gray-600">
          Full refund if order is not received or not as described.
        </p>
      </div>

    </div>

  </div>
</TabsContent>

      </Tabs>

    </div>
  );
}