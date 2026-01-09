import "./OurWork.css";
import WorkCard from "../components/WorkCard";
function OurWork() {
  return (
    <section className="our-work">

      {/* TOP SECTION */}
      <div className="ourwork-top">
        <div className="ourwork-text">
          <h2>Our Work</h2>
          <p>
            Every project begins with listening, curiosity, and a deep
            understanding of the brand behind it.
          </p>
          <p>
            We believe meaningful brands are built with patience and purpose.
            Our work focuses on creating identities that feel authentic,
            refined, and thoughtfully designed.
          </p>
        </div>

        <div className="ourwork-image">
          <span>Founders Image</span>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          Branding that you need — indeed • Branding that you need — indeed •
          Branding that you need — indeed •
        </div>
      </div>

     <WorkCard />
     <WorkCard />
     <WorkCard />
      

    </section>
  );
}

export default OurWork;
