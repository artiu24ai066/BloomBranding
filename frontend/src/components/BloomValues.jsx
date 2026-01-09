import { useEffect, useRef, useState } from "react";
import BloomCard from "./BloomCard";
import "./BloomValues.css";

function BloomValues() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  const cards = [
    {
      title: "Our Philosophy",
      paragraphs: [
        "We believe meaningful brands are built through clarity, intention, and care.",
        "By working closely with our clients, we create identities that feel authentic, refined, and designed to grow thoughtfully over time.",
      ],
      variant: "light",
    },
    {
      title: "What We Value",
      paragraphs: [
        "We value collaboration, honesty, and thoughtful design.",
        "Every project is approached with curiosity and care — ensuring the final outcome feels considered, purposeful, and true to the brand.",
      ],
      variant: "light",
    },
    {
      title: "How We Work",
      paragraphs: [
        "We take a collaborative and considered approach to every project.",
        "From understanding the brand’s vision to refining the final details, our work is shaped through close partnership and thoughtful decision-making.",
      ],
      variant: "light",
    },
    {
      title: "A Thoughtful Approach",
      paragraphs: [
        "Our work is guided by intention, clarity, and quiet confidence.",
        "We focus on creating brand identities that feel refined, authentic, and built to last — shaped through collaboration and care.",
      ],
      variant: "soft",
    },
    {
      title: "Design, With Intention",
      paragraphs: [
        "Every brand we create is shaped through careful thinking, collaboration, and attention to detail.",
        "Resulting in identities that feel clear, confident, and meaningful.",
      ],
      variant: "soft",
    },
    {
      title: "The Bloom Way",
      paragraphs: [
        "We approach branding with clarity, care, and intention.",
        "By listening closely and designing thoughtfully, we create identities that reflect the essence of each brand and grow naturally over time.",
      ],
      variant: "dark",
    },
  ];

 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect(); // trigger once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bloom-values ${active ? "active" : ""}`}
    >
      <div className="values-grid">
        {cards.map((card, index) => (
          <BloomCard
            key={index}
            index={index}
            title={card.title}
            paragraphs={card.paragraphs}
            variant={card.variant}
          />
        ))}
      </div>
    </section>
  );
}

export default BloomValues;
