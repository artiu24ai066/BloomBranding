import WorkCard from "./WorkCard";
import "./WordCard.css";

export default function WorkCardPair() {
  return (
    <section className="sticky-section">
      <div className="pair">
        <WorkCard />
        <WorkCard bg="beige" />
      </div>
    </section>
  );
}
