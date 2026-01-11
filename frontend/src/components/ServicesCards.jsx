import "./ServicesCard.css";
import img1 from "../assets/card1.png";
import img2 from "../assets/card2.png";
import img3 from "../assets/card3.png";
import img4 from "../assets/card4.png";
import img5 from "../assets/card5.png";
const services = [
  {
    title: "Branding",
    text: "We explore your brand’s vision, values, and positioning to build identities that feel clear, intentional, and timeless.",
    image: img1,
    bg: "#bcd7ee",
    col : "#111",
  },
  {
    title: "Social Media Marketing",
    text: "We create content and campaigns that build consistency, engagement, and authentic brand presence.",
    image: img2,
    bg: "#93b0e6",
    col : "#111",
  },
  {
    title: "Production",
    text: "From concept to execution, we craft visuals that tell stories with clarity and emotional depth.",
    image: img3,
    bg: "#7899d1",
    col : "#111",
  },
  {
    title: "Influencer Marketing",
    text: "We collaborate with voices that align naturally to amplify reach and build meaningful trust.",
    image: img4,
    bg: "#4f66a9",
    col : "#fff",
  },
  {
    title: "Creative Design",
    text: "Exploring ideas through expressive design that feels refined, intentional, and visually impactful.",
    image: img5,
    bg: "#334f7a",
    col : "#fff",
  },
];

function ServicesCard() {
  return (
    <section className="services-section">
      {services.map((item, index) => (
        <div
          key={index}
          className="service-row"
          style={{ backgroundColor: item.bg}}

        >
          <div className="service-image">
            <img src={item.image} alt={item.title} />
          </div>

          <div className="service-text" style={{color : item.col}}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ServicesCard;
