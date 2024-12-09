import React from "react";
import Image from "next/image";
import Logo from "/public/navbar-brand.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    // footer section
    <div className="w-full min-h-[488px]">
      {/* footer logo */}
      <div className="w-full h-auto md:h-[142px] bg-[#FAFAFA] flex justify-center py-8 md:py-0">
        <div className="w-full px-4 md:px-0 md:w-[1050px] h-full md:h-[138px] flex items-center">
          <div className="w-full md:w-[1049.5px] h-auto md:h-[58px] flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-0">
            {/* Logo */}
            <div className="w-[236px] h-[58px]">
              <Image src={Logo} alt="Logo here" />
            </div>

            {/* Links */}
            <div className="w-[236px] h-[24px] flex text-2xl gap-5 text-[#23A6F0]">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full min-h-[272px] flex justify-center">
        <div className="w-full px-4 md:px-0 md:w-[1056px] h-auto md:h-[270px] bg-white py-12">
          <div className="w-full md:w-[1050px] h-auto md:h-[170px] flex flex-col md:flex-row gap-8 md:gap-7">
            <div className="w-full md:w-[148px] h-auto md:h-[170px]">
              <h1 className="w-full md:w-[115px] h-6 font-semibold text-center md:text-left">
                Company Info
              </h1>
              <ul className="flex flex-col gap-3 mt-3 text-[#737373] text-center md:text-left">
                <li>About us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className="w-full md:w-[152px] h-auto md:h-[170px]">
              <h1 className="w-full md:w-[115px] h-6 font-semibold text-center md:text-left">
                Legal
              </h1>
              <ul className="flex flex-col gap-3 mt-3 text-[#737373] text-center md:text-left">
                <li>About us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className="w-full md:w-[148px] h-auto md:h-[170px]">
              <h1 className="w-full md:w-[115px] h-6 font-semibold text-center md:text-left">
                Features
              </h1>
              <ul className="flex flex-col gap-3 mt-3 text-[#737373] text-center md:text-left">
                <li className="w-full md:w-[149px]">Business Marketing</li>
                <li>User Analytic</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>

            <div className="w-full md:w-[152px] h-auto md:h-[170px]">
              <h1 className="w-full md:w-[115px] h-6 font-semibold text-center md:text-left">
                Resources
              </h1>
              <ul className="flex flex-col gap-3 mt-3 text-[#737373] text-center md:text-left">
                <li className="w-full md:w-[149px]">IOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>

            <div className="w-full md:w-[321px] h-auto md:h-[131px]">
              <h1 className="font-semibold text-center md:text-left">
                Get in Touch
              </h1>
              <div className="w-full md:w-[321px] h-auto md:h-[87px] flex items-center mt-4 md:mt-0">
                <div className="w-full md:w-[321px] h-[58px] flex flex-col md:flex-row gap-4 md:gap-0">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="w-full md:w-[321px] h-[58px] rounded-md bg-[#F9F9F9] px-4"
                  />
                  <button className="text-white w-full md:w-[130px] rounded-md h-[59px] bg-[#23A6F0]">
                    Subscribe
                  </button>
                </div>
              </div>
              <p className="text-[#737373] text-center md:text-left mt-4 md:mt-0">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto md:h-[74px] bg-[#FAFAFA] flex justify-center py-6 md:py-0">
        <div className="w-full px-4 md:px-0 md:w-[1050px] h-full md:h-[74px] text-[#737373] flex items-center justify-center md:justify-start">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
