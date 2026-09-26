import Link from "next/link";
import { FaLocationDot, FaGear } from "react-icons/fa6";
import { ChevronRight } from "lucide-react";

export default function SettingsNavigation() {
  return (
    <aside className="w-full lg:w-72 shrink-0">
      <nav className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-900">
            My Account
          </h2>
        </div>

        <ul className="p-2">
          {/* My Addresses */}
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                <FaLocationDot className="text-sm" />
              </div>

              <span className="font-medium flex-1">
                My Addresses
              </span>

              <ChevronRight className="text-xs transition-transform text-gray-400" />
            </Link>
          </li>

          {/* Settings */}
          <li>
            <Link
              href="/profile/settings"
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group bg-green-50 text-green-700"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-green-500 text-white">
                <FaGear className="text-sm" />
              </div>

              <span className="font-medium flex-1">
                Settings
              </span>

              <ChevronRight className="text-xs transition-transform text-green-500" />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}