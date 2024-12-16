"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Logo from "/public/navbar-brand.png";
import Account from "/public/account.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Navbar Main div
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
          <Link href="/Shop" className="flex items-center">
            Shop <RiArrowDropDownLine className="text-2xl" />
          </Link>
          <Link href="/About">About</Link>
          <Link href="#">Blog</Link>
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

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 z-50">
          <ul className="flex flex-col gap-4 text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/Shop" className="flex items-center">
              Shop 
            <RiArrowDropDownLine className="text-2xl" />
            </Link>
            <Link href="/About">About</Link>
            <Link href="#">Blog</Link>
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
      )}
    </div>
  );
};

export default Navbar;
