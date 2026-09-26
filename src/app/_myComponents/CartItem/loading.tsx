export default function Loading() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 animate-pulse"
        >
          <div className="flex gap-4 sm:gap-6">
            {/* Image */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gray-200 shrink-0" />

            {/* Content */} 
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <div className="h-6 w-3/4 rounded bg-gray-200 mb-3" />

              {/* Category */}
              <div className="h-5 w-20 rounded-full bg-gray-200 mb-5" />

              {/* Price */}
              <div className="h-6 w-24 rounded bg-gray-200 mb-6" />

              <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                {/* Counter */}
                <div className="flex items-center bg-gray-100 rounded-xl p-1 border border-gray-200">
                  <div className="w-8 h-8 rounded-lg bg-gray-200" />
                  <div className="w-12 h-5 mx-2 rounded bg-gray-200" />
                  <div className="w-8 h-8 rounded-lg bg-gray-200" />
                </div>

                {/* Total & Delete */}
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="h-3 w-10 rounded bg-gray-200 mb-2 ml-auto" />
                    <div className="h-6 w-20 rounded bg-gray-200" />
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
