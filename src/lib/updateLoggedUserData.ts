"use server";

import { getServerSession } from "next-auth";
import { NextAuthConfig } from "./auth/nextAuthConfig";

export async function updateLoggedUserData(
  name: string,
  email: string,
  phone: string
) {
  const session = await getServerSession(NextAuthConfig);

  const token = (session as { accessToken?: string } | null)?.accessToken;

  if (!token) {
    throw new Error("You are not logged in");
  }

  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/users/updateMe/",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify({
        name,
        email,
        phone,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Failed to update user data");
  }

  return data;
}