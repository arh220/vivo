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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4 md:px-6 lg:px-10">
        <div className="md:hidden">
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

        <div className="flex items-center">
          <Logo
            className={`w-[104px] h-[28px] transition-colors duration-300 hover:text-[rgba(65,95,255,0.73)] ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          />
        </div>

        {/* Desktop */}
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

      {/* mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 overflow-y-auto flex flex-col">
          {/*mobile Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <Logo className="w-[104px] h-[28px]" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl focus:outline-none"
            >
              &times;
            </button>
          </div>

          {/*mobile Links */}
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
                Vivo Exclusive store
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

          <div className="p-6 border-t border-gray-200 text-sm text-gray-500">
            India | Select country/region
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
