import "./WordCard.css";

function WorkCard({
  leftBg = "teal",
  rightBg = "beige",
  leftText = "Text - related",
  rightText = "Text - related",
}) {
  return (
    <div className="work-card">
      <div className="work-card-images">
        <div className={`work-img ${leftBg}`}>
          <span>Work - image</span>
        </div>

        <div className={`work-img ${rightBg}`}>
          <span>Work - image</span>
        </div>
      </div>

      <div className="work-card-text">
        <p>{leftText}</p>
        <p>{rightText}</p>
      </div>
    </div>
  );
}

export default WorkCard;
