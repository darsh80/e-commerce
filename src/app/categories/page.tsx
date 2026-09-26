import Link from "next/link";
import CategoriesHero from "./Components/CategoriesHero";
import { getAllCategories } from "./categores.action";
import { FaArrowRight } from "react-icons/fa6";

export default async function CategoriesPage() {
  const response = await getAllCategories();
  const categories = response.data;

  return (
    <>
      <CategoriesHero />

      <div className=" px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/categories/${category._id}`}
              className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="font-bold text-gray-900 text-center group-hover:text-primary-600 transition-colors">
                {category.name}
              </h3>

              <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
  <span className="text-xs text-primary-600 flex items-center gap-1">
    View Subcategories
    <FaArrowRight className="text-[10px]" />
  </span>
</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}