/* eslint-disabled */
"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { CartContext } from "@/context/CartContext";
import { WishContext } from "@/context/WishContext"


export default function Navbar() {
  const { count: cartCount } = useContext(CartContext);
  const wishContext = useContext(WishContext);
  // @ts-ignore
  const { wishCount } = useContext(WishContext) || { wishCount: 0 };
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { data: session } = useSession();

  function logOut() {
    signOut({ callbackUrl: "/login" });
  }

  return (
    <nav className="bg-blue-600 relative">
      <div className="container w-[95%] md:w-[90%] lg:w-[80%] flex justify-between items-center mx-auto p-4 text-white">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <i className="fa-solid fa-cart-shopping text-black"></i>
          <Link href="/">Meloshop</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between w-full ml-4 lg:ml-8">
          <ul className="flex gap-4 lg:gap-6 items-center text-sm lg:text-base">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            {session && (
              <li>
                <Link href="/cart" className="relative flex items-center gap-1">
                  <i className="fa-solid fa-cart-shopping text-lg"></i>
                  <span>Cart</span>
                  {cartCount > 0 && (
                    <span className="absolute opacity-70 -top-2 -right-4 bg-blue-900 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>
            )}
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/SubCat">SubCategories</Link></li>
            <li><Link href="/brands">Brands</Link></li>
          </ul>

          <ul className="flex gap-4 lg:gap-6 items-center text-sm lg:text-base">
            {!session && (
              <>
                <li><Link href=""><i className="fa-brands fa-facebook"></i></Link></li>
                <li><Link href=""><i className="fa-brands fa-instagram"></i></Link></li>
                <li><Link href=""><i className="fa-brands fa-youtube"></i></Link></li>
                <li><Link href=""><i className="fa-brands fa-tiktok"></i></Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/signin">SignIn</Link></li>
              </>
            )}

            {session && (
              <>
                {/* Dropdown menu */}
                <li className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-1 font-bold text-amber-200 hover:text-white cursor-pointer"
                  >
                    Hi {session?.user?.name}
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
                      <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                      <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                      <Link href="/address" className="block px-4 py-2 hover:bg-gray-100">Address</Link>
                      <button
                        onClick={logOut}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </li>

                {/* Wishlist icon */}
                <li className="relative">
                  <Link href="/wish">
                    <i
                      className={`fa-solid fa-heart cursor-pointer ${wishCount > 0 ? "text-red-500" : "text-white"
                        }`}
                    ></i>
                    {wishCount > 0 && (
                      <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {wishCount}
                      </span>
                    )}
                  </Link>
                </li>

              </>
            )}
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <i className="fa-solid fa-xmark cursor-pointer"></i>
            ) : (
              <i className="fa-solid fa-bars cursor-pointer"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden text-white px-4 pb-6">
          <ul className="flex flex-col gap-3 text-base">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            {session && <li><Link href="/cart">Cart</Link></li>}
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/SubCat">SubCategories</Link></li>
            <li><Link href="/brands">Brands</Link></li>

            {!session && (
              <>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/signin">SignIn</Link></li>
              </>
            )}

            {session && (
              <div className="flex flex-col gap-2">
                <span className="font-bold">Hi {session?.user?.name}</span>
                <Link href="/profile">Profile</Link>
                <Link href="/dashboard">Dashboard</Link>
                <span className="cursor-pointer" onClick={logOut}>Sign Out</span>
              </div>
            )}

            <li className="flex gap-4 text-lg">
              <Link href=""><i className="fa-brands fa-facebook"></i></Link>
              <Link href=""><i className="fa-brands fa-instagram"></i></Link>
              <Link href=""><i className="fa-brands fa-youtube"></i></Link>
              <Link href=""><i className="fa-brands fa-tiktok"></i></Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
