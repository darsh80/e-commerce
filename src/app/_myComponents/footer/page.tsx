import Link from "next/link";
import Image from "next/image";
import React from "react";
import { CreditCard, Mail, MapPin, Phone} from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";


export default function Footer() {
  return (
<footer className="w-full bg-gray-900  text-white">
  <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-6">
    {/* div 1 */}
    <div className="flex-1 md:flex-[1.9] space-y-3">
      <div className="bg-white rounded-xl mb-5 w-[220px] h-[50px] flex items-center justify-center overflow-hidden">
        <Link href="/">
        
          <Image
            src="/StoreHub-horizontal.png"
            alt="StoreHub"
            width={220}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>
      <p className="text-gray-400 text-sm mb-4">
        FreshCart is your one-stop destination for quality products. From
        fashion to electronics, we bring you the best brands at competitive
        prices with a seamless shopping experience.
      </p>
<div className="space-y-3 mb-6">

      {/* Phone */}
      <Link
        href="tel:+201066026148"
        className="flex items-center gap-2  text-gray-400 hover:text-green-400 transition-colors text-sm"
      >
        <Phone className="text-green-500" size={16} />
        <span>+2 123-456-7890</span>
      </Link>

      {/* Email */}
      <Link
        href="mailto:support@freshcart.com"
        className="flex items-center gap-2  text-gray-400 hover:text-green-400 transition-colors text-sm"
      >
        <Mail className="text-green-500" size={16} />
        <span>support@StoreHub.com</span>
      </Link>

      {/* Address */}
      <div className="flex items-start gap-2 text-gray-400 text-sm">
        <MapPin className="text-green-500 mt-0.5" size={16} />
        <span>123 Commerce Street, New York, NY 10001</span>
      </div>

    </div>
      <div className="flex items-center gap-6">
      <Link href="https://www.facebook.com" target="_blank" className="hover:cursor-pointer" title="Facebook">
      
        <FaFacebook className="w-6 h-6 text-gray-400 hover:text-green-500 transition" />
      </Link>

      <Link href="https://www.twitter.com" target="_blank" className="hover:cursor-pointer" title="Twitter">
        <FaTwitter className="w-6 h-6 text-gray-400 hover:text-green-400 transition" />
      </Link>

      <Link href="https://www.instagram.com/" target="_blank" className="hover:cursor-pointer" title="Instagram">
        <FaInstagram className="w-6 h-6 text-gray-400 hover:text-green-500 transition" />
      </Link>

      <Link href="https://www.youtube.com" target="_blank" className="hover:cursor-pointer" title="YouTube">
        <FaYoutube className="w-6 h-6 text-gray-400 hover:text-green-500 transition" />
      </Link>
    </div>
    </div>

    {/* div2 */}
    <div className="flex-1">
        <h3 className="text-lg font-semibold mb-4 text-white">Shop</h3>
        <ul className="space-y-2">
            <li><Link href="/products" className="text-gray-400 hover:text-green-400 transition-colors text-sm">All Products</Link></li>
            <li><Link href="/categories" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Categories</Link></li>
            <li><Link href="/BrandsPage" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Brands</Link></li>
            <li><Link href="/Electronics" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Electronics</Link></li>
            <li><Link href="/MenFashion" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Men's Fashion</Link></li>
            <li><Link href="/WomenFashion" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Women's Fashion</Link></li>
        </ul>
    </div>
{/* div3 */}
    <div className="flex-1 text-white">
      <h3 className="text-lg font-semibold mb-4 text-white">Account</h3>
        <ul className="space-y-2">
            <li><Link href="/login" className="text-gray-400 hover:text-green-400 transition-colors text-sm">My Account</Link></li>
            <li><Link href="/categories" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Order History</Link></li>
            <li><Link href="/deals" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Wishlist</Link></li>
            <li><Link href="/deals" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Shopping Cart</Link></li>
            <li><Link href="/login" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Sign In</Link></li>
            <li><Link href="/register" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Create Account</Link></li>
        </ul>
    </div>
{/* div4 */}
    <div className="flex-1 text-white">
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
        <ul className="space-y-2">
            <li><Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Contact Us</Link></li>
            <li><Link href="/categories" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Help Center</Link></li>
            <li><Link href="/deals" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Shipping Info</Link></li>
            <li><Link href="/deals" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Shopping Cart</Link></li>
            <li><Link href="/login" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Returns & Refunds</Link></li>
            <li><Link href="/register" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Track Order</Link></li>
        </ul>
    </div>
{/* div5 */}
    <div className="flex-1 text-white">
      <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
        <ul className="space-y-2">
            <li><Link href="/login" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Privacy Policy</Link></li>
            <li><Link href="/categories" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Terms of Service</Link></li>
            <li><Link href="/deals" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Cookie Policy</Link></li>
        </ul>
    </div>

  </div>
<div className="border-t border-gray-800 w-full">
  
  <div className="container mx-auto py-6">
    
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-gray-500 text-sm text-center md:text-left">
        © 2026 FreshCart. All rights reserved.
      </p>

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <CreditCard className="w-4 h-4" />
          <span>Visa</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <CreditCard className="w-4 h-4" />
          <span>Mastercard</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <CreditCard className="w-4 h-4" />
          <span>PayPal</span>
        </div>

      </div>

    </div>

  </div>

</div>
</footer>
  );
}
