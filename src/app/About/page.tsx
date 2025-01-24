"use client";
import Image from "next/image";
import card from "/public/VideoCard.png";
import brand1 from "/public/brand1.png";
import brand2 from "/public/brand2.png";
import brand3 from "/public/brand3.png";
import brand4 from "/public/brand4.png";
import brand5 from "/public/brand5.png";
import brand6 from "/public/brand6.png";
import workgirl from "/public/workgirl.png";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer";
import { useState } from "react";

const teamMembers = [
  {
    name: "Username",
    role: "Profession",
    imageUrl: "/media.png",
  },
  {
    name: "Username",
    role: "Profession",
    imageUrl: "/media1.png",
  },
  {
    name: "Username",
    role: "Profession",
    imageUrl: "/media2.png",
  },
];

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation */}
      <nav className="flex items-center justify-between py-4 sm:py-6 relative">
        <div className="font-bold text-lg sm:text-xl z-20">Bandage</div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-20">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4 sm:space-x-8">
          <a href="/" className="text-gray-600 text-sm sm:text-base">
            Home
          </a>
          <a href="/Shop" className="text-gray-600 text-sm sm:text-base">
            Product
          </a>
          <a href="/Pricing" className="text-gray-600 text-sm sm:text-base">
            Pricing
          </a>
          <a href="/Contact" className="text-gray-600 text-sm sm:text-base">
            Contact
          </a>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="flex flex-col items-center py-4 space-y-4">
              <a href="/" className="text-gray-600">
                Home
              </a>
              <a href="/Shop" className="text-gray-600">
                Product
              </a>
              <a href="/Pricing" className="text-gray-600">
                Pricing
              </a>
              <a href="/Contact" className="text-gray-600">
                Contact
              </a>
              <div className="flex flex-col items-center space-y-2">
                <a href="#" className="text-blue-500">
                  Login
                </a>
                <a
                  href="#"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
                >
                  Become a member
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Desktop User Actions */}
        <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
          <a href="#" className="text-blue-500 text-sm sm:text-base">
            Login
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base flex items-center"
          >
            Become a member
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="w-full h-auto sm:h-[600px] py-8 sm:py-16 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center bg-cover bg-center"
        style={{ backgroundImage: `url("/shopingGirl.jpg")` }}
      >
        <div className="text-center sm:text-left px-4 sm:pl-32">
          <div className="text-sm text-gray-600 mb-2 sm:mb-4">
            ABOUT COMPANY
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            ABOUT US
          </h1>
          <p className="text-gray-600 mb-4 sm:mb-8 text-sm sm:text-base">
            We know how large objects will act, but things on a small scale
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md">
            Get Quote Now
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-8 px-4 sm:px-0">
        <div className="text-red-500 mb-2 text-center sm:text-left sm:ml-32">
          Problems trying
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left sm:ml-32">
            Met minim Mollie non desert <br />
            Alamo est sit cliquey dolor do <br />
            met sent.
          </h3>
          <p className="text-gray-600 text-center sm:text-left">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 py-8 sm:py-16 text-center">
        <div>
          <div className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
            15K
          </div>
          <div className="text-gray-600 text-sm sm:text-base">
            Happy Customers
          </div>
        </div>
        <div>
          <div className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
            150K
          </div>
          <div className="text-gray-600 text-sm sm:text-base">
            Monthly Visitors
          </div>
        </div>
        <div>
          <div className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
            15
          </div>
          <div className="text-gray-600 text-sm sm:text-base">
            Countries Worldwide
          </div>
        </div>
        <div>
          <div className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
            100+
          </div>
          <div className="text-gray-600 text-sm sm:text-base">Top Partners</div>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full h-auto sm:h-[764px] flex justify-center px-4 sm:px-0">
        <div className="w-full sm:w-[1050px] h-auto sm:h-[764px] flex justify-center">
          <div className="w-full sm:w-[989px] h-auto sm:h-[540px] mt-8 sm:mt-[112px]">
            <Image
              src={card}
              alt="card pic"
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="min-h-screen bg-gray-50 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xs sm:text-sm text-[#737373] max-w-2xl mx-auto">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-36 mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <div className="relative w-48 sm:w-64 h-48 sm:h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#737373] mb-4 mt-2">
                  {member.role}
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-500 transition-colors"
                  >
                    <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Logo Section */}
      <div className="w-full h-auto sm:h-[409px] flex justify-center py-8 sm:py-0">
        <div className="w-full sm:w-[1050px] h-auto sm:h-[409px] flex justify-center">
          <div className="w-full sm:w-[864px] h-auto sm:h-[120px] mt-0 sm:mt-16 px-4 sm:px-0">
            <h1 className="text-center font-extrabold text-2xl sm:text-4xl text-[#252B42] tracking-[0.2px]">
              Big Companies Are Here
            </h1>
            <p className="text-center text-[#737373] text-xs sm:text-sm mt-2 px-4">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
            {/* Logos */}
            <div className="w-full py-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-center items-center">
                {[brand1, brand2, brand3, brand4, brand5, brand6].map(
                  (brand, index) => (
                    <div key={index} className="flex justify-center">
                      <Image
                        src={brand}
                        alt={`brand-logo-${index + 1}`}
                        className="w-16 sm:w-24 h-auto"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div className="flex flex-col sm:flex-row w-full h-auto sm:h-[479px]">
        {/* Left Section */}
        <div className="w-full sm:w-[60%] bg-[#2A7CC7] p-8 sm:p-16 flex flex-col justify-center items-center sm:items-start">
          <div className="w-full sm:w-[438px] h-auto sm:h-[238px] sm:ml-14 text-center sm:text-left">
            <h2 className="text-white text-sm font-bold mb-4">WORK WITH US</h2>
            <h1 className="text-white text-2xl sm:text-4xl font-bold mb-6">
              Now Let&apos;s grow Yours
            </h1>
            <p className="text-white/90 text-sm mb-8 px-4 sm:px-0">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th.
            </p>
            <button className="bg-[#2A7CC7] text-white border border-white px-6 py-2 sm:px-8 sm:py-3 rounded-md font-semibold hover:bg-sky-500/90 transition-colors">
              Button
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full sm:w-[40%]">
          <Image
            src={workgirl}
            alt="Model in coral sweater"
            className="w-full h-[300px] sm:h-[479px] object-cover"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
