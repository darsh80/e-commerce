"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Badge } from "@/components/ui/badge";
import StarsRating from "@/components/StarsRating";
import { Product } from "@/interfaces/products.interface";
import FavoriteButton from "./FavoriteButton";
import EyeButton from "./EyeButton";
import RefreshCwButton from "./RefreshCwButton";

interface Props {
  products: Product[];
}

export function CarouselCard({ products = [] }: Props) {
  return (
    <div className="w-full container mx-auto mb-5 mt-5 relative">
      <Carousel className="w-full">
        {/* Controls */}
        <div className="absolute -top-10 right-12 flex gap-2 z-10">
          <CarouselPrevious className="h-11 w-11" />
          <CarouselNext className="h-11 w-11" />
        </div>

        <CarouselContent className="-ml-2">
          {products.map((product) => (
            <CarouselItem
              key={product._id}
              className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              {/* CARD */}
              <Card
                className="relative h-[360px] w-full overflow-hidden
                bg-white border border-gray-200 rounded-lg"
              >
                {/* IMAGE */}
                <div className="relative w-full h-[170px] bg-white">
                  <Image
                    src={product.imageCover}
                    alt={product.title}
                    fill
                    className="object-contain p-2"
                  />

                  {/* FAVORITE */}
                  <div className="absolute top-2 right-2 z-10 hover:cursor-pointer">
                  <FavoriteButton productId={product._id} />                  </div>
                  {/* REFRESH */}
                  <div className="absolute top-10 right-0 p-2 hover:cursor-pointer ">
                    <RefreshCwButton />
                  </div>
                  {/* EYE */}
                  <Link
                    href={`/${product._id}`}
                    className="absolute top-20 right-0 p-2 hover:cursor-pointer"
                  >
                    <EyeButton />
                  </Link>

                  {/* DISCOUNT */}
                  {product.priceAfterDiscount &&
                    product.priceAfterDiscount < product.price && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                        -
                        {Math.round(
                          ((product.price - (product.priceAfterDiscount || 0)) /
                            product.price) *
                            100,
                        )}
                        %
                      </div>
                    )}
                </div>

                {/* CONTENT */}
                <CardHeader className="p-3 space-y-2">
                  <Badge className="bg-green-100 text-green-700 w-fit">
                    {product.category?.name}
                  </Badge>

                  <Link href={`/${product._id}`}>
                    <CardTitle className="text-sm line-clamp-2">
                      {product.title}
                    </CardTitle>
                  </Link>

                  <StarsRating
                    rating={product.ratingsAverage}
                    count={product.ratingsQuantity}
                  />

                  {/* PRICE */}
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-green-600 font-bold text-base">
                      {product.priceAfterDiscount ?? product.price} EGP
                    </span>

                    {product.priceAfterDiscount && (
                      <span className="text-gray-400 line-through text-sm">
                        {product.price} EGP
                      </span>
                    )}
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
