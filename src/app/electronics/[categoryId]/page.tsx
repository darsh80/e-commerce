import CategoryHeroo from "@/app/electronics/Components/CategoryHeroo/CategoryHeroo";
import CategoryProductss from "@/app/electronics/Components/CategoryProductss/CategoryProductss";
import CategoryFilterr from "../Components/CategoryFilterr/CategoryFilterr";

export default async function Page({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;

  return (
    <div className="min-h-screen bg-gray-50/50">
      <CategoryHeroo categoryId={categoryId} />

      <CategoryFilterr categoryId={categoryId} />

      <CategoryProductss categoryId={categoryId} />
    </div>
  );
}