import React from "react";
import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";

const Navbar = ({ scrolled }) => {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
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
      </nav>
    </header>
  );
};

export default Navbar;
