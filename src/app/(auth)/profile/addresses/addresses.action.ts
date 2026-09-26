import { GetDecodedToken } from "@/lib/GetUserToken";


export async function getLoggedUserAddresses() {
  const token = await GetDecodedToken();

  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/addresses",
    {
      method: "GET",
      headers: {
        token: token as string,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const errorData = await response.json();

    console.log("Addresses API Error:", errorData);

    throw new Error("Failed to fetch addresses");
  }

  return response.json();
}




export async function addAddress(addressData: {
  name: string;
  details: string;
  phone: string;
  city: string;
}) {
  const token = await GetDecodedToken();

  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/addresses",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
      body: JSON.stringify(addressData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to add address");
  }

  return data;
} 




export async function deleteAddress(addressId: string) {
  const token = await GetDecodedToken();

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/addresses/${addressId}`,
    {
      method: "DELETE",
      headers: {
        token: token as string, 
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete address");
  }

  return data;
}