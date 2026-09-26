"use client";

import { Truck, RotateCcw, ShieldCheck, Headphones } from "lucide-react"

export default function FeaturesSection() {
  return (
    <div className=" bg-green-100 mx-auto px-4 py-6">
     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

  {/* ITEM */}
  <div className="flex items-center gap-3">
    <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
      <Truck className="text-green-600 w-6 h-6" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 text-sm">
        Free Shipping
      </h4>
      <p className="text-gray-500 text-xs">
        On orders over 500 EGP
      </p>
    </div>
  </div>

  {/* ITEM */}
  <div className="flex items-center gap-3">
    <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
      <RotateCcw className="text-green-600 w-6 h-6" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 text-sm">
        Easy Returns
      </h4>
      <p className="text-gray-500 text-xs">
        14-day return policy
      </p>
    </div>
  </div>

  {/* ITEM */}
  <div className="flex items-center gap-3">
    <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
      <ShieldCheck className="text-green-600 w-6 h-6" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 text-sm">
        Secure Payment
      </h4>
      <p className="text-gray-500 text-xs">
        100% secure checkout
      </p>
    </div>
  </div>

  {/* ITEM */}
  <div className="flex items-center gap-3">
    <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
      <Headphones className="text-green-600 w-6 h-6" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 text-sm">
        24/7 Support
      </h4>
      <p className="text-gray-500 text-xs">
        Contact us anytime
      </p>
    </div>
  </div>

</div>
    </div>
  )
}