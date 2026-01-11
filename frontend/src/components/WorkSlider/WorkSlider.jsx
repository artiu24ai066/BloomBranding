import { useEffect, useState } from "react";
import "./WorkSlider.css";
import CTAButton from "../CTAButton";

// 🔹 replace with your actual images
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import work4 from "../../assets/work4.png";

const slidesData = [
  {
    image: work1,
    title: ["Everyone says “storytelling sells,” but no one explains how.",  "With Mansi Nagdev’s summer collection, we didn’t just post a launch. We leaned into the season ~ the slowness, the softness, the stillness, and told the story behind why it was created. Same product. Different feeling. That’s what story does."],
  },
  {
    image: work2,
    title: ["Editorial campaign for @subhrekha_", "Shot by : @meet_desaii @nicetomeetyou.editorials Model : @__simran_saini Social Media Agency : @bloom.branding_ Make up & Hair : @muasurabhimandhani"],
  },
  {
    image: work3,
    title: ["A Grid Aesthetic is so much more than a tool, it is an essential part of building your brand story.", "Each aesthetic conveys a unique tale and emotion. Heartfully crafting tales that resonate with your business. Imagine it as an outline for the tale of your business. @mansinagdevofficial a premium-luxury handcrafted couture brand takes pleasure in rooting its authenticity in India. This handcrafted brand needed an essence of brilliance and beauty in its online presence. Curating a creative yet essential grid aesthetic is what we suggested. Watch out for the entire release of this stunning brand."],
  },
  {
    image: work4,
    title: ["Let us introduce you to a custom-made brand logo of our Client @izarahbyritika", "@izarahbyritika is a project that needed careful customization of palettes, tones and elegance that also showcased their brand brilliance at the same time. The aesthetic and tones perfectly incorporated their branding elements. Stay tuned to explore our new projects!"],
  },
];

const WorkSlider = () => {
  const [active, setActive] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const next = () => {
    if (isSliding) return;
    setIsSliding(true);
    setActive((prev) => (prev + 1) % slidesData.length);
    setTimeout(() => setIsSliding(false), 900);
  };

  const prev = () => {
    if (isSliding) return;
    setIsSliding(true);
    setActive((prev) =>
      prev === 0 ? slidesData.length - 1 : prev - 1
    );
    setTimeout(() => setIsSliding(false), 900);
  };

  // optional scroll support
  useEffect(() => {
    const onWheel = (e) => {
      e.deltaY > 0 ? next() : prev();
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [isSliding]);

  return (
    <section className="work-slider">
      {/* TOP BAR */}
      <div className="work-slider-top">
        <div>
          <span className="work-tag">A GLIMPSE INTO</span>
          <h2>Our Work</h2>
        </div>

        <div className="work-cta">
          <CTAButton prompt="Explore more" to="/work" />
        </div>
      </div>

      {/* RIGHT SIDE NAV */}
      <div className="slider-nav">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>

      {/* SLIDES */}
      <div className="slides-wrapper">
        {slidesData.map((slide, i) => (
        //   <div
        //     key={i}
        //     className={`slide ${i === active ? "is-active" : ""}`}
        //   >
        <div
  key={i}
  className={`slide ${
    i === active ? "is-active" : ""
  } ${i % 2 === 0 ? "layout-text-left" : "layout-image-left"}`}
>

            <div className="slide-content">
              <div className="slide-image">
                <img src={slide.image} alt="" />
              </div>

              <div className="slide-text">
                {slide.title.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSlider;
