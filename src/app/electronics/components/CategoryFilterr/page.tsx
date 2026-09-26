
import Link from "next/link";
import { FaFilter, FaLayerGroup, FaXmark } from "react-icons/fa6";
import { getCategoryById } from "@/app/categories/categores.action";

export default async function CategoryFilterr({
  categoryId,
}: {
  categoryId: string;
}) {
  const categoryResponse = await getCategoryById(categoryId);

  const category = categoryResponse.data;

  return (
    <section className="bg-white">
      <div className="px-4 py-5">

        <div className="mb-6 flex items-center gap-3 flex-wrap">

          <span className="flex items-center gap-2 text-sm text-gray-600">
            <FaFilter />
            Active Filters:
          </span>

          <Link
            href={`/electronics/${categoryId}`}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium hover:bg-green-200 transition-colors"
          >
            <FaLayerGroup className="text-xs" />

            {category.name}

            <FaXmark className="text-xs" />
          </Link>

          <Link
            href="/categories"
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Clear all
          </Link>

        </div>

      </div>
    </section>
  );
}