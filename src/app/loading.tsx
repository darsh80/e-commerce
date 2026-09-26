import React from "react";

export default function loading() {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-white border border-gray-200 rounded-lg shadow-md p-3"
        >
          {/* image */}
          <div className="w-full h-44 bg-gray-200 rounded-md"></div>

          {/* badge */}
          <div className="mt-3 w-20 h-4 bg-gray-200 rounded"></div>

          {/* title */}
          <div className="mt-3 w-full h-5 bg-gray-200 rounded"></div>
          <div className="mt-2 w-3/4 h-5 bg-gray-200 rounded"></div>

          {/* rating */}
          <div className="mt-3 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded"></div>
            ))}
          </div>

          {/* price */}
          <div className="mt-3 w-1/2 h-5 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
}
