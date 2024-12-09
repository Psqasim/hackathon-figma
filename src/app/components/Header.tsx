import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    // Header Main div
    <div className="w-full h-[58px] bg-[#252B42] flex items-center hidden lg:block">
      <div className="w-full h-[46px] mt-1 flex justify-around">
        {/* Contact Section */}
        <div className="w-[415px] h-[46px] text-white flex items-center gap-1">
          <FaPhone />
          <p>(225) 555-0118</p>

          <div className="flex items-center gap-1 ml-5">
            <IoIosMail className="text-xl" />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>

        {/* Follow us */}
        <div className="w-[332px] h-[44px] flex items-center text-white">
          <h1>Follow Us and get a chance to win 80% off</h1>
        </div>

        {/* Follow Links */}
        <div className="w-[233px] h-[46px] flex items-center">
          <div className="w-[83px] h-[24px] text-white">
            <p>Follow Us:</p>
          </div>

          <div className="w-[120px] h-6 ml-5 flex gap-4 items-center text-white text-xl">
            <FaInstagram />
            <FaYoutube />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
