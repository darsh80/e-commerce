


export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50/50 animate-pulse">

      {/* Hero Skeleton */}
      <section className="bg-gradient-to-br from-green-600 via-green-500 to-green-400 text-white">
        <div className="px-4 py-10 sm:py-14">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-4 w-12 bg-white/20 rounded" />
            <div className="h-4 w-2 bg-white/20 rounded" />
            <div className="h-4 w-16 bg-white/20 rounded" />
            <div className="h-4 w-2 bg-white/20 rounded" />
            <div className="h-4 w-20 bg-white/20 rounded" />
          </div> 

          {/* Hero Content */}
          <div className="flex items-center gap-5">

            {/* Brand Image */}
            <div className="w-16 h-16 rounded-2xl bg-white/20 shrink-0" />

            {/* Text */}
            <div className="space-y-2">
              <div className="h-9 w-48 bg-white/20 rounded-lg" />
              <div className="h-5 w-64 bg-white/20 rounded" />
            </div>

          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-4 py-8">

        {/* Active Filter */}
        <div className="mb-6 flex items-center gap-3 flex-wrap">

          {/* Active Filters */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded" />

            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>

          {/* Brand Filter */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100">

            <div className="w-3 h-3 bg-violet-200 rounded-full" />

            <div className="h-4 w-16 bg-violet-200 rounded" />

            <div className="w-3 h-3 bg-violet-200 rounded-full" />

          </div>

          {/* Clear All */}
          <div className="h-4 w-16 bg-gray-200 rounded" />

        </div>

        {/* Products Count */}
        <div className="mb-6">
          <div className="h-4 w-40 bg-gray-200 rounded" />
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm"
            >

              {/* Image */}
              <div className="aspect-square bg-gray-200 rounded-xl mb-4" />

              {/* Title */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>

              {/* Price */}
              <div className="mt-4 h-6 bg-gray-200 rounded w-1/3" />

              {/* Button */}
              <div className="mt-4 h-10 bg-gray-200 rounded-xl w-full" />

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}
