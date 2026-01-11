import { useState, useEffect, useRef } from "react";
import "./InstagramPreview.css";
import CTAButton from "../CTAButton";

const InstagramPreview = () => {
  const [posts, setPosts] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("/api/instagram-feed")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("show");
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="instagram-preview" ref={sectionRef}>
      {/* Decorative stars */}
 <div className="insta-stars"></div>

<div className="insta-shooting-star"></div>
<div className="insta-shooting-star"></div>
<div className="insta-shooting-star"></div>
<div className="insta-shooting-star"></div>
<div className="insta-shooting-star"></div>
<div className="insta-shooting-star"></div>
<div className="insta-shooting-star"></div>
<div className="insta-shooting-star"></div>
<div className="insta-shooting-star"></div>



      <div className="instagram-header">
        <h2>Follow us on Instagram</h2>
        <p>Visual moments & brand stories from Bloom</p>
      </div>

      <div className="instagram-grid">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-post"
          >
            <img
              src={
                post.media_type === "VIDEO"
                  ? post.thumbnail_url
                  : post.media_url
              }
              alt={`Instagram Post ${index + 1}`}
            />
            <div className="overlay">
              <i className="fab fa-instagram"></i>
            </div>
          </a>
        ))}
      </div>

      <div className="instagram-cta">
        <CTAButton
          prompt="Our Visual Diary"
          to="https://instagram.com/yourusername"
          external
        />
      </div>
    </section>
  );
};

export default InstagramPreview;
