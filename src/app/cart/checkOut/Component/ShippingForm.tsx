"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Building2,
} from "lucide-react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
}

export interface Values {
  shippingAddress: ShippingAddress;
}

interface ShippingFormProps {
  register: UseFormRegister<Values>;
  errors: FieldErrors<Values>;
}

export default function ShippingForm({
  register,
  errors,
}: ShippingFormProps) {
  return (
    <div className="p-6 space-y-6">
      {/* Information */}
      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
          <MapPin className="w-5 h-5 text-blue-600" />
        </div>

        <div>
          <p className="text-sm text-blue-800 font-medium">
            Delivery Information
          </p>

          <p className="text-xs text-blue-600 mt-0.5">
            Please ensure your address is accurate for smooth delivery
          </p>
        </div>
      </div>

      {/* City */}
      <div>
        <Label className="block text-sm font-semibold text-gray-700 mb-2">
          City <span className="text-red-500">*</span>
        </Label>

        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <Building2 className="w-4 h-4 text-gray-500" />
          </div>

          <Input
            {...register("shippingAddress.city", {
              required: "City is required",
              pattern: {
                value:
                  /^(Cairo|Alexandria|Giza|Qalyubia|Qalubia|Port Said|Suez|Luxor|Aswan|Asyut|Fayoum|Faiyum|Ismailia|Damietta|Mansoura|Tanta|Zagazig|Sohag|Minya|Beni Suef|Beni-Suef|Kafr El Sheikh|Arish|El Arish|Hurghada|Sharm El Sheikh)$/i,
                message: "Please enter a valid Egyptian city",
              },
            })}
            placeholder="e.g. Cairo, Alexandria, Giza"
            className="w-full px-4 py-3.5 pl-14 h-auto border-2 rounded-xl focus:outline-none transition-all border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />

          {errors.shippingAddress?.city && (
            <p className="text-red-500 text-xs mt-1">
              {errors.shippingAddress.city.message as string}
            </p>
          )}
        </div>
      </div>

      {/* Address */}
      <div>
        <Label className="block text-sm font-semibold text-gray-700 mb-2">
          Street Address <span className="text-red-500">*</span>
        </Label>

        <div className="relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-gray-500" />
          </div>

          <textarea
            {...register("shippingAddress.details", {
              required: "Street address is required",
              validate: (value) =>
                /[A-Za-z\u0600-\u06FF]/.test(value) ||
                "Address must contain words",
            })}
            rows={3}
            placeholder="Street name, building number, floor, apartment..."
            className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all resize-none border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />

          {errors.shippingAddress?.details && (
            <p className="text-red-500 text-xs mt-1">
              {errors.shippingAddress.details.message as string}
            </p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <Label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number <span className="text-red-500">*</span>
        </Label>

        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <Phone className="w-4 h-4 text-gray-500" />
          </div>

          <Input
            {...register("shippingAddress.phone", {
              required: "Phone number is required",
              pattern: {
                value: /^01[0125][0-9]{8}$/,
                message: "Please enter a valid Egyptian phone number",
              },
            })}
            type="tel"
            placeholder="01xxxxxxxxx"
            className="w-full px-4 py-3.5 pl-14 pr-32 h-auto border-2 rounded-xl focus:outline-none transition-all border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />

          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
            Egyptian numbers only
          </span>

          {errors.shippingAddress?.phone && (
            <p className="text-red-500 text-xs mt-1">
              {errors.shippingAddress.phone.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}