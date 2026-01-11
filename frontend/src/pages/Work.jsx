import "./Work.css";
import WorkCardPair from "../components/WorkCardPair";
import Navbar from "../components/Navbar/Navbar";
import BloomValues from "../components/BloomValues";
import Footer from "../components/Footer/Footer";

import work1 from "../assets/work1.jpeg";
import work2 from "../assets/work2.jpeg";
import work3 from "../assets/work3.jpeg";
import work4 from "../assets/work4.jpeg";
import work5 from "../assets/work5.jpeg";
import work6 from "../assets/work6.jpeg";

function Work() {
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
            text1={"Our art direction sought to capture the essence of their sophisticated dainty designs in an aesthetic way. 💍💎Our services extend beyond the lens, offering a spectrum of digital marketing solutions 💫"}
            text2="Where possible, your logo should tell a story. A short, remarkable, to-the-point kind of story 🌻"
          />
          <WorkCardPair img1={work3} img2={work4} text1={"For Life’s A Beach, we didn’t design products for occasions.We designed them for moments — sun-drenched afternoons, salty hair, slow walks by the shore, and memories that stay long after the tide recedes. 🌴✨"} text2={"For Binal Patel, we didn’t focus on trends or seasons alone.We focused on emotion — the quiet confidence of a woman, the grace in her movement, and the stories woven into every silhouette. ✨"} />
          <WorkCardPair img1={work5} img2={work6} text1={"At Thyme & Whisk, we didn’t just shape a menu.We shaped moments — slow mornings, unhurried conversations, the comfort of familiar flavors, and the joy of something thoughtfully made. 🍃☕"} text2={"For Moire Rugs, we didn’t focus only on patterns and textures.We focused on the quiet luxury of everyday living — soft mornings, sunlit corners, and homes that tell stories through detail. ✨"}/>
        </div>

        <BloomValues />
        <Footer />
      </section>
    </>
  );
}

export default Work;
