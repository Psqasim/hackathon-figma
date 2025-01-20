"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import Logo from '/public/navbar-brand.png';
import Account from '/public/account.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  // Categories for the shop
  const categories = [
    { label: "Men", href: "/categ/men" },
    { label: "Women", href: "/categ/women" },
    { label: "Kids", href: "/categ/kids" },
    { label: "Accessories", href: "/categ/accessories" },
  ];

  return (
    <div className="sticky left-0 right-0 z-50">
      {/* Navbar Main div */}
      <div className="w-full h-16 flex items-center justify-between px-4 md:px-8 bg-white shadow-md">
        {/* Logo here */}
        <div className="flex items-center">
          <Image src={Logo} alt="Logo here" className="w-36 h-auto" />
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
              <Link href='/Shop'>Shop</Link>
                <RiArrowDropDownLine
                  className={`text-2xl transition-transform duration-300 ${
                    isShopOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {/* Shop categories dropdown */}
              <div
                className={`
                  absolute top-[calc(100%-0.5rem)] left-0 
                  w-64 bg-white shadow-lg rounded-lg 
                  transition-all duration-300
                  ${isShopOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                  }
                `}
              >
                <div className="pt-4 p-4">
                  {categories.map((category) => (
                    <div key={category.label}>
                      <Link
                        href={category.href}
                        className="font-medium text-gray-800 hover:text-blue-500"
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
              <Image src={Account} alt="Account logo" className="w-6 h-6" />
              <button>Login / Register</button>
            </div>
            <div className="flex items-center gap-4 text-2xl text-blue-500">
              <CiSearch />
              <div className="flex items-center gap-1">
                <MdOutlineShoppingCart />
                <p className="text-lg">1</p>
              </div>
              <div className="flex items-center gap-1">
                <CiHeart />
                <p className="text-lg">1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden items-center text-3xl text-gray-700 cursor-pointer">
          {isMenuOpen ? (
            <HiX onClick={() => setIsMenuOpen(false)} />
          ) : (
            <HiOutlineMenuAlt3 onClick={() => setIsMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`
          md:hidden bg-white shadow-lg p-4 absolute w-full
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
        `}
      >
        <ul className="flex flex-col gap-4 text-gray-700">
          <Link href="/">Home</Link>
          {/* Mobile Shop Categories */}
          <div className="flex flex-col gap-2">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setIsShopOpen(!isShopOpen)}
            >
              Shop
              <RiArrowDropDownLine
                className={`text-2xl transition-transform duration-300 ${
                  isShopOpen ? 'rotate-180' : ''
                }`}
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
            <Image src={Account} alt="Account logo" className="w-6 h-6" />
            <button>Login / Register</button>
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <CiSearch />
            <div className="flex items-center gap-1">
              <MdOutlineShoppingCart />
              <p className="text-lg">1</p>
            </div>
            <div className="flex items-center gap-1">
              <CiHeart />
              <p className="text-lg">1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu spacer - Only when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden h-[32rem] transition-all duration-300 ease-in-out" />
      )}
    </div>
  );
};

export default Navbar;