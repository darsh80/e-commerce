
import { NextResponse } from "next/server";
import { GetDecodedToken } from "@/lib/GetUserToken";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ addressId: string }> }
) {
  try {
    const { addressId } = await params;

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
      return NextResponse.json(data, {
        status: response.status,
      });
    }

    return NextResponse.json(data);

  } catch {
    return NextResponse.json(
      {
        message: "Failed to delete address",
      },
      {
        status: 500,
      }
    );
  }
}
