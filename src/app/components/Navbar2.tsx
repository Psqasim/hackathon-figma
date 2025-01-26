"use client"
import React, { useState } from 'react'

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="w-full bg-white">
        <div className="flex items-center justify-between py-4 sm:py-6">
          <div className="font-bold text-lg sm:text-xl">Bandage</div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 sm:space-x-8">
            <a href="/" className="text-gray-600 text-sm sm:text-base">Home</a>
            <a href="/Shop" className="text-gray-600 text-sm sm:text-base">Product</a>
            <a href="/Pricing" className="text-gray-600 text-sm sm:text-base">Pricing</a>
            <a href="/Contact" className="text-gray-600 text-sm sm:text-base">Contact</a>
          </div>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
            <a href="#" className="text-blue-500 text-sm sm:text-base">Login</a>
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
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <a href="/" className="text-gray-600">Home</a>
            <a href="/Shop" className="text-gray-600">Product</a>
            <a href="/Pricing" className="text-gray-600">Pricing</a>
            <a href="/Contact" className="text-gray-600">Contact</a>
            <div className="flex flex-col items-center space-y-2">
              <a href="#" className="text-blue-500">Login</a>
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
      </nav>
    </div>
  )
}

export default Navbar2