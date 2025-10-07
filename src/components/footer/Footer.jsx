import React from "react";
import { LuPhone, LuMail } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { RiChatFollowUpLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-[#242933] text-[#c2c5cc] py-8 px-6">
      <div className=" w-full h-[550px] flex">
        <div className="ml-40 mt-10">
          <h3 className="font-bold mb-2">Popular Links</h3>
          <ul className="space-y-4 text-sm mt-10">
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              X200 Pro
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              X200
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              V60
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              V50e
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              T4x 5G
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              All Models
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              <span>vivo ZEISS co-engineered</span>
              <br />
              <span>Imaging</span>
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              vivo Exclusive store
            </li>
          </ul>
        </div>
        <div className="ml-10 mt-10">
          <h3 className="font-bold mb-2">Purchase Online</h3>
          <ul className="space-y-4 text-sm mt-10">
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              E-store
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              Buy phones
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              Buy accessories
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              My orders
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              Privacy Terms for E-Store
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              Payment Terms and Policies
            </li>
          </ul>
        </div>
        <div className="ml-10 mt-10">
          <h3 className="font-bold mb-2">Support</h3>
          <ul className="space-y-4 text-sm mt-10">
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              FAQs
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              Service Center
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              Funtouch OS
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              IMEI Authentication
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              Query of Spare Parts Price
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              System Update
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              Write to CEO
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              Privacy Statement for <br />
              <span>Customer Service</span>
            </li>
          </ul>
        </div>
        <div className="ml-10 mt-10">
          <h3 className="font-bold mb-2">About vivo</h3>
          <ul className="space-y-4 text-sm mt-10">
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              E-waste Management
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              Careers at vivo
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              Terms and Conditions
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              Investor Information
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              Equal Opportunity Policy
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              About Us
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              Newsroom
            </li>
            <li className="hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className=" mt-12 flex justify-end ml-90">
          <ul className="space-y-4">
            <li className="flex flex-col items-start gap-1 ">
              <p className="flex items-center gap-2 m-0">
                <LuPhone className="text-xl" />
                24*7
              </p>
              <h1 className="text-2xl font-semibold m-0 text-white ">
                1800-208-3388
              </h1>
            </li>

            <li className="flex flex-col items-start gap-1 ">
              <p className="flex items-center gap-2 m-0">
                <LuPhone className="text-xl" />
                24*7
              </p>
              <h1 className="text-2xl text-white font-semibold m-0">
                1800-102-3388
              </h1>
            </li>

            <li className="flex flex-col items-start gap-1 ">
              <p className="flex items-center gap-2 m-0">
                <LuPhone className="text-xl" />
                24*7{" "}
                <span className="text-sm font-normal">
                  (Only for X-Series Customers)
                </span>
              </p>
              <h1 className="text-2xl text-white font-semibold m-0">
                1800-208-4488
              </h1>
            </li>

            <li className="flex items-center gap-2 hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              <FaWhatsapp className="text-xl" />
              <p className="m-0">WhatsApp (8AM-8PM)</p>
            </li>

            <li className="flex items-center gap-2 hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              <LuMail className="text-xl" />
              <p className="m-0">Email us (Reply in 24h)</p>
            </li>
            <li className="flex items-center gap-2 hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
              <FaWhatsapp className="text-xl" />
              <p className="m-0">Chat with us</p>
            </li>
            <li className="flex flex-col gap-2 mt-10">
              <p className="flex items-center gap-2 hover:text-[rgba(65,95,255,0.73)] cursor-pointer">
                <RiChatFollowUpLine className="text-xl" />
                Follow us
              </p>

              <div className="flex gap-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 cursor-pointer transition-colors">
                  <FaFacebookF className="text-lg" />
                </div>

                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                  <FaInstagram className="text-lg" />
                </div>

                <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                  <FaTwitterSquare className="text-lg" />
                </div>

                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                  <FaLinkedinIn className="text-lg" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mx-12 mt-6 text-sm flex justify-between items-center">
        <p className="mt-5">
          © 2025 vivo Mobile India Pvt Ltd. All rights reserved.
        </p>
        <p className="mt-5 flex items-center gap-2">
          India | Select country/region
          <TbWorld className="text-lg" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
