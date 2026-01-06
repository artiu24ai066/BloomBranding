import "./CTAButton.css";

const CTAButton = ({ prompt = "View Experiences" }) => {
  return (
    <div id="container">
  <button class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">{prompt}</span>
  </button>
</div>
  );
};

export default CTAButton;
