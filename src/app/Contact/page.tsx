import React from "react";
import Navbar2 from "../components/Navbar2";
import Image from "next/image";
import Bg from "/public/background.png";
import { FaFacebook, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer";
import BlueArrow from "/public/blueArrow.png";

import { FiPhone } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";

const Page = () => {
  return (
    <div className="w-full">
      <Navbar2 />
      
      {/* Hero Section */}
      <div className="w-full flex flex-col-reverse md:flex-row px-4 md:px-0">
        {/* Left Section */}
        <div className="w-full md:w-1/2 md:max-w-[600px] mt-10 md:mt-28 md:ml-40 text-center md:text-left px-4">
          <p className="font-semibold text-base leading-6 text-[#252B42]">
            CONTACT US
          </p>
          <h1 className="text-4xl md:text-[58px] font-semibold leading-tight text-[#252B42] mt-6 md:mt-10 md:w-[378px]">
            Get in touch today!
          </h1>
          <p className="text-lg md:text-xl mt-4 md:mt-8 md:w-[356px]">
            We know how large objects will act, but things on a small scale
          </p>

          <div className="font-semibold text-xl leading-8 text-[#252B42] mt-6 md:mt-7">
            <p>Phone : +451 215 215</p>
            <p className="mt-4">Fax : +451 215 215</p>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-7 mt-6">
            <FaTwitter className="w-6 h-6 md:w-[30px] md:h-[24.9px]" />
            <FaFacebook className="w-6 h-6 md:w-[30px] md:h-[30px]" />
            <FaInstagram className="w-6 h-6 md:w-[30px] md:h-[30px]" />
            <FaLinkedin className="w-6 h-6 md:w-[30px] md:h-[29.88px]" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <Image 
            src={Bg} 
            alt="image here" 
            className="w-full max-w-[550px] object-contain"
          />
        </div>
      </div>

      {/* Office Visit Section */}
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[1050px] py-12 md:py-[112px] bg-white flex justify-center items-center">
          <div className="w-full max-w-[633px] flex flex-col items-center">
            <p className="font-semibold leading-6 text-center">VISIT OUR OFFICE</p>
            <p className="text-2xl md:text-[40px] font-semibold text-center text-[#252B42] mt-4">
              We help small businesses <br className="md:hidden" /> with big ideas
            </p>

            {/* Contact Info */}
            <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-6 mt-10">
              {/* Phone Contact */}
              <div className="w-full max-w-[327px] px-10 py-12 flex flex-col items-center text-center border border-gray-200">
                <FiPhone className="w-[72px] h-[72px] text-[#23A6F0]" />
                <div className="mt-3 w-[216px] h-[48px]">
                  <h6>georgia.young@example.com</h6>
                  <h6 className="mt-1">georgia.young@ple.com</h6>
                </div>
                <h5 className="font-bold text-base text-[#252B42] mt-3">
                  Get Support
                </h5>
                <button className="w-[189px] h-[54px] mt-4 text-[#23A6F0] rounded-[37px] border border-[#23A6F0]">
                  Submit Request
                </button>
              </div>

              {/* Map Contact */}
              <div className="w-full max-w-[329px] px-10 py-20 bg-[#252B42] flex flex-col items-center text-center">
                <FaMapMarkerAlt className="w-[72px] h-[72px] text-[#23A6F0]" />
                <div className="mt-3 w-[216px] h-[48px]">
                  <h6 className="text-white">georgia.young@example.com</h6>
                  <h6 className="mt-1 text-white">georgia.young@ple.com</h6>
                </div>
                <h5 className="font-bold text-base text-white mt-3">
                  Get Support
                </h5>
                <button className="w-[189px] h-[54px] mt-4 text-[#23A6F0] rounded-[37px] border border-[#23A6F0]">
                  Submit Request
                </button>
              </div>

              {/* Mail Contact */}
              <div className="w-full max-w-[327px] px-10 py-12 flex flex-col items-center text-center border border-gray-200">
                <IoIosMail className="w-[72px] h-[72px] text-[#23A6F0]" />
                <div className="mt-3 w-[216px] h-[48px]">
                  <h6>georgia.young@example.com</h6>
                  <h6 className="mt-1">georgia.young@ple.com</h6>
                </div>
                <h5 className="font-bold text-base text-[#252B42] mt-3">
                  Get Support
                </h5>
                <button className="w-[189px] h-[54px] mt-4 text-[#23A6F0] rounded-[37px] border border-[#23A6F0]">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Let's Talk Section */}
      <div className="w-full  h-[348px] flex justify-center items-center relative  md:py-0">
        <Image
          src={BlueArrow}
          alt="downarrow"
          className="md:w-auto absolute top-0 left-1/2 transform -translate-x-1/2 object-contain
          " />
        <div className="w-full max-w-[1050px] flex justify-center items-center">
          <div className="w-full max-w-[607px] flex justify-center items-center">
            <div className="w-full max-w-[272px] text-center">
              <h5 className="text-[#252B42] font-bold text-base">
                WE Can't WAIT TO MEET YOU
              </h5>
              <h1 className="font-bold text-4xl md:text-[58px] leading-tight text-[#252B42] mt-4">
                Let's Talk
              </h1>
              <button className="w-full max-w-[186px] h-[52px] bg-[#23A6F0] rounded-md text-white flex justify-center items-center mx-auto mt-6">
                Try it free now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;