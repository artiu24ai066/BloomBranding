import "./OurWork.css";
import WorkCardPair from "../components/WorkCardPair";
import Navbar from "../components/Navbar";
import BloomValues from "../components/BloomValues";
import Footer from "../components/Footer";

import work1 from "../assets/work1.jpeg";
import work2 from "../assets/work2.jpeg";
import work3 from "../assets/work3.jpeg";
import work4 from "../assets/work4.jpeg";
import work5 from "../assets/work5.jpeg";
import work6 from "../assets/work6.jpeg";

function OurWork() {
  return (
    <>
      <Navbar />

      <section className="our-work">
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

        <div className="marquee">
          <div className="marquee-track">
            Branding that you need — indeed • Branding that you need — indeed •
            Branding that you need — indeed •
          </div>
        </div>

        <div className="work-scroll">
          <WorkCardPair
            img1={work1}
            img2={work2}
            text2="Where possible, your logo should tell a story. A short, remarkable, to-the-point kind of story 🌻"
          />
          <WorkCardPair img1={work3} img2={work4} />
          <WorkCardPair img1={work5} img2={work6} />
        </div>

        <BloomValues />
        <Footer />
      </section>
    </>
  );
}

export default OurWork;
