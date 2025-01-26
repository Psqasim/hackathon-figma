"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { CiSearch } from "react-icons/ci"
import { MdOutlineShoppingCart, MdErrorOutline } from "react-icons/md"
import { CiHeart } from "react-icons/ci"
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"
import { RiArrowDropDownLine } from "react-icons/ri"
import Logo from "/public/navbar-brand.png"
import Account from "/public/account.png"
import { useCart } from "@/context/CartContext"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([])
  const [searchNotification, setSearchNotification] = useState<string | null>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const shopRef = useRef<HTMLDivElement>(null)
  const navbarRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { totalItems } = useCart()

  const categories = [
    {
      label: "Men",
      href: "/categ/men",
      keywords: ["men", "male", "gentleman", "mens", "man"],
    },
    {
      label: "Women",
      href: "/categ/women",
      keywords: ["women", "female", "ladies", "womens", "lady" , "girl" , "girls" , "woman"],
    },
    {
      label: "Kids",
      href: "/categ/kids",
      keywords: ["children", "kids", "kid", "child", "youth"],
    },
    {
      label: "Accessories",
      href: "/categ/accessories",
      keywords: ["accessories", "add-ons", "extras", "add ons"],
    },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // useEffect(() => {
  //   let lastScrollY = window.scrollY

  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY

  //     if (currentScrollY > lastScrollY) {
  //       setIsMenuOpen(false)
  //       setIsSearchOpen(false)
  //       //setIsShopOpen(false)
  //     }

  //     lastScrollY = currentScrollY
  //   }

  //   window.addEventListener("scroll", handleScroll, { passive: true })
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])

  useEffect(() => {
    if (searchNotification) {
      const timer = setTimeout(() => {
        setSearchNotification(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [searchNotification])

  useEffect(() => {
    const query = searchQuery.toLowerCase().trim()
    const suggestions = categories
      .filter(
        (cat) => cat.label.toLowerCase().includes(query) || cat.keywords.some((keyword) => keyword.includes(query)),
      )
      .map((cat) => cat.label)
    setSearchSuggestions(suggestions)
  }, [searchQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const query = searchQuery.toLowerCase().trim()

    const matchedCategory = categories.find(
      (cat) => query === cat.label.toLowerCase() || cat.keywords.some((keyword) => query.includes(keyword)),
    )

    if (matchedCategory) {
      router.push(matchedCategory.href)
      setIsSearchOpen(false)
      setSearchNotification(null)
    } else {
      setSearchNotification("No results found. Try a different search.")
    }

    setSearchQuery("")
    setIsMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev)
    setIsSearchOpen(false)
  }

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md" ref={navbarRef}>
      <nav className="w-full">
        {/* Main Navbar Container */}
        <div className="w-full h-16 flex items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={Logo || "/placeholder.svg"}
                alt="Store Logo"
                width={144}
                height={36}
                className="w-36 h-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Desktop Menu Links */}
            <ul className="flex items-center gap-6 text-gray-700">
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
              <div className="relative group" ref={shopRef}>
                <button className="flex items-center hover:text-blue-500 group">
                  <Link href="/Shop">Shop</Link>
                  <RiArrowDropDownLine className="text-2xl transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {categories.map((category) => (
                    <Link key={category.label} href={category.href} className="block py-2 px-4 hover:bg-gray-100">
                      {category.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/About" className="hover:text-blue-500">
                About
              </Link>
              <Link href="/Pricing" className="hover:text-blue-500">
                Pricing
              </Link>
              <Link href="/Contact" className="hover:text-blue-500">
                Contact
              </Link>
            </ul>

            {/* Desktop Right Side Icons */}
            <div className="flex items-center gap-6">
              {/* Account */}
              <div className="flex items-center gap-2 text-blue-500">
                <Image src={Account || "/placeholder.svg"} alt="Account" width={24} height={24} className="w-6 h-6" />
                <button>Login</button>
              </div>

              {/* Desktop Icons */}
              <div className="flex items-center gap-4 text-xl">
                {/* Search */}
                <div className="relative" ref={searchRef}>
                  <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="hover:text-blue-500">
                    <CiSearch />
                  </button>

                  {isSearchOpen && (
                    <form
                      onSubmit={handleSearch}
                      className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg rounded-lg p-2"
                    >
                      <div className="relative">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search products..."
                          className="w-full p-2 border rounded"
                        />
                        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2">
                          <CiSearch />
                        </button>
                        {searchQuery.trim() !== "" && searchSuggestions.length > 0 && (
                          <ul className="absolute w-full bg-white border mt-1 rounded-b-lg shadow-lg">
                            {searchSuggestions.map((suggestion, index) => (
                              <li
                                key={index}
                                className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                  setSearchQuery(suggestion)
                                  handleSearch(new Event("submit") as any)
                                }}
                              >
                                {suggestion}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </form>
                  )}
                </div>

                {/* Cart */}
                <Link href="/cart" className="relative hover:text-blue-500">
                  <MdOutlineShoppingCart />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                      {totalItems}
                    </span>
                  )}
                </Link>

                {/* Wishlist */}
                <Link href="/wishlist" className="hover:text-blue-500">
                  <CiHeart />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            {/* Mobile Search */}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-2xl text-blue-500">
              <CiSearch />
            </button>

            {/* Mobile Cart */}
            <Link href="/cart" className="relative text-2xl text-blue-500">
              <MdOutlineShoppingCart />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMobileMenu} className="text-3xl text-gray-700">
              {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        {isSearchOpen && (
          <div className="md:hidden fixed top-16 left-4 right-4 bg-white shadow-lg rounded-lg z-50 p-4">
            <form onSubmit={handleSearch} className="space-y-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full p-2 border rounded"
                  autoFocus
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2">
                  <CiSearch />
                </button>
              </div>
              {/* Search Suggestions */}
              {searchQuery.trim() !== "" && searchSuggestions.length > 0 && (
                <ul className="mt-2 border-t pt-2">
                  {searchSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSearchQuery(suggestion)
                        handleSearch(new Event("submit") as any)
                      }}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </form>{" "}
          </div>
        )}

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0  bg-white z-50 overflow-y-auto">
            <div className="p-4 space-y-4">
              <Link href="/" className="block py-2 border-b" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 border-b"
                  //onClick={() => setIsShopOpen(!isShopOpen)}
                >
                  <Link href="/Shop">Shop</Link>
                </button>
              </div>
              <Link href="/About" className="block py-2 border-b" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/Pricing" className="block py-2 border-b" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="/Contact" className="block py-2 border-b" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>

              {/* Mobile Account & Wishlist */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2">
                  <Image src={Account || "/placeholder.svg"} alt="Account" width={24} height={24} className="w-6 h-6" />
                  <button>Login / Register</button>
                </div>
                <Link href="/wishlist" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <CiHeart />
                  <span>Wishlist</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Search Notification */}
      {searchNotification && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[999] w-80">
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center"
            role="alert"
          >
            <MdErrorOutline className="mr-2 text-xl" />
            <span className="block sm:inline">{searchNotification}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar

