import React from "react";
import { LuPhone, LuMail } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { RiChatFollowUpLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content-box">
          <div className="footer-content">
            <div className="list">
              <div className="list-box">
                <h3>Popular Links</h3>
                <ul>
                  <li className="">X200 Pro</li>
                  <li className="">X200</li>
                  <li className="">V60</li>
                  <li className="">V50e</li>
                  <li className="">T4x 5G</li>
                  <li className="">All Models</li>
                  <li className="">
                    <span>vivo ZEISS co-engineered</span>
                    <br />
                    <span>Imaging</span>
                  </li>
                  <li className="">vivo Exclusive store</li>
                </ul>
              </div>
              <div className="list-box">
                <h3>Purchase Online</h3>
                <ul>
                  <li className="">E-store</li>
                  <li className="">Buy phones</li>
                  <li className="">Buy accessories</li>
                  <li className="">My orders</li>
                  <li className="">Privacy Terms for E-Store</li>
                  <li className="">Payment Terms and Policies</li>
                </ul>
              </div>
              <div className="list-box">
                <h3>Support</h3>
                <ul>
                  <li className="">FAQs</li>
                  <li className="">Service Center</li>
                  <li className="">Funtouch OS</li>
                  <li className="">IMEI Authentication</li>
                  <li className="">Query of Spare Parts Price</li>
                  <li className="">System Update</li>
                  <li className="">Write to CEO</li>
                  <li className="">
                    Privacy Statement for <br />
                    <span>Customer Service</span>
                  </li>
                </ul>
              </div>
              <div className="list-box">
                <h3>About vivo</h3>
                <ul>
                  <li className="">E-waste Management</li>
                  <li className="">Careers at vivo</li>
                  <li className="">Terms and Conditions</li>
                  <li className="">Investor Information</li>
                  <li className="">Equal Opportunity Policy</li>
                  <li className="">About Us</li>
                  <li className="">Newsroom</li>
                  <li className="">Privacy Policy</li>
                </ul>
              </div>
            </div>

            <div className="contact">
              <div className="contact-box">1</div>
            </div>
          </div>
        </div>
        <div className="footer-end">footer end</div>
      </div>
    </>
  );
};

export default Footer;
