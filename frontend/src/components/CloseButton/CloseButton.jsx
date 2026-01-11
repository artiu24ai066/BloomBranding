import "./CloseButton.css";

const CloseButton = ({ onClick }) => {
  return (
    <div className="close-btn" onClick={onClick}>
      <span className="left">
        <span className="circle-left"></span>
        <span className="circle-right"></span>
      </span>
      <span className="right">
        <span className="circle-left"></span>
        <span className="circle-right"></span>
      </span>
    </div>
  );
};

export default CloseButton;
