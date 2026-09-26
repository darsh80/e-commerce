"use client";

import { addAddress } from "../../../addresses.action";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa6";

export default function AddAddress() {

  async function handleAddAddress() {

    const result = await Swal.fire({
      title: "Add Address",
      html: `
        <div style="text-align: left;">

          <label style="display:block; margin-bottom:6px; font-weight:600;">
            Address Name
          </label>

          <input
            id="address-name"
            class="swal2-input"
            placeholder="Home"
            style="width:100%; margin:0 0 15px;"
          />

          <label style="display:block; margin-bottom:6px; font-weight:600;">
            Address Details
          </label>

          <textarea
            id="address-details"
            class="swal2-textarea"
            placeholder="Street, building, apartment..."
            style="width:100%; margin:0 0 15px;"
          ></textarea>

          <label style="display:block; margin-bottom:6px; font-weight:600;">
            Phone
          </label>

          <input
            id="address-phone"
            class="swal2-input"
            placeholder="01012345678"
            type="text"
            style="width:100%; margin:0 0 15px;"
          />

          <label style="display:block; margin-bottom:6px; font-weight:600;">
            City
          </label>

          <input
            id="address-city"
            class="swal2-input"
            placeholder="Cairo"
            style="width:100%; margin:0;"
          />

        </div>
      `,

      showCancelButton: true,

      confirmButtonText: "Add Address",
      cancelButtonText: "Cancel",

      confirmButtonColor: "#16a34a",

      focusConfirm: false,

      preConfirm: () => {

        const name = (
          document.getElementById("address-name") as HTMLInputElement
        )?.value;

        const details = (
          document.getElementById("address-details") as HTMLTextAreaElement
        )?.value;

        const phone = (
          document.getElementById("address-phone") as HTMLInputElement
        )?.value;

        const city = (
          document.getElementById("address-city") as HTMLInputElement
        )?.value;

        if (!name || !details || !phone || !city) {

          Swal.showValidationMessage(
            "Please fill in all fields"
          );

          return false;
        }

        return {
          name,
          details,
          phone,
          city,
        };
      },
    });

    if (!result.isConfirmed) {
      return;
    }

    try {

      Swal.fire({
        title: "Adding Address...",
        text: "Please wait",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      await addAddress(result.value);

      await Swal.fire({
        icon: "success",
        title: "Address Added",
        text: "Your address has been added successfully.",
        confirmButtonColor: "#16a34a",
      });

      window.location.reload();

    } catch (error) {

      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Failed to add address. Please try again.",
        confirmButtonColor: "#dc2626",
      });

    }
  }

  return (
    <button
      onClick={handleAddAddress}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
    >
      <FaPlus className="text-sm" />
      Add Address
    </button>
  );
}