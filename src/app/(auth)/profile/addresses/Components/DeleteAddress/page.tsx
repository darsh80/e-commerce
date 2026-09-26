"use client";

import { deleteAddress } from "../../addresses.action";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa6";

export default function DeleteAddress({
  addressId,
}: {
  addressId: string;
}) {

  async function handleDelete() {

    const result = await Swal.fire({
      title: "Delete Address?",
      text: "Are you sure you want to delete this address?",
      icon: "warning",

      showCancelButton: true,

      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",

      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
    });

    if (!result.isConfirmed) {
      return;
    }

    try {

      Swal.fire({
        title: "Deleting...",
        text: "Please wait",
        allowOutsideClick: false,
        allowEscapeKey: false,

        didOpen: () => {
          Swal.showLoading();
        },
      });

      await deleteAddress(addressId);

      await Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Address deleted successfully.",
        confirmButtonColor: "#16a34a",
      });

      window.location.reload();

    } catch (error) {

      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Failed to delete address.",
        confirmButtonColor: "#dc2626",
      });

    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
      title="Delete address"
    >
      <FaTrash className="text-sm" />
    </button>
  );
}