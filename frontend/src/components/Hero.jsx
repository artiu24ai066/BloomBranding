const Hero = () => {
  return (
    <section className="hero">
      {/* Background video */}
      <video className="hero-video" autoPlay muted loop>
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content overlay */}
      <div className="hero-overlay">
        <h1>
          We Shatter the Expected <br />
          Defy the Ordinary <br />
          and Transform Reality
        </h1>
      </div>
    </section>
  );
};

export default Hero;
