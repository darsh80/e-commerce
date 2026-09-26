
"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Fresh Products Delivered to your Door",
    description: "Get 20% off your first order",
    primaryText: "Shop Now",
    primaryHref: "/products",
    secondaryText: "View Deals",
    secondaryHref: "/deals",
  },
  {
    title: "Premium Quality Guaranteed",
    description: "Fresh from farm to your table",
    primaryText: "Shop Now",
    primaryHref: "/products",
    secondaryText: "Learn More",
    secondaryHref: "/about",
  },
  {
    title: "Fast & Free Delivery",
    description: "Same day delivery available",
    primaryText: "Order Now",
    primaryHref: "/products",
    secondaryText: "Delivery Info",
    secondaryHref: "/delivery",
  },
];

export default function HomeSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[400px] flex items-center justify-center"
              style={{
             
                backgroundImage:
                  'url("/imgi_111_home-slider-1.d79601a8.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
                <div className="container h-full content-center">
                  <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                    {slide.title}
                  </h2>

                  <p>{slide.description}</p>

                  <div className="mt-4">
                    <Link
                      href={slide.primaryHref}
                      className="btn bg-white border-2 border-white/50 text-green-500 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                    >
                      {slide.primaryText}
                    </Link>

                    {/* View Deals / Learn More / Delivery Info */}
                    <Link
                      href={slide.secondaryHref}
                      className="btn bg-transparent border-2 border-white/50 text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                    >
                      {slide.secondaryText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Previous Button */}
      <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
        <ChevronLeft className="text-lg" />
      </div>

      {/* Next Button */}
      <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
        <ChevronRight className="text-lg" />
      </div>
    </div>
  );
}
