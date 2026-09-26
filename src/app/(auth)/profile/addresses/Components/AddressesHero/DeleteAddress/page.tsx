
"use client";

import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { toast } from "sonner";

export default function DeleteAddress({
  addressId,
}: {
  addressId: string;
}) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    try {
      setLoading(true);

      const response = await fetch(
        `/api/addresses/${addressId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete address");
      }

      toast.success("Address deleted successfully");

      window.location.reload();

    } catch (error) {
      toast.error("Failed to delete address");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
      title="Delete address"
    >
      <FaTrash className="text-sm" />
    </button>
  );
}
