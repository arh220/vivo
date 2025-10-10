import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full ">
        <img
          src="../../../img/1.jpg"
          alt="Banner"
          className="w-full h-full  object-cover"
        />
      </div>

      <Navbar scrolled={scrolled} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
