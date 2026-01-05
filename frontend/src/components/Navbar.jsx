import CTAButton from "./CTAButton";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src="/logo.png" alt="Bloom Branding" />
        <span>Bloom Branding</span>
      </div>

      <CTAButton />
    </nav>
  );
};

export default Navbar;
