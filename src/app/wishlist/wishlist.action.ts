"use server";

import { GetDecodedToken } from "@/lib/GetUserToken";
import { revalidatePath } from "next/cache";

// Add product to wishlist
export async function addToWishlist(productId: string) {
  const token = await GetDecodedToken();

  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/wishlist",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
      body: JSON.stringify({
        productId,
      }),
    }
  );

  const data = await res.json();

  console.log("response of addToWishlist", data);

  if (data.status === "success") {
    revalidatePath("/wishlist");
  }

  return data;
}


// Get wishlist
export async function getWishlist() {
  const token = await GetDecodedToken();

  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/wishlist",
    {
      method: "GET",
      headers: {
        token: token as string,
      },
    }
  );

  const data = await res.json();

  console.log("response of getWishlist", data);

  return data;
}


// Delete product from wishlist
export async function removeFromWishlist(productId: string) {
  const token = await GetDecodedToken();

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
    {
      method: "DELETE",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  console.log("response of removeFromWishlist", data);

  if (data.status === "success") {
    revalidatePath("/wishlist");
  }

  return data;
}