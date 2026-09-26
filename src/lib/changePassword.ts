"use server";

import { getServerSession } from "next-auth";
import { NextAuthConfig } from "./auth/nextAuthConfig";

export async function changePassword(
  currentPassword: string,
  password: string,
  rePassword: string
) {
  const session = await getServerSession(NextAuthConfig);

  const token = (session as any)?.accessToken;

  if (!token) {
    throw new Error("You are not logged in");
  }

  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify({
        currentPassword,
        password,
        rePassword,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Failed to change password");
  }

  return data;
}