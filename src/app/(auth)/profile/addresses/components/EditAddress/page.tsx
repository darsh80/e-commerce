"use client";

import Swal from "sweetalert2";
import { FaPen } from "react-icons/fa6";

export default function EditAddress({
  address,
}: {
  address: {
    _id: string;
    name: string;
    details: string;
    phone: string;
    city: string;
  };
}) {

  async function handleEditAddress() {

    const result = await Swal.fire({
      title: "Edit Address",

      html: `
        <div style="text-align: left;">

          <label style="display:block; margin-bottom:6px; font-weight:600;">
            Address Name
          </label>

          <input
            id="edit-address-name"
            class="swal2-input"
            value="${address.name}"
            style="width:100%; margin:0 0 15px;"
          />

          <label style="display:block; margin-bottom:6px; font-weight:600;">
            Address Details
          </label>

          <textarea
            id="edit-address-details"
            class="swal2-textarea"
            style="width:100%; margin:0 0 15px;"
          >${address.details}</textarea>

          <label style="display:block; margin-bottom:6px; font-weight:600;">
            Phone
          </label>

          <input
            id="edit-address-phone"
            class="swal2-input"
            value="${address.phone}"
            type="text"
            style="width:100%; margin:0 0 15px;"
          />

          <label style="display:block; margin-bottom:6px; font-weight:600;">
            City
          </label>

          <input
            id="edit-address-city"
            class="swal2-input"
            value="${address.city}"
            style="width:100%; margin:0;"
          />

        </div>
      `,

      showCancelButton: true,

      confirmButtonText: "Save Changes",
      cancelButtonText: "Cancel",

      confirmButtonColor: "#16a34a",

      focusConfirm: false,

      preConfirm: () => {

        const name = (
          document.getElementById(
            "edit-address-name"
          ) as HTMLInputElement
        )?.value;

        const details = (
          document.getElementById(
            "edit-address-details"
          ) as HTMLTextAreaElement
        )?.value;

        const phone = (
          document.getElementById(
            "edit-address-phone"
          ) as HTMLInputElement
        )?.value;

        const city = (
          document.getElementById(
            "edit-address-city"
          ) as HTMLInputElement
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

    /*
      هنا هنضيف API التعديل بعد ما نتأكد
      من الـ endpoint الخاص بـ RouteMisr.
    */

    Swal.fire({
      icon: "info",
      title: "Edit Form Ready",
      text: "The address editing form is ready. We still need the update API endpoint.",
      confirmButtonColor: "#16a34a",
    });
  }

  return (
    <button
      type="button"
      onClick={handleEditAddress}
      className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-primary-600 hover:bg-primary-50 transition-colors"
      title="Edit address"
    >
      <FaPen className="text-sm" />
    </button>
  );
}