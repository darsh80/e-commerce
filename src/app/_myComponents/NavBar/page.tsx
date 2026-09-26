"use client";

import { getUserCart } from "@/app/cart/cart.action";
import { getWishlist } from "@/app/wishlist/wishlist.action";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import {
  BookAIcon,
  BoxIcon,
  Gift,
  Headset,
  Heart,
  LogOut,
  Mail,
  Menu,
  Phone,
  Search,
  Settings2Icon,
  ShoppingCart,
  Store,
  Truck,
  User,
  UserPlus,
  X,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { data: session } = useSession();
  const cartCount = useCartStore((state) => state.cartCount);
  const setCartCount = useCartStore((state) => state.setCartCount);

  const wishlistCount = useWishlistStore((state) => state.wishlistCount);

  const setWishlistCount = useWishlistStore((state) => state.setWishlistCount);

  useEffect(() => {
    async function loadWishlistCount() {
      try {
        const wishlist = await getWishlist();

        setWishlistCount(wishlist?.data?.length ?? 0);
      } catch (error) {
        console.log(error);
        setWishlistCount(0);
      }
    }

    loadWishlistCount();
  }, [setWishlistCount]);

  useEffect(() => {
    async function loadCartCount() {
      try {
        const cart = await getUserCart();

        setCartCount(cart?.numOfCartItems ?? 0);
      } catch (error) {
        setCartCount(0);
      }
    }

    loadCartCount();
  }, [setCartCount]);
  console.log(session, "sessionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");

  function handleSignOut() {
    signOut({ callbackUrl: "/login" });
  }

  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {/* session data */}

      <div className="hidden lg:block text-sm border-b border-gray-100 bg-white">
        <div className="mx-auto px-4 ">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                <Truck className="w-3.5 h-3.5 text-green-600" />
                <span>Free Shipping on Orders 500 EGP</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                <Gift className="w-3.5 h-3.5 text-green-600" />
                <span>New Arrivals Daily</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              {/* Contact */}
              <div className="flex items-center gap-4 text-gray-500">
                <Link
                  href="tel:+18001234567"
                  className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-green-400" />
                  <span>+01501538009</span>
                </Link>
                <Link
                  href="mailto:support@freshcart.com"
                  className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-green-400" />
                  <span>support@StoreHub.com</span>
                </Link>
              </div>
              {/* Divider */}
              <span className="w-px h-4 bg-gray-200" />

              {/* Session Data */}
              {!session ? (
                <div className="flex items-center gap-4">
                  <Link
                    href="/login"
                    className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <User className="w-3.5 h-3.5 text-green-600" />
                    <span>Sign In</span>
                  </Link>

                  <Link
                    href="/register"
                    className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <UserPlus className="w-3.5 h-3.5 text-gray-700" />
                    <span>Sign Up</span>
                  </Link>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-blue-600">
                    <User size={14} />
                    <span>{session?.user?.name || "Profile"}</span>
                  </div>

                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-red-500"
                  >
                    <LogOut size={14} />
                    <span className="cursor-pointer" onClick={handleSignOut}>
                      Sign Out
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* navBarrrrrrrrrrr */}
      <div className="sticky top-0 w-full z-[9998] bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto flex items-center justify-between px-4 h-16 lg:h-[72px]">
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                <Store className="w-5 h-5 text-green-100" />
              </div>
              <span className="text-xl font-bold text-gray-800">StoreHub</span>
            </Link>
          </div>

          <div className="flex-1 flex justify-center">
            <form className="hidden lg:flex w-full max-w-xl">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition text-sm"
                />

                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600" />
              </div>
            </form>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {/* Home */}
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Home
            </Link>

            {/* Shop */}
            <Link
              href="/shop"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Shop
            </Link>

            {/* Categories */}
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 font-medium cursor-pointer">
                    Categories
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="w-[220px] p-3 space-y-1 list-none">
                      <li>
                        <Link
                          href="/categories"
                          className="block p-2 hover:bg-gray-100 rounded-md"
                        >
                          All Categories
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/electronics/6439d2d167d9aa4ca970649f"
                          className="block p-2 hover:bg-gray-100 rounded-md"
                        >
                          Electronics
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/electronics/6439d58a0049ad0b52b9003f"
                          className="block p-2 hover:bg-gray-100 rounded-md"
                        >
                          Women's Fashion
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/electronics/6439d5b90049ad0b52b90048"
                          className="block p-2 hover:bg-gray-100 rounded-md"
                        >
                          Men's Fashion
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/electronics/6439d30b67d9aa4ca97064b1"
                          className="block p-2 hover:bg-gray-100 rounded-md"
                        >
                          Beauty & Health
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Brands */}
            <Link
              href="/brands"
              className="text-gray-700 hover:text-green-600 font-medium me-3"
            >
              Brands
            </Link>

            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                <Headset className="w-5 h-5 text-green-600" />{" "}
              </div>{" "}
              <div className="text-xs">
                <div className="text-gray-400"> Support </div>{" "}
                <div className="font-semibold text-gray-700">
                  24/7 Help{" "}
                </div>{" "}
              </div>{" "}
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:gap-3 ">
            <Link
              href="/wishlist"
              className="relative p-2.5 rounded-full hover:bg-gray-100"
            >
              <Heart className="w-5 h-5 text-gray-500 hover:text-green-600" />

              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-500 px-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {!session ? (
              <Link
                href="/login"
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold"
              >
                <User className="w-4 h-4" />
                Sign In
              </Link>
            ) : (
              <DropdownMenu>
                {/* Trigger */}
                <DropdownMenuTrigger asChild>
                  <button className="p-2.5 rounded-full hover:bg-gray-100 transition flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </button>
                </DropdownMenuTrigger>

                {/* Menu */}
                <DropdownMenuContent
                  align="end"
                  sideOffset={25}
                  className="w-64 z-[99999] rounded-xl p-2 shadow-lg bg-white"
                >
                  {/* Header */}
                  <DropdownMenuLabel>
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        {/* Avatar

                        {/* User Info */}
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-2">
                            {/* Icon badge */}
                            <div className="w-9 h-9 rounded-full me-2 mb-1 bg-green-100 flex items-center justify-center">
                              <User className="w-4.5 h-4.5  text-green-800" />
                            </div>

                            {/* Name */}
                            <span className="text-sm font-medium text-gray-800 truncate">
                              {session?.user?.name || "User"}
                            </span>
                          </div>

                          {/* Email */}
                          <span className="text-xs text-gray-500 truncate">
                            {session?.user?.email}
                          </span>
                        </div>
                      </div>
                    </div>
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator />

                  {/* Items */}
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link
                        href="profile/addresses"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <User className="w-4 h-4" />
                        My Profile
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <Link
                        href="/allorders"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <BoxIcon className="w-4 h-4" />
                        My Orders
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <Link
                        href="/wishlist"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Heart className="w-5 h-5 text-gray-500 hover:text-green-600" />
                        My Wishlist
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/profile/addresses"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <BookAIcon className="w-4 h-4" />
                        Addresses
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/cartSettings"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Settings2Icon className="w-4 h-4" />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  {/* Logout */}
                  <DropdownMenuItem
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="
    flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer
    text-red-500
    hover:bg-red-300
    hover:text-red-700
    bg-red-300
    
  "
                  >
                    <LogOut className="w-4 h-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Mobile Menu */}

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden w-10 h-10 rounded-full hover:cursor-pointer bg-green-600 text-white flex items-center justify-center">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[80%] max-w-70 top-0 h-full overflow-y-auto z-[9999] "
              >
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center shrink-0">
                      <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                          <Store className="w-5 h-5 text-green-100" />
                        </div>
                        <span className="text-xl font-bold text-gray-800">
                          StoreHub
                        </span>
                      </Link>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className=" mt-2  px-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-3 border rounded-md px-3 py-2 bg-gray-50">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full bg-transparent outline-none text-sm"
                    />

                    <div className="w-9 h-9 flex items-center justify-center bg-green-600 text-white rounded-md cursor-pointer hover:bg-green-700 transition">
                      <Search className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className=" px-2 flex flex-col gap-2 text-gray-700 pb-4 border-b border-gray-200">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="w-full text-base font-medium px-3 py-3 rounded-md hover:bg-green-100 hover:text-green-600 transition"
                    >
                      Home
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      href="/shop"
                      className="w-full text-base font-medium px-3 py-3 rounded-md hover:bg-green-100 hover:text-green-600 transition"
                    >
                      Shop
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      href="/brands"
                      className="w-full text-base font-medium px-3 py-3 rounded-md hover:bg-green-100 hover:text-green-600 transition"
                    >
                      Brands
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      href="/categories"
                      className="w-full text-base font-medium px-3 py-3 rounded-md hover:bg-green-100 hover:text-green-600 transition"
                    >
                      Categories
                    </Link>
                  </SheetClose>
                </div>

                <div className="flex flex-col gap-3 pl-4 w-full pb-4 border-b border-gray-200">
                  <div className="rounded-xl shadow-sm transition-all duration-300 hover:bg-green-100 hover:shadow-md w-full group">
                    <Link
                      href="/wishlist"
                      className="flex items-center gap-3 text-lg font-medium w-full px-4 py-3"
                    >
                      <div className="bg-red-100 p-2 rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-red-500 group-hover:transition-colors" />
                      </div>

                      <span className="text-gray-700 group-hover:text-green-600 transition-colors">
                        Wishlist
                      </span>
                    </Link>
                  </div>

                  <div className="rounded-xl shadow-sm transition-all duration-300 hover:bg-green-100 hover:shadow-md w-full group">
                    <Link
                      href="/cart"
                      className="flex items-center gap-3 text-lg font-medium w-full px-4 py-3"
                    >
                      <div className="relative bg-green-100 p-2 rounded-full flex items-center justify-center">
                        <ShoppingCart className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors" />

                        {cartCount > 0 && (
                          <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-600 px-1 text-[11px] font-bold text-white">
                            {cartCount}
                          </span>
                        )}
                      </div>

                      <span className="text-gray-700 group-hover:text-green-600 transition-colors">
                        Cart
                      </span>
                    </Link>
                  </div>
                </div>

                {!session ? (
                  <div className="flex items-center gap-3 p-4">
                    <Link
                      href="/login"
                      className="flex items-center justify-center gap-2 flex-1 px-5 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition"
                    >
                      <User className="w-4 h-4" />
                      Sign In
                    </Link>

                    <Link
                      href="/register"
                      className="flex items-center justify-center gap-2 flex-1 px-5 py-3 border-2 border-green-600 rounded-lg  hover:bg-green-200 text-green-700 text-sm font-semibold transition"
                    >
                      Sign Up
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-1 p-4">
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-green-50"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                        <User className="h-4 w-4 text-gray-500" />
                      </div>

                      <span className="font-medium text-gray-700">
                        {session?.user?.name || "Profile"}
                      </span>
                    </Link>

                    <button
                      type="button"
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:bg-red-50"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50">
                        <LogOut className="h-4 w-4 text-red-500" />
                      </div>

                      <span className="font-medium text-red-600">Sign Out</span>
                    </button>
                  </div>
                )}

                <div className="flex-1 gap-3 p-4 w-full">
                  <Link
                    href="/contact"
                    className="mx-4 mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-green-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Headset className="w-5 h-5 text-green-600" />
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-gray-700">
                        Need Help?
                      </div>

                      <div className="text-sm text-green-600">
                        Contact Support
                      </div>
                    </div>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
}
