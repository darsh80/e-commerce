"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs , Zoom } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/thumbs";
type Props = {
  images: string[];
};

export default function ProductGallery({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] =
    useState<SwiperType | null>(null);

  if (!images || images.length === 0) {
    return <p className="text-center">No images available</p>;
  }

  return (
    <div className="w-full max-w-xl mx-auto">

      {/* MAIN IMAGE */}
      <Swiper
        modules={[Thumbs, Zoom]}
        thumbs={{ swiper: thumbsSwiper }}
        zoom={{ maxRatio: 2 }}
        className="rounded-xl overflow-hidden"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            
            <div className="swiper-zoom-container h-[350px] bg-gray-100 flex items-center justify-center">
              <img
                src={img}
                alt={`product-${i}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMBS */}
      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
        className="mt-4"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="h-[90px] bg-gray-100 flex items-center justify-center rounded-md border hover:border-green-500 transition">
              <img
                src={img}
                alt={`product-thumb-${i}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}