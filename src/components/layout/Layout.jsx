import { useEffect, useState } from "react";
import "./layout.css";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ scrolled, children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="container">
      <div className="headimg">
        <img src="/img/1.jpg" alt="Banner" />
        <div className="navbar-overlay">
          <Navbar scrolled={isScrolled} />
        </div>
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
