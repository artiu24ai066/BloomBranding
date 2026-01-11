import WorkCard from "./WorkCard";
import "./WordCard.css";
import work1 from "../assets/work1.jpeg";
import work2 from "../assets/work2.jpeg";
import work3 from "../assets/work3.jpeg";
import work4 from "../assets/work4.jpeg";
import work5 from "../assets/work5.jpeg";
import work6 from "../assets/work6.jpeg"; 

export default function WorkCardPair({img1, img2}) {
  return (
    <section className="sticky-section">
      <div className="pair">
        <WorkCard img={img1} />
        <WorkCard bg="beige" img={img2}/>
      </div>
    </section>
  );
}
