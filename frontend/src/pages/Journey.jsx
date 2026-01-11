import "./Journey.css";
import { useEffect } from "react";

import Navbar from '../components/Navbar/Navbar';
import Footer from "../components/Footer/Footer";
import img1 from "../assets/inf3.png";
import img2 from "../assets/prod1.png";
import img3 from "../assets/founder1.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
// import team4 from "../assets/team4.png";

function Journey() {
  useEffect(() => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.25,
    }
  );

  reveals.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <>
      <Navbar />
      <section className="journey">

        {/* ===== FOUNDERS SECTION (ONE SCREEN) ===== */}
        <section className="journey-founders">
          <div className="first">
            <div className="image">
              <img src={img1} alt="" className="front"/>
              <img src={img2} alt="" className="back"/>
            </div>
            <div className="contentOfFirst move-up1content">

              <div className="headname">
                <p>The faces behind Bloom Branding 🌼✨ <br />
                  Anusha Shah & Meghna Kherajani
                </p>
              </div>
              <div className="para move-up1text">
                <p>For us naming our business was a very crucial part, one that took a lot of time, a lot of suggestions and a
                  lot of patience. Since it was our first time doing
                  something of our own, we wanted the name to be just right.</p>
              </div>
            </div>
          </div>
          <div className="second">
            <div className="para move-uptext2" id="para2">
              <p>Not only was it a nice sounding,cheerful name but it also perfectly encapsulated the ethos of our brand - to provide a conducive environment for growing to  one’s full potential and BLOOM. </p>
            </div>
            <div className="image2 move-upimage ">
              <img src={img3} alt="" className="front" />
              <img src={img1} alt="" className="back" />
            </div>
            <div className="para move-uptext" id="para2">
              <p>

                We have this plant with a mere budnear our workspace that we saw around the first time we met for our brainstorming sessions.

              </p>
            </div>
          </div>
          <div className="third move-up3content" >
            <div className="para move-up3text2">
              Our journey is rooted in curiosity, collaboration, and
              creating spaces where brands grow naturally and meaningfully.
            </div>
            <div className="image3">
              <img src={img1} alt="" className="front" />
              <img src={img1} alt="" className="back" />
            </div>
            <div className="para move-up3text">
              <p>A few days from thereon we noticed the plant and we  saw tiny pretty pink flowers on it, it was an impatience plant! That’s when it just  clicked,BLOOM! </p>
            </div>
          </div>
        </section>


        {/* ===== MEET THE TEAM SECTION (ONE SCREEN) ===== */}
        <section className="meet-the-team">
          <div className="content">
            <h2>Meet The Team</h2>
            <p> From curating compelling concepts to executing seamless photoshoots, our team is dedicated to enhancing brand narratives.</p>
            <p>From branding & social media to content creation and video editing ~ we blend sharp strategy with creative story telling to help you stay relevant.</p>

            <div className="firstCard reveal">
              <div className="meetText from-left">
                <p>When your vision is Clear, Strategizing is Better.The world needs to hear you, see you and connect with you. Our vision seeks to translate your ideas into reality.</p>
              </div>
              <div className="meetimg move1 from-right">
                <img src={team1} alt="" />
              </div>
            </div>
            <div className="secondCard move2 reveal">
              <div className="meetimg from-left">
                <img src={team2} alt="" />
              </div>
              <div className="meetText2 from-right">
                <p>We believe in crafting a brand image through a fantastic business presence.
                  Not only to portray your values but to attract your ideal client base.</p>
              </div>
            </div>
            <div className="thirdCard reveal">
              <div className="meetText3 from-left">
                <p>At Bloom, we enhance your brand's aesthetics by choosing the right color palette, fonts, and designing ✨</p>
              </div>
              <div className="meetimg move3 from-right">
                <img src={team3} alt="" />
              </div>
            </div>
            <div className="fourthCard reveal">
              <div className="meetimg move4 from-left">
                <img src={team3} alt="" />
              </div>
              <div className="meetText4 from-right">
                <p>Our services extend beyond the lens, offering a spectrum of digital marketing solutions.
                  Let us be the storytellers for your brand! </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Journey;
