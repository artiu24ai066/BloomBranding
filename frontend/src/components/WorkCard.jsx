import "./WordCard.css";
import prod1 from "../assets/prod1.png";

function WorkCard({
  bg = "teal",
  text = "Text - related",
}) {
  return (
    <div className="hover-card">

      <div className="image-wrapper">
        <img src={prod1} alt="Work-image" />

        {/* OVERLAY TEXT */}
        <div className="image-overlay1">
          <p>{text}</p>
        </div>
      </div>

    </div>
  );
}

export default WorkCard;
