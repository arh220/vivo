import React from "react";
import "./footer.css";
import { IoCallOutline } from "react-icons/io5";
import { BiMessageRoundedDots } from "react-icons/bi";
import { LuMail } from "react-icons/lu";
import Fb from "../../assets/fb";
import Insta from "../../assets/Insta";
import { RiChatFollowUpLine } from "react-icons/ri";
import Youtube from "../../assets/Youtube";
import Twit from "../../assets/Twit";
import In from "../../assets/In";
import { TbWorld } from "react-icons/tb";
import { FiPlus } from "react-icons/fi";

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
              <div className="contact-box">
                <div className="content-item">
                  <p>
                    <span>
                      <IoCallOutline />
                    </span>
                    24*7
                  </p>
                  <h1>1800-208-3388</h1>
                  <p>
                    <span>
                      <IoCallOutline />
                    </span>
                    24*7
                  </p>
                  <h1>1800-102-3388</h1>
                  <p>
                    <span>
                      <IoCallOutline />
                    </span>
                    24*7 (Only for X-Series Customers)
                  </p>
                  <h1>1800-208-4488</h1>
                  <p className="itemp">
                    <span>
                      <BiMessageRoundedDots />
                    </span>
                    WhatsApp (8AM-8PM)
                  </p>
                  <p className="itemp">
                    <span>
                      <LuMail />
                    </span>
                    Email us (Reply in 24h)
                  </p>
                  <p className="itemp">
                    <span>
                      <BiMessageRoundedDots />
                    </span>
                    Chat with us
                  </p>
                  <p className="items">
                    <span>
                      <RiChatFollowUpLine />
                    </span>
                    Follow us
                  </p>
                  <p className="footer-icons">
                    <Fb />
                    <Insta />
                    <Youtube />
                    <Twit />
                    <In />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm-footer-content">
            <div className="sm-footer-list">
              <div className="sm-footer-wap">
                <ul>
                  <li className="list">
                    Popular Link
                    <span>
                      <FiPlus />
                    </span>
                  </li>
                  <li className="list">
                    Purchase Online{" "}
                    <span>
                      <FiPlus />
                    </span>
                  </li>
                  <li className="list">
                    Support{" "}
                    <span>
                      <FiPlus />
                    </span>
                  </li>
                  <li className="list">
                    About vivo
                    <span>
                      <FiPlus />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="sm-footer-contect">
                <p>
                  <span className="icon-size">
                    <IoCallOutline />
                  </span>
                  24*7
                </p>
                <h1>1800-208-3388</h1>
                <p>
                  <span className="icon-size">
                    <IoCallOutline />
                  </span>
                  24*7
                </p>
                <h1>1800-102-3388</h1>
                <p>
                  <span className="icon-size">
                    <IoCallOutline />
                  </span>
                  24*7 (Only for X-Series Customers)
                </p>
                <h1>1800-208-4488</h1>
                <p className="itemp">
                  <span className="icon-size">
                    <BiMessageRoundedDots />
                  </span>
                  WhatsApp (8AM-8PM)
                </p>
                <p className="itemp">
                  <span className="icon-size">
                    <LuMail />
                  </span>
                  Email us (Reply in 24h)
                </p>
                <p className="itemp">
                  <span className="icon-size">
                    <BiMessageRoundedDots />
                  </span>
                  Chat with us
                </p>
                <p className="items">
                  <span className="icon-size">
                    <RiChatFollowUpLine />
                  </span>
                  Follow us
                </p>
                <p className="sm-footer-icons">
                  <span className="span1">
                    <Fb />
                  </span>
                  <span>
                    <Insta />
                  </span>
                  <span>
                    <Youtube />
                  </span>
                  <span>
                    <Twit />
                  </span>
                  <span>
                    <In />
                  </span>
                </p>
                <p className="sm-footer-end">
                  <span className="icon-size">
                    <TbWorld />
                  </span>
                  India | Select country/region
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <div className="footer-end-box">
            <span>
              © 2025 vivo Mobile India Pvt Ltd. All rights reserved.
              &nbsp;|&nbsp; Cookie Policy &nbsp;|&nbsp; Warranty Terms
            </span>
            <span className="country-region">
              India | Select country/region
              <span className="icon">
                <TbWorld />
              </span>
            </span>
          </div>
        </div>
        <div className="sm-footer-end-box">
          <div className="sm-footer-last">
            <p>
              <span>
                © 2025 vivo Mobile India Pvt Ltd. All rights reserved.
              </span>
            </p>
            <p>
              <span> Cookie Policy &nbsp;|&nbsp; Warranty Terms</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
