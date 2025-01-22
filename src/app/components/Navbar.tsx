"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { RiArrowDropDownLine } from "react-icons/ri"
import { CiSearch } from "react-icons/ci"
import { MdOutlineShoppingCart } from "react-icons/md"
import { CiHeart } from "react-icons/ci"
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"
import Logo from "/public/navbar-brand.png"
import Account from "/public/account.png"
import { useCart } from "@/context/CartContext"
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShopOpen, setIsShopOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const searchRef = useRef<HTMLDivElement>(null)
  const { totalItems } = useCart()
  const { isSignedIn, user } = useUser()

  // Categories for the shop
  const categories = [
    { label: "Men", href: "/categ/men" },
    { label: "Women", href: "/categ/women" },
    { label: "Kids", href: "/categ/kids" },
    { label: "Accessories", href: "/categ/accessories" },
  ]

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    setIsSearchOpen(false)
    setSearchQuery("")
  }

  return (
    <div className="sticky left-0 right-0 z-50">
      {/* Navbar Main div */}
      <div className="w-full h-16 flex items-center justify-between px-4 md:px-8 bg-white shadow-md">
        {/* Logo here */}
        <div className="flex items-center">
          <Image src={Logo || "/placeholder.svg"} alt="Logo here" className="w-36 h-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Navigation */}
          <ul className="flex items-center gap-6 text-gray-700">
            <Link href="/">Home</Link>
            {/* Shop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <div className="py-4 px-2 -mx-2 flex items-center gap-1 cursor-pointer">
                <Link href="/Shop">Shop</Link>
                <RiArrowDropDownLine
                  className={`text-2xl transition-transform duration-300 ${isShopOpen ? "rotate-180" : ""}`}
                />
              </div>
              {/* Shop categories dropdown */}
              <div
                className={`
                  absolute top-[calc(100%-0.5rem)] left-0 
                  w-64 bg-white shadow-lg rounded-lg 
                  transition-all duration-300
                  ${isShopOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
                `}
              >
                <div className="pt-4 p-4">
                  {categories.map((category) => (
                    <div key={category.label}>
                      <Link
                        href={category.href}
                        className="block py-2 font-medium text-gray-800 hover:text-blue-500"
                        onClick={() => setIsShopOpen(false)}
                      >
                        {category.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/About">About</Link>
            <Link href="/Pricing">Pricing</Link>
            <Link href="/Contact">Contact</Link>
            <Link href="#">Pages</Link>
          </ul>

          {/* Login and Icons */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-blue-500">
              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <>
                  <SignInButton mode="modal">
                    <button className="text-blue-500 hover:text-blue-700">Sign in</button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="text-blue-500 hover:text-blue-700">Sign up</button>
                  </SignUpButton>
                </>
              )}
            </div>
            <div className="flex items-center gap-4 text-xl text-black">
              {/* Search Icon and Dropdown */}
              <div className="relative" ref={searchRef}>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="hover:text-blue-700 transition-colors"
                >
                  <CiSearch />
                </button>

                {/* Dropdown Search Bar */}
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden">
                    <form onSubmit={handleSearch} className="p-1">
                      <div className="relative">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search..."
                          className="w-full pr-8 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                          autoFocus
                        />
                        <button
                          type="submit"
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-800 hover:text-gray-500"
                        >
                          <CiSearch />
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
              <Link href="/cart" className="flex items-center gap-1">
                <MdOutlineShoppingCart />
                {totalItems > 0 && <span className="text-sm">{totalItems}</span>}
              </Link>
              <div className="flex items-center gap-1">
                <CiHeart />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon and Search */}
        <div className="flex md:hidden items-center gap-4">
          {/* Mobile Search */}
          <div className="relative" ref={searchRef}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-2xl text-blue-500 hover:text-blue-700 transition-colors"
            >
              <CiSearch />
            </button>

            {/* Mobile Dropdown Search Bar */}
            {isSearchOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg overflow-hidden">
                <form onSubmit={handleSearch} className="p-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full p-2 pr-8 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500"
                    >
                      <CiSearch />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          {isMenuOpen ? (
            <HiX onClick={() => setIsMenuOpen(false)} className="text-3xl text-gray-700 cursor-pointer" />
          ) : (
            <HiOutlineMenuAlt3 onClick={() => setIsMenuOpen(true)} className="text-3xl text-gray-700 cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`
          md:hidden bg-white shadow-lg p-4 absolute w-full
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
        `}
      >
        <ul className="flex flex-col gap-4 text-gray-700">
          <Link href="/">Home</Link>
          {/* Mobile Shop Categories */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center cursor-pointer" onClick={() => setIsShopOpen(!isShopOpen)}>
              Shop
              <RiArrowDropDownLine
                className={`text-2xl transition-transform duration-300 ${isShopOpen ? "rotate-180" : ""}`}
              />
            </div>
            {isShopOpen && (
              <div className="pl-4 flex flex-col gap-3">
                {categories.map((category) => (
                  <Link
                    key={category.label}
                    href={category.href}
                    className="text-sm text-gray-600 hover:text-blue-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/About">About</Link>
          <Link href="/Pricing">Pricing</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="#">Pages</Link>
        </ul>
        <div className="mt-4 flex flex-col gap-4 text-blue-500">
          <div className="flex items-center gap-2">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton mode="modal">
                  <button className="text-blue-500 hover:text-blue-700">Sign in</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="text-blue-500 hover:text-blue-700">Sign up</button>
                </SignUpButton>
              </>
            )}
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <Link href="/cart" className="flex items-center gap-1">
              <MdOutlineShoppingCart />
              <span className="text-lg">{totalItems || 0}</span>
            </Link>
            <div className="flex items-center gap-1">
              <CiHeart />
              <p className="text-lg">0</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu spacer - Only when menu is open */}
      {isMenuOpen && <div className="md:hidden h-[32rem] transition-all duration-300 ease-in-out" />}
    </div>
  )
}

export default Navbar

