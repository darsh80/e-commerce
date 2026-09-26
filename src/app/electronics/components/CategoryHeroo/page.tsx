
import { getCategoryById } from "@/app/categories/categores.action";
import Link from "next/link";
import { FaFolderOpen } from "react-icons/fa6";

export default async function CategoryHeroo({
  categoryId,
}: {
  categoryId: string;
}) {
  const categoryResponse = await getCategoryById(categoryId);

  const category = categoryResponse.data;

  return (
    <section className="bg-gradient-to-br px-4 from-green-600 via-green-500 to-green-400 text-white">
      <div className=" px-4 sm:py-14">

        <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <span className="text-white/40">/</span>

          <Link href="/categories" className="hover:text-white">
            Categories
          </Link>

          <span className="text-white/40">/</span>

          <span className="text-white font-medium">
            {category.name}
          </span>
        </nav>

        <div className="flex items-center gap-5">

          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
            <FaFolderOpen className="text-3xl" />
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">
              {category.name}
            </h1>

            <p className="text-white/80 mt-1">
              Discover our {category.name} products
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
