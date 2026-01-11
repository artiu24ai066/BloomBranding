import "./CTAButton.css";
import { useNavigate } from "react-router-dom";

const CTAButton = ({
  prompt = "Let's get started",
  to = "/menu",
}) => {
  const navigate = useNavigate();

  return (
    <div id="container">
      <button
        className="learn-more"
        onClick={() => navigate(to)}
      >
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">{prompt}</span>
      </button>
    </div>
  );
};

export default CTAButton;
