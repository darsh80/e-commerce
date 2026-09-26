
import Link from "next/link";
import { getLoggedUserAddresses } from "./addresses.action";
import {
  FaLocationDot,
  FaPlus,
  FaGear,
  FaChevronRight,
} from "react-icons/fa6";
import AddressesHero from "./components/AddressesHero/page";
import AddAddress from "./components/AddressesHero/AddAddress/page";
import DeleteAddress from "./components/DeleteAddress/page";
import EditAddress from "./components/EditAddress/page";

export default async function AddressesPage() {

  const addressesResponse = await getLoggedUserAddresses();

  console.log("Addresses:", addressesResponse);

  return (
    <div className="min-h-screen bg-gray-50/50">

      <AddressesHero />

      <div className=" px-4 py-10">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">

            <nav className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

              <div className="p-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-900">
                  My Account
                </h2>
              </div>

              <ul className="p-2">

                {/* Addresses */}
                <li>
                  <Link
                    href="/profile/addresses"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group bg-primary-50 text-primary-700"
                  >
                    <FaLocationDot />

                    <span className="font-medium flex-1">
                      My Addresses
                    </span>

                    <FaChevronRight className="text-xs" />
                  </Link>
                </li>

                {/* Settings */}
                <li>
                  <Link
                     href="/cartSettings"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  >
                    <FaGear />

                    <span className="font-medium flex-1">
                      Settings
                    </span>

                    <FaChevronRight className="text-xs" />
                  </Link>
                </li>

              </ul>

            </nav>

          </aside>

          {/* Addresses Content */}
          <main className="flex-1">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  My Addresses
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Manage your saved delivery addresses
                </p>
              </div>

            <AddAddress />

            </div>

            {/* Empty State */}
           {addressesResponse.data.length > 0 ? (

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {addressesResponse.data.map((address :any) => (

      <div
        key={address._id}
        className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-200"
      >

        <div className="flex items-start justify-between gap-4">

          {/* Address Info */}
          <div className="flex items-start gap-4 flex-1">

            <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
              <FaLocationDot className="text-primary-600" />
            </div>

            <div className="flex-1 min-w-0">

              <h3 className="font-bold text-gray-900 mb-1">
                {address.name}
              </h3>

              <p className="text-sm text-gray-600 mb-3">
                {address.details}
              </p>

              <div className="flex flex-col gap-1 text-sm text-gray-500">

                <span>
                  📞 {address.phone}
                </span>

                <span className="flex items-center gap-1.5">
                  <FaLocationDot className="text-xs" />
                  {address.city}
                </span>

              </div>

            </div>

          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">

           <EditAddress address={address} />

           <DeleteAddress addressId={address._id} />

          </div>

        </div>

      </div>

    ))}

  </div>

) : (

  <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center">

    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
      <FaLocationDot className="text-3xl text-gray-400" />
    </div>

    <h3 className="text-lg font-bold text-gray-900 mb-2">
      No Addresses Yet
    </h3>

    <p className="text-gray-500 mb-6 max-w-sm mx-auto">
      Add your first delivery address to make checkout faster
      and easier.
    </p>

  </div>

)}

          </main>

        </div>

      </div>

    </div>
  );
}
