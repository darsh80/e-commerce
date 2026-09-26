import CategoryHeroo from "@/app/electronics/Components/CategoryHeroo/page";
import CategoryFilterr from "@/app/electronics/Components/CategoryFilterr/page";
import CategoryProductss from "@/app/electronics/Components/CategoryProductss/page";



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