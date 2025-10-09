import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import SearchIcon from "../../assets/Search";
import UserIcon from "../../assets/User";
import { BsBagDash } from "react-icons/bs";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = ({ scrolled }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 overflow-hidden z-50 flex justify-center items-center w-full h-[60px] min-[1199px]:h-[86px] ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="w-full max-2xl:mx-20 max-[1199px]:!mx-10 2xl:max-w-[1440px] flex items-center justify-between gap-10">
        <div className="min-[1199px]:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`focus:outline-none ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <HiOutlineX className="w-7 h-7" />
            ) : (
              <HiOutlineMenu className="w-7 h-7" />
            )}
          </button>
        </div>
        <div className="flex items-center justify-center">
          <Logo
            className={`w-[104px] transition-colors duration-300 hover:text-[rgba(65,95,255,0.73)] ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          />
        </div>

        <div
          className={`hidden min-[1199px]:flex items-center gap-10 font-medium transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <Link
            to="/"
            className="transition hover:text-[rgba(65,95,255,0.73)] text-nowrap"
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
            className="transition hover:text-[rgba(65,95,255,0.73)] text-nowrap"
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
            className="transition hover:text-[rgba(65,95,255,0.73)] text-nowrap"
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
            className="transition hover:text-[rgba(65,95,255,0.73)] text-nowrap"
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
            className="transition hover:text-[rgba(65,95,255,0.73)] text-nowrap"
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
            className="transition hover:text-[rgba(65,95,255,0.73)] text-nowrap"
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
            className="transition hover:text-[rgba(65,95,255,0.73)] text-nowrap"
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
            className="transition hover:text-[rgba(65,95,255,0.73)] text-nowrap hidden min-[1280px]:block"
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
            className="transition hover:text-[rgba(65,95,255,0.73)] text-nowrap hidden min-[1370px]:block"
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

        <div className="flex items-center gap-6 md:gap-8">
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
              className={`w-7 h-7 cursor-pointer transition-colors duration-300 hover:text-[rgba(65,95,255,0.73)] ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            />
            {isDropDownOpen && (
              <div className="absolute right-0 top-0 pt-10">
                <ul className="w-44 bg-white shadow-lg rounded-md text-gray-800 z-50">
                  <li className="px-4 py-2 border-b border-gray-200 hover:border-l-4 hover:text-[rgba(65,95,255,0.73)] hover:pl-3 cursor-pointer flex items-center gap-2">
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
      {/* mobile view header*/}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-white z-50 overflow-y-auto flex flex-col transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <Logo className="w-[104px] h-[28px]" />

          <div className="flex items-center space-x-4">
            <SearchIcon className="w-7 cursor-pointer transition-colors" />
            <UserIcon className="w-7 cursor-pointer transition-colors" />
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="focus:outline-none text-gray-800 "
          >
            <HiOutlineX className="w-7 h-7" />
          </button>
        </div>

        <div>
          <ul className="flex flex-col space-y-6 p-6 text-lg flex-1">
            <li>
              <Link to="/" className="hover:text-[rgba(65,95,255,0.73)]">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-[rgba(65,95,255,0.73)]"
              >
                Products
              </Link>
            </li>
            <li>
              <Link to="/estore" className="hover:text-[rgba(65,95,255,0.73)]">
                E-Store
              </Link>
            </li>
            <li>
              <Link
                to="/exclusive"
                className="hover:text-[rgba(65,95,255,0.73)]"
              >
                Vivo Exclusive Store
              </Link>
            </li>
            <li>
              <Link
                to="/community"
                className="hover:text-[rgba(65,95,255,0.73)]"
              >
                Community
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-[rgba(65,95,255,0.73)]">
                Support
              </Link>
            </li>
            <li>
              <Link
                to="/funtouch"
                className="hover:text-[rgba(65,95,255,0.73)]"
              >
                Funtouch OS
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[rgba(65,95,255,0.73)]">
                Explore vivo
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[rgba(65,95,255,0.73)]">
                iQOO
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-6 border-t border-gray-200 text-sm text-gray-500">
          India | Select country/region
        </div>
      </div>
    </header>
  );
};

export default Navbar;
