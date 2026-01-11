import "./Card.css";

const Card = ({ image, text, x, y }) => {
  return (
    <div
      className="floating-card"
      style={{
        transform: `translate(${x}px, ${y}px)`
      }}
    >
      <img src={image} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default Card;

