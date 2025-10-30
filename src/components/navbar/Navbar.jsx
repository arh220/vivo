import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import SearchIcon from "../../assets/Search";
import UserIcon from "../../assets/User";
import { BsBagDash } from "react-icons/bs";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { LuChevronRight } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";

const Navbar = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMobileUser, setIsMobileUser] = useState(false);
  console.log(isMobileUser);
  return (
    <>
      <header className={`mainhead ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-wrapper">
          <div className="brgmenu">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              {isMobileMenuOpen ? "" : <HiOutlineMenu />}
            </button>
          </div>
          <div className="logo">
            <Logo />
          </div>
          <div className="menu lihide">
            <ul>
              <li className="lihide">Home</li>
              <li className="lihide">Products</li>
              <li className="lihide">E-store</li>
              <li className="lihide">vivo Exclusive store</li>
              <li className="lihide">Community</li>
              <li className="lihide">Support</li>
              <li className="lihide">Funtouch OS</li>
              <li className="expvivo">Explore vivo</li>
              <li className="iqooo">iQOOO</li>
            </ul>
          </div>
          <div className="icons-container">
            <div className="icon search-icon">
              <SearchIcon />
            </div>

            <div
              className="desktop-user icon user-icon-wrapper"
              onMouseEnter={() => setIsDropDownOpen(true)}
              onMouseLeave={() => setIsDropDownOpen(false)}
            >
              <UserIcon />
              {isDropDownOpen && (
                <>
                  <div className="dropdown">
                    <ul>
                      <li>
                        <BsBagDash />
                        <span>My Order</span>
                      </li>
                      <li>
                        <PiShoppingCartSimpleLight />
                        <span>Cart</span>
                      </li>
                      <li>
                        <FiUser />
                        <span>Sign in/Register</span>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
            <div
              className="mobile-user-icon icon user-icon-wrapper"
              onClick={() => !isMobileUser && setIsMobileUser(true)}
            >
              <UserIcon />
              <div className={`mb-main ${isMobileUser ? "open" : ""}`}>
                <div className={`mb-user-head `}>
                  <div>
                    <div className="mb-user-box">
                      <div>
                        <button
                          className="closebtn"
                          onClick={() => setIsMobileMenuOpen(true)}
                        >
                          <HiOutlineMenu />
                        </button>
                      </div>
                      <div className="menu-logo">
                        <Logo />
                      </div>
                      <div className="menu-icons">
                        <SearchIcon />
                        <div
                          style={{ width: "100%" }}
                          onClick={() => setIsMobileUser(false)}
                        >
                          <UserIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-dropdown">
                    <ul>
                      <li>
                        <BsBagDash />
                        <span>My Order</span>
                      </li>
                      <li>
                        <PiShoppingCartSimpleLight />
                        <span>Cart</span>
                      </li>
                      <li>
                        <FiUser />
                        <span>Sign in/Register</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* mobile view */}

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mb">
          <div className="mobile-menu-header">
            <div>
              <button
                className="closebtn"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <HiOutlineX />
              </button>
            </div>
            <div className="menu-logo">
              <Logo />
            </div>
            <div className="menu-icons">
              <SearchIcon />
              <UserIcon />
            </div>
          </div>
        </div>

        <div className="mobile-menus">
          <ul>
            <li className="mobile-li">
              Home
              <span className="sspan">
                <LuChevronRight />
              </span>
            </li>
            <li className="mobile-li">
              Products
              <span className="sspan">
                <FiPlus />
              </span>
            </li>
            <li className="mobile-li">
              E-store
              <span className="sspan">
                <LuChevronRight />
              </span>
            </li>
            <li className="mobile-li">
              vivo Exclusive store
              <span className="sspan">
                <LuChevronRight />
              </span>
            </li>
            <li className="mobile-li">
              Community
              <span className="sspan">
                <LuChevronRight />
              </span>
            </li>
            <li className="mobile-li">
              Support
              <span className="sspan">
                <LuChevronRight />
              </span>
            </li>
            <li className="mobile-li">
              Funtouch OS
              <span className="sspan">
                <LuChevronRight />
              </span>
            </li>
            <li className="mobile-li">
              Explore vivo
              <span className="sspan">
                <LuChevronRight />
              </span>
            </li>
            <li className="mobile-li">
              iQOOO
              <span className="sspan">
                <LuChevronRight />
              </span>
            </li>
          </ul>
        </div>
        <div className="mobile-footer">
          <span>
            <TbWorld />
          </span>
          <span>India | Select country/region</span>
        </div>
      </div>
    </>
  );
};
export default Navbar;
