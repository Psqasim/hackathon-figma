
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    // Main Hero Section
    <div className='w-full h-[716px] bg-[url("/herosection.jpg")] bg-cover bg-center flex items-center'>
      <div className="container mx-auto px-4 py-16">
        {/* Content */}
        <div className="text-white md:ml-44">
          <p className="font-semibold text-lg">SUMMER 2020</p>
          <h1 className="font-semibold text-[32px] md:text-[58px] leading-[80px] tracking-[0.2px] mt-6">
            NEW COLLECTION
          </h1>
          <p className="text-lg mt-7 tracking-[0.2px]">
            We know how large objects will act, <br /> but things on a small
            scale.
          </p>
          <Link href="/Shop">
          <button className="mt-8 rounded-md px-6 py-3 bg-[#2DC071] font-semibold text-xl">
            SHOP NOW
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
