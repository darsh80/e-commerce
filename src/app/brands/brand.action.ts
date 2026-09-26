import { AllBrandsResponse } from "@/interfaces/Brand.response";


// get all brands
export async function getAllBrands(): Promise<AllBrandsResponse> {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/brands",
    {
      cache: "force-cache",
    } 
  );

  if (!response.ok) {
    throw new Error("Failed to fetch brands");
  }

  const data: AllBrandsResponse = await response.json();

  return data;
}


// get brand by ID
export async function getBrandById(brandId: string) {
  const url = `https://ecommerce.routemisr.com/api/v1/brands/${brandId}`;

  console.log("Brand ID:", brandId);
  console.log("Brand URL:", url);

  const response = await fetch(url, {
    cache: "no-store",
  });

  console.log("Brand Status:", response.status);

  const data = await response.json();

  console.log("Brand Response:", data);

  if (!response.ok) {
    throw new Error(data?.message || "Failed to fetch brand");
  }

  return data;
}
