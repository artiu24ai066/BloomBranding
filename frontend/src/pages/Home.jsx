import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import Journey from "../components/Journey";
import WallOfLove from "../components/WallOfLove";

const Home = () => {
  return (
    <main style={{ padding: "0" }}>
      <Navbar />

      {/* Hero sits full-bleed so a background video can show behind it */}
      <Hero />

      {/* Remaining site content wrapped in .app panel */}
      <div className="app">
        <Services />
        <Work />
        <Journey />
        <WallOfLove />
      </div>
    </main>
  );
};

export default Home;
