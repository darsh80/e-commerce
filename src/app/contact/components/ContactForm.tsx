
"use client";

import { CircleQuestionMark, Headset, Send,  } from "lucide-react";
import Link from "next/link";


export default function ContactForm() {
  return (
    <div className="lg:col-span-2">

      {/* Form Card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">

          <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
            <Headset className="text-green-600 text-lg" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Send us a Message
            </h2>

            <p className="text-gray-500 text-sm">
              Fill out the form and we'll get back to you
            </p>
          </div>

        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
              />
            </div>

          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Subject
            </label>

            <select
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all bg-white"
            >
              <option value="">
                Select a subject
              </option>

              <option value="general">
                General Inquiry
              </option>

              <option value="order">
                Order Support
              </option>

              <option value="shipping">
                Shipping Question
              </option>

              <option value="returns">
                Returns & Refunds
              </option>

              <option value="product">
                Product Information
              </option>

              <option value="feedback">
                Feedback & Suggestions
              </option>

              <option value="other">
                Other
              </option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="How can we help you?"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-sm shadow-green-600/20"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>

        </form>
      </div>

      {/* Help Center */}
      <div className="mt-6 bg-green-50 rounded-2xl p-6 border border-green-100">

        <div className="flex items-start gap-4">

          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
            <CircleQuestionMark className="text-green-600 text-xl" />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Looking for quick answers?
            </h3>

            <p className="text-gray-600 text-sm mb-3">
              Check out our Help Center for frequently asked questions
              about orders, shipping, returns, and more.
            </p>

            <Link
              href="/help"
              className="text-green-600 font-medium text-sm hover:underline inline-flex items-center gap-1"
            >
              Visit Help Center →
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
