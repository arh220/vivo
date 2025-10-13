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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <header className={`mainhead ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-wrapper">
          <div className="brgmenu">
            <button>
              {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
          <div className="logo">
            <Logo />
          </div>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>E-store</li>
              <li>vivo Exclusive store</li>
              <li>Community</li>
              <li>Support</li>
              <li>Funtouch OS</li>
              <li>Explore vivo</li>
              <li>iQOOO</li>
            </ul>
          </div>
          <div className="icons">
            <div className="icon">
              <SearchIcon />
            </div>
            <div className="icon">
              <UserIcon />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
