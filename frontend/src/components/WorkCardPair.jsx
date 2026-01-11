import WorkCard from "./WorkCard";
import "./WordCard.css";

export default function WorkCardPair({ img1, img2, text1, text2 }) {
  return (
    <section className="sticky-section">

      {/* background wrapper */}
      <div className="pair-bg-wrapper">
        <div className="pair-bg bg1"></div>
        <div className="pair-bg bg2"></div>
        <div className="pair-bg bg3"></div>
      </div>

      {/* cards */}
      <div className="pair">
        <WorkCard img={img1} text={text1} />
        <WorkCard bg="beige" img={img2} text={text2} />
      </div>

    </section>
  );
}
