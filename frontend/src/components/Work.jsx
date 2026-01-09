import { useNavigate } from "react-router-dom";
const Work = ({to}) => {
const navigate = useNavigate();

  return (
    <section className="work">
      <div className="work-grid">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="work-card">
            <span>Glimpse into Our Work</span>
          </div>
        ))}
      </div>

      <button className="btn secondary" onClick={() => navigate(to)}>Explore more</button>
    </section>
  );
};

export default Work;
