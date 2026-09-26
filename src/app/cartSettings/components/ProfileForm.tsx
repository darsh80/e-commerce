"use client";

import { FaUser, FaFloppyDisk } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
import { updateLoggedUserData } from "@/lib/updateLoggedUserData";

export default function ProfileForm() {
  const { data: session } = useSession();

  const [name, setName] = useState(session?.user?.name ?? "");
  const [email, setEmail] = useState(session?.user?.email ?? "");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error">("success");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage(null);

      await updateLoggedUserData(name, email, phone);

      const successMessage = "Profile updated successfully";
      setMessage(successMessage);
      setMessageType("success");
      toast.success(successMessage);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to update profile";

      setMessage(errorMessage);
      setMessageType("error");
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-6 sm:p-8 border-b border-gray-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
            <FaUser className="text-2xl text-green-600" />
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              Profile Information
            </h3>

            <p className="text-sm text-gray-500">
              Update your personal details
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {message && (
  <div
    className={`mb-5 p-3 rounded-xl text-sm font-medium ${
      messageType === "success"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {message}
  </div>
)}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>

            <input
              placeholder="01xxxxxxxxx"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-600/25"
            >
              <FaFloppyDisk />
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>

      <div className="p-6 sm:p-8 bg-gray-50">
        <h3 className="font-bold text-gray-900 mb-4">
          Account Information
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">User ID</span>

            <span className="font-mono text-gray-700">
              {session?.user?.email ?? "—"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-500">Role</span>

            <span className="px-3 py-1 rounded-lg bg-green-100 text-green-700 font-medium capitalize">
              user
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}