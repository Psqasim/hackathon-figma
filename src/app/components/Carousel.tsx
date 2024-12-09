import React from "react";

const Carousel = () => {
  return (
    // Main div
    <div className="w-full min-h-[709px] bg-[#23856D] flex justify-center text-white">
      <div className="w-full md:w-[1036px] h-full md:h-[711px] py-8 md:py-[112px] px-4 md:px-0">
        <div className="w-full md:w-[1049px] h-full md:h-[599px] flex flex-col md:flex-row">
          {/* Content */}
          <div className="w-full md:w-[509px] h-auto md:h-[432px] mt-8 md:mt-20">
            <p className="text-xl text-center md:text-left">SUMMER 2020</p>
            <h1 className="w-full md:w-[509px] font-semibold text-4xl md:text-[58px] leading-tight md:leading-[80px] tracking-[0.2px] mt-5 text-center md:text-left">
              Vita Classic Product
            </h1>
            <p className="w-full md:w-[361px] mt-7 text-center md:text-left">
              We know how large objects will act, We know how are objects will
              act, We know
            </p>
            <div className="w-full md:w-[295px] mt-10 flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
              <p className="w-[77px] h-[32px] font-semibold text-white">
                $16.48
              </p>
              <div className="w-[184px] h-[52px] rounded-md px-[40px] py-[13px] bg-[#2DC071]">
                <button className="w-[120px] font-semibold">ADD TO CART</button>
              </div>
            </div>
          </div>

          <div className='w-full md:w-[443px] h-[443px] md:h-[600px] bg-[url("/vitaman.png")] bg-cover bg-fill mt-8 md:mt-0 md:ml-24'></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
