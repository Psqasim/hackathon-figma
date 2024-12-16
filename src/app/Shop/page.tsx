import React from "react";
import Image from "next/image";
import Arrowicon from "/public/Arrowicon.png";
import Arrowdown from "/public/Arrowdown.png";
import Viewbutton from "/public/Viewbutton.png";
import Viewdotbutton from "/public/Viewdotbutton.png";
import brand1 from "/public/brand1.png";
import brand2 from "/public/brand2.png";
import brand3 from "/public/brand3.png";
import brand4 from "/public/brand4.png";
import brand5 from "/public/brand5.png";
import brand6 from "/public/brand6.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductColor from "/public/product-colors.png";
import ShopProduct1 from "/public/ShopProduct1.jpg";
import ShopProduct2 from "/public/ShopProduct2.jpg";
import ShopProduct3 from "/public/ShopProduct3.jpg";
import ShopProduct4 from "/public/ShopProduct4.jpg";
import ShopProduct5 from "/public/ShopProduct5.jpg";
import ShopProduct6 from "/public/ShopProduct6.jpg";
import ShopProduct7 from "/public/ShopProduct7.jpg";
import ShopProduct8 from "/public/ShopProduct8.jpg";
import ShopProduct9 from "/public/ShopProduct9.jpg";
import ShopProduct10 from "/public/ShopProduct10.jpg";
import ShopProduct11 from "/public/ShopProduct11.jpg";
import ShopProduct12 from "/public/ShopProduct12.jpg";

import Link from "next/link";
import Header from "../components/Header";

const Shop = () => {
  return (
    <>
    <Header />
    <Navbar />
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      

      {/* Shop Header */}
      <div className="w-full py-6 flex items-center justify-center">
        <div className="w-full max-w-[1049px] flex flex-col sm:flex-row items-center justify-between">
          <div className="w-full sm:w-[510px] mb-4 sm:mb-0">
            <h1 className="text-2xl font-semibold text-[#252B42] text-center sm:text-left">
              Shop
            </h1>
          </div>

          <div className="w-full sm:w-[509px] flex justify-center sm:justify-end">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-sm font-semibold">
                Home
              </Link>
              
              <Image src={Arrowicon} alt="arrow icon" className="w-4 h-4" />
              
              <Link href="/Shop" className="text-sm font-semibold text-[#BDBDBD]">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="w-full py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
          <div className='h-[223px] bg-cover bg-center bg-[url("/Shopcard1.png")]'></div>
          <div className='h-[223px] bg-cover bg-center bg-[url("/Shopcard2.png")]'></div>
          <div className='h-[223px] bg-cover bg-center bg-[url("/Shopcard3.png")]'></div>
          <div className='h-[223px] bg-cover bg-center bg-[url("/Shopcard4.png")]'></div>
          <div className='h-[223px] bg-cover bg-center bg-[url("/Shopcard5.png")]'></div>
        </div>
      </div>

      {/* Filter Row */}
      <div className="w-full py-6">
        <div className="w-full max-w-[1050px] mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <h1 className="text-sm text-[#737373]">
                Showing all 12 results
              </h1>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <h1 className="text-sm text-[#737373]">Views:</h1>
              <div className="flex space-x-2">
                <Image src={Viewbutton} alt="" className="w-6 h-6" />
                <Image src={Viewdotbutton} alt="" className="w-6 h-6" />
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex items-center justify-center px-4 py-2 bg-[#F9F9F9] border border-[#DDDDDD] rounded-md">
                <span className="text-sm text-[#737373] mr-2">Popularity</span>
                <Image src={Arrowdown} alt="" className="w-4 h-4" />
              </button>

              <button className="px-4 py-2 bg-[#23A6F0] text-white rounded-md">
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="w-full py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-center items-center">
          {[brand1, brand2, brand3, brand4, brand5, brand6].map((brand, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={brand}
                alt={`brand-logo-${index + 1}`}
                className="w-16 sm:w-24 h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />

      {/* Product Listings */}
      <div className="w-full py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1124px] mx-auto">
          {[
            ShopProduct1, ShopProduct2, ShopProduct3, ShopProduct4,
            ShopProduct5, ShopProduct6, ShopProduct7, ShopProduct8,
            ShopProduct9, ShopProduct10, ShopProduct11, ShopProduct12
          ].map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full max-w-[239px] mb-4">
                <Image src={product} alt={`Shop Product ${index + 1}`} layout="responsive" />
              </div>
              <div className="text-center space-y-2">
                <p className="font-semibold text-[#252B42]">Graphic Design</p>
                <p className="text-sm text-[#737373]">English Department</p>
                <p className="text-[#BDBDBD]">
                  $16.48{" "}
                  <span className="text-[#23856D]">$6.48</span>
                </p>
                <Image src={ProductColor} alt="Product Colors" className="mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center py-4 sm:py-8">
      <div className="flex">
        <button className="px-4 py-2 sm:px-6 sm:py-3 bg-[#BDBDBD] text-[#F3F3F3]  text-sm sm:text-base hover:bg-[#A0A0A0] transition-colors duration-200">
          First
        </button>
        <button className="px-3 py-2 sm:px-5 sm:py-3 border border-[#BDBDBD] text-[#23A6F0] text-sm sm:text-base hover:bg-[#E6F2FF] transition-colors duration-200">
          1
        </button>
        <button className="px-3 py-2 sm:px-5 sm:py-3 bg-[#23A6F0] text-white text-sm sm:text-base hover:bg-[#1A8CFF] transition-colors duration-200">
          2
        </button>
        <button className="px-3 py-2 sm:px-5 sm:py-3 border border-[#BDBDBD] text-[#23A6F0] text-sm sm:text-base hover:bg-[#E6F2FF] transition-colors duration-200">
          3
        </button>
        <button className="px-4 py-2 sm:px-6 sm:py-3 border border-[#BDBDBD] text-[#23A6F0]  text-sm sm:text-base hover:bg-[#E6F2FF] transition-colors duration-200">
          Next
        </button>
      </div>
    </div>

      
    </div>
    </>
  );
};

export default Shop;