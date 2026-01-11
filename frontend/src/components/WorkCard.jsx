import "./WordCard.css";
import work1 from "../assets/work1.jpeg";
// import work2 from "../assets/work2.jpeg";
// import work3 from "../assets/work3.jpeg";
// import work4 from "../assets/work4.jpeg";
// import work5 from "../assets/work5.jpeg";
// import work6 from "../assets/work6.jpeg"; 

function WorkCard({
  bg = "teal",
  text = "Text - related",
  img  = work1,
}) {
  return (
    <div className="hover-card">

      <div className="image-wrapper">
        <img src={img} alt="Work-image" />

        {/* OVERLAY TEXT */}
        <div className="image-overlay1">
          <p>{text}</p>
        </div>
      </div>

    </div>
  );
}

export default WorkCard;
