import "./GetStartedNavbar.css";
import { useNavigate } from "react-router-dom";
import CloseButton from "../CloseButton/CloseButton";
import CTAButton from "../CTAButton";


const GetStartedNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="getstarted-navbar">
      {/* LEFT */}
      <div className="gs-nav-left">
        <CloseButton onClick={() => navigate(-1)} />
      </div>

      {/* CENTER */}
      <div className="gs-nav-center">
        Bloom Branding
      </div>

      {/* RIGHT */}
      <div className="gs-nav-right">
        <CTAButton prompt="Get in Touch" to="/contact" />

      </div>
    </nav>
  );
};

export default GetStartedNavbar;

