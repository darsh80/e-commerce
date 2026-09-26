
import Link from "next/link";
import { getAllCategories } from "@/app/categories/categores.action";

export default async function CategoriesSection() {
  const categoriesResponse = await getAllCategories();

  const categories = categoriesResponse.data;

  return (
    <section className="px-2 md:px-10 lg:px-10 my-10">
      <div className="flex items-center gap-3 my-8">
        <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>

        <h2 className="text-3xl font-bold text-gray-800">
          Shop by <span className="text-emerald-600">Category</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/electronics/${category._id}`}
            className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-full h-28 flex items-center justify-center mb-4">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-center font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}