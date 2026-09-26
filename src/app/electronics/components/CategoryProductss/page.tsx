
import { ProductCard } from "@/app/_myComponents/PorductCard/PorductCard";
import { Product } from "@/interfaces/products.interface";

export default async function CategoryProductss({
  categoryId,
}: {
  categoryId: string;
}) {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`,
    {
      cache: "no-store",
    }
  );

  const data: { data: Product[] } = await response.json();

  const products = data.data;

  return (
    <section className=" px-4 py-10">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Category Products
        </h2>

        <p className="text-gray-500 mt-1">
          Showing {products.length} products
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              Product={product}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500">
            No products found
          </p>
        </div>
      )}

    </section>
  );
}
