import React from 'react'
import Image from 'next/image'
import Arrowicon from "/public/Arrowicon.png"
import Button from "/public/button.png";
import brand1 from "/public/brand1.png";
import brand2 from "/public/brand2.png";
import brand3 from "/public/brand3.png";
import brand4 from "/public/brand4.png";
import brand5 from "/public/brand5.png";
import brand6 from "/public/brand6.png";
import Checkcircle from "/public/Checkcircle.png";
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer';
import Link from 'next/link';

const page = () => {
  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] flex justify-center px-4 sm:px-6 lg:px-8">
        <div className='w-full max-w-[1050px] h-full'>
          <div className='w-full bg-[#FFFFFF] py-6 sm:py-8'>  
              <Navbar2 /> 
             <div className='w-full max-w-[870px] mx-auto px-4 sm:px-6 flex items-center justify-center'>
                <div className="w-full max-w-[427px] text-center sm:text-left">
                    <h1 className='font-semibold text-[16px] leading-6 tracking-[0.1px] text-[#737373]'>PRICING</h1>
                    <h1 className='mt-4 text-[32px] sm:text-[48px] lg:text-[58px] font-semibold leading-tight sm:leading-[80px] tracking-[0.2px] text-[#252B42]'>Simple Pricing</h1>
                    <div className='flex justify-center sm:justify-start gap-4 mt-3'>
                        <Link href="/" className='font-semibold text-[14px] leading-6 text-[#252B42]'>Home</Link>
                        <Image src={Arrowicon} alt='Arrowicon'/>
                        <p className='font-semibold text-[14px] leading-6 text-[#737373]'>Pricing</p>
                    </div>
                </div>
             </div>
          </div> 

          <div className='w-full max-w-[625px] mx-auto mt-7 px-4 text-center'>
               <h1 className='font-semibold text-[32px] sm:text-[40px] leading-[1.2] sm:leading-[50px]'>Pricing</h1>
               <div className='mt-2 space-y-1'>
                  <p className='text-[14px] text-[#737373]'>Problems trying to resolve the conflict between</p>
                  <p className='text-[14px] text-[#737373]'>the two major realms of Classical physics: Newtonian mechanics</p>
               </div>
          </div>

          <div className='flex justify-center mt-10'>
             <div className='flex flex-wrap items-center gap-4 justify-center'>
                <div className='flex items-center gap-3'>
                    <p className='text-[#252B42] font-semibold text-[16px]'>Monthly</p>
                    <Image src={Button} alt='Button'/>
                    <p className='text-[#252B42] font-semibold text-[16px]'>Yearly</p>
                </div>
                <button className='bg-[#B2E3FF] px-4 py-2 text-[14px] text-[#23A6F0] font-semibold rounded-[37px]'>
                    <span className='flex gap-1'>Save <span>25%</span></span>
                </button>
             </div>
          </div>

          <div className='w-full mt-10 px-4 sm:px-6'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[985px] mx-auto'>
                  <div className='bg-[#FFFFFF] rounded-[10px] p-6 sm:p-10 text-center flex flex-col gap-7 items-center'>
                        <h1 className='font-semibold text-[24px] leading-8 text-[#252B42]'>FREE</h1>
                        <p className='max-w-[160px] font-semibold text-[16px] text-[#737373] leading-6'>Organize across all apps by hand</p>
                        <div className='flex items-start gap-2'>
                            <p className='font-semibold text-[40px] text-[#23A6F0] leading-[50px]'>0</p>
                            <div className='flex flex-col'>
                                <p className='font-semibold text-[24px] text-left text-[#23A6F0]'>$</p>
                                <p className='font-semibold text-[14px] text-[#8EC2F2]'>Per Month</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src={Checkcircle} alt='Checkcircle'/>
                            <p className='font-semibold text-[14px] text-[#252B42] leading-6'>Unlimited product updates</p>
                        </div>
                  </div>

                  <div className='bg-[#252B42] rounded-[10px] p-6 sm:p-10 text-center flex flex-col gap-7 items-center'>
                        <h1 className='font-semibold text-[24px] leading-8 text-[#FFFFFF]'>STANDARD</h1>
                        <p className='max-w-[160px] font-semibold text-[16px] text-[#FFFFFF] leading-6'>Organize across all apps by hand</p>
                        <div className='flex items-start gap-2'>
                            <p className='font-semibold text-[40px] text-[#23A6F0] leading-[50px]'>9.99</p>
                            <div className='flex flex-col'>
                                <p className='font-semibold text-[24px] text-left text-[#23A6F0]'>$</p>
                                <p className='font-semibold text-[14px] text-[#8EC2F2]'>Per Month</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src={Checkcircle} alt='Checkcircle'/>
                            <p className='font-semibold text-[14px] text-[#FFFFFF] leading-6'>Unlimited product updates</p>
                        </div>
                  </div>

                  <div className='bg-[#FFFFFF] rounded-[10px] p-6 sm:p-10 text-center flex flex-col gap-7 items-center'>
                        <h1 className='font-semibold text-[24px] leading-8 text-[#252B42]'>PREMIUM</h1>
                        <p className='max-w-[160px] font-semibold text-[16px] text-[#737373] leading-6'>Organize across all apps by hand</p>
                        <div className='flex items-start gap-2'>
                            <p className='font-semibold text-[40px] text-[#23A6F0] leading-[50px]'>19.99</p>
                            <div className='flex flex-col'>
                                <p className='font-semibold text-[24px] text-left text-[#23A6F0]'>$</p>
                                <p className='font-semibold text-[14px] text-[#8EC2F2]'>Per Month</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src={Checkcircle} alt='Checkcircle'/>
                            <p className='font-semibold text-[14px] text-[#252B42] leading-6'>Unlimited product updates</p>
                        </div>
                  </div>
              </div>
          </div>

           <div className='text-center mt-20'>
              <p className='text-[18px] sm:text-[20px] leading-8'>Trusted By Over 4000 Big Companies</p>
           </div>

           <div className="w-full py-8 mt-7 px-4">
               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center">
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

           <div className='w-full mt-4 bg-green-200'>
              {/* Your future content */}
           </div>

          <Footer />
        </div>
    </div>
  )
}

export default page