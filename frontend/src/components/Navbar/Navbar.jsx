import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CTAButton from "../CTAButton";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // 🔽 Scrolling DOWN → hide navbar
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // 🔼 Scrolling UP → show navbar
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${visible ? "show" : "hide"}`}>
      <div className="nav-left">
        <img src={logo} alt="Bloom Branding Logo" />
      </div>

      <div className="nav-center">
        Bloom Branding
      </div>

      <div className="nav-right">
        <CTAButton
          prompt="Let’s Get Started"
          onClick={() => navigate("/get-started")}
        />
      </div>
    </nav>
  );
};

export default Navbar;

