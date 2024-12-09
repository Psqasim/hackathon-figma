import React from "react";

const Shop = () => {
  return (
    // Main div
    <div className="w-full min-h-[770px] flex justify-center px-4 md:px-6 lg:px-0">
      <div className="w-full max-w-[1050px] py-10 md:py-[60px] lg:py-[80px]">
        {/* Editor */}
        <div className="w-full max-w-[607px] mx-auto mb-8 text-center">
          <h1 className="font-semibold text-xl md:text-2xl leading-8 text-[#252B42] mb-2">
            EDITOR'S PICK
          </h1>
          <p className="text-base md:text-lg leading-5 text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Shops */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
          {/* Men */}
          <div className='w-full md:w-1/2 aspect-[1/1.2] md:aspect-auto md:h-[500px] relative bg-[url("/mens.jpg")] bg-cover bg-center'>
            <div className="absolute bottom-7 left-7">
              <p className="w-[170px] h-[48px] bg-white flex items-center justify-center font-semibold leading-6 text-[#252B42]">
                MEN
              </p>
            </div>
          </div>

          {/* Middle Column - Women */}
          <div className='w-full md:w-1/4 aspect-[1/1.2] md:aspect-auto md:h-[500px] relative bg-[url("/womens.jpg")] bg-cover bg-center'>
            <div className="absolute bottom-7 left-7">
              <p className="w-[136px] h-[48px] bg-white flex items-center justify-center font-semibold leading-6 text-[#252B42]">
                WOMEN
              </p>
            </div>
          </div>

          {/* Right Column - Accessories and Kids */}
          <div className="w-full md:w-1/4 flex flex-col gap-4">
            {/* Accessories */}
            <div className='aspect-[1/1.2] md:aspect-auto md:h-[242px] relative bg-[url("/acce.jpg")] bg-cover bg-center'>
              <div className="absolute bottom-7 left-7">
                <p className="w-[170px] h-[48px] bg-white flex items-center justify-center font-semibold leading-6 text-[#252B42]">
                  ACCESSORIES
                </p>
              </div>
            </div>

            {/* Kids */}
            <div className='aspect-[1/1.2] md:aspect-auto md:h-[242px] relative bg-[url("/kids.jpg")] bg-cover bg-center'>
              <div className="absolute bottom-7 left-7">
                <p className="w-[120px] h-[48px] bg-white flex items-center justify-center font-semibold leading-6 text-[#252B42]">
                  KIDS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
