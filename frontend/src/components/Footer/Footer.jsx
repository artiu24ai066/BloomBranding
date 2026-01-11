import { Link } from "react-router-dom";
import "./Footer.css";
import footerLogo from "../../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Brand */}
      <div className="footer-brand">
  <img
    src={footerLogo}
    alt="Bloom Branding Logo"
    className="footer-logo"
  />
  <p>Crafting thoughtful brand identities!</p>
</div>


      {/* Navigation Links */}
      <ul className="footer-links">
        {[
          { name: "Home", to: "/" },
          { name: "Our Journey", to: "/our-journey" },
          { name: "Services", to: "/services" },
          { name: "Our Work", to: "/work" },
          { name: "Contact", to: "/contact" },
        ].map((item, index) => (
          <li key={index}>
            <Link to={item.to} className="animated-link">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <ul className="footer-socials">
        <li>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
      </ul>

      <hr />

      {/* Bottom */}
      <div className="footer-bottom">
        <span>© 2025 by Bloom Branding</span>
        <div className="footer-policy">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">T&C</Link>
          <Link to="/returns">Returns & Exchange</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
