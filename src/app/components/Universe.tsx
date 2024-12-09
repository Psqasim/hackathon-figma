import React from "react";
import Image from "next/image";
import Couple from "/public/couple.png";

const Universe = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[682px]">
      <div className="w-full lg:w-[704px] h-[400px] lg:h-[682px]">
        <Image
          src={Couple}
          alt="Pic here"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="px-4 py-8 lg:py-0 lg:w-[573px] lg:mt-56 lg:ml-36">
        <p className="text-xl text-[#BDBDBD]">SUMMER 2020</p>
        <h1 className="font-semibold text-[32px] lg:text-[40px] leading-[40px] lg:leading-[50px] tracking-[0.2px] text-[#252B42] mt-5 max-w-[375px]">
          Part of the Neural Universe
        </h1>
        <p className="mt-5 text-lg leading-7 text-[#737373] tracking-[1.6px] max-w-[376px]">
          We know how large objects will act, <br className="hidden sm:block" />
          but things on a small scale.
        </p>
        <div className="mt-5 flex flex-col sm:flex-row gap-4 sm:gap-5 max-w-[339px]">
          <button className="w-full sm:w-[176px] h-[52px] rounded-md px-[40px] py-[15px] text-white bg-[#2DC071]">
            BUY NOW
          </button>
          <button className="w-full sm:w-[176px] h-[52px] rounded-md px-[40px] py-[15px] border border-green-300 bg-white text-[#2DC071]">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Universe;
