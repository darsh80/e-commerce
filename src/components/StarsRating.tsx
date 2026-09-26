import React from "react";

type Props = {
  rating: number;
  count?: number;
};

export default function StarsRating({ rating, count }: Props) {
  return (
    <div className="flex items-center gap-1 text-lg">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            i < Math.round(rating)
              ? "text-yellow-500"
              : "text-gray-300"
          }
        >
          ★
        </span>
      ))}

      {count !== undefined && (
        <span className="text-gray-500 text-sm ml-1">
          ({count})
        </span>
      )}
    </div>
  );
}