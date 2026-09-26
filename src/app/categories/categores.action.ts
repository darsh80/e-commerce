import { CategoriesResponse } from "@/interfaces/CategoriesResponse";

export async function getAllCategories(): Promise<CategoriesResponse> {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/categories",
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

// Fetch a specific category by its ID
export async function getCategoryById(categoryId: string) {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category");
  }

  return response.json();
}

// Fetch subcategories for a specific category
export async function getCategorySubcategories(categoryId: string) {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category subcategories");
  }

  return response.json();
}

// Fetch all subcategories
export async function getAllSubcategories() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/subcategories",
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch subcategories");
  }

  return response.json();
}


// Fetch a specific subcategory
export async function getSubcategoryById(subcategoryId: string) {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/subcategories/${subcategoryId}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch subcategory");
  }

  return response.json();
}


// Fetch products for a specific subcategory
export async function getSubcategoryProducts(subcategoryId: string) {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?subcategory=${subcategoryId}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch subcategory products");
  }

  return response.json();
}