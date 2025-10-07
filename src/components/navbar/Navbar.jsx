import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/Logo";
import SearchIcon from "../../assets/Search";
import UserIcon from "../../assets/User";
import { BsBagDash } from "react-icons/bs";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";

const Navbar = ({ scrolled }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6">
        <div className="flex items-center">
          <Logo
            className={`w-[104px] h-[28px] transition-colors duration-300 hover:text-[rgba(65,95,255,0.73)] ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          />
        </div>

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
        </div>

        <div className="ml-6 flex items-center gap-8">
          <SearchIcon
            className={`w-7 h-7 cursor-pointer transition-colors duration-300 hover:text-[rgba(65,95,255,0.73)] ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          />

          <div
            className="relative"
            onMouseEnter={() => setIsDropDownOpen(true)}
            onMouseLeave={() => setIsDropDownOpen(false)}
          >
            <UserIcon
              className={`w-7 h-7 cursor-pointer transition-colors duration-300 hover:text-[rgba(65,95,255,0.73)] hover:pl-3 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            />
            {isDropDownOpen && (
              <div className="absolute right-0 top-0 pt-10">
                <ul className="w-44  bg-white shadow-lg rounded-md text-gray-800 z-50 ">
                  <li className="px-4 py-2 border-b border-gray-200 hover:border-l-4 hover:text-[rgba(65,95,255,0.73)] hover:pl-3  cursor-pointer flex items-center gap-2">
                    <BsBagDash />
                    <span className="text-xs">My Order</span>
                  </li>
                  <li className="px-4 py-2 border-b border-gray-200 hover:border-l-4 hover:text-[rgba(65,95,255,0.73)] hover:pl-3 cursor-pointer flex items-center gap-2">
                    <PiShoppingCartSimpleLight />
                    <span className="text-xs">Cart</span>
                  </li>
                  <li className="px-4 py-2 hover:border-l-4 hover:text-[rgba(65,95,255,0.73)] hover:pl-3 cursor-pointer flex items-center gap-2">
                    <FiUser />
                    <span className="text-xs">Sign in/Register</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
