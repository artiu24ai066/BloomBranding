import "./Footer.css";
import logo from "../assets/react.svg"; // <-- your logo image

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* TOP */}
        <div className="footer-top">
          <img src={logo} alt="Bloom Logo" className="footer-logo" />

          <div className="footer-center">
            <h2 className="brand-title">Bloom</h2>
            <span className="brand-sub">BRANDING</span>
            <p className="tagline">Crafting thoughtful brand identities</p>

            <nav className="footer-nav">
              <a href="#">Home</a>
            <a href="#">Our Journey</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            </nav>

            <div className="social-icons">
              <span>◎</span>
              <span>◎</span>
              <span>◎</span>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="footer-line"></div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© 2025 by Bloom Branding</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">T&amp;C</a>
            <a href="#">Returns & Exchange</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
