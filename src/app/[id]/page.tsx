import React from "react";
import ProductGallery from "../../components/ProductGallery";
import ProductPurchaseBox from "../../components/ProductPurchaseBox";
import StarsRating from "@/components/StarsRating";
import { productFeatures } from "@/constants/ProductFeatures";
import ProductDetailsTabs from "@/components/ProductDetailsTabs";
import { CarouselCard } from "@/components/CarouselCard";
import { notFound } from "next/navigation";

export default async function productDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`,
    { next: { revalidate: 10 } },
  );

  const data = await res.json();
  const product = data?.data;

  const categoryId = product?.category?._id || "";

  const productsRes = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`,
    { cache: "force-cache" },
  );
 
  const productsData = await productsRes.json();
  const products = productsData?.data?.slice?.(0, 25); // Get only the first 25 products for the carousel

  // DISCOUNT CALC
  const discount =
    product?.priceAfterDiscount && product?.priceAfterDiscount < product?.price
      ? Math.round(
          ((product?.price - product?.priceAfterDiscount) / product?.price) *
            100,
        )
      : 0;

 if (!product) {
  notFound();
}

  return (
    <>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* images */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-4 px-5 sticky top-6">
              <div className="h-[500px]">
                <ProductGallery images={product?.images} />
              </div>
            </div>
          </div>

          {/*  RIGHT (INFO)*/}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {/* CATEGORY + BRAND */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1.5 rounded-full">
                  {product?.category?.name}
                </span>

                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                  {product?.brand?.name}
                </span>
              </div>

              {/* TITLE */}
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {product?.title}
              </h1>

              {/* RATING */}
              <StarsRating
                rating={product?.ratingsAverage}
                count={product?.ratingsQuantity}
              />

              {/* PRICE */}
              <div className="mb-4 flex items-center gap-3 flex-wrap">
                {/* NEW PRICE */}
                <span className="text-3xl font-bold text-gray-900">
                  {product?.priceAfterDiscount ?? product?.price} EGP
                </span>

                {/* OLD PRICE */}
                {product?.priceAfterDiscount && (
                  <span className="text-gray-400 line-through text-lg">
                    {product?.price} EGP
                  </span>
                )}

                {/* SAVE BADGE */}
                {discount > 0 && (
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                    Save {discount}%
                  </span>
                )}
              </div>

              {/* STOCK */}
              <div className="mb-6">
                <span className="text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700">
                  In Stock ({product?.quantity})
                </span>
              </div>

              {/* DESCRIPTION */}
              <div className="border-t pt-5 mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {product?.description}
                </p>
              </div>

              {/* SUBCATEGORIES */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product?.subcategory?.map(
                  (sub: { _id: string; name: string }) => (
                    <span
                      key={sub._id}
                      className="bg-gray-100 text-xs px-3 py-1 rounded-full"
                    >
                      {sub.name}
                    </span>
                  ),
                )}
              </div>

              <ProductPurchaseBox
                price={product?.price}
                stock={product?.quantity}
              />

              {/* EXTRA INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t pt-6 text-sm text-gray-600 mt-6">
                {productFeatures.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div>{item.icon}</div>

                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto container mx-auto mb-10">
        <ProductDetailsTabs product={product} />
      </div>

      <div className="w-full h-auto container mt-5 mx-auto  mb-10">
        <CarouselCard products={products} />
      </div>
    </>
  );
}
