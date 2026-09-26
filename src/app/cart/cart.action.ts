"use server";

import { revalidatePath } from "next/cache";
import { CartResponse } from "@/interfaces/cart.interface";
import { GetCartResponse } from "@/interfaces/getCartResponse";
import { GetDecodedToken } from "@/lib/GetUserToken";
import { redirect } from "next/navigation";

type Values = {
  shippingAddress: {
    details: string;
    phone: string;
    city: string;
  };
}

// Add a product to the user's cart

export async function addToCart(productId: string, quantity: value | boolean) {
  const token = await GetDecodedToken();
  console.log("token from addToCart function", token);
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
    body: JSON.stringify({ productId, quantity }),
  });

  const data: CartResponse = await res.json();

  if (data.status === "success") {
    return { msg: data.message, status: data.status };
  } else {
    return { msg: data.message, status: data.status };
  }
}
type value = {
  msg: string;
  status: string;
};

// Get the user's cart details

export async function getUserCart(): Promise<GetCartResponse> {
  const token = await GetDecodedToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
    headers: {
      token: token as string,
    },
  });
  const data: GetCartResponse = await res.json();
  console.log("data from getUserCart function", data);
  return data;
}

// Update the quantity of a product in the user's cart

export async function updateCartItem(count: number, id: string) {
  const token = await GetDecodedToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
    method: "PUT",
    body: JSON.stringify({ count }),
    headers: {
      token: token as string,
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  console.log("response of update productItem", data);
  if (data.status === "success") {
    revalidatePath("/cart");
  }
  return data;
}

// Delete a product from the user's cart

export async function deleteCartItem(id: string) {
  const token = await GetDecodedToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
    method: "DELETE",
    headers: {
      token: token as string,
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  console.log("response of delete productItem", data);
  if (data.status === "success") {
    revalidatePath("/cart");
  }
  return data;
}

// clear the user's cart

export async function clearCart() {
  const token = await GetDecodedToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
    method: "DELETE",
    headers: {
      token: token as string,
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  console.log("response of clear cart", data);
  if (data.status === "success") {
    revalidatePath("/cart");
  }
  return data;
}


// Create a cash order for the user

export async function cashOrder(cartId: string , values:Values){
  const token = await GetDecodedToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      token: token as string,
      "Content-Type": "application/json"
    },
  });
  const data = await res.json();
  console.log("response of cash order", data);
  redirect("/allorders")
 
  return data;
}


// Create a Visa order for the user

export async function VisaOrder(cartId: string , values:Values){
  const token = await GetDecodedToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      token: token as string,
      "Content-Type": "application/json"
    },
  });
  const data = await res.json();
  console.log("response of Visa order", data);
  if (data.status === "success") {
    return data.session.url
  }
 return null;
}


// Get all orders for the user

export async function getAllOrders(){
  const token = await GetDecodedToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders`, {
    method: "GET",
    headers: {
      token: token as string,
      "Content-Type": "application/json"
    },
  });
  const data = await res.json();
  console.log("response of get all orders", data);
  return data;
}