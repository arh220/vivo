<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";

const Navbar = ({ scrolled }) => {
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";
import usericon from "../../assets/user.svg"

const Navbar = ({ scrolled }) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

>>>>>>> eb369d2 (6/10/25)
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
<<<<<<< HEAD
      <nav className="max-w-7xl mx-auto flex items-center py-5 px-6 ">
        <div className="flex items-center space-x-30">
          <svg
            viewBox="0 0 120 40"
            xmlns="http://www.w3.org/2000/svg"
            className="w-28 h-10"
          >
            {/* Blue Box */}
            <rect width="120" height="40" rx="6" fill="#415FFF" />

            {/* vivo Text */}
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              fill="white"
              fontSize="20"
              fontFamily="'vivoSansSC', 'Montserrat', sans-serif"
              dy=".3em"
            >
              vivo
            </text>
          </svg>
=======
<nav className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6">
            <div className="flex items-center">

          <svg className={`${
              scrolled ? "text-gray-800" : "text-white"
            }`}
  aria-hidden="true"
  width="104px"
  height="28px"
  viewBox="0 0 103 28"
  xmlns="http://www.w3.org/2000/svg"
>
  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g transform="translate(-241.000000, -29.000000)">
      <g>
        <g transform="translate(240.000000, 29.000000)">
<g transform="translate(1.000000, 0.000000)" fill="currentColor">
            <path
              className="vep-pc-logo-path"
              d="M92.1201187,22.7773568 L83.3531521,22.7773568 C78.4247857,22.7773568 77.9864276,18.7356293 77.9864276,17.5007165 C77.9864276,16.2658037 78.4247857,12.2240763 83.3531521,12.2240763 L92.1201187,12.2240763 C97.0484851,12.2240763 97.4868432,16.2658037 97.4868432,17.5007165 C97.4868432,18.7356293 97.0484851,22.7773568 92.1201187,22.7773568 M92.1201187,7.77940186 L83.3531521,7.77940186 C74.2419976,7.77940186 73.4316287,15.2256518 73.4316287,17.5007165 C73.4316287,19.7759758 74.2419976,27.2222258 83.3531521,27.2222258 L92.1201187,27.2222258 C101.231468,27.2222258 102.041837,19.7759758 102.041837,17.5007165 C102.041837,15.2256518 101.231468,7.77940186 92.1201187,7.77940186"
            ></path>
            <path
              className="vep-pc-logo-path"
              d="M71.6722232,8.23532926 L68.8307758,8.23532926 C67.6137631,8.23532926 67.362967,8.44312615 66.8934784,9.13947923 C66.4241842,9.83602688 58.2963682,22.2443033 58.2963682,22.2443033 C58.0372058,22.6258479 57.7622835,22.7801391 57.4200413,22.7801391 C57.0779936,22.7801391 56.8028767,22.6258479 56.5437143,22.2443033 C56.5437143,22.2443033 48.4158983,9.83602688 47.9466042,9.13947923 C47.4771155,8.44312615 47.2263194,8.23532926 46.0095013,8.23532926 L43.1678593,8.23532926 C42.5139217,8.23532926 42.2146786,8.74664971 42.6257973,9.37101323 C43.0369161,9.99537674 52.3331032,24.1107786 52.3331032,24.1107786 C53.8394361,26.3265005 54.9449623,27.2222841 57.4200413,27.2222841 C59.8951202,27.2222841 61.0008409,26.3265005 62.5073684,24.1107786 C62.5073684,24.1107786 71.8031664,9.99537674 72.2142852,9.37101323 C72.6254039,8.74664971 72.3263554,8.23532926 71.6722232,8.23532926"
            ></path>
            <path
              className="vep-pc-logo-path"
              d="M33.9316764,9.43928657 C33.9316764,8.57716293 34.273335,8.2353098 35.1354586,8.2353098 L37.2832769,8.2353098 C38.1454005,8.2353098 38.4872537,8.57716293 38.4872537,9.43928657 L38.4872537,26.0182879 C38.4872537,26.8804115 38.1454005,27.2222647 37.2832769,27.2222647 L35.1354586,27.2222647 C34.273335,27.2222647 33.9316764,26.8804115 33.9316764,26.0182879 L33.9316764,9.43928657 Z"
            ></path>
            <path
              className="vep-pc-logo-path"
              d="M29.2512459,8.23532926 L26.4097985,8.23532926 C25.1925912,8.23532926 24.9417952,8.44312615 24.4723065,9.13947923 C24.0030124,9.83602688 15.8753909,22.2443033 15.8753909,22.2443033 C15.6160339,22.6256534 15.3411116,22.7801391 14.9988694,22.7801391 C14.6566271,22.7801391 14.3817048,22.6256534 14.1225424,22.2443033 C14.1225424,22.2443033 5.9947264,9.83602688 5.52543229,9.13947923 C5.05613818,8.44312615 4.80514754,8.23532926 3.5883294,8.23532926 L0.746492834,8.23532926 C0.0162852061,8.23532926 -0.206687867,8.74664971 0.204625463,9.37101323 C0.615744226,9.99537674 9.91193135,24.1107786 9.91193135,24.1107786 C11.4180697,26.3265005 12.5237904,27.2222841 14.9988694,27.2222841 C17.4741429,27.2222841 18.5796691,26.3265005 20.0861965,24.1107786 C20.0861965,24.1107786 29.3821891,9.99537674 29.7931133,9.37101323 C30.2044266,8.74664971 29.9814536,8.23532926 29.2512459,8.23532926"
            ></path>
            <path
              className="vep-pc-logo-path"
              d="M33.7359621,4.43800671 C33.0359123,3.73815144 33.0359123,3.18324812 33.7359621,2.48319828 L35.231983,0.987177377 C35.9318383,0.287127538 36.4869362,0.287127538 37.1867914,0.986982811 L38.6830069,2.48319828 C39.3828622,3.18324812 39.3828622,3.73815144 38.6830069,4.43800671 L37.1867914,5.93422218 C36.4869362,6.63427202 35.9318383,6.63427202 35.231983,5.93422218 L33.7359621,4.43800671 Z"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg></div>

>>>>>>> eb369d2 (6/10/25)
          {/* Links */}
          <div
            className={`hidden md:flex items-center space-x-10 font-medium transition-colors duration-300 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <Link
              to="/"
              className="transition hover:text-[rgba(65,95,255,0.73)]"
              style={{
                fontFamily: "'vivoSansSC', 'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0.1px",
                lineHeight: 1.5,
              }}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="transition hover:text-[rgba(65,95,255,0.73)]"
              style={{
                fontFamily: "'vivoSansSC', 'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0.1px",
                lineHeight: 1.5,
              }}
            >
              Products
            </Link>
            <Link
              to="/estore"
              className="transition hover:text-[rgba(65,95,255,0.73)]"
              style={{
                fontFamily: "'vivoSansSC', 'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0.1px",
                lineHeight: 1.5,
              }}
            >
              E-Store
            </Link>
            <Link
              to="/exclusive"
              className="transition hover:text-[rgba(65,95,255,0.73)]"
              style={{
                fontFamily: "'vivoSansSC', 'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0.1px",
                lineHeight: 1.5,
              }}
            >
              Vivo Exclusive
            </Link>
            <Link
              to="/community"
              className="transition hover:text-[rgba(65,95,255,0.73)]"
              style={{
                fontFamily: "'vivoSansSC', 'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0.1px",
                lineHeight: 1.5,
              }}
            >
              Community
            </Link>
            <Link
              to="/support"
              className="transition hover:text-[rgba(65,95,255,0.73)]"
              style={{
                fontFamily: "'vivoSansSC', 'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0.1px",
                lineHeight: 1.5,
              }}
            >
              Support
            </Link>
            <Link
              to="/funtouch"
              className="transition hover:text-[rgba(65,95,255,0.73)]"
              style={{
                fontFamily: "'vivoSansSC', 'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0.1px",
                lineHeight: 1.5,
              }}
            >
              Funtouch OS
            </Link>
            <Link
              to="/"
              className="transition hover:text-[rgba(65,95,255,0.73)]"
              style={{
                fontFamily: "'vivoSansSC', 'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0.1px",
                lineHeight: 1.5,
              }}
            >
              Explore vivo
            </Link>
            <Link
              to="/"
              className="transition hover:text-[rgba(65,95,255,0.73)]"
              style={{
                fontFamily: "'vivoSansSC', 'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0.1px",
                lineHeight: 1.5,
              }}
            >
              iQOO
            </Link>
<<<<<<< HEAD
            <LuSearch
              className="transition hover:text-[rgba(65,95,255,0.73)] ml-32"
              style={{
                fontFamily: "'vivoSansSC', 'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "24px",
                letterSpacing: "0.1px",
                lineHeight: 1.5,
              }}
            />
          </div>
        </div>
=======
            
          </div>
          <div className="ml-6 flex items-center gap-8">
          <svg
            aria-hidden="true"
            tabIndex="-1"
            width="28px"
            height="28px"
            viewBox="0 0 28 28"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className={`${scrolled ? "text-gray-800" : "text-white"}`}
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g>
                <path
                  d="M16,5 C20.418278,5 24,8.581722 24,13 C24,16.0803917 22.2590043,18.7541521 19.7073223,20.0909719 L23.0905984,23.3102362 C23.2506305,23.4625276 23.2569056,23.7157158 23.1046142,23.875748 C23.0291106,23.9550893 22.9243759,24 22.8148504,24 L20.6539141,24 C20.3972737,24 20.150457,23.9013297 19.9645442,23.7244095 L17.0320536,20.9340435 C16.6941842,20.9775607 16.3497126,21 16,21 L12,21 C7.581722,21 4,17.418278 4,13 C4,8.581722 7.581722,5 12,5 L16,5 Z M16,7 L12,7 C8.6862915,7 6,9.6862915 6,13 C6,16.3137085 8.6862915,19 12,19 L16,19 C19.3137085,19 22,16.3137085 22,13 C22,9.6862915 19.3137085,7 16,7 Z"
                  fill={scrolled ? "#242933" : "#fff"}
                  fillRule="nonzero"
                />
              </g>
            </g>
          </svg>
<div
        className="relative"
        onMouseEnter={() => setIsDropDownOpen(true)}
        onMouseLeave={() => setIsDropDownOpen(false)}
      >
        <img
          src={usericon}
          alt="User Icon"
          className={`w-7 h-7 cursor-pointer ${scrolled ? "filter invert-0" : "filter invert"}`}
        />

        {isDropDownOpen && (
          <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md text-gray-800 z-50">
            <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">My Order</li>
            <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">Cart</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Signup/Register</li>
          </ul>
        )}
      </div>
              </div>
        
>>>>>>> eb369d2 (6/10/25)
      </nav>
    </header>
  );
};

export default Navbar;
<<<<<<< HEAD
=======


>>>>>>> eb369d2 (6/10/25)
