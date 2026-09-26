import React from "react";

export default function loading() {
  return (
    <div className="container mx-auto py-8 px-4 animate-pulse">

      {/* ================= MAIN LAYOUT ================= */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* ================= LEFT (GALLERY) ================= */}
        <div className="lg:w-1/4">
          <div className="bg-gray-100 rounded-xl p-4 sticky top-6">
 
            {/* main image */}
            <div className="h-[500px] bg-gray-200 rounded-lg"></div>

            {/* thumbnails */}
            <div className="flex gap-2 mt-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-16 bg-gray-200 rounded-md"
                />
              ))}
            </div>

          </div>
        </div>

        {/* ================= RIGHT (INFO) ================= */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">

            {/* CATEGORY + BRAND */}
            <div className="flex gap-2">
              <div className="w-20 h-6 bg-gray-200 rounded-full"></div>
              <div className="w-20 h-6 bg-gray-200 rounded-full"></div>
            </div>

            {/* TITLE */}
            <div className="w-3/4 h-8 bg-gray-200 rounded"></div>

            {/* RATING */}
            <div className="flex gap-2 items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-5 h-5 bg-gray-200 rounded" />
              ))}
              <div className="w-24 h-4 bg-gray-200 rounded ml-2"></div>
            </div>

            {/* PRICE */}
            <div className="flex gap-3 items-center">
              <div className="w-32 h-8 bg-gray-200 rounded"></div>
              <div className="w-20 h-6 bg-gray-200 rounded"></div>
              <div className="w-16 h-6 bg-gray-200 rounded"></div>
            </div>

            {/* STOCK */}
            <div className="w-28 h-6 bg-gray-200 rounded-full"></div>

            {/* DESCRIPTION */}
            <div className="space-y-2">
              <div className="w-full h-4 bg-gray-200 rounded"></div>
              <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
              <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
              <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
            </div>

            {/* SUBCATEGORIES */}
            <div className="flex gap-2 flex-wrap">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-6 bg-gray-200 rounded-full"
                />
              ))}
            </div>

            {/* PURCHASE BOX */}
            <div className="w-full h-12 bg-gray-200 rounded-lg"></div>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="w-8 h-8 bg-gray-200 rounded"></div>
                  <div className="w-24 h-4 bg-gray-200 rounded"></div>
                  <div className="w-20 h-3 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow-sm space-y-3">
        <div className="w-1/3 h-6 bg-gray-200 rounded"></div>
        <div className="w-full h-4 bg-gray-200 rounded"></div>
        <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
        <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
      </div>

      {/* ================= CAROUSEL ================= */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-64 bg-gray-200 rounded-xl"
          ></div>
        ))}
      </div>

      {/* ================= FEATURES SECTION ================= */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-24 bg-gray-200 rounded-xl"
          ></div>
        ))}
      </div>

    </div>
  );
}