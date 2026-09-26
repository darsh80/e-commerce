
import {
  Phone,
  Mail,
  MapPin,
  Clock,
 
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <div className="lg:col-span-1 space-y-6">

      {/* Phone */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
            <Phone className="text-green-600 text-lg" />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Phone
            </h3>

            <p className="text-gray-500 text-sm mb-2">
              Mon-Fri from 8am to 6pm
            </p>

            <a
              href="tel:+18001234567"
              className="text-green-600 font-medium hover:underline"
            >
              +1 (800) 123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
            <Mail className="text-green-600 text-lg" />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Email
            </h3>

            <p className="text-gray-500 text-sm mb-2">
              We'll respond within 24 hours
            </p>

            <a
              href="mailto:support@storehub.com"
              className="text-green-600 font-medium hover:underline"
            >
              support@storehub.com
            </a>
          </div>
        </div>
      </div>

      {/* Office */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
            <MapPin className="text-green-600 text-lg" />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Office
            </h3>

            <p className="text-gray-500 text-sm">
              123 Commerce Street
              <br />
              New York, NY 10001
              <br />
              United States
            </p>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
            <Clock className="text-green-600 text-lg" />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Business Hours
            </h3>

            <p className="text-gray-500 text-sm">
              Monday - Friday: 8am - 6pm
              <br />
              Saturday: 9am - 4pm
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4">
          Follow Us
        </h3>

        <div className="flex items-center gap-3">

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-600 hover:text-white transition-colors"
          >
            <FaFacebook className="w-4 h-4" />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-600 hover:text-white transition-colors"
          >
            <FaTwitter className="w-4 h-4" />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-600 hover:text-white transition-colors"
          >
            <FaInstagram className="w-4 h-4" />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-600 hover:text-white transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>

        </div>
      </div>

    </div>
  );
}
