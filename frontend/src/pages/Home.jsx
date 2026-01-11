import Navbar from "../components/Navbar/Navbar";
import FloatingBackground from "../components/FloatingBackground/FloatingBackground";
import CTAButton from "../components/CTAButton";
import "./Home.css";
import Card from "../components/Card/Card";

import brandstrategy from "../assets/brandstrategy.png";
import contentcreation from "../assets/contentcreation.png";
import frontendoriented from "../assets/frontendoriented.png";
import production from "../assets/production.png";
import socialmediabranding from "../assets/socialmediabranding.png";

import { useRef, useState, useEffect } from "react";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import InstagramPreview from "../components/InstagramPreview/InstagramPreview";
import WorkSlider from "../components/WorkSlider/WorkSlider";

import review1 from "../assets/reviews/review1.png";
import review2 from "../assets/reviews/review2.png";
import review3 from "../assets/reviews/review3.png";
import review4 from "../assets/reviews/review4.png";
import review5 from "../assets/reviews/review5.png";




import Footer from "../components/Footer/Footer";


const cardsData = [
  { image: brandstrategy, title: "Brand Strategy" },
  { image: contentcreation, title: "Content Creation" },
  { image: frontendoriented, title: "Frontend Oriented" },
  { image: production, title: "Production" },
  { image: socialmediabranding, title: "Social Media Branding" },
];

const journeyStats = [
  {
    value: 5,
    label: "Years",
    desc: "Of learning what makes a brand feel real",
  },
  {
    value: 120,
    label: "Projects",
    desc: "Shaped with intention, not templates\nCrafted with care, strategy, and purpose",
  },
  {
    value: 40,
    label: "Clients",
    desc: "Who trusted us with their vision",
  },
  {
    value: 15,
    label: "Industries",
    desc: "Each with a voice we learned to listen to",
  },
];

const reviews = [
  {
    name: "Aarav Mehta",
    role: "Founder, Zeon",
    text: "Bloom didn’t just design our brand, they understood it.",
    image: review1,
  },
  {
    name: "Riya Sharma",
    role: "Marketing Lead",
    text: "Every detail felt intentional and deeply thought through.",
    image: review2,
  },
  {
    name: "Kunal Verma",
    role: "Startup Owner",
    text: "Working with Bloom felt calm, creative, and powerful.",
    image: review3,
  },
  {
    name: "Arina Dubois",
    role: "CEO, Paris Co.",
    text: "Exceptional branding experience with a personal touch.",
    image: review4,
  },
  {
    name: "Stacey Long",
    role: "Brand Manager",
    text: "The attention to detail was unmatched.",
    image: review5,
  },
];



 const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const lastPos = useRef(null);
  const distance = useRef(0);

  const handleMouseMove = (e) => {
    if (!lastPos.current) {
      lastPos.current = { x: e.clientX, y: e.clientY };
      setActiveIndex(0);
      return;
    }

    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;

    distance.current += Math.sqrt(dx * dx + dy * dy);

    if (distance.current > 120) {
      setActiveIndex((prev) => (prev + 1) % cardsData.length);
      distance.current = 0;
    }

    lastPos.current = { x: e.clientX, y: e.clientY };

    setPosition({
      x: e.clientX + 24,
      y: e.clientY + 24,
    });
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    lastPos.current = null;
    distance.current = 0;
  };










  const journeyRef = useRef(null);
const [startCount, setStartCount] = useState(false);
const [counts, setCounts] = useState(journeyStats.map(() => 0));


/* 🔹 Observe scroll in & out */
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setCounts(journeyStats.map(() => 0)); // reset
        setStartCount(true);
      } else {
        setStartCount(false);
        setCounts(journeyStats.map(() => 0)); // reset when leaving
      }
    },
    { threshold: 0.4 }
  );

  if (journeyRef.current) observer.observe(journeyRef.current);

  return () => observer.disconnect();
}, []);

/* 🔹 Count animation */
useEffect(() => {
  if (!startCount) return;

  const intervals = journeyStats.map((stat, index) => {
    const stepTime = Math.max(20, 1200 / stat.value); // 👈 KEY FIX

    return setInterval(() => {
      setCounts((prev) => {
        const updated = [...prev];

        if (updated[index] < stat.value) {
          updated[index] += 1;
        }

        return updated;
      });
    }, stepTime);
  });

  return () => intervals.forEach(clearInterval);
}, [startCount]);





    const cubeRef = useRef(null);
    const handleCubeMove = (e) => {
  const cube = cubeRef.current;
  if (!cube) return;

  const rect = cube.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  const rotateX = (-y / rect.height) * 40;
  const rotateY = (x / rect.width) * 40;

  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const resetCube = () => {
  const cube = cubeRef.current;
  if (!cube) return;

  cube.style.transform = "rotateX(0deg) rotateY(0deg)";
  cube.parentElement.classList.remove("paused");
};



const sectionRef = useRef(null);
const [showDragBox, setShowDragBox] = useState(false);
const [dragBoxPos, setDragBoxPos] = useState({ x: 0, y: 0 });
  

  // Track mouse/touch in the section
  const handleMouseDrag = (e) => {
    setDragBoxPos({ x: e.clientX, y: e.clientY });
  };

  const handleTouchMove = (e) => {
    setDragBoxPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };


  return (
    <>
      <FloatingBackground />
      <Navbar />

      <section style={{ height: "100vh", position: "relative" }}>
        {/* Text at bottom-left */}
        <div style={{
          position: "absolute",
          bottom: "100px",
          left: "60px",
          color: "#482930",
          maxWidth: "600px",
          
        }}>
          <h1 style={{
            fontSize: "3rem",
            fontFamily: "Aclonica",
          }}>We Shatter the Expected Defy the Ordinary <br/> and Transform Reality</h1>
          
        </div>

        </section>
          <section className="home-services" onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>
          <h2 className="services-title">OUR SERVICES</h2>

          <p className="services-text">
            a creative branding <br />
            studio <span>crafting bold identities,</span> <br />
            compelling content and <br />
            digital experiences that help <br />
            brands grow!
          </p>

          <div className="services-cta">
            <CTAButton prompt="Explore more" to="/services" />
          </div>

          {/* FLOATING CURSOR CARD */}
        {activeIndex !== null && (
          <Card
            image={cardsData[activeIndex].image}
            text={cardsData[activeIndex].title}
            x={position.x}
            y={position.y}
          />
        )}

      </section>



       <WorkSlider/>


      {/* SECTION 4 – OUR JOURNEY */}
      <section className="home-journey" ref={journeyRef}>
        {/* Header Row */}
        <div className="journey-top">
          <div>
            <h2>Our Journey</h2>
            <p>
              A story shaped by people, ideas, and brands that wanted to grow with intention!
            </p>
          </div>

          <CTAButton prompt="How Bloom Grew" to="/journey" />
        </div>

        {/* Stats */}
        <div className={`journey-stats ${startCount ? "animate" : ""}`}>
          {journeyStats.map((item, i) => (
            <div key={i} className="journey-item">
              <h3>
                {counts[i]}+ <span>{item.label}</span>
              </h3>
              <p>
                {item.desc.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>




          <section
  className="wall-section"
  ref={sectionRef}
  onMouseEnter={() => setShowDragBox(true)}
  onMouseLeave={() => setShowDragBox(false)}
  onMouseMove={(e) => {
    const bounds = sectionRef.current.getBoundingClientRect();
    setDragBoxPos({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  }}
  onTouchStart={() => setShowDragBox(true)}
  onTouchEnd={() => setShowDragBox(false)}
  onTouchMove={(e) => {
    const bounds = sectionRef.current.getBoundingClientRect();
    setDragBoxPos({
      x: e.touches[0].clientX - bounds.left,
      y: e.touches[0].clientY - bounds.top,
    });
  }}
  style={{ cursor: showDragBox ? "none" : "auto" }}
>

  {/* Background Text */}
  <div className="wall-text">
    <h2>WALL<br />OF<br />LOVE</h2>
    <p>
      We’ve had the privilege of collaborating
      <br />
      with brands across industries and stages
    </p>
  </div>

  {/* Floating Review Cards */}
  {reviews.map((review, i) => (
    <ReviewCard
      key={i}
      review={review}
      boundsRef={sectionRef}
      initialPos={{
  x: 80 + Math.random() * (window.innerWidth - 400),
  y: 80 + Math.random() * (window.innerHeight - 300),
}}

    />
  ))}

  {/* ONLY IN THIS SECTION: DRAG ME BOX */}
  {showDragBox && (
  <div
    className="drag-box"
    style={{
      left: dragBoxPos.x,
      top: dragBoxPos.y,
    }}
  >
    <marquee scrollamount="4">DRAG ME</marquee>
  </div>
)}

</section>

 
  <InstagramPreview />
  <Footer/>


    </>
  );
};

export default Home;
