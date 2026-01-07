import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import CTAButton from "./CTAButton";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left" onClick={toggleMenu} style={{ cursor: "pointer" }}>
          <div className="logo-wrap">
            <img src={logo} alt="Bloom Branding" className="brand-logo" />
          </div>
        </div>

        <div className="nav-center">
          <span className="brand-title">Bloom Branding</span>
        </div>

        <div className="nav-right">
          <div className="cta-container">
            <CTAButton prompt={"Let's get started"} />
          </div>
        </div>
      </nav>

      {isMenuOpen && <MenuOverlay onClose={closeMenu} />}
    </>
  );
};

export default Navbar;

