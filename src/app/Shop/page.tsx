export const revalidate = 0;
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
import Link from "next/link";
import Header from "../components/Header";
import Products from "../components/post";
import { client } from "@/sanity/lib/client";
import { Card } from "@/sanity/lib/interface";


const getProducts = async () => {
  const products = await client.fetch(
    `
      *[_type=="product"]{
    _id,
    title,
     "image_url": productImage.asset->url ,
    price,
    tags,
    dicountPercentage,
    description,
     isNew,
      dicountPercentage,
}
    `
  );
  return products;
};

const Shop = async() => {
  const products: Card[] = await getProducts();
  return (
    <>
    <Header />
    <Navbar />
    
    <div className="w-full mx-auto  sm:px-6 lg:px-8">
      

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
      <div className="w-full py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
          <div className='h-[223px] bg-cover bg-center bg-[url("/Shopcard1.png")]'></div>
          <div className='h-[223px] bg-cover bg-center bg-[url("/Shopcard2.png")]'></div>
          <div className='h-[223px] bg-cover bg-center bg-[url("/Shopcard3.png")]'></div>
          <div className='h-[223px] bg-cover bg-center bg-[url("/Shopcard4.png")]'></div>
          <div className='h-[223px] bg-cover bg-center bg-[url("/Shopcard5.png")]'></div>
        </div>
      </div>

      {/* Filter Row */}
      <div className="w-full py-6 px-4">
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
      <div className="w-full py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-9 justify-center items-center">
          {[brand1, brand2, brand3, brand4, brand5, brand6].map((brand, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={brand}
                alt={`brand-logo-${index + 1}`}
                className="w-24 sm:w-24 h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      

      {/* Product Listings */}
       <div><Products products={products}/></div>
         
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
    <Footer />
    </>
  );
};

export default Shop;